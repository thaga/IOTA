// JSXによるコンパイルは、
//  > jsx --disable-type-check --executable web --output iota.jsx.js iota.jsx
//
// --disable-type-checkが必要です。

import 'js/web.jsx';
import 'console.jsx';
import 'Timer.jsx';

import 'mvq.jsx';

class _Main {
	static function main(args:string[]) : void {
		// IOTA用のcanvasがある場合
		var canvas = dom.id('iota_canvas') as HTMLCanvasElement;
		if (canvas) {
			canvas.style.position = 'absolute';
			canvas.style.left = '0px';
			canvas.style.top = '0px';
			var input = dom.id('iota_input') as HTMLInputElement; 
			
			var iota = new Iota(canvas, input);
			
			canvas.width = dom.window.innerWidth;
			canvas.height = dom.window.innerHeight;
			// ブラウザのリサイズ対応
			dom.window.onresize = function(ev:Event):void {
				canvas.width = dom.window.innerWidth;
				canvas.height = dom.window.innerHeight;
				iota.draw(); // 再描画
			};
		}
		
		// data-theta-img属性を持つcanvasがある場合
		var all_canvas = dom.window.document.getElementsByTagName('canvas');
		for (var i = 0; i < all_canvas.length; ++i) {
			var elem = all_canvas[i] as HTMLElement;
			var theta_url = elem.dataset['thetaImg'];
			if (theta_url) {
				(function(canvas:HTMLCanvasElement, url:string):void{
					var img = dom.window.document.createElement('img') as HTMLImageElement;
					img.onload = function(ev:Event):void {
						new Iota(canvas, null, img);
					};
					img.src = url;
				})(elem as HTMLCanvasElement, theta_url);
			}
		}
	}
}

class Iota {
	var draw = null:function():void;
	function constructor(canvas:HTMLCanvasElement, input:HTMLInputElement, init_img:HTMLImageElement = null) {
		// 全球の分割数 横・縦
		var hdiv = 128;
		var vdiv = 64;
		
		// hdiv+1 x vdiv+1 個の、0.0-1.0格子を作る
		function create_lattice(hdiv:int, vdiv:int) : Float32Array {
			var lattice_array = new Float32Array((hdiv+1)*(vdiv+1)*2);
			for (var y = 0; y <= vdiv; ++y) for (var x = 0; x <= hdiv; ++x) {
				lattice_array[(y * (hdiv+1) + x) * 2] = x / hdiv;
				lattice_array[(y * (hdiv+1) + x) * 2+1] = y / vdiv;
			}
			return lattice_array;
		}
		// 上で作った格子を三角形ストリップでつなぐためのインデクス
		function create_lattice_index(hdiv:int, vdiv:int) : Uint16Array {
			var band_points = (hdiv + 1) * 2 + 2;
			var index_array = new Uint16Array(band_points * vdiv);
			for (var y = 0; y < vdiv; ++y) {
				for (var x = 0; x <= hdiv; ++x) {
					index_array[y * band_points + x * 2] = (y + 1) * (hdiv + 1) + x;
					index_array[y * band_points + x * 2 + 1] = y * (hdiv + 1) + x;
				}
				index_array[y * band_points + (hdiv + 1) * 2] = (y + 1) * (hdiv + 1) + hdiv;
				index_array[y * band_points + (hdiv + 1) * 2 + 1] = (y + 1) * (hdiv + 1) + hdiv;
			}
			return index_array;
		}
		
		// WebGLコンテキスト
		var gl = canvas.getContext('experimental-webgl', {premultipliedAlpha: false}) as WebGLRenderingContext;
		
		// 格子の形状＆テクスチャ座標
		var lattice_buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, lattice_buf);
		gl.bufferData(gl.ARRAY_BUFFER, create_lattice(hdiv, vdiv), gl.STATIC_DRAW);
		// それを描画するためのインデクス
		var lattice_index_buf = gl.createBuffer();
		var lattice_index_array = create_lattice_index(hdiv, vdiv);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lattice_index_buf);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, lattice_index_array, gl.STATIC_DRAW);
		
		gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(0);
		
		// 頂点シェーダを作成
		var vs = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vs, """
			precision mediump float;
			uniform mat4 projectionMatrix;
			attribute vec2 position;
			varying vec2 v_texcoord;
			void main() {
				float h = (position.x + 0.25) * 3.14159265 * 2.0;
				float v = (position.y - 0.5) * 3.14159265;
				float hc = cos(h), hs = sin(h);
				float vc = cos(v), vs = sin(v);
				v_texcoord = position;
				gl_Position = projectionMatrix * vec4(vc * hc, vs, vc * hs, 1.0);
			}
		""");
		gl.compileShader(vs);
		if (!(gl.getShaderParameter(vs, gl.COMPILE_STATUS) as boolean)) console.log(gl.getShaderInfoLog(vs));
		
		// フラグメントシェーダを作成
		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fs, """
			precision mediump float;
			uniform sampler2D texture;
			varying vec2 v_texcoord;
			void main() {
				gl_FragColor = texture2D(texture, v_texcoord);
			}
		""");
		gl.compileShader(fs);
		if (!(gl.getShaderParameter(fs, gl.COMPILE_STATUS) as boolean)) console.log(gl.getShaderInfoLog(fs));
		
		// シェーダプログラムを作成
		var prog = gl.createProgram();
		gl.attachShader(prog, vs);
		gl.attachShader(prog, fs);
		gl.linkProgram(prog);
		if (!(gl.getProgramParameter(prog, gl.LINK_STATUS) as boolean)) console.log(gl.getProgramInfoLog(prog));
		
		gl.useProgram(prog);
		
		
		// テクスチャ、画角(near)、方位と仰角、THETAの傾き
		var texture = null:WebGLTexture;
		var near = 0.1;
		var view_h = 0;
		var view_p = 0;
		var z_x = 0;
		var z_y = 0;
		
		// 描画
		function draw() : void {
			if (!texture) return;
			
			var w = canvas.width;
			var h = canvas.height;
			var hr = Math.max(1, w / h);
			var vr = Math.max(1, h / w);
			
			gl.uniform1i(
				gl.getUniformLocation(prog, 'texture'),
				0
			);
			gl.uniformMatrix4fv(
				gl.getUniformLocation(prog, 'projectionMatrix'),
				false,
				M44.frustum(-0.1 * hr, 0.1 * hr, -0.1 * vr, 0.1 * vr, near, 1.1)
				.mul(M44.rotationX(-view_p))
				.mul(M44.rotationY(-view_h))
				.mul(M44.rotationX(z_y))
				.mul(M44.rotationZ(-z_x))
				.array()
			);
			
			gl.viewport(0, 0, w, h);
			gl.clearColor(0.1,0.2,0.3,1);
			gl.clear(gl.COLOR_BUFFER_BIT);
			
			gl.drawElements(gl.TRIANGLE_STRIP, lattice_index_array.length, gl.UNSIGNED_SHORT, 0);
		}
		this.draw = draw;
		
		
		// テクスチャを切り替える
		function setImage(img:HTMLImageElement) : void {
			if (!texture) {
				texture = gl.createTexture();
				gl.bindTexture(gl.TEXTURE_2D, texture);
			}
			gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			draw();
		}
		
		// 画角を変える
		function onWheel(w:number) : void {
			near *= Math.pow(0.9, w);
			if (near > 0.9) near = 0.9;
			if (near < 0.01) near = 0.01;
			draw();
		}
		
		
		
		
		if (init_img) setImage(init_img);
		
		var files = null:FileList;
		var file_index = -1;
		
		// files変数のうちn番目のファイルをテクスチャにセットする
		function setFile(n:int) : void {
			if (!files) return;
			if (n < 0 || n >= files.length) return;
			
			var file = files[n];
			
			// テクスチャ用のファイル読み取り
			var file_reader = new FileReader;
			file_reader.onload = function(e:Event):void {
				// now file reading complete
				var img = dom.document.createElement('img') as HTMLImageElement;
				img.onload = function(e:Event):void {
					// now image creation complete
					view_h = 0;
					view_p = 0;
					setImage(img);
				};
				img.src = (e.target as FileReader).result as __noconvert__ string;
			};
			file_reader.readAsDataURL(file);
			
			// THETAの姿勢読み取り
			var binary_reader = new FileReader;
			binary_reader.onload = function(e:Event):void {
				var result = binary_reader.result as string;
				var bin = new Uint8Array(result.length);
				var i = 0;
				for (i = 0; i < bin.length; ++i) bin[i] = result.charCodeAt(i) & 0xff;
				 // ZenithESを探す(ref→ http://d.hatena.ne.jp/xanxys/20131110/1384094832)
				//-----------------------------------------------------------------------------
				// シグネチャ\x00\x03\x00\x0a\x00\x00\x00\x02を探す
				var sign = [0,3,0,10,0,0,0,2];
				var header_bound = 10000; // 適当な読み取り限界
				for (var pos = 0; pos < header_bound; ++pos) {
					for (i = 0; i < sign.length; ++i) if (bin[i + pos] != sign[i]) break;
					if (i == sign.length) break;
				}
				if (pos == header_bound) return; // ヘッダ範囲の中にシグネチャが見つからなかった
				pos += sign.length;
				function readInt32(b:Uint8Array, p:int) : int {return b[p]<<24 | b[p+1]<<16 | b[p+2]<<8 | b[p+3];} 
				var offset = readInt32(bin, pos) + 12;
				if (offset > bin.length - 16) return; // ファイルの中にZenithEsが無かった
				var z0n = readInt32(bin, offset);
				var z0d = readInt32(bin, offset+4);
				var z1n = readInt32(bin, offset+8);
				var z1d = readInt32(bin, offset+12);
				var ZenithX = z0n / z0d;
				var ZenithY = z1n / z1d;
				z_x = ZenithX * Math.PI / 180;
				z_y = ZenithY * Math.PI / 180;
				draw();
			};
			binary_reader.readAsBinaryString(file);
		}
		
		// D&D対応
		canvas.ondragover = function(e:Event):void {
			e.preventDefault();
		};
		canvas.ondrop = function(e:Event):void {
			e.preventDefault();
			
			var de = e as __noconvert__ DragEvent; // CAUTION: Chrome creates MouseEvent
			files = de.dataTransfer.files;
			setFile(file_index = 0);
		};
		
		// ファイル選択
		if (input) {
			input.onchange = function(e:Event):void {
				files = input.files;
				setFile(file_index = 0);
			};
		}
		
		
		// Chrome向けホイールイベント登録
		canvas.onmousewheel = function(ev:Event):void {
			var wev = ev as __noconvert__ Map.<variant>;
			onWheel(wev['wheelDelta'] as number / -120);
		};
		// Firefox向けホイールイベント登録
		canvas.addEventListener('DOMMouseScroll', function(ev:Event):void {
			var uev = ev as UIEvent;
			onWheel(uev.detail / 3);
		}, false);
		
		// マウス操作
		var left_down = false;
		var left_last_x = 0;
		var left_last_y = 0;
		canvas.onmousedown = function(ev:Event):void {
			var mev = ev as MouseEvent;
			if (mev.button == 0) {
				left_down = true;
				left_last_x = mev.clientX;
				left_last_y = mev.clientY;
			}
			ev.preventDefault();
		};
		canvas.onmouseup = function(ev:Event):void {
			var mev = ev as MouseEvent;
			if (mev.button == 0) left_down = false;
			ev.preventDefault();
		};
		canvas.onmouseout = function(ev:Event):void {
			left_down = false;
		};
		canvas.onmousemove = function(ev:Event):void {
			var mev = ev as MouseEvent;
			if (left_down) {
				var k = 1 / Math.sqrt(canvas.width * canvas.height * near);
				view_h += (mev.clientX - left_last_x) * k;
				view_p += (mev.clientY - left_last_y) * k;
				if (view_p > 3.14159265/2) view_p = 3.14159265/2;
				if (view_p < -3.14159265/2) view_p = -3.14159265/2;
				draw();
				left_last_x = mev.clientX;
				left_last_y = mev.clientY;
			}
			ev.preventDefault();
		};
		
		// キー操作
		dom.window.onkeydown = function(ev:Event):void {
			if (!files) return;
			
			var kev = ev as KeyboardEvent;
			switch (kev.keyCode) {
				default: break;
				case 37: // ←
					if (--file_index < 0) file_index = 0;
					setFile(file_index);
					break;
				case 39: // →
					if (++file_index >= files.length) file_index = files.length - 1;
					setFile(file_index);
					break;
			}
		};
	}
}
