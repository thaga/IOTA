// generatedy by JSX compiler 0.9.87 (2014-04-14 14:55:26 +0900; a7ed940de88ce1292be44c3a0e9de275b3becbe1)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function () {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas;
	var iota;
	var input;
	var all_canvases;
	var i;
	var setOptions;
	var theta_img_url;
	var theta_video_url;
	var video$0;
	var iota$0;
	canvas = dom.document.getElementById('iota_canvas');
	if (canvas) {
		canvas.style.position = 'absolute';
		canvas.style.left = '0px';
		canvas.style.top = '0px';
		iota = new Iota(canvas);
		input = dom.document.getElementById('iota_input');
		if (input) {
			iota.setFileInput(input);
		}
		canvas.width = dom.window.innerWidth;
		canvas.height = dom.window.innerHeight;
		dom.window.onresize = (function (ev) {
			canvas.width = dom.window.innerWidth;
			canvas.height = dom.window.innerHeight;
			iota.draw();
		});
	}
	all_canvases = dom.window.document.getElementsByTagName('canvas');
	for (i = 0; i < all_canvases.length; ++i) {
		canvas = all_canvases[i];
		function setOptions(iota, canvas) {
			var fisheye;
			var heading;
			var pitching;
			var fov;
			fisheye = canvas.dataset.iotaFisheye;
			if (fisheye) {
				iota.setFishEye(fisheye === 'true');
			}
			heading = canvas.dataset.iotaHeading;
			if (heading) {
				iota.setHeading(+heading);
			}
			pitching = canvas.dataset.iotaPitching;
			if (pitching) {
				iota.setPitching(+pitching);
			}
			fov = canvas.dataset.iotaFov;
			if (fov) {
				iota.setFOV(+fov);
			}
		}
		theta_img_url = canvas.dataset.thetaImg;
		if (theta_img_url) {
			(function (canvas, url) {
				var img;
				img = dom.window.document.createElement('img');
				img.onload = (function (ev) {
					var iota;
					iota = new Iota(canvas);
					setOptions(iota, canvas);
					iota.setImage(img);
				});
				img.src = url;
			})(canvas, theta_img_url);
		}
		theta_video_url = canvas.dataset.thetaVideo;
		if (theta_video_url) {
			video$0 = dom.window.document.createElement('video');
			video$0.src = theta_video_url;
			video$0.play();
			iota$0 = new Iota(canvas);
			setOptions(iota$0, canvas);
			iota$0.setVideo(video$0);
		}
	}
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function Iota(canvas) {
	var $this = this;
	var input;
	var fish_eye;
	var hdiv;
	var vdiv;
	var create_lattice;
	var create_lattice_index;
	var gl;
	var lattice_buf;
	var lattice_index_buf;
	var lattice_index_array;
	var vs;
	var vs_f;
	var fs;
	var prog;
	var prog_f;
	var texture;
	var near;
	var view_h;
	var view_p;
	var z_x;
	var z_y;
	var draw;
	var setImage;
	var setVideo;
	var onWheel;
	var files;
	var file_index;
	var setFile;
	var left_down;
	var left_last_x;
	var left_last_y;
	var full_screen;
	var full_added;
	var full_w;
	var full_h;
	var setFishEye;
	var setFileInput;
	this.setFishEye = null;
	this.setHeading = null;
	this.setPitching = null;
	this.setFOV = null;
	this.setFileInput = null;
	this.setImage = null;
	this.setVideo = null;
	this.draw = null;
	input = null;
	fish_eye = false;
	hdiv = 128;
	vdiv = 64;
	function create_lattice(hdiv, vdiv) {
		var lattice_array;
		var y;
		var x;
		lattice_array = new Float32Array((hdiv + 1) * (vdiv + 1) * 2);
		for (y = 0; y <= vdiv; ++y) {
			for (x = 0; x <= hdiv; ++x) {
				lattice_array[(y * (hdiv + 1) + x) * 2] = x / hdiv;
				lattice_array[(y * (hdiv + 1) + x) * 2 + 1] = y / vdiv;
			}
		}
		return lattice_array;
	}
	function create_lattice_index(hdiv, vdiv) {
		var band_points;
		var index_array;
		var y;
		var x;
		band_points = (hdiv + 1) * 2 + 2;
		index_array = new Uint16Array(band_points * vdiv);
		for (y = 0; y < vdiv; ++y) {
			for (x = 0; x <= hdiv; ++x) {
				index_array[y * band_points + x * 2] = (y + 1) * (hdiv + 1) + x;
				index_array[y * band_points + x * 2 + 1] = y * (hdiv + 1) + x;
			}
			index_array[y * band_points + (hdiv + 1) * 2] = (y + 1) * (hdiv + 1) + hdiv;
			index_array[y * band_points + (hdiv + 1) * 2 + 1] = (y + 1) * (hdiv + 1) + hdiv;
		}
		return index_array;
	}
	gl = canvas.getContext('experimental-webgl', ({ premultipliedAlpha: false }));
	lattice_buf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lattice_buf);
	gl.bufferData(gl.ARRAY_BUFFER, create_lattice((hdiv | 0), (vdiv | 0)), gl.STATIC_DRAW);
	lattice_index_buf = gl.createBuffer();
	lattice_index_array = create_lattice_index((hdiv | 0), (vdiv | 0));
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lattice_index_buf);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, lattice_index_array, gl.STATIC_DRAW);
	gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(0);
	vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs, "\n\t\t\tprecision mediump float;\n\t\t\tuniform mat4 projectionMatrix;\n\t\t\tuniform mat4 modelviewMatrix;\n\t\t\tattribute vec2 position;\n\t\t\tvarying vec2 v_texcoord;\n\t\t\tvoid main() {\n\t\t\t\tfloat h = (position.x + 0.25) * 3.14159265 * 2.0;\n\t\t\t\tfloat v = (position.y - 0.5) * 3.14159265;\n\t\t\t\tfloat hc = cos(h), hs = sin(h);\n\t\t\t\tfloat vc = cos(v), vs = sin(v);\n\t\t\t\tv_texcoord = position;\n\t\t\t\tgl_Position = projectionMatrix * modelviewMatrix * vec4(vc * hc, vs, vc * hs, 1.0);\n\t\t\t}\n\t\t");
	gl.compileShader(vs);
	if (! (!! gl.getShaderParameter(vs, gl.COMPILE_STATUS))) {
		console.log(gl.getShaderInfoLog(vs));
	}
	vs_f = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs_f, "\n\t\t\tprecision mediump float;\n\t\t\tuniform mat4 projectionMatrix;\n\t\t\tuniform mat4 modelviewMatrix;\n\t\t\tattribute vec2 position;\n\t\t\tvarying vec2 v_texcoord;\n\t\t\tvoid main() {\n\t\t\t\tv_texcoord = position;\n\t\t\t\tfloat h = (position.x + 0.25) * 3.14159265 * 2.0;\n\t\t\t\tfloat v = (position.y - 0.5) * 3.14159265;\n\t\t\t\tfloat hc = cos(h), hs = sin(h);\n\t\t\t\tfloat vc = cos(v), vs = sin(v);\n\t\t\t\tvec3 p = (modelviewMatrix * vec4(vc * hc, vs, vc * hs, 1.0)).xyz;\n\t\t\t\tfloat n = -projectionMatrix[3][2] - 1.0;\n\t\t\t\t\n\t\t\t\t// \u7b49\u8ddd\u96e2\u5c04\u5f71\n\t\t\t\tfloat phi = atan(p.y, p.x);\n\t\t\t\tfloat r = 4.0 * sqrt(n) * acos(-p.z);\n\t\t\t\tgl_Position = projectionMatrix * vec4(r * cos(phi), r * sin(phi), p.z - n - 0.9, 1.0);\n\t\t\t\t\n\t\t\t\t// \u56de\u8ee2\u653e\u7269\u9762\u3078\u306e\u7b49\u8ddd\u96e2\u5c04\u5f71(?) (t-pot\u3055\u3093\u3068\u3053\u306e\u3084\u3064)\n//\t\t\t\tfloat xy2 = dot(p.xy, p.xy);\n//\t\t\t\tfloat d = length(p);\n//\t\t\t\tgl_Position = projectionMatrix * vec4(p.x * (d + p.z) / xy2, p.y * (d + p.z) / xy2, p.z -n - 0.9, 1.0);\n\t\t\t}\n\t\t");
	gl.compileShader(vs_f);
	if (! (!! gl.getShaderParameter(vs_f, gl.COMPILE_STATUS))) {
		console.log(gl.getShaderInfoLog(vs_f));
	}
	fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D texture;\n\t\t\tvarying vec2 v_texcoord;\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D(texture, v_texcoord);\n\t\t\t}\n\t\t");
	gl.compileShader(fs);
	if (! (!! gl.getShaderParameter(fs, gl.COMPILE_STATUS))) {
		console.log(gl.getShaderInfoLog(fs));
	}
	prog = gl.createProgram();
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	gl.linkProgram(prog);
	if (! (!! gl.getProgramParameter(prog, gl.LINK_STATUS))) {
		console.log(gl.getProgramInfoLog(prog));
	}
	prog_f = gl.createProgram();
	gl.attachShader(prog_f, vs_f);
	gl.attachShader(prog_f, fs);
	gl.linkProgram(prog_f);
	if (! (!! gl.getProgramParameter(prog_f, gl.LINK_STATUS))) {
		console.log(gl.getProgramInfoLog(prog_f));
	}
	texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	near = 0.1;
	view_h = 0;
	view_p = 0;
	z_x = 0;
	z_y = 0;
	function draw() {
		var w;
		var h;
		var hr;
		var vr;
		var p;
		var value2$0;
		var value2$1;
		var l$0;
		var b$0;
		var f$0;
		var l$1;
		var r$0;
		var b$1;
		var t$0;
		var f$1;
		var rad$0;
		var this$0$0;
		var rad$1;
		var this$0$1;
		var this$0;
		var m$0;
		var this$0$2;
		var this$1;
		var m$1;
		var rad$2;
		var this$0$3;
		var this$2;
		var m$2;
		if (! texture) {
			return;
		}
		w = canvas.width;
		h = canvas.height;
		value2$0 = w / h;
		hr = (1 >= value2$0 ? 1 : value2$0);
		value2$1 = h / w;
		vr = (1 >= value2$1 ? 1 : value2$1);
		p = (fish_eye ? prog_f : prog);
		gl.useProgram(p);
		gl.uniform1i(gl.getUniformLocation(p, 'texture'), 0);
		gl.uniformMatrix4fv(gl.getUniformLocation(p, 'projectionMatrix'), false, fish_eye ? M44$array$LM44$((l$0 = - hr, b$0 = - vr, f$0 = near + 2, M44$setOrtho$LM44$NNNNNN(new M44(), l$0, hr, b$0, vr, near, f$0))) : M44$array$LM44$((l$1 = -0.1 * hr, r$0 = 0.1 * hr, b$1 = -0.1 * vr, t$0 = 0.1 * vr, f$1 = near + 1, M44$setFrustum$LM44$NNNNNN(new M44(), l$1, r$0, b$1, t$0, near, f$1))));
		gl.uniformMatrix4fv(gl.getUniformLocation(p, 'modelviewMatrix'), false, M44$array$LM44$((this$2 = (this$1 = (this$0 = (rad$0 = - view_p, this$0$0 = new M44(), M44$setRotation$LM44$NNNN(this$0$0, rad$0, 1, 0, 0)), m$0 = (rad$1 = - view_h, this$0$1 = new M44(), M44$setRotation$LM44$NNNN(this$0$1, rad$1, 0, 1, 0)), M44$mul$LM44$LM44$LM44$(this$0, new M44$0(this$0), m$0)), m$1 = (this$0$2 = new M44(), M44$setRotation$LM44$NNNN(this$0$2, z_y, 1, 0, 0)), M44$mul$LM44$LM44$LM44$(this$1, new M44$0(this$1), m$1)), m$2 = (rad$2 = - z_x, this$0$3 = new M44(), M44$setRotation$LM44$NNNN(this$0$3, rad$2, 0, 0, 1)), M44$mul$LM44$LM44$LM44$(this$2, new M44$0(this$2), m$2))));
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.1, 0.2, 0.3, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLE_STRIP, lattice_index_array.length, gl.UNSIGNED_SHORT, 0);
	}
	this.draw = draw;
	function setImage(img) {
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
	this.setImage = setImage;
	function setVideo(video) {
		var setVideoCurrentFrame;
		function setVideoCurrentFrame() {
			gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			draw();
		}
		js$0.global.setInterval(setVideoCurrentFrame, 66.66666666666667);
	}
	this.setVideo = setVideo;
	function onWheel(w) {
		near *= Math.pow(0.9, w);
		if (near > 0.9) {
			near = 0.9;
		}
		if (near < 0.01) {
			near = 0.01;
		}
		draw();
	}
	files = null;
	file_index = -1;
	function setFile(n) {
		var file;
		var video_reader;
		var file_reader;
		var binary_reader;
		if (! files) {
			return;
		}
		if (n < 0 || n >= files.length) {
			return;
		}
		file = files[n];
		if (file.type.substring(0, 5) === 'video') {
			video_reader = new FileReader();
			video_reader.onload = (function (e) {
				var video;
				video = dom.document.createElement('video');
				video.src = e.target.result;
				video.play();
				setVideo(video);
			});
			video_reader.readAsDataURL(file);
		}
		file_reader = new FileReader();
		file_reader.onload = (function (e) {
			var img;
			img = dom.document.createElement('img');
			img.onload = (function (e) {
				setImage(img);
			});
			img.src = e.target.result;
		});
		file_reader.readAsDataURL(file);
		binary_reader = new FileReader();
		binary_reader.onload = (function (e) {
			var result;
			var bin;
			var i;
			var sign;
			var header_bound;
			var pos;
			var readInt32;
			var offset;
			var z0n;
			var z0d;
			var z1n;
			var z1d;
			var ZenithX;
			var ZenithY;
			result = binary_reader.result + "";
			bin = new Uint8Array(result.length);
			i = 0;
			for (i = 0; i < bin.length; ++i) {
				bin[i] = result.charCodeAt(i) & 0xff;
			}
			sign = [ 0, 3, 0, 10, 0, 0, 0, 2 ];
			header_bound = 10000;
			for (pos = 0; pos < header_bound; ++pos) {
				for (i = 0; i < sign.length; ++i) {
					if (bin[i + pos] !== sign[i]) {
						break;
					}
				}
				if (i === sign.length) {
					break;
				}
			}
			if (pos === header_bound) {
				return;
			}
			pos += sign.length;
			function readInt32(b, p) {
				return b[p] << 24 | b[p + 1] << 16 | b[p + 2] << 8 | b[p + 3];
			}
			offset = readInt32(bin, (pos | 0)) + 12;
			if (offset > bin.length - 16) {
				return;
			}
			z0n = readInt32(bin, (offset | 0));
			z0d = readInt32(bin, (offset + 4 | 0));
			z1n = readInt32(bin, (offset + 8 | 0));
			z1d = readInt32(bin, (offset + 12 | 0));
			ZenithX = z0n / z0d;
			ZenithY = z1n / z1d;
			z_x = ZenithX * Math.PI / 180;
			z_y = ZenithY * Math.PI / 180;
			draw();
		});
		binary_reader.readAsBinaryString(file);
	}
	canvas.ondragover = (function (e) {
		e.preventDefault();
	});
	canvas.ondrop = (function (e) {
		var de;
		e.preventDefault();
		de = e;
		files = de.dataTransfer.files;
		setFile(((file_index = 0) | 0));
	});
	canvas.onmousewheel = (function (ev) {
		var wev;
		ev.preventDefault();
		wev = ev;
		onWheel(+wev.wheelDelta / -120);
	});
	canvas.addEventListener('DOMMouseScroll', (function (ev) {
		var uev;
		ev.preventDefault();
		uev = ev;
		onWheel(uev.detail / 3);
	}), false);
	left_down = false;
	left_last_x = 0;
	left_last_y = 0;
	canvas.onmousedown = (function (ev) {
		var mev;
		ev.preventDefault();
		mev = ev;
		if (mev.button === 0) {
			left_down = true;
			left_last_x = mev.clientX;
			left_last_y = mev.clientY;
		}
	});
	canvas.onmouseup = (function (ev) {
		var mev;
		ev.preventDefault();
		mev = ev;
		if (mev.button === 0) {
			left_down = false;
		}
	});
	canvas.onmouseout = (function (ev) {
		left_down = false;
	});
	canvas.onmousemove = (function (ev) {
		var mev;
		var k;
		ev.preventDefault();
		mev = ev;
		if (left_down) {
			k = 1 / Math.sqrt(canvas.width * canvas.height * near);
			view_h += (mev.clientX - left_last_x) * k;
			view_p += (mev.clientY - left_last_y) * k;
			if (view_p > 1.570796325) {
				view_p = 1.570796325;
			}
			if (view_p < -1.570796325) {
				view_p = -1.570796325;
			}
			draw();
			left_last_x = mev.clientX;
			left_last_y = mev.clientY;
		}
	});
	full_screen = false;
	full_added = false;
	full_w = 0;
	full_h = 0;
	canvas.ondblclick = (function (ev) {
		var c;
		var fsh;
		var fullscreen_func;
		c = canvas;
		fsh = canvas;
		if (c.mozRequestFullScreen) {
			function fullscreen_func(ev) {
				var fse;
				if (full_screen) {
					canvas.width = full_w;
					canvas.height = full_h;
					full_screen = false;
				} else {
					fse = dom.document.mozFullScreenElement;
					if (fse == canvas) {
						canvas.width = dom.window.innerWidth;
						canvas.height = dom.window.innerHeight;
						full_screen = true;
					}
				}
				draw();
			}
			if (! full_added) {
				dom.document.addEventListener('mozfullscreenchange', fullscreen_func);
				full_added = true;
			}
			if (! full_screen) {
				full_w = canvas.width;
				full_h = canvas.height;
				fsh.mozRequestFullScreen();
			}
		}
		if (c.webkitRequestFullScreen) {
			if (! full_screen) {
				fsh.onwebkitfullscreenchange = (function (ev) {
					var w;
					var h;
					full_screen = true;
					w = canvas.width;
					h = canvas.height;
					canvas.width = dom.window.innerWidth;
					canvas.height = dom.window.innerHeight;
					draw();
					fsh.onwebkitfullscreenchange = (function (ev) {
						full_screen = false;
						canvas.width = w;
						canvas.height = h;
						draw();
					});
				});
				fsh.webkitRequestFullScreen();
			}
		}
	});
	dom.window.addEventListener('keydown', (function (ev) {
		var kev;
		kev = ev;
		switch (kev.keyCode) {
		default:
			console.log('unknown key code: ', kev.keyCode);
			break;
		case 37:
			if (files && --file_index >= 0) {
				setFile((file_index | 0));
			} else {
				file_index = 0;
			}
			break;
		case 39:
			if (files && ++file_index < files.length) {
				setFile((file_index | 0));
			} else {
				file_index = files.length - 1;
			}
			break;
		case 70:
			fish_eye = ! fish_eye;
			draw();
			break;
		}
	}));
	function setFishEye(enable) {
		fish_eye = enable;
		draw();
	}
	this.setFishEye = setFishEye;
	function setFileInput(ie) {
		if (ie == input) {
			return;
		}
		if (input) {
			input.onchange = null;
		}
		if (input = ie) {
			input.onchange = (function (e) {
				files = input.files;
				setFile(((file_index = 0) | 0));
			});
		}
	}
	this.setFileInput = setFileInput;
	this.setHeading = (function (h) {
		view_h = h * -3.141592653589793 / 180;
	});
	this.setPitching = (function (p) {
		view_p = p * 3.141592653589793 / 180;
	});
	this.setFOV = (function (a) {
		near = 0.1 / Math.tan(a / 2 * 3.141592653589793 / 180);
		if (near > 0.9) {
			near = 0.9;
		}
		if (near < 0.01) {
			near = 0.01;
		}
	});
};

$__jsx_extend([Iota], Object);
function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function ScrollOptionsHorizontal() {
	this.behavior = "";
	this.x = 0;
};

$__jsx_extend([ScrollOptionsHorizontal], ScrollOptions);
function ScrollOptionsVertical() {
	this.behavior = "";
	this.y = 0;
};

$__jsx_extend([ScrollOptionsVertical], ScrollOptions);
function BoxQuadOptions() {
	this.box = "";
	this.relativeTo = null;
};

$__jsx_extend([BoxQuadOptions], Object);
function ConvertCoordinateOptions() {
	this.fromBox = "";
	this.toBox = "";
};

$__jsx_extend([ConvertCoordinateOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function DOMPointInit() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

$__jsx_extend([DOMPointInit], Object);
function SourceInfo() {
	this.sourceId = "";
	this.kind = "";
	this.label = "";
};

$__jsx_extend([SourceInfo], Object);
function MediaStreamTrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([MediaStreamTrackEventInit], EventInit);
function MediaSourceStates() {
	this.sourceType = "";
	this.sourceId = "";
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
	this.volume = null;
};

$__jsx_extend([MediaSourceStates], Object);
function CapabilityRange() {
	this.max = null;
	this.min = null;
	this.supported = false;
};

$__jsx_extend([CapabilityRange], Object);
function AllVideoCapabilities() {
	this.sourceType = null;
	this.sourceId = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
};

$__jsx_extend([AllVideoCapabilities], Object);
function AllAudioCapabilities() {
	this.volume = null;
};

$__jsx_extend([AllAudioCapabilities], Object);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this._optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function MinMaxConstraint() {
	this.max = null;
	this.min = null;
};

$__jsx_extend([MinMaxConstraint], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return js$0.global.setTimeout(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	js$0.global.clearTimeout(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return js$0.global.setInterval(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	js$0.global.clearInterval(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++i) {
			name = prefixes[i] + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return js$0.global[name](callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return js$0.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++i) {
			name = prefixes[i] + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					js$0.global[name](timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
function MVQ() {
};

$__jsx_extend([MVQ], Object);
function V2() {
	this.x = 0;
	this.y = 0;
};

function V2$0(v) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$1(v) {
	var x$0$0;
	var y$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$2(v) {
	var x$0$0;
	var y$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$3(x, y) {
	this.x = x;
	this.y = y;
};

function V2$4(v) {
	var x$0;
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
};

function V2$5(v) {
	var x$0;
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
};

$__jsx_extend([V2, V2$0, V2$1, V2$2, V2$3, V2$4, V2$5], Object);
V2.prototype.array$ = function () {
	return [ this.x, this.y ];
};


function V2$array$LV2$($this) {
	return [ $this.x, $this.y ];
};

V2.array$LV2$ = V2$array$LV2$;

V2.prototype.V3$N = function (z) {
	return new V3$4(this, z);
};


function V2$V3$LV2$N($this, z) {
	return new V3$4($this, z);
};

V2.V3$LV2$N = V2$V3$LV2$N;

V2.prototype.V4$NN = function (z, w) {
	return new V4$4(this, z, w);
};


function V2$V4$LV2$NN($this, z, w) {
	return new V4$4($this, z, w);
};

V2.V4$LV2$NN = V2$V4$LV2$NN;

V2.prototype.set$LV3$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set$LV2$LV3$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set$LV2$LV3$ = V2$set$LV2$LV3$;

V2.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set$LV2$LV4$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set$LV2$LV4$ = V2$set$LV2$LV4$;

V2.prototype.clone$ = function () {
	return new V2$0(this);
};


function V2$clone$LV2$($this) {
	return new V2$0($this);
};

V2.clone$LV2$ = V2$clone$LV2$;

V2.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	return this;
};


function V2$clear$LV2$($this) {
	$this.x = 0;
	$this.y = 0;
	return $this;
};

V2.clear$LV2$ = V2$clear$LV2$;

V2.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};


function V2$set$LV2$NN($this, x, y) {
	$this.x = x;
	$this.y = y;
	return $this;
};

V2.set$LV2$NN = V2$set$LV2$NN;

V2.prototype.set$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set$LV2$LV2$ = V2$set$LV2$LV2$;

V2.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set$LV2$AN = V2$set$LV2$AN;

V2.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set$LV2$LFloat32Array$ = V2$set$LV2$LFloat32Array$;

V2.prototype.equals$LV2$ = function (v) {
	return V2$equals$LV2$LV2$N(this, v, 0.000001);
};


function V2$equals$LV2$LV2$($this, v) {
	return V2$equals$LV2$LV2$N($this, v, 0.000001);
};

V2.equals$LV2$LV2$ = V2$equals$LV2$LV2$;

V2.prototype.equals$LV2$N = function (v, eps) {
	var x$0;
	var x$1;
	return (x$0 = v.x - this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - this.y, x$1 >= 0 ? x$1 : - x$1) < eps;
};


function V2$equals$LV2$LV2$N($this, v, eps) {
	var x$0;
	var x$1;
	return (x$0 = v.x - $this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - $this.y, x$1 >= 0 ? x$1 : - x$1) < eps;
};

V2.equals$LV2$LV2$N = V2$equals$LV2$LV2$N;

V2.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};


function V2$add$LV2$NN($this, x, y) {
	$this.x += x;
	$this.y += y;
	return $this;
};

V2.add$LV2$NN = V2$add$LV2$NN;

V2.prototype.add$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add$LV2$LV2$ = V2$add$LV2$LV2$;

V2.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add$LV2$AN = V2$add$LV2$AN;

V2.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add$LV2$LFloat32Array$ = V2$add$LV2$LFloat32Array$;

V2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


function V2$sub$LV2$NN($this, x, y) {
	$this.x -= x;
	$this.y -= y;
	return $this;
};

V2.sub$LV2$NN = V2$sub$LV2$NN;

V2.prototype.sub$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub$LV2$LV2$ = V2$sub$LV2$LV2$;

V2.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub$LV2$AN = V2$sub$LV2$AN;

V2.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub$LV2$LFloat32Array$ = V2$sub$LV2$LFloat32Array$;

V2.prototype.mul$NN = function (x, y) {
	this.x *= x;
	this.y *= y;
	return this;
};


function V2$mul$LV2$NN($this, x, y) {
	$this.x *= x;
	$this.y *= y;
	return $this;
};

V2.mul$LV2$NN = V2$mul$LV2$NN;

V2.prototype.mul$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul$LV2$LV2$ = V2$mul$LV2$LV2$;

V2.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul$LV2$AN = V2$mul$LV2$AN;

V2.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul$LV2$LFloat32Array$ = V2$mul$LV2$LFloat32Array$;

V2.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	return this;
};


function V2$mul$LV2$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	return $this;
};

V2.mul$LV2$N = V2$mul$LV2$N;

V2.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	return this;
};


function V2$neg$LV2$($this) {
	$this.x *= -1;
	$this.y *= -1;
	return $this;
};

V2.neg$LV2$ = V2$neg$LV2$;

V2.prototype.normalize$ = function () {
	return V2$normalize$LV2$N(this, 1);
};


function V2$normalize$LV2$($this) {
	return V2$normalize$LV2$N($this, 1);
};

V2.normalize$LV2$ = V2$normalize$LV2$;

V2.prototype.normalize$N = function (n) {
	var l;
	var x$0$0;
	var y$0$0;
	var s$0;
	l = Math.sqrt((x$0$0 = this.x, y$0$0 = this.y, x$0$0 * x$0$0 + y$0$0 * y$0$0));
	return (l > 0 ? (s$0 = n / l, this.x *= s$0, this.y *= s$0, this) : this);
};


function V2$normalize$LV2$N($this, n) {
	var l;
	var x$0$0;
	var y$0$0;
	var s$0;
	l = Math.sqrt((x$0$0 = $this.x, y$0$0 = $this.y, x$0$0 * x$0$0 + y$0$0 * y$0$0));
	return (l > 0 ? (s$0 = n / l, $this.x *= s$0, $this.y *= s$0, $this) : $this);
};

V2.normalize$LV2$N = V2$normalize$LV2$N;

V2.prototype.cross$LV2$ = function (v) {
	return this.x * v.y - v.x * this.y;
};


function V2$cross$LV2$LV2$($this, v) {
	return $this.x * v.y - v.x * $this.y;
};

V2.cross$LV2$LV2$ = V2$cross$LV2$LV2$;

V2.prototype.dot$LV2$ = function (v) {
	return this.x * v.x + this.y * v.y;
};


function V2$dot$LV2$LV2$($this, v) {
	return $this.x * v.x + $this.y * v.y;
};

V2.dot$LV2$LV2$ = V2$dot$LV2$LV2$;

V2.prototype.len$ = function () {
	var x$0;
	var y$0;
	return Math.sqrt((x$0 = this.x, y$0 = this.y, x$0 * x$0 + y$0 * y$0));
};


function V2$len$LV2$($this) {
	var x$0;
	var y$0;
	return Math.sqrt((x$0 = $this.x, y$0 = $this.y, x$0 * x$0 + y$0 * y$0));
};

V2.len$LV2$ = V2$len$LV2$;

V2.prototype.len2$ = function () {
	var x;
	var y;
	(x = this.x, y = this.y);
	return x * x + y * y;
};


function V2$len2$LV2$($this) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	return x * x + y * y;
};

V2.len2$LV2$ = V2$len2$LV2$;

V2.prototype.dist$LV2$ = function (v) {
	var x$0;
	var y$0;
	return Math.sqrt((x$0 = v.x - this.x, y$0 = v.y - this.y, x$0 * x$0 + y$0 * y$0));
};


function V2$dist$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	return Math.sqrt((x$0 = v.x - $this.x, y$0 = v.y - $this.y, x$0 * x$0 + y$0 * y$0));
};

V2.dist$LV2$LV2$ = V2$dist$LV2$LV2$;

V2.prototype.dist2$LV2$ = function (v) {
	var x;
	var y;
	x = v.x - this.x;
	y = v.y - this.y;
	return x * x + y * y;
};


function V2$dist2$LV2$LV2$($this, v) {
	var x;
	var y;
	x = v.x - $this.x;
	y = v.y - $this.y;
	return x * x + y * y;
};

V2.dist2$LV2$LV2$ = V2$dist2$LV2$LV2$;

V2.prototype.lerp$LV2$LV2$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	return this;
};


function V2$lerp$LV2$LV2$LV2$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	return $this;
};

V2.lerp$LV2$LV2$LV2$N = V2$lerp$LV2$LV2$LV2$N;

V2.prototype.transformBy$LM22$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y;
	this.y = m.m21 * x + m.m22 * y;
	return this;
};


function V2$transformBy$LV2$LM22$($this, m) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	$this.x = m.m11 * x + m.m12 * y;
	$this.y = m.m21 * x + m.m22 * y;
	return $this;
};

V2.transformBy$LV2$LM22$ = V2$transformBy$LV2$LM22$;

V2.prototype.transformBy$LM33$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y + m.m13;
	this.y = m.m21 * x + m.m22 * y + m.m23;
	return this;
};


function V2$transformBy$LV2$LM33$($this, m) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	$this.x = m.m11 * x + m.m12 * y + m.m13;
	$this.y = m.m21 * x + m.m22 * y + m.m23;
	return $this;
};

V2.transformBy$LV2$LM33$ = V2$transformBy$LV2$LM33$;

V2.prototype.toString = function () {
	return "V2" + JSON.stringify([ this.x, this.y ]);
};


function V3() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function V3$0(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

function V3$1(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	z$0$0 = v[2];
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

function V3$2(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	z$0$0 = v[2];
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

function V3$3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

function V3$4(v, z) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
};

function V3$5(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

$__jsx_extend([V3, V3$0, V3$1, V3$2, V3$3, V3$4, V3$5], Object);
V3.prototype.array$ = function () {
	return [ this.x, this.y, this.z ];
};


function V3$array$LV3$($this) {
	return [ $this.x, $this.y, $this.z ];
};

V3.array$LV3$ = V3$array$LV3$;

V3.prototype.V2$ = function () {
	return new V2$4(this);
};


function V3$V2$LV3$($this) {
	return new V2$4($this);
};

V3.V2$LV3$ = V3$V2$LV3$;

V3.prototype.V4$N = function (w) {
	return new V4$5(this, w);
};


function V3$V4$LV3$N($this, w) {
	return new V4$5($this, w);
};

V3.V4$LV3$N = V3$V4$LV3$N;

V3.prototype.set$LV2$N = function (v, z) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	return this;
};


function V3$set$LV3$LV2$N($this, v, z) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z;
	return $this;
};

V3.set$LV3$LV2$N = V3$set$LV3$LV2$N;

V3.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set$LV3$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set$LV3$LV4$ = V3$set$LV3$LV4$;

V3.prototype.clone$ = function () {
	return new V3$0(this);
};


function V3$clone$LV3$($this) {
	return new V3$0($this);
};

V3.clone$LV3$ = V3$clone$LV3$;

V3.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function V3$clear$LV3$($this) {
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

V3.clear$LV3$ = V3$clear$LV3$;

V3.prototype.set$NNN = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


function V3$set$LV3$NNN($this, x, y, z) {
	$this.x = x;
	$this.y = y;
	$this.z = z;
	return $this;
};

V3.set$LV3$NNN = V3$set$LV3$NNN;

V3.prototype.set$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set$LV3$LV3$ = V3$set$LV3$LV3$;

V3.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set$LV3$AN = V3$set$LV3$AN;

V3.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set$LV3$LFloat32Array$ = V3$set$LV3$LFloat32Array$;

V3.prototype.equals$LV3$ = function (v) {
	return V3$equals$LV3$LV3$N(this, v, 0.000001);
};


function V3$equals$LV3$LV3$($this, v) {
	return V3$equals$LV3$LV3$N($this, v, 0.000001);
};

V3.equals$LV3$LV3$ = V3$equals$LV3$LV3$;

V3.prototype.equals$LV3$N = function (v, eps) {
	var x$0;
	var x$1;
	var x$2;
	return (x$0 = v.x - this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - this.y, x$1 >= 0 ? x$1 : - x$1) < eps && (x$2 = v.z - this.z, x$2 >= 0 ? x$2 : - x$2) < eps;
};


function V3$equals$LV3$LV3$N($this, v, eps) {
	var x$0;
	var x$1;
	var x$2;
	return (x$0 = v.x - $this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - $this.y, x$1 >= 0 ? x$1 : - x$1) < eps && (x$2 = v.z - $this.z, x$2 >= 0 ? x$2 : - x$2) < eps;
};

V3.equals$LV3$LV3$N = V3$equals$LV3$LV3$N;

V3.prototype.add$NNN = function (x, y, z) {
	this.x += x;
	this.y += y;
	this.z += z;
	return this;
};


function V3$add$LV3$NNN($this, x, y, z) {
	$this.x += x;
	$this.y += y;
	$this.z += z;
	return $this;
};

V3.add$LV3$NNN = V3$add$LV3$NNN;

V3.prototype.add$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add$LV3$LV3$ = V3$add$LV3$LV3$;

V3.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add$LV3$AN = V3$add$LV3$AN;

V3.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add$LV3$LFloat32Array$ = V3$add$LV3$LFloat32Array$;

V3.prototype.sub$NNN = function (x, y, z) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	return this;
};


function V3$sub$LV3$NNN($this, x, y, z) {
	$this.x -= x;
	$this.y -= y;
	$this.z -= z;
	return $this;
};

V3.sub$LV3$NNN = V3$sub$LV3$NNN;

V3.prototype.sub$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub$LV3$LV3$ = V3$sub$LV3$LV3$;

V3.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub$LV3$AN = V3$sub$LV3$AN;

V3.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub$LV3$LFloat32Array$ = V3$sub$LV3$LFloat32Array$;

V3.prototype.mul$NNN = function (x, y, z) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	return this;
};


function V3$mul$LV3$NNN($this, x, y, z) {
	$this.x *= x;
	$this.y *= y;
	$this.z *= z;
	return $this;
};

V3.mul$LV3$NNN = V3$mul$LV3$NNN;

V3.prototype.mul$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul$LV3$LV3$ = V3$mul$LV3$LV3$;

V3.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul$LV3$AN = V3$mul$LV3$AN;

V3.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul$LV3$LFloat32Array$ = V3$mul$LV3$LFloat32Array$;

V3.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


function V3$mul$LV3$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	return $this;
};

V3.mul$LV3$N = V3$mul$LV3$N;

V3.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this;
};


function V3$neg$LV3$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	return $this;
};

V3.neg$LV3$ = V3$neg$LV3$;

V3.prototype.normalize$ = function () {
	return V3$normalize$LV3$N(this, 1);
};


function V3$normalize$LV3$($this) {
	return V3$normalize$LV3$N($this, 1);
};

V3.normalize$LV3$ = V3$normalize$LV3$;

V3.prototype.normalize$N = function (n) {
	var l;
	var x$0$0;
	var y$0$0;
	var z$0$0;
	var s$0;
	l = Math.sqrt((x$0$0 = this.x, y$0$0 = this.y, z$0$0 = this.z, x$0$0 * x$0$0 + y$0$0 * y$0$0 + z$0$0 * z$0$0));
	return (l > 0 ? (s$0 = n / l, this.x *= s$0, this.y *= s$0, this.z *= s$0, this) : this);
};


function V3$normalize$LV3$N($this, n) {
	var l;
	var x$0$0;
	var y$0$0;
	var z$0$0;
	var s$0;
	l = Math.sqrt((x$0$0 = $this.x, y$0$0 = $this.y, z$0$0 = $this.z, x$0$0 * x$0$0 + y$0$0 * y$0$0 + z$0$0 * z$0$0));
	return (l > 0 ? (s$0 = n / l, $this.x *= s$0, $this.y *= s$0, $this.z *= s$0, $this) : $this);
};

V3.normalize$LV3$N = V3$normalize$LV3$N;

V3.prototype.cross$LV3$LV3$ = function (v0, v1) {
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	(x0 = v0.x, y0 = v0.y, z0 = v0.z);
	(x1 = v1.x, y1 = v1.y, z1 = v1.z);
	this.x = y0 * z1 - z0 * y1;
	this.y = z0 * x1 - x0 * z1;
	this.z = x0 * y1 - y0 * x1;
	return this;
};


function V3$cross$LV3$LV3$LV3$($this, v0, v1) {
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	(x0 = v0.x, y0 = v0.y, z0 = v0.z);
	(x1 = v1.x, y1 = v1.y, z1 = v1.z);
	$this.x = y0 * z1 - z0 * y1;
	$this.y = z0 * x1 - x0 * z1;
	$this.z = x0 * y1 - y0 * x1;
	return $this;
};

V3.cross$LV3$LV3$LV3$ = V3$cross$LV3$LV3$LV3$;

V3.prototype.dot$LV3$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z;
};


function V3$dot$LV3$LV3$($this, v) {
	return $this.x * v.x + $this.y * v.y + $this.z * v.z;
};

V3.dot$LV3$LV3$ = V3$dot$LV3$LV3$;

V3.prototype.len$ = function () {
	var x$0;
	var y$0;
	var z$0;
	return Math.sqrt((x$0 = this.x, y$0 = this.y, z$0 = this.z, x$0 * x$0 + y$0 * y$0 + z$0 * z$0));
};


function V3$len$LV3$($this) {
	var x$0;
	var y$0;
	var z$0;
	return Math.sqrt((x$0 = $this.x, y$0 = $this.y, z$0 = $this.z, x$0 * x$0 + y$0 * y$0 + z$0 * z$0));
};

V3.len$LV3$ = V3$len$LV3$;

V3.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	return x * x + y * y + z * z;
};


function V3$len2$LV3$($this) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	return x * x + y * y + z * z;
};

V3.len2$LV3$ = V3$len2$LV3$;

V3.prototype.dist$LV3$ = function (v) {
	return Math.sqrt(V3$dist2$LV3$LV3$(this, v));
};


function V3$dist$LV3$LV3$($this, v) {
	return Math.sqrt(V3$dist2$LV3$LV3$($this, v));
};

V3.dist$LV3$LV3$ = V3$dist$LV3$LV3$;

V3.prototype.dist2$LV3$ = function (v) {
	var x;
	var y;
	var z;
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	return x * x + y * y + z * z;
};


function V3$dist2$LV3$LV3$($this, v) {
	var x;
	var y;
	var z;
	x = v.x - $this.x;
	y = v.y - $this.y;
	z = v.z - $this.z;
	return x * x + y * y + z * z;
};

V3.dist2$LV3$LV3$ = V3$dist2$LV3$LV3$;

V3.prototype.lerp$LV3$LV3$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	return this;
};


function V3$lerp$LV3$LV3$LV3$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	$this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	return $this;
};

V3.lerp$LV3$LV3$LV3$N = V3$lerp$LV3$LV3$LV3$N;

V3.prototype.transformBy$LM33$ = function (m) {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z;
	return this;
};


function V3$transformBy$LV3$LM33$($this, m) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z;
	return $this;
};

V3.transformBy$LV3$LM33$ = V3$transformBy$LV3$LM33$;

V3.prototype.transformBy$LM44$ = function (m) {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34;
	return this;
};


function V3$transformBy$LV3$LM44$($this, m) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34;
	return $this;
};

V3.transformBy$LV3$LM44$ = V3$transformBy$LV3$LM44$;

V3.prototype.toString = function () {
	return "V3" + JSON.stringify([ this.x, this.y, this.z ]);
};


function V4() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

function V4$0(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set$LV4$LV4$(this, v);
};

function V4$1(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set$LV4$AN(this, v);
};

function V4$2(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set$LV4$LFloat32Array$(this, v);
};

function V4$3(x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};

function V4$4(v, z, w) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
	this.w = w;
};

function V4$5(v, w) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
	this.w = w;
};

$__jsx_extend([V4, V4$0, V4$1, V4$2, V4$3, V4$4, V4$5], Object);
V4.prototype.array$ = function () {
	return [ this.x, this.y, this.z, this.w ];
};


function V4$array$LV4$($this) {
	return [ $this.x, $this.y, $this.z, $this.w ];
};

V4.array$LV4$ = V4$array$LV4$;

V4.prototype.V2$ = function () {
	return new V2$5(this);
};


function V4$V2$LV4$($this) {
	return new V2$5($this);
};

V4.V2$LV4$ = V4$V2$LV4$;

V4.prototype.V3$ = function () {
	return new V3$5(this);
};


function V4$V3$LV4$($this) {
	return new V3$5($this);
};

V4.V3$LV4$ = V4$V3$LV4$;

V4.prototype.set$LV2$NN = function (v, z, w) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	this.w = w;
	return this;
};


function V4$set$LV4$LV2$NN($this, v, z, w) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z;
	$this.w = w;
	return $this;
};

V4.set$LV4$LV2$NN = V4$set$LV4$LV2$NN;

V4.prototype.set$LV3$N = function (v, w) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w;
	return this;
};


function V4$set$LV4$LV3$N($this, v, w) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w;
	return $this;
};

V4.set$LV4$LV3$N = V4$set$LV4$LV3$N;

V4.prototype.clone$ = function () {
	return new V4$0(this);
};


function V4$clone$LV4$($this) {
	return new V4$0($this);
};

V4.clone$LV4$ = V4$clone$LV4$;

V4.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	return this;
};


function V4$clear$LV4$($this) {
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	$this.w = 0;
	return $this;
};

V4.clear$LV4$ = V4$clear$LV4$;

V4.prototype.set$NNNN = function (x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	return this;
};


function V4$set$LV4$NNNN($this, x, y, z, w) {
	$this.x = x;
	$this.y = y;
	$this.z = z;
	$this.w = w;
	return $this;
};

V4.set$LV4$NNNN = V4$set$LV4$NNNN;

V4.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set$LV4$LV4$ = V4$set$LV4$LV4$;

V4.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set$LV4$AN = V4$set$LV4$AN;

V4.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set$LV4$LFloat32Array$ = V4$set$LV4$LFloat32Array$;

V4.prototype.equals$LV4$ = function (v) {
	return V4$equals$LV4$LV4$N(this, v, 0.000001);
};


function V4$equals$LV4$LV4$($this, v) {
	return V4$equals$LV4$LV4$N($this, v, 0.000001);
};

V4.equals$LV4$LV4$ = V4$equals$LV4$LV4$;

V4.prototype.equals$LV4$N = function (v, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return (x$0 = v.x - this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - this.y, x$1 >= 0 ? x$1 : - x$1) < eps && (x$2 = v.z - this.z, x$2 >= 0 ? x$2 : - x$2) < eps && (x$3 = v.w - this.w, x$3 >= 0 ? x$3 : - x$3) < eps;
};


function V4$equals$LV4$LV4$N($this, v, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return (x$0 = v.x - $this.x, x$0 >= 0 ? x$0 : - x$0) < eps && (x$1 = v.y - $this.y, x$1 >= 0 ? x$1 : - x$1) < eps && (x$2 = v.z - $this.z, x$2 >= 0 ? x$2 : - x$2) < eps && (x$3 = v.w - $this.w, x$3 >= 0 ? x$3 : - x$3) < eps;
};

V4.equals$LV4$LV4$N = V4$equals$LV4$LV4$N;

V4.prototype.add$NNNN = function (x, y, z, w) {
	this.x += x;
	this.y += y;
	this.z += z;
	this.w += w;
	return this;
};


function V4$add$LV4$NNNN($this, x, y, z, w) {
	$this.x += x;
	$this.y += y;
	$this.z += z;
	$this.w += w;
	return $this;
};

V4.add$LV4$NNNN = V4$add$LV4$NNNN;

V4.prototype.add$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
};


function V4$add$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add$LV4$LV4$ = V4$add$LV4$LV4$;

V4.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
};


function V4$add$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add$LV4$AN = V4$add$LV4$AN;

V4.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
};


function V4$add$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add$LV4$LFloat32Array$ = V4$add$LV4$LFloat32Array$;

V4.prototype.sub$NNNN = function (x, y, z, w) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	return this;
};


function V4$sub$LV4$NNNN($this, x, y, z, w) {
	$this.x -= x;
	$this.y -= y;
	$this.z -= z;
	$this.w -= w;
	return $this;
};

V4.sub$LV4$NNNN = V4$sub$LV4$NNNN;

V4.prototype.sub$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
};


function V4$sub$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub$LV4$LV4$ = V4$sub$LV4$LV4$;

V4.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
};


function V4$sub$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub$LV4$AN = V4$sub$LV4$AN;

V4.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
};


function V4$sub$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub$LV4$LFloat32Array$ = V4$sub$LV4$LFloat32Array$;

V4.prototype.mul$NNNN = function (x, y, z, w) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	return this;
};


function V4$mul$LV4$NNNN($this, x, y, z, w) {
	$this.x *= x;
	$this.y *= y;
	$this.z *= z;
	$this.w *= w;
	return $this;
};

V4.mul$LV4$NNNN = V4$mul$LV4$NNNN;

V4.prototype.mul$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
};


function V4$mul$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul$LV4$LV4$ = V4$mul$LV4$LV4$;

V4.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
};


function V4$mul$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul$LV4$AN = V4$mul$LV4$AN;

V4.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
};


function V4$mul$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul$LV4$LFloat32Array$ = V4$mul$LV4$LFloat32Array$;

V4.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	this.w *= s;
	return this;
};


function V4$mul$LV4$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	$this.w *= s;
	return $this;
};

V4.mul$LV4$N = V4$mul$LV4$N;

V4.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	this.w *= -1;
	return this;
};


function V4$neg$LV4$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	$this.w *= -1;
	return $this;
};

V4.neg$LV4$ = V4$neg$LV4$;

V4.prototype.normalize$ = function () {
	return V4$normalize$LV4$N(this, 1);
};


function V4$normalize$LV4$($this) {
	return V4$normalize$LV4$N($this, 1);
};

V4.normalize$LV4$ = V4$normalize$LV4$;

V4.prototype.normalize$N = function (n) {
	var l;
	var s$0;
	l = Math.sqrt(V4$len2$LV4$(this));
	return (l > 0 ? (s$0 = n / l, this.x *= s$0, this.y *= s$0, this.z *= s$0, this.w *= s$0, this) : this);
};


function V4$normalize$LV4$N($this, n) {
	var l;
	var s$0;
	l = Math.sqrt(V4$len2$LV4$($this));
	return (l > 0 ? (s$0 = n / l, $this.x *= s$0, $this.y *= s$0, $this.z *= s$0, $this.w *= s$0, $this) : $this);
};

V4.normalize$LV4$N = V4$normalize$LV4$N;

V4.prototype.dot$LV4$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
};


function V4$dot$LV4$LV4$($this, v) {
	return $this.x * v.x + $this.y * v.y + $this.z * v.z + $this.w * v.w;
};

V4.dot$LV4$LV4$ = V4$dot$LV4$LV4$;

V4.prototype.len$ = function () {
	return Math.sqrt(V4$len2$LV4$(this));
};


function V4$len$LV4$($this) {
	return Math.sqrt(V4$len2$LV4$($this));
};

V4.len$LV4$ = V4$len$LV4$;

V4.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	return x * x + y * y + z * z + w * w;
};


function V4$len2$LV4$($this) {
	var x;
	var y;
	var z;
	var w;
	(x = $this.x, y = $this.y, z = $this.z, w = $this.w);
	return x * x + y * y + z * z + w * w;
};

V4.len2$LV4$ = V4$len2$LV4$;

V4.prototype.dist$LV4$ = function (v) {
	return Math.sqrt(V4$dist2$LV4$LV4$(this, v));
};


function V4$dist$LV4$LV4$($this, v) {
	return Math.sqrt(V4$dist2$LV4$LV4$($this, v));
};

V4.dist$LV4$LV4$ = V4$dist$LV4$LV4$;

V4.prototype.dist2$LV4$ = function (v) {
	var x;
	var y;
	var z;
	var w;
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	w = v.w - this.w;
	return x * x + y * y + z * z + w * w;
};


function V4$dist2$LV4$LV4$($this, v) {
	var x;
	var y;
	var z;
	var w;
	x = v.x - $this.x;
	y = v.y - $this.y;
	z = v.z - $this.z;
	w = v.w - $this.w;
	return x * x + y * y + z * z + w * w;
};

V4.dist2$LV4$LV4$ = V4$dist2$LV4$LV4$;

V4.prototype.lerp$LV4$LV4$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	this.w = (w$0 = v0.w) + ratio * (v1.w - w$0);
	return this;
};


function V4$lerp$LV4$LV4$LV4$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	$this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	$this.w = (w$0 = v0.w) + ratio * (v1.w - w$0);
	return $this;
};

V4.lerp$LV4$LV4$LV4$N = V4$lerp$LV4$LV4$LV4$N;

V4.prototype.transformBy$LM44$ = function (m) {
	var x;
	var y;
	var z;
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14 * w;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24 * w;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34 * w;
	this.w = m.m41 * x + m.m42 * y + m.m43 * z + m.m44 * w;
	return this;
};


function V4$transformBy$LV4$LM44$($this, m) {
	var x;
	var y;
	var z;
	var w;
	(x = $this.x, y = $this.y, z = $this.z, w = $this.w);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14 * w;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24 * w;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34 * w;
	$this.w = m.m41 * x + m.m42 * y + m.m43 * z + m.m44 * w;
	return $this;
};

V4.transformBy$LV4$LM44$ = V4$transformBy$LV4$LM44$;

V4.prototype.toString = function () {
	return "V4" + JSON.stringify([ this.x, this.y, this.z, this.w ]);
};


function M22() {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
};

function M22$0(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

function M22$1(m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
};

function M22$2(m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
};

function M22$3(m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
};

function M22$4(v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
};

function M22$5(s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
};

function M22$6(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

function M22$7(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

$__jsx_extend([M22, M22$0, M22$1, M22$2, M22$3, M22$4, M22$5, M22$6, M22$7], Object);
M22.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m12, this.m22 ];
};


function M22$array$LM22$($this) {
	return [ $this.m11, $this.m21, $this.m12, $this.m22 ];
};

M22.array$LM22$ = M22$array$LM22$;

M22.prototype.transposedArray$ = function () {
	return [ this.m11, this.m12, this.m21, this.m22 ];
};


function M22$transposedArray$LM22$($this) {
	return [ $this.m11, $this.m12, $this.m21, $this.m22 ];
};

M22.transposedArray$LM22$ = M22$transposedArray$LM22$;

M22.prototype.M33$N = function (m22) {
	return new M33$6(this, m22);
};


function M22$M33$LM22$N($this, m22) {
	return new M33$6($this, m22);
};

M22.M33$LM22$N = M22$M33$LM22$N;

M22.prototype.M44$NN = function (m22, m33) {
	return new M44$6(this, m22, m33);
};


function M22$M44$LM22$NN($this, m22, m33) {
	return new M44$6($this, m22, m33);
};

M22.M44$LM22$NN = M22$M44$LM22$NN;

M22.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set$LM22$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set$LM22$LM33$ = M22$set$LM22$LM33$;

M22.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set$LM22$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set$LM22$LM44$ = M22$set$LM22$LM44$;

M22.prototype.clone$ = function () {
	return new M22$0(this);
};


function M22$clone$LM22$($this) {
	return new M22$0($this);
};

M22.clone$LM22$ = M22$clone$LM22$;

M22.prototype.setZero$ = function () {
	this.m11 = this.m22 = 0;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$setZero$LM22$($this) {
	$this.m11 = $this.m22 = 0;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.setZero$LM22$ = M22$setZero$LM22$;

M22.prototype.setIdentity$ = function () {
	this.m11 = this.m22 = 1;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$setIdentity$LM22$($this) {
	$this.m11 = $this.m22 = 1;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.setIdentity$LM22$ = M22$setIdentity$LM22$;

function M22$zero$() {
	var this$0;
	this$0 = new M22();
	this$0.m11 = this$0.m22 = 0;
	this$0.m21 = this$0.m12 = 0;
	return this$0;
};

M22.zero$ = M22$zero$;

function M22$identity$() {
	var this$0;
	this$0 = new M22();
	this$0.m11 = this$0.m22 = 1;
	this$0.m21 = this$0.m12 = 0;
	return this$0;
};

M22.identity$ = M22$identity$;

M22.prototype.set$NNNN = function (m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
	return this;
};


function M22$set$LM22$NNNN($this, m11, m12, m21, m22) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m12 = m12;
	$this.m22 = m22;
	return $this;
};

M22.set$LM22$NNNN = M22$set$LM22$NNNN;

M22.prototype.set$LV2$LV2$ = function (v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
	return this;
};


function M22$set$LM22$LV2$LV2$($this, v0, v1) {
	$this.m11 = v0.x;
	$this.m21 = v0.y;
	$this.m12 = v1.x;
	$this.m22 = v1.y;
	return $this;
};

M22.set$LM22$LV2$LV2$ = M22$set$LM22$LV2$LV2$;

M22.prototype.set$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set$LM22$LM22$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set$LM22$LM22$ = M22$set$LM22$LM22$;

M22.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


function M22$set$LM22$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m12 = m[2];
	$this.m22 = m[3];
	return $this;
};

M22.set$LM22$AN = M22$set$LM22$AN;

M22.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


function M22$set$LM22$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m12 = m[2];
	$this.m22 = m[3];
	return $this;
};

M22.set$LM22$LFloat32Array$ = M22$set$LM22$LFloat32Array$;

M22.prototype.set$N = function (s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$set$LM22$N($this, s) {
	$this.m11 = $this.m22 = s;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.set$LM22$N = M22$set$LM22$N;

M22.prototype.equals$LM22$ = function (m) {
	return M22$equals$LM22$LM22$N(this, m, 0.000001);
};


function M22$equals$LM22$LM22$($this, m) {
	return M22$equals$LM22$LM22$N($this, m, 0.000001);
};

M22.equals$LM22$LM22$ = M22$equals$LM22$LM22$;

M22.prototype.equals$LM22$N = function (m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return ((x$0 = this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = this.m12 - m.m12, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = this.m22 - m.m22, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : true);
};


function M22$equals$LM22$LM22$N($this, m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return ((x$0 = $this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = $this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = $this.m12 - m.m12, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = $this.m22 - m.m22, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : true);
};

M22.equals$LM22$LM22$N = M22$equals$LM22$LM22$N;

M22.prototype.add$LM22$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m12 += m.m12;
	this.m22 += m.m22;
	return this;
};


function M22$add$LM22$LM22$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	return $this;
};

M22.add$LM22$LM22$ = M22$add$LM22$LM22$;

M22.prototype.sub$LM22$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	return this;
};


function M22$sub$LM22$LM22$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	return $this;
};

M22.sub$LM22$LM22$ = M22$sub$LM22$LM22$;

M22.prototype.mul$N = function (s) {
	this.m11 *= s;
	this.m21 *= s;
	this.m12 *= s;
	this.m22 *= s;
	return this;
};


function M22$mul$LM22$N($this, s) {
	$this.m11 *= s;
	$this.m21 *= s;
	$this.m12 *= s;
	$this.m22 *= s;
	return $this;
};

M22.mul$LM22$N = M22$mul$LM22$N;

M22.prototype.mul$LM22$ = function (m) {
	return M22$mul$LM22$LM22$LM22$(this, new M22$0(this), m);
};


function M22$mul$LM22$LM22$($this, m) {
	return M22$mul$LM22$LM22$LM22$($this, new M22$0($this), m);
};

M22.mul$LM22$LM22$ = M22$mul$LM22$LM22$;

M22.prototype.mul$LM22$LM22$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m11$1;
	var m12$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return this;
};


function M22$mul$LM22$LM22$LM22$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m11$1;
	var m12$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return $this;
};

M22.mul$LM22$LM22$LM22$ = M22$mul$LM22$LM22$LM22$;

M22.prototype.transpose$ = function () {
	var m12;
	m12 = this.m12;
	this.m12 = this.m21;
	this.m21 = m12;
	return this;
};


function M22$transpose$LM22$($this) {
	var m12;
	m12 = $this.m12;
	$this.m12 = $this.m21;
	$this.m21 = m12;
	return $this;
};

M22.transpose$LM22$ = M22$transpose$LM22$;

M22.prototype.transpose$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m12 = m.m21;
	this.m22 = m.m22;
	return this;
};


function M22$transpose$LM22$LM22$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	return $this;
};

M22.transpose$LM22$LM22$ = M22$transpose$LM22$LM22$;

M22.prototype.det$ = function () {
	return this.m11 * this.m22 - this.m21 * this.m12;
};


function M22$det$LM22$($this) {
	return $this.m11 * $this.m22 - $this.m21 * $this.m12;
};

M22.det$LM22$ = M22$det$LM22$;

M22.prototype.inverse$ = function () {
	var d;
	var invDet;
	var org$m11$0;
	var org$m21$0;
	var org$m12$0;
	var org$m22$0;
	d = this.m11 * this.m22 - this.m21 * this.m12;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org$m11$0 = this.m11;
	org$m21$0 = this.m21;
	org$m12$0 = this.m12;
	org$m22$0 = this.m22;
	this.m11 = org$m22$0 * invDet;
	this.m21 = - org$m21$0 * invDet;
	this.m12 = - org$m12$0 * invDet;
	this.m22 = org$m11$0 * invDet;
	return this;
};


function M22$inverse$LM22$($this) {
	var d;
	var invDet;
	var org$m11$0;
	var org$m21$0;
	var org$m12$0;
	var org$m22$0;
	d = $this.m11 * $this.m22 - $this.m21 * $this.m12;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org$m11$0 = $this.m11;
	org$m21$0 = $this.m21;
	org$m12$0 = $this.m12;
	org$m22$0 = $this.m22;
	$this.m11 = org$m22$0 * invDet;
	$this.m21 = - org$m21$0 * invDet;
	$this.m12 = - org$m12$0 * invDet;
	$this.m22 = org$m11$0 * invDet;
	return $this;
};

M22.inverse$LM22$ = M22$inverse$LM22$;

M22.prototype.setScale$N = function (s) {
	this.m11 = s;
	this.m21 = this.m12 = 0;
	this.m22 = s;
	return this;
};


function M22$setScale$LM22$N($this, s) {
	$this.m11 = s;
	$this.m21 = $this.m12 = 0;
	$this.m22 = s;
	return $this;
};

M22.setScale$LM22$N = M22$setScale$LM22$N;

M22.prototype.setScale$NN = function (x, y) {
	this.m11 = x;
	this.m21 = this.m12 = 0;
	this.m22 = y;
	return this;
};


function M22$setScale$LM22$NN($this, x, y) {
	$this.m11 = x;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y;
	return $this;
};

M22.setScale$LM22$NN = M22$setScale$LM22$NN;

M22.prototype.setScale$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale$LM22$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale$LM22$LV2$ = M22$setScale$LM22$LV2$;

M22.prototype.setScale$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale$LM22$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale$LM22$AN = M22$setScale$LM22$AN;

M22.prototype.setScale$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale$LM22$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale$LM22$LFloat32Array$ = M22$setScale$LM22$LFloat32Array$;

M22.prototype.setRotation$N = function (rad) {
	var c;
	var s;
	(c = Math.cos(rad), s = Math.sin(rad));
	this.m11 = c;
	this.m21 = s;
	this.m12 = - s;
	this.m22 = c;
	return this;
};


function M22$setRotation$LM22$N($this, rad) {
	var c;
	var s;
	(c = Math.cos(rad), s = Math.sin(rad));
	$this.m11 = c;
	$this.m21 = s;
	$this.m12 = - s;
	$this.m22 = c;
	return $this;
};

M22.setRotation$LM22$N = M22$setRotation$LM22$N;

M22.prototype.toString = function () {
	return "M22" + JSON.stringify([ this.m11, this.m21, this.m12, this.m22 ]);
};


function M33() {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
};

function M33$0(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$LM33$(this, m);
};

function M33$1(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$AN(this, m);
};

function M33$2(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$LFloat32Array$(this, m);
};

function M33$3(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
};

function M33$4(v0, v1, v2) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$LV3$LV3$LV3$(this, v0, v1, v2);
};

function M33$5(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$N(this, s);
};

function M33$6(m, m22) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$LM22$N(this, m, m22);
};

function M33$7(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set$LM33$LM44$(this, m);
};

$__jsx_extend([M33, M33$0, M33$1, M33$2, M33$3, M33$4, M33$5, M33$6, M33$7], Object);
M33.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ];
};


function M33$array$LM33$($this) {
	return [ $this.m11, $this.m21, $this.m31, $this.m12, $this.m22, $this.m32, $this.m13, $this.m23, $this.m33 ];
};

M33.array$LM33$ = M33$array$LM33$;

M33.prototype.M22$ = function () {
	return new M22$6(this);
};


function M33$M22$LM33$($this) {
	return new M22$6($this);
};

M33.M22$LM33$ = M33$M22$LM33$;

M33.prototype.M44$N = function (m33) {
	return new M44$7(this, m33);
};


function M33$M44$LM33$N($this, m33) {
	return new M44$7($this, m33);
};

M33.M44$LM33$N = M33$M44$LM33$N;

M33.prototype.set$LM22$N = function (m, m22) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	return this;
};


function M33$set$LM33$LM22$N($this, m, m22) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = 0;
	$this.m13 = 0;
	$this.m23 = 0;
	$this.m33 = 0;
	return $this;
};

M33.set$LM33$LM22$N = M33$set$LM33$LM22$N;

M33.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	return this;
};


function M33$set$LM33$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	return $this;
};

M33.set$LM33$LM44$ = M33$set$LM33$LM44$;

M33.prototype.clone$ = function () {
	return new M33$0(this);
};


function M33$clone$LM33$($this) {
	return new M33$0($this);
};

M33.clone$LM33$ = M33$clone$LM33$;

M33.prototype.setZero$ = function () {
	return M33$set$LM33$N(this, 0);
};


function M33$setZero$LM33$($this) {
	return M33$set$LM33$N($this, 0);
};

M33.setZero$LM33$ = M33$setZero$LM33$;

M33.prototype.setIdentity$ = function () {
	return M33$set$LM33$N(this, 1);
};


function M33$setIdentity$LM33$($this) {
	return M33$set$LM33$N($this, 1);
};

M33.setIdentity$LM33$ = M33$setIdentity$LM33$;

function M33$zero$() {
	var this$0;
	this$0 = new M33();
	return M33$set$LM33$N(this$0, 0);
};

M33.zero$ = M33$zero$;

function M33$identity$() {
	var this$0;
	this$0 = new M33();
	return M33$set$LM33$N(this$0, 1);
};

M33.identity$ = M33$identity$;

M33.prototype.set$NNNNNNNNN = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	return this;
};


function M33$set$LM33$NNNNNNNNN($this, m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m31 = m31;
	$this.m12 = m12;
	$this.m22 = m22;
	$this.m32 = m32;
	$this.m13 = m13;
	$this.m23 = m23;
	$this.m33 = m33;
	return $this;
};

M33.set$LM33$NNNNNNNNN = M33$set$LM33$NNNNNNNNN;

M33.prototype.set$LV3$LV3$LV3$ = function (v0, v1, v2) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m31 = v0.z;
	this.m12 = v1.x;
	this.m22 = v1.y;
	this.m32 = v1.z;
	this.m13 = v2.x;
	this.m23 = v2.y;
	this.m33 = v2.z;
	return this;
};


function M33$set$LM33$LV3$LV3$LV3$($this, v0, v1, v2) {
	$this.m11 = v0.x;
	$this.m21 = v0.y;
	$this.m31 = v0.z;
	$this.m12 = v1.x;
	$this.m22 = v1.y;
	$this.m32 = v1.z;
	$this.m13 = v2.x;
	$this.m23 = v2.y;
	$this.m33 = v2.z;
	return $this;
};

M33.set$LM33$LV3$LV3$LV3$ = M33$set$LM33$LV3$LV3$LV3$;

M33.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	return this;
};


function M33$set$LM33$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	return $this;
};

M33.set$LM33$LM33$ = M33$set$LM33$LM33$;

M33.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m12 = m[3];
	this.m22 = m[4];
	this.m32 = m[5];
	this.m13 = m[6];
	this.m23 = m[7];
	this.m33 = m[8];
	return this;
};


function M33$set$LM33$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m12 = m[3];
	$this.m22 = m[4];
	$this.m32 = m[5];
	$this.m13 = m[6];
	$this.m23 = m[7];
	$this.m33 = m[8];
	return $this;
};

M33.set$LM33$AN = M33$set$LM33$AN;

M33.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m12 = m[3];
	this.m22 = m[4];
	this.m32 = m[5];
	this.m13 = m[6];
	this.m23 = m[7];
	this.m33 = m[8];
	return this;
};


function M33$set$LM33$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m12 = m[3];
	$this.m22 = m[4];
	$this.m32 = m[5];
	$this.m13 = m[6];
	$this.m23 = m[7];
	$this.m33 = m[8];
	return $this;
};

M33.set$LM33$LFloat32Array$ = M33$set$LM33$LFloat32Array$;

M33.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


function M33$set$LM33$N($this, s) {
	$this.m11 = $this.m22 = $this.m33 = s;
	$this.m21 = $this.m31 = $this.m12 = $this.m32 = $this.m13 = $this.m23 = 0;
	return $this;
};

M33.set$LM33$N = M33$set$LM33$N;

M33.prototype.equals$LM33$ = function (m) {
	return M33$equals$LM33$LM33$N(this, m, 0.000001);
};


function M33$equals$LM33$LM33$($this, m) {
	return M33$equals$LM33$LM33$N($this, m, 0.000001);
};

M33.equals$LM33$LM33$ = M33$equals$LM33$LM33$;

M33.prototype.equals$LM33$N = function (m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	var x$4;
	var x$5;
	var x$6;
	var x$7;
	var x$8;
	return ((x$0 = this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = this.m31 - m.m31, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = this.m12 - m.m12, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : (x$4 = this.m22 - m.m22, x$4 >= 0 ? x$4 : - x$4) >= eps ? false : (x$5 = this.m32 - m.m32, x$5 >= 0 ? x$5 : - x$5) >= eps ? false : (x$6 = this.m13 - m.m13, x$6 >= 0 ? x$6 : - x$6) >= eps ? false : (x$7 = this.m23 - m.m23, x$7 >= 0 ? x$7 : - x$7) >= eps ? false : (x$8 = this.m33 - m.m33, x$8 >= 0 ? x$8 : - x$8) >= eps ? false : true);
};


function M33$equals$LM33$LM33$N($this, m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	var x$4;
	var x$5;
	var x$6;
	var x$7;
	var x$8;
	return ((x$0 = $this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = $this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = $this.m31 - m.m31, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = $this.m12 - m.m12, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : (x$4 = $this.m22 - m.m22, x$4 >= 0 ? x$4 : - x$4) >= eps ? false : (x$5 = $this.m32 - m.m32, x$5 >= 0 ? x$5 : - x$5) >= eps ? false : (x$6 = $this.m13 - m.m13, x$6 >= 0 ? x$6 : - x$6) >= eps ? false : (x$7 = $this.m23 - m.m23, x$7 >= 0 ? x$7 : - x$7) >= eps ? false : (x$8 = $this.m33 - m.m33, x$8 >= 0 ? x$8 : - x$8) >= eps ? false : true);
};

M33.equals$LM33$LM33$N = M33$equals$LM33$LM33$N;

M33.prototype.add$LM33$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m31 += m.m31;
	this.m12 += m.m12;
	this.m22 += m.m22;
	this.m32 += m.m32;
	this.m13 += m.m13;
	this.m23 += m.m23;
	this.m33 += m.m33;
	return this;
};


function M33$add$LM33$LM33$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m31 += m.m31;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	$this.m32 += m.m32;
	$this.m13 += m.m13;
	$this.m23 += m.m23;
	$this.m33 += m.m33;
	return $this;
};

M33.add$LM33$LM33$ = M33$add$LM33$LM33$;

M33.prototype.sub$LM33$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m31 -= m.m31;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	this.m32 -= m.m32;
	this.m13 -= m.m13;
	this.m23 -= m.m23;
	this.m33 -= m.m33;
	return this;
};


function M33$sub$LM33$LM33$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m31 -= m.m31;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	$this.m32 -= m.m32;
	$this.m13 -= m.m13;
	$this.m23 -= m.m23;
	$this.m33 -= m.m33;
	return $this;
};

M33.sub$LM33$LM33$ = M33$sub$LM33$LM33$;

M33.prototype.mul$N = function (s) {
	this.m11 *= s;
	this.m21 *= s;
	this.m31 *= s;
	this.m12 *= s;
	this.m22 *= s;
	this.m32 *= s;
	this.m13 *= s;
	this.m23 *= s;
	this.m33 *= s;
	return this;
};


function M33$mul$LM33$N($this, s) {
	$this.m11 *= s;
	$this.m21 *= s;
	$this.m31 *= s;
	$this.m12 *= s;
	$this.m22 *= s;
	$this.m32 *= s;
	$this.m13 *= s;
	$this.m23 *= s;
	$this.m33 *= s;
	return $this;
};

M33.mul$LM33$N = M33$mul$LM33$N;

M33.prototype.mul$LM33$ = function (m) {
	return M33$mul$LM33$LM33$LM33$(this, new M33$0(this), m);
};


function M33$mul$LM33$LM33$($this, m) {
	return M33$mul$LM33$LM33$LM33$($this, new M33$0($this), m);
};

M33.mul$LM33$LM33$ = M33$mul$LM33$LM33$;

M33.prototype.mul$LM33$LM33$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m13$1;
	var m23$1;
	var m33$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0;
	this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0;
	this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1;
	return this;
};


function M33$mul$LM33$LM33$LM33$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m13$1;
	var m23$1;
	var m33$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0;
	$this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0;
	$this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0;
	$this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33);
	$this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1;
	$this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1;
	return $this;
};

M33.mul$LM33$LM33$LM33$ = M33$mul$LM33$LM33$LM33$;

M33.prototype.transpose$ = function () {
	var m21;
	var m31;
	var m32;
	(m21 = this.m21, m31 = this.m31, m32 = this.m32);
	this.m21 = this.m12;
	this.m31 = this.m13;
	this.m32 = this.m23;
	this.m12 = m21;
	this.m13 = m31;
	this.m23 = m32;
	return this;
};


function M33$transpose$LM33$($this) {
	var m21;
	var m31;
	var m32;
	(m21 = $this.m21, m31 = $this.m31, m32 = $this.m32);
	$this.m21 = $this.m12;
	$this.m31 = $this.m13;
	$this.m32 = $this.m23;
	$this.m12 = m21;
	$this.m13 = m31;
	$this.m23 = m32;
	return $this;
};

M33.transpose$LM33$ = M33$transpose$LM33$;

M33.prototype.transpose$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m31 = m.m13;
	this.m12 = m.m21;
	this.m22 = m.m22;
	this.m32 = m.m23;
	this.m13 = m.m31;
	this.m23 = m.m32;
	this.m33 = m.m33;
	return this;
};


function M33$transpose$LM33$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m31 = m.m13;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	$this.m32 = m.m23;
	$this.m13 = m.m31;
	$this.m23 = m.m32;
	$this.m33 = m.m33;
	return $this;
};

M33.transpose$LM33$LM33$ = M33$transpose$LM33$LM33$;

M33.prototype.det$ = function () {
	var m11;
	var m12;
	var m13;
	var m21;
	var m22;
	var m23;
	var m31;
	var m32;
	var m33;
	(m11 = this.m11, m12 = this.m12, m13 = this.m13);
	(m21 = this.m21, m22 = this.m22, m23 = this.m23);
	(m31 = this.m31, m32 = this.m32, m33 = this.m33);
	return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
};


function M33$det$LM33$($this) {
	var m11;
	var m12;
	var m13;
	var m21;
	var m22;
	var m23;
	var m31;
	var m32;
	var m33;
	(m11 = $this.m11, m12 = $this.m12, m13 = $this.m13);
	(m21 = $this.m21, m22 = $this.m22, m23 = $this.m23);
	(m31 = $this.m31, m32 = $this.m32, m33 = $this.m33);
	return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
};

M33.det$LM33$ = M33$det$LM33$;

M33.prototype.inverse$ = function () {
	var d;
	var invDet;
	var m11;
	var m21;
	var m31;
	var m12;
	var m22;
	var m32;
	var m13;
	var m23;
	var m33;
	d = M33$det$LM33$(this);
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31);
	(m12 = this.m12, m22 = this.m22, m32 = this.m32);
	(m13 = this.m13, m23 = this.m23, m33 = this.m33);
	this.m11 = invDet * (m22 * m33 - m23 * m32);
	this.m21 = invDet * (m23 * m31 - m21 * m33);
	this.m31 = invDet * (m21 * m32 - m22 * m31);
	this.m12 = invDet * (m13 * m32 - m12 * m33);
	this.m22 = invDet * (m11 * m33 - m13 * m31);
	this.m32 = invDet * (m12 * m31 - m11 * m32);
	this.m13 = invDet * (m12 * m23 - m13 * m22);
	this.m23 = invDet * (m13 * m21 - m11 * m23);
	this.m33 = invDet * (m11 * m22 - m12 * m21);
	return this;
};


function M33$inverse$LM33$($this) {
	var d;
	var invDet;
	var m11;
	var m21;
	var m31;
	var m12;
	var m22;
	var m32;
	var m13;
	var m23;
	var m33;
	d = M33$det$LM33$($this);
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31);
	(m12 = $this.m12, m22 = $this.m22, m32 = $this.m32);
	(m13 = $this.m13, m23 = $this.m23, m33 = $this.m33);
	$this.m11 = invDet * (m22 * m33 - m23 * m32);
	$this.m21 = invDet * (m23 * m31 - m21 * m33);
	$this.m31 = invDet * (m21 * m32 - m22 * m31);
	$this.m12 = invDet * (m13 * m32 - m12 * m33);
	$this.m22 = invDet * (m11 * m33 - m13 * m31);
	$this.m32 = invDet * (m12 * m31 - m11 * m32);
	$this.m13 = invDet * (m12 * m23 - m13 * m22);
	$this.m23 = invDet * (m13 * m21 - m11 * m23);
	$this.m33 = invDet * (m11 * m22 - m12 * m21);
	return $this;
};

M33.inverse$LM33$ = M33$inverse$LM33$;

M33.prototype.setScale$N = function (s) {
	return M33$set$LM33$N(this, s);
};


function M33$setScale$LM33$N($this, s) {
	return M33$set$LM33$N($this, s);
};

M33.setScale$LM33$N = M33$setScale$LM33$N;

M33.prototype.setScale$NNN = function (x, y, z) {
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


function M33$setScale$LM33$NNN($this, x, y, z) {
	$this.m11 = x;
	$this.m22 = y;
	$this.m33 = z;
	$this.m21 = $this.m31 = $this.m12 = $this.m32 = $this.m13 = $this.m23 = 0;
	return $this;
};

M33.setScale$LM33$NNN = M33$setScale$LM33$NNN;

M33.prototype.setScale$LV3$ = function (v) {
	return M33$setScale$LM33$NNN(this, v.x, v.y, v.z);
};


function M33$setScale$LM33$LV3$($this, v) {
	return M33$setScale$LM33$NNN($this, v.x, v.y, v.z);
};

M33.setScale$LM33$LV3$ = M33$setScale$LM33$LV3$;

M33.prototype.setScale$AN = function (v) {
	return M33$setScale$LM33$NNN(this, v[0], v[1], v[2]);
};


function M33$setScale$LM33$AN($this, v) {
	return M33$setScale$LM33$NNN($this, v[0], v[1], v[2]);
};

M33.setScale$LM33$AN = M33$setScale$LM33$AN;

M33.prototype.setScale$LFloat32Array$ = function (v) {
	return M33$setScale$LM33$NNN(this, v[0], v[1], v[2]);
};


function M33$setScale$LM33$LFloat32Array$($this, v) {
	return M33$setScale$LM33$NNN($this, v[0], v[1], v[2]);
};

M33.setScale$LM33$LFloat32Array$ = M33$setScale$LM33$LFloat32Array$;

M33.prototype.setRotation$NNNN = function (rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	this.m11 = x * x * _c + c;
	this.m21 = y * x * _c + z * s;
	this.m31 = x * z * _c - y * s;
	this.m12 = x * y * _c - z * s;
	this.m22 = y * y * _c + c;
	this.m32 = y * z * _c + x * s;
	this.m13 = x * z * _c + y * s;
	this.m23 = y * z * _c - x * s;
	this.m33 = z * z * _c + c;
	return this;
};


function M33$setRotation$LM33$NNNN($this, rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	$this.m11 = x * x * _c + c;
	$this.m21 = y * x * _c + z * s;
	$this.m31 = x * z * _c - y * s;
	$this.m12 = x * y * _c - z * s;
	$this.m22 = y * y * _c + c;
	$this.m32 = y * z * _c + x * s;
	$this.m13 = x * z * _c + y * s;
	$this.m23 = y * z * _c - x * s;
	$this.m33 = z * z * _c + c;
	return $this;
};

M33.setRotation$LM33$NNNN = M33$setRotation$LM33$NNNN;

M33.prototype.setRotation$NLV3$ = function (rad, a) {
	return M33$setRotation$LM33$NNNN(this, rad, a.x, a.y, a.z);
};


function M33$setRotation$LM33$NLV3$($this, rad, a) {
	return M33$setRotation$LM33$NNNN($this, rad, a.x, a.y, a.z);
};

M33.setRotation$LM33$NLV3$ = M33$setRotation$LM33$NLV3$;

M33.prototype.setRotation$NAN = function (rad, a) {
	return M33$setRotation$LM33$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M33$setRotation$LM33$NAN($this, rad, a) {
	return M33$setRotation$LM33$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M33.setRotation$LM33$NAN = M33$setRotation$LM33$NAN;

M33.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return M33$setRotation$LM33$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M33$setRotation$LM33$NLFloat32Array$($this, rad, a) {
	return M33$setRotation$LM33$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M33.setRotation$LM33$NLFloat32Array$ = M33$setRotation$LM33$NLFloat32Array$;

M33.prototype.setRotateX$N = function (rad) {
	return M33$setRotation$LM33$NNNN(this, rad, 1, 0, 0);
};


function M33$setRotateX$LM33$N($this, rad) {
	return M33$setRotation$LM33$NNNN($this, rad, 1, 0, 0);
};

M33.setRotateX$LM33$N = M33$setRotateX$LM33$N;

M33.prototype.setRotateY$N = function (rad) {
	return M33$setRotation$LM33$NNNN(this, rad, 0, 1, 0);
};


function M33$setRotateY$LM33$N($this, rad) {
	return M33$setRotation$LM33$NNNN($this, rad, 0, 1, 0);
};

M33.setRotateY$LM33$N = M33$setRotateY$LM33$N;

M33.prototype.setRotateZ$N = function (rad) {
	return M33$setRotation$LM33$NNNN(this, rad, 0, 0, 1);
};


function M33$setRotateZ$LM33$N($this, rad) {
	return M33$setRotation$LM33$NNNN($this, rad, 0, 0, 1);
};

M33.setRotateZ$LM33$N = M33$setRotateZ$LM33$N;

M33.prototype.toString = function () {
	return "M33" + JSON.stringify([ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ]);
};


function M44() {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
};

function M44$0(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$LM44$(this, m);
};

function M44$1(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$AN(this, m);
};

function M44$2(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$LFloat32Array$(this, m);
};

function M44$3(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m41 = m41;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m42 = m42;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	this.m43 = m43;
	this.m14 = m14;
	this.m24 = m24;
	this.m34 = m34;
	this.m44 = m44;
};

function M44$4(v0, v1, v2, v3) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$LV4$LV4$LV4$LV4$(this, v0, v1, v2, v3);
};

function M44$5(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$N(this, s);
};

function M44$6(m, m22, m33) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$LM22$NN(this, m, m22, m33);
};

function M44$7(m, m33) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	M44$set$LM44$LM33$N(this, m, m33);
};

$__jsx_extend([M44, M44$0, M44$1, M44$2, M44$3, M44$4, M44$5, M44$6, M44$7], Object);
M44.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
};


function M44$array$LM44$($this) {
	return [ $this.m11, $this.m21, $this.m31, $this.m41, $this.m12, $this.m22, $this.m32, $this.m42, $this.m13, $this.m23, $this.m33, $this.m43, $this.m14, $this.m24, $this.m34, $this.m44 ];
};

M44.array$LM44$ = M44$array$LM44$;

M44.prototype.M22$ = function () {
	return new M22$7(this);
};


function M44$M22$LM44$($this) {
	return new M22$7($this);
};

M44.M22$LM44$ = M44$M22$LM44$;

M44.prototype.M33$N = function (m33) {
	return new M33$7(this);
};


function M44$M33$LM44$N($this, m33) {
	return new M33$7($this);
};

M44.M33$LM44$N = M44$M33$LM44$N;

M44.prototype.set$LM22$NN = function (m, m33, m44) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = m33;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = m44;
	return this;
};


function M44$set$LM44$LM22$NN($this, m, m33, m44) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = 0;
	$this.m41 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = 0;
	$this.m42 = 0;
	$this.m13 = 0;
	$this.m23 = 0;
	$this.m33 = m33;
	$this.m43 = 0;
	$this.m14 = 0;
	$this.m24 = 0;
	$this.m34 = 0;
	$this.m44 = m44;
	return $this;
};

M44.set$LM44$LM22$NN = M44$set$LM44$LM22$NN;

M44.prototype.set$LM33$N = function (m, m44) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m41 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m42 = 0;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = m44;
	return this;
};


function M44$set$LM44$LM33$N($this, m, m44) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m41 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m42 = 0;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	$this.m43 = 0;
	$this.m14 = 0;
	$this.m24 = 0;
	$this.m34 = 0;
	$this.m44 = m44;
	return $this;
};

M44.set$LM44$LM33$N = M44$set$LM44$LM33$N;

M44.prototype.clone$ = function () {
	return new M44$0(this);
};


function M44$clone$LM44$($this) {
	return new M44$0($this);
};

M44.clone$LM44$ = M44$clone$LM44$;

M44.prototype.setZero$ = function () {
	return M44$set$LM44$N(this, 0);
};


function M44$setZero$LM44$($this) {
	return M44$set$LM44$N($this, 0);
};

M44.setZero$LM44$ = M44$setZero$LM44$;

M44.prototype.setIdentity$ = function () {
	return M44$set$LM44$N(this, 1);
};


function M44$setIdentity$LM44$($this) {
	return M44$set$LM44$N($this, 1);
};

M44.setIdentity$LM44$ = M44$setIdentity$LM44$;

function M44$zero$() {
	var this$0;
	this$0 = new M44();
	return M44$set$LM44$N(this$0, 0);
};

M44.zero$ = M44$zero$;

function M44$identity$() {
	var this$0;
	this$0 = new M44();
	return M44$set$LM44$N(this$0, 1);
};

M44.identity$ = M44$identity$;

M44.prototype.set$NNNNNNNNNNNNNNNN = function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m41 = m41;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m42 = m42;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	this.m43 = m43;
	this.m14 = m14;
	this.m24 = m24;
	this.m34 = m34;
	this.m44 = m44;
	return this;
};


function M44$set$LM44$NNNNNNNNNNNNNNNN($this, m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m31 = m31;
	$this.m41 = m41;
	$this.m12 = m12;
	$this.m22 = m22;
	$this.m32 = m32;
	$this.m42 = m42;
	$this.m13 = m13;
	$this.m23 = m23;
	$this.m33 = m33;
	$this.m43 = m43;
	$this.m14 = m14;
	$this.m24 = m24;
	$this.m34 = m34;
	$this.m44 = m44;
	return $this;
};

M44.set$LM44$NNNNNNNNNNNNNNNN = M44$set$LM44$NNNNNNNNNNNNNNNN;

M44.prototype.set$LV4$LV4$LV4$LV4$ = function (v1, v2, v3, v4) {
	this.m11 = v1.x;
	this.m21 = v1.y;
	this.m31 = v1.z;
	this.m41 = v1.w;
	this.m12 = v2.x;
	this.m22 = v2.y;
	this.m32 = v2.z;
	this.m42 = v2.w;
	this.m13 = v3.x;
	this.m23 = v3.y;
	this.m33 = v3.z;
	this.m43 = v3.w;
	this.m14 = v4.x;
	this.m24 = v4.y;
	this.m34 = v4.z;
	this.m44 = v4.w;
	return this;
};


function M44$set$LM44$LV4$LV4$LV4$LV4$($this, v1, v2, v3, v4) {
	$this.m11 = v1.x;
	$this.m21 = v1.y;
	$this.m31 = v1.z;
	$this.m41 = v1.w;
	$this.m12 = v2.x;
	$this.m22 = v2.y;
	$this.m32 = v2.z;
	$this.m42 = v2.w;
	$this.m13 = v3.x;
	$this.m23 = v3.y;
	$this.m33 = v3.z;
	$this.m43 = v3.w;
	$this.m14 = v4.x;
	$this.m24 = v4.y;
	$this.m34 = v4.z;
	$this.m44 = v4.w;
	return $this;
};

M44.set$LM44$LV4$LV4$LV4$LV4$ = M44$set$LM44$LV4$LV4$LV4$LV4$;

M44.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m41 = m.m41;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m42 = m.m42;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this.m43 = m.m43;
	this.m14 = m.m14;
	this.m24 = m.m24;
	this.m34 = m.m34;
	this.m44 = m.m44;
	return this;
};


function M44$set$LM44$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m41 = m.m41;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m42 = m.m42;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	$this.m43 = m.m43;
	$this.m14 = m.m14;
	$this.m24 = m.m24;
	$this.m34 = m.m34;
	$this.m44 = m.m44;
	return $this;
};

M44.set$LM44$LM44$ = M44$set$LM44$LM44$;

M44.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m41 = m[3];
	this.m12 = m[4];
	this.m22 = m[5];
	this.m32 = m[6];
	this.m42 = m[7];
	this.m13 = m[8];
	this.m23 = m[9];
	this.m33 = m[10];
	this.m43 = m[11];
	this.m14 = m[12];
	this.m24 = m[13];
	this.m34 = m[14];
	this.m44 = m[15];
	return this;
};


function M44$set$LM44$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m41 = m[3];
	$this.m12 = m[4];
	$this.m22 = m[5];
	$this.m32 = m[6];
	$this.m42 = m[7];
	$this.m13 = m[8];
	$this.m23 = m[9];
	$this.m33 = m[10];
	$this.m43 = m[11];
	$this.m14 = m[12];
	$this.m24 = m[13];
	$this.m34 = m[14];
	$this.m44 = m[15];
	return $this;
};

M44.set$LM44$AN = M44$set$LM44$AN;

M44.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m41 = m[3];
	this.m12 = m[4];
	this.m22 = m[5];
	this.m32 = m[6];
	this.m42 = m[7];
	this.m13 = m[8];
	this.m23 = m[9];
	this.m33 = m[10];
	this.m43 = m[11];
	this.m14 = m[12];
	this.m24 = m[13];
	this.m34 = m[14];
	this.m44 = m[15];
	return this;
};


function M44$set$LM44$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m41 = m[3];
	$this.m12 = m[4];
	$this.m22 = m[5];
	$this.m32 = m[6];
	$this.m42 = m[7];
	$this.m13 = m[8];
	$this.m23 = m[9];
	$this.m33 = m[10];
	$this.m43 = m[11];
	$this.m14 = m[12];
	$this.m24 = m[13];
	$this.m34 = m[14];
	$this.m44 = m[15];
	return $this;
};

M44.set$LM44$LFloat32Array$ = M44$set$LM44$LFloat32Array$;

M44.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = this.m44 = s;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};


function M44$set$LM44$N($this, s) {
	$this.m11 = $this.m22 = $this.m33 = $this.m44 = s;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m13 = $this.m23 = $this.m43 = $this.m14 = $this.m24 = $this.m34 = 0;
	return $this;
};

M44.set$LM44$N = M44$set$LM44$N;

M44.prototype.equals$LM44$ = function (m) {
	return M44$equals$LM44$LM44$N(this, m, 0.000001);
};


function M44$equals$LM44$LM44$($this, m) {
	return M44$equals$LM44$LM44$N($this, m, 0.000001);
};

M44.equals$LM44$LM44$ = M44$equals$LM44$LM44$;

M44.prototype.equals$LM44$N = function (m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	var x$4;
	var x$5;
	var x$6;
	var x$7;
	var x$8;
	var x$9;
	var x$10;
	var x$11;
	var x$12;
	var x$13;
	var x$14;
	var x$15;
	return ((x$0 = this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = this.m31 - m.m31, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = this.m41 - m.m41, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : (x$4 = this.m12 - m.m12, x$4 >= 0 ? x$4 : - x$4) >= eps ? false : (x$5 = this.m22 - m.m22, x$5 >= 0 ? x$5 : - x$5) >= eps ? false : (x$6 = this.m32 - m.m32, x$6 >= 0 ? x$6 : - x$6) >= eps ? false : (x$7 = this.m42 - m.m42, x$7 >= 0 ? x$7 : - x$7) >= eps ? false : (x$8 = this.m13 - m.m13, x$8 >= 0 ? x$8 : - x$8) >= eps ? false : (x$9 = this.m23 - m.m23, x$9 >= 0 ? x$9 : - x$9) >= eps ? false : (x$10 = this.m33 - m.m33, x$10 >= 0 ? x$10 : - x$10) >= eps ? false : (x$11 = this.m43 - m.m43, x$11 >= 0 ? x$11 : - x$11) >= eps ? false : (x$12 = this.m14 - m.m14, x$12 >= 0 ? x$12 : - x$12) >= eps ? false : (x$13 = this.m24 - m.m24, x$13 >= 0 ? x$13 : - x$13) >= eps ? false : (x$14 = this.m34 - m.m34, x$14 >= 0 ? x$14 : - x$14) >= eps ? false : (x$15 = this.m44 - m.m44, x$15 >= 0 ? x$15 : - x$15) >= eps ? false : true);
};


function M44$equals$LM44$LM44$N($this, m, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	var x$4;
	var x$5;
	var x$6;
	var x$7;
	var x$8;
	var x$9;
	var x$10;
	var x$11;
	var x$12;
	var x$13;
	var x$14;
	var x$15;
	return ((x$0 = $this.m11 - m.m11, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = $this.m21 - m.m21, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = $this.m31 - m.m31, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = $this.m41 - m.m41, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : (x$4 = $this.m12 - m.m12, x$4 >= 0 ? x$4 : - x$4) >= eps ? false : (x$5 = $this.m22 - m.m22, x$5 >= 0 ? x$5 : - x$5) >= eps ? false : (x$6 = $this.m32 - m.m32, x$6 >= 0 ? x$6 : - x$6) >= eps ? false : (x$7 = $this.m42 - m.m42, x$7 >= 0 ? x$7 : - x$7) >= eps ? false : (x$8 = $this.m13 - m.m13, x$8 >= 0 ? x$8 : - x$8) >= eps ? false : (x$9 = $this.m23 - m.m23, x$9 >= 0 ? x$9 : - x$9) >= eps ? false : (x$10 = $this.m33 - m.m33, x$10 >= 0 ? x$10 : - x$10) >= eps ? false : (x$11 = $this.m43 - m.m43, x$11 >= 0 ? x$11 : - x$11) >= eps ? false : (x$12 = $this.m14 - m.m14, x$12 >= 0 ? x$12 : - x$12) >= eps ? false : (x$13 = $this.m24 - m.m24, x$13 >= 0 ? x$13 : - x$13) >= eps ? false : (x$14 = $this.m34 - m.m34, x$14 >= 0 ? x$14 : - x$14) >= eps ? false : (x$15 = $this.m44 - m.m44, x$15 >= 0 ? x$15 : - x$15) >= eps ? false : true);
};

M44.equals$LM44$LM44$N = M44$equals$LM44$LM44$N;

M44.prototype.add$LM44$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m31 += m.m31;
	this.m41 += m.m41;
	this.m12 += m.m12;
	this.m22 += m.m22;
	this.m32 += m.m32;
	this.m42 += m.m42;
	this.m13 += m.m13;
	this.m23 += m.m23;
	this.m33 += m.m33;
	this.m43 += m.m43;
	this.m14 += m.m14;
	this.m24 += m.m24;
	this.m34 += m.m34;
	this.m44 += m.m44;
	return this;
};


function M44$add$LM44$LM44$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m31 += m.m31;
	$this.m41 += m.m41;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	$this.m32 += m.m32;
	$this.m42 += m.m42;
	$this.m13 += m.m13;
	$this.m23 += m.m23;
	$this.m33 += m.m33;
	$this.m43 += m.m43;
	$this.m14 += m.m14;
	$this.m24 += m.m24;
	$this.m34 += m.m34;
	$this.m44 += m.m44;
	return $this;
};

M44.add$LM44$LM44$ = M44$add$LM44$LM44$;

M44.prototype.sub$LM44$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m31 -= m.m31;
	this.m41 -= m.m41;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	this.m32 -= m.m32;
	this.m42 -= m.m42;
	this.m13 -= m.m13;
	this.m23 -= m.m23;
	this.m33 -= m.m33;
	this.m43 -= m.m43;
	this.m14 -= m.m14;
	this.m24 -= m.m24;
	this.m34 -= m.m34;
	this.m44 -= m.m44;
	return this;
};


function M44$sub$LM44$LM44$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m31 -= m.m31;
	$this.m41 -= m.m41;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	$this.m32 -= m.m32;
	$this.m42 -= m.m42;
	$this.m13 -= m.m13;
	$this.m23 -= m.m23;
	$this.m33 -= m.m33;
	$this.m43 -= m.m43;
	$this.m14 -= m.m14;
	$this.m24 -= m.m24;
	$this.m34 -= m.m34;
	$this.m44 -= m.m44;
	return $this;
};

M44.sub$LM44$LM44$ = M44$sub$LM44$LM44$;

M44.prototype.mul$N = function (s) {
	this.m11 *= s;
	this.m21 *= s;
	this.m31 *= s;
	this.m41 *= s;
	this.m12 *= s;
	this.m22 *= s;
	this.m32 *= s;
	this.m42 *= s;
	this.m13 *= s;
	this.m23 *= s;
	this.m33 *= s;
	this.m43 *= s;
	this.m14 *= s;
	this.m24 *= s;
	this.m34 *= s;
	this.m44 *= s;
	return this;
};


function M44$mul$LM44$N($this, s) {
	$this.m11 *= s;
	$this.m21 *= s;
	$this.m31 *= s;
	$this.m41 *= s;
	$this.m12 *= s;
	$this.m22 *= s;
	$this.m32 *= s;
	$this.m42 *= s;
	$this.m13 *= s;
	$this.m23 *= s;
	$this.m33 *= s;
	$this.m43 *= s;
	$this.m14 *= s;
	$this.m24 *= s;
	$this.m34 *= s;
	$this.m44 *= s;
	return $this;
};

M44.mul$LM44$N = M44$mul$LM44$N;

M44.prototype.mul$LM44$ = function (m) {
	return M44$mul$LM44$LM44$LM44$(this, new M44$0(this), m);
};


function M44$mul$LM44$LM44$($this, m) {
	return M44$mul$LM44$LM44$LM44$($this, new M44$0($this), m);
};

M44.mul$LM44$LM44$ = M44$mul$LM44$LM44$;

M44.prototype.mul$LM44$LM44$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m41$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m14$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m24$0;
	var m42$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m34$0;
	var m41$1;
	var m42$1;
	var m43$0;
	var m44$0;
	var m13$1;
	var m23$1;
	var m33$1;
	var m43$1;
	var m14$1;
	var m24$1;
	var m34$1;
	var m44$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31) + (m14$0 = m0.m14) * (m41$0 = m1.m41);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0 + (m24$0 = m0.m24) * m41$0;
	this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0 + (m34$0 = m0.m34) * m41$0;
	this.m41 = (m41$1 = m0.m41) * m11$0 + (m42$1 = m0.m42) * m21$0 + (m43$0 = m0.m43) * m31$0 + (m44$0 = m0.m44) * m41$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32) + m14$0 * (m42$0 = m1.m42);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	this.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33) + m14$0 * (m43$1 = m1.m43);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	this.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	this.m14 = m11$1 * (m14$1 = m1.m14) + m12$0 * (m24$1 = m1.m24) + m13$0 * (m34$1 = m1.m34) + m14$0 * (m44$1 = m1.m44);
	this.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	this.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	this.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	return this;
};


function M44$mul$LM44$LM44$LM44$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m41$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m14$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m24$0;
	var m42$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m34$0;
	var m41$1;
	var m42$1;
	var m43$0;
	var m44$0;
	var m13$1;
	var m23$1;
	var m33$1;
	var m43$1;
	var m14$1;
	var m24$1;
	var m34$1;
	var m44$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31) + (m14$0 = m0.m14) * (m41$0 = m1.m41);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0 + (m24$0 = m0.m24) * m41$0;
	$this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0 + (m34$0 = m0.m34) * m41$0;
	$this.m41 = (m41$1 = m0.m41) * m11$0 + (m42$1 = m0.m42) * m21$0 + (m43$0 = m0.m43) * m31$0 + (m44$0 = m0.m44) * m41$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32) + m14$0 * (m42$0 = m1.m42);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	$this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	$this.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	$this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33) + m14$0 * (m43$1 = m1.m43);
	$this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	$this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	$this.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	$this.m14 = m11$1 * (m14$1 = m1.m14) + m12$0 * (m24$1 = m1.m24) + m13$0 * (m34$1 = m1.m34) + m14$0 * (m44$1 = m1.m44);
	$this.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	$this.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	$this.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	return $this;
};

M44.mul$LM44$LM44$LM44$ = M44$mul$LM44$LM44$LM44$;

M44.prototype.transpose$ = function () {
	var m21;
	var m31;
	var m41;
	var m32;
	var m42;
	var m43;
	(m21 = this.m21, m31 = this.m31, m41 = this.m41, m32 = this.m32, m42 = this.m42, m43 = this.m43);
	this.m21 = this.m12;
	this.m31 = this.m13;
	this.m41 = this.m14;
	this.m12 = m21;
	this.m32 = this.m23;
	this.m42 = this.m24;
	this.m13 = m31;
	this.m23 = m32;
	this.m43 = this.m34;
	this.m14 = m41;
	this.m24 = m42;
	this.m34 = m43;
	return this;
};


function M44$transpose$LM44$($this) {
	var m21;
	var m31;
	var m41;
	var m32;
	var m42;
	var m43;
	(m21 = $this.m21, m31 = $this.m31, m41 = $this.m41, m32 = $this.m32, m42 = $this.m42, m43 = $this.m43);
	$this.m21 = $this.m12;
	$this.m31 = $this.m13;
	$this.m41 = $this.m14;
	$this.m12 = m21;
	$this.m32 = $this.m23;
	$this.m42 = $this.m24;
	$this.m13 = m31;
	$this.m23 = m32;
	$this.m43 = $this.m34;
	$this.m14 = m41;
	$this.m24 = m42;
	$this.m34 = m43;
	return $this;
};

M44.transpose$LM44$ = M44$transpose$LM44$;

M44.prototype.transpose$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m31 = m.m13;
	this.m41 = m.m14;
	this.m12 = m.m21;
	this.m22 = m.m22;
	this.m32 = m.m23;
	this.m42 = m.m24;
	this.m13 = m.m31;
	this.m23 = m.m32;
	this.m33 = m.m33;
	this.m43 = m.m34;
	this.m14 = m.m41;
	this.m24 = m.m42;
	this.m34 = m.m43;
	this.m44 = m.m44;
	return this;
};


function M44$transpose$LM44$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m31 = m.m13;
	$this.m41 = m.m14;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	$this.m32 = m.m23;
	$this.m42 = m.m24;
	$this.m13 = m.m31;
	$this.m23 = m.m32;
	$this.m33 = m.m33;
	$this.m43 = m.m34;
	$this.m14 = m.m41;
	$this.m24 = m.m42;
	$this.m34 = m.m43;
	$this.m44 = m.m44;
	return $this;
};

M44.transpose$LM44$LM44$ = M44$transpose$LM44$LM44$;

M44.prototype.det$ = function () {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31, m41 = this.m41);
	(m12 = this.m12, m22 = this.m22, m32 = this.m32, m42 = this.m42);
	(m13 = this.m13, m23 = this.m23, m33 = this.m33, m43 = this.m43);
	(m14 = this.m14, m24 = this.m24, m34 = this.m34, m44 = this.m44);
	return m14 * m23 * m32 * m41 - m13 * m24 * m32 * m41 - m14 * m22 * m33 * m41 + m12 * m24 * m33 * m41 + m13 * m22 * m34 * m41 - m12 * m23 * m34 * m41 - m14 * m23 * m31 * m42 + m13 * m24 * m31 * m42 + m14 * m21 * m33 * m42 - m11 * m24 * m33 * m42 - m13 * m21 * m34 * m42 + m11 * m23 * m34 * m42 + m14 * m22 * m31 * m43 - m12 * m24 * m31 * m43 - m14 * m21 * m32 * m43 + m11 * m24 * m32 * m43 + m12 * m21 * m34 * m43 - m11 * m22 * m34 * m43 - m13 * m22 * m31 * m44 + m12 * m23 * m31 * m44 + m13 * m21 * m32 * m44 - m11 * m23 * m32 * m44 - m12 * m21 * m33 * m44 + m11 * m22 * m33 * m44;
};


function M44$det$LM44$($this) {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31, m41 = $this.m41);
	(m12 = $this.m12, m22 = $this.m22, m32 = $this.m32, m42 = $this.m42);
	(m13 = $this.m13, m23 = $this.m23, m33 = $this.m33, m43 = $this.m43);
	(m14 = $this.m14, m24 = $this.m24, m34 = $this.m34, m44 = $this.m44);
	return m14 * m23 * m32 * m41 - m13 * m24 * m32 * m41 - m14 * m22 * m33 * m41 + m12 * m24 * m33 * m41 + m13 * m22 * m34 * m41 - m12 * m23 * m34 * m41 - m14 * m23 * m31 * m42 + m13 * m24 * m31 * m42 + m14 * m21 * m33 * m42 - m11 * m24 * m33 * m42 - m13 * m21 * m34 * m42 + m11 * m23 * m34 * m42 + m14 * m22 * m31 * m43 - m12 * m24 * m31 * m43 - m14 * m21 * m32 * m43 + m11 * m24 * m32 * m43 + m12 * m21 * m34 * m43 - m11 * m22 * m34 * m43 - m13 * m22 * m31 * m44 + m12 * m23 * m31 * m44 + m13 * m21 * m32 * m44 - m11 * m23 * m32 * m44 - m12 * m21 * m33 * m44 + m11 * m22 * m33 * m44;
};

M44.det$LM44$ = M44$det$LM44$;

M44.prototype.inverse$ = function () {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	var b00;
	var b01;
	var b02;
	var b03;
	var b04;
	var b05;
	var b06;
	var b07;
	var b08;
	var b09;
	var b10;
	var b11;
	var d;
	var invDet;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31, m41 = this.m41, m12 = this.m12, m22 = this.m22, m32 = this.m32, m42 = this.m42, m13 = this.m13, m23 = this.m23, m33 = this.m33, m43 = this.m43, m14 = this.m14, m24 = this.m24, m34 = this.m34, m44 = this.m44);
	(b00 = m11 * m22 - m21 * m12, b01 = m11 * m32 - m31 * m12, b02 = m11 * m42 - m41 * m12, b03 = m21 * m32 - m31 * m22, b04 = m21 * m42 - m41 * m22, b05 = m31 * m42 - m41 * m32, b06 = m13 * m24 - m23 * m14, b07 = m13 * m34 - m33 * m14, b08 = m13 * m44 - m43 * m14, b09 = m23 * m34 - m33 * m24, b10 = m23 * m44 - m43 * m24, b11 = m33 * m44 - m43 * m34);
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	this.m11 = (m22 * b11 - m32 * b10 + m42 * b09) * invDet;
	this.m21 = (- m21 * b11 + m31 * b10 - m41 * b09) * invDet;
	this.m31 = (m24 * b05 - m34 * b04 + m44 * b03) * invDet;
	this.m41 = (- m23 * b05 + m33 * b04 - m43 * b03) * invDet;
	this.m12 = (- m12 * b11 + m32 * b08 - m42 * b07) * invDet;
	this.m22 = (m11 * b11 - m31 * b08 + m41 * b07) * invDet;
	this.m32 = (- m14 * b05 + m34 * b02 - m44 * b01) * invDet;
	this.m42 = (m13 * b05 - m33 * b02 + m43 * b01) * invDet;
	this.m13 = (m12 * b10 - m22 * b08 + m42 * b06) * invDet;
	this.m23 = (- m11 * b10 + m21 * b08 - m41 * b06) * invDet;
	this.m33 = (m14 * b04 - m24 * b02 + m44 * b00) * invDet;
	this.m43 = (- m13 * b04 + m23 * b02 - m43 * b00) * invDet;
	this.m14 = (- m12 * b09 + m22 * b07 - m32 * b06) * invDet;
	this.m24 = (m11 * b09 - m21 * b07 + m31 * b06) * invDet;
	this.m34 = (- m14 * b03 + m24 * b01 - m34 * b00) * invDet;
	this.m44 = (m13 * b03 - m23 * b01 + m33 * b00) * invDet;
	return this;
};


function M44$inverse$LM44$($this) {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	var b00;
	var b01;
	var b02;
	var b03;
	var b04;
	var b05;
	var b06;
	var b07;
	var b08;
	var b09;
	var b10;
	var b11;
	var d;
	var invDet;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31, m41 = $this.m41, m12 = $this.m12, m22 = $this.m22, m32 = $this.m32, m42 = $this.m42, m13 = $this.m13, m23 = $this.m23, m33 = $this.m33, m43 = $this.m43, m14 = $this.m14, m24 = $this.m24, m34 = $this.m34, m44 = $this.m44);
	(b00 = m11 * m22 - m21 * m12, b01 = m11 * m32 - m31 * m12, b02 = m11 * m42 - m41 * m12, b03 = m21 * m32 - m31 * m22, b04 = m21 * m42 - m41 * m22, b05 = m31 * m42 - m41 * m32, b06 = m13 * m24 - m23 * m14, b07 = m13 * m34 - m33 * m14, b08 = m13 * m44 - m43 * m14, b09 = m23 * m34 - m33 * m24, b10 = m23 * m44 - m43 * m24, b11 = m33 * m44 - m43 * m34);
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	$this.m11 = (m22 * b11 - m32 * b10 + m42 * b09) * invDet;
	$this.m21 = (- m21 * b11 + m31 * b10 - m41 * b09) * invDet;
	$this.m31 = (m24 * b05 - m34 * b04 + m44 * b03) * invDet;
	$this.m41 = (- m23 * b05 + m33 * b04 - m43 * b03) * invDet;
	$this.m12 = (- m12 * b11 + m32 * b08 - m42 * b07) * invDet;
	$this.m22 = (m11 * b11 - m31 * b08 + m41 * b07) * invDet;
	$this.m32 = (- m14 * b05 + m34 * b02 - m44 * b01) * invDet;
	$this.m42 = (m13 * b05 - m33 * b02 + m43 * b01) * invDet;
	$this.m13 = (m12 * b10 - m22 * b08 + m42 * b06) * invDet;
	$this.m23 = (- m11 * b10 + m21 * b08 - m41 * b06) * invDet;
	$this.m33 = (m14 * b04 - m24 * b02 + m44 * b00) * invDet;
	$this.m43 = (- m13 * b04 + m23 * b02 - m43 * b00) * invDet;
	$this.m14 = (- m12 * b09 + m22 * b07 - m32 * b06) * invDet;
	$this.m24 = (m11 * b09 - m21 * b07 + m31 * b06) * invDet;
	$this.m34 = (- m14 * b03 + m24 * b01 - m34 * b00) * invDet;
	$this.m44 = (m13 * b03 - m23 * b01 + m33 * b00) * invDet;
	return $this;
};

M44.inverse$LM44$ = M44$inverse$LM44$;

M44.prototype.setTranslation$NNN = function (x, y, z) {
	M44$set$LM44$N(this, 1);
	this.m14 = x;
	this.m24 = y;
	this.m34 = z;
	return this;
};


function M44$setTranslation$LM44$NNN($this, x, y, z) {
	M44$set$LM44$N($this, 1);
	$this.m14 = x;
	$this.m24 = y;
	$this.m34 = z;
	return $this;
};

M44.setTranslation$LM44$NNN = M44$setTranslation$LM44$NNN;

M44.prototype.setTranslation$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation$LM44$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation$LM44$LV3$ = M44$setTranslation$LM44$LV3$;

M44.prototype.setTranslation$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation$LM44$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation$LM44$AN = M44$setTranslation$LM44$AN;

M44.prototype.setTranslation$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation$LM44$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation$LM44$LFloat32Array$ = M44$setTranslation$LM44$LFloat32Array$;

function M44$translation$NNN(x, y, z) {
	var this$0;
	this$0 = new M44();
	M44$set$LM44$N(this$0, 1);
	this$0.m14 = x;
	this$0.m24 = y;
	this$0.m34 = z;
	return this$0;
};

M44.translation$NNN = M44$translation$NNN;

function M44$translation$LV3$(v) {
	var this$0;
	var x$0$0;
	var y$0$0;
	var z$0$0;
	this$0 = new M44();
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	M44$set$LM44$N(this$0, 1);
	this$0.m14 = x$0$0;
	this$0.m24 = y$0$0;
	this$0.m34 = z$0$0;
	return this$0;
};

M44.translation$LV3$ = M44$translation$LV3$;

function M44$translation$AN(v) {
	return M44$setTranslation$LM44$AN(new M44(), v);
};

M44.translation$AN = M44$translation$AN;

function M44$translation$LFloat32Array$(v) {
	return M44$setTranslation$LM44$LFloat32Array$(new M44(), v);
};

M44.translation$LFloat32Array$ = M44$translation$LFloat32Array$;

M44.prototype.setScale$N = function (s) {
	M44$set$LM44$N(this, 0);
	this.m11 = s;
	this.m22 = s;
	this.m33 = s;
	this.m44 = 1;
	return this;
};


function M44$setScale$LM44$N($this, s) {
	M44$set$LM44$N($this, 0);
	$this.m11 = s;
	$this.m22 = s;
	$this.m33 = s;
	$this.m44 = 1;
	return $this;
};

M44.setScale$LM44$N = M44$setScale$LM44$N;

M44.prototype.setScale$NNN = function (x, y, z) {
	M44$set$LM44$N(this, 0);
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m44 = 1;
	return this;
};


function M44$setScale$LM44$NNN($this, x, y, z) {
	M44$set$LM44$N($this, 0);
	$this.m11 = x;
	$this.m22 = y;
	$this.m33 = z;
	$this.m44 = 1;
	return $this;
};

M44.setScale$LM44$NNN = M44$setScale$LM44$NNN;

M44.prototype.setScale$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale$LM44$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale$LM44$LV3$ = M44$setScale$LM44$LV3$;

M44.prototype.setScale$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale$LM44$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale$LM44$AN = M44$setScale$LM44$AN;

M44.prototype.setScale$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale$LM44$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale$LM44$LFloat32Array$ = M44$setScale$LM44$LFloat32Array$;

function M44$scale$N(s) {
	var this$0;
	this$0 = new M44();
	M44$set$LM44$N(this$0, 0);
	this$0.m11 = s;
	this$0.m22 = s;
	this$0.m33 = s;
	this$0.m44 = 1;
	return this$0;
};

M44.scale$N = M44$scale$N;

function M44$scale$NNN(x, y, z) {
	var this$0;
	this$0 = new M44();
	M44$set$LM44$N(this$0, 0);
	this$0.m11 = x;
	this$0.m22 = y;
	this$0.m33 = z;
	this$0.m44 = 1;
	return this$0;
};

M44.scale$NNN = M44$scale$NNN;

function M44$scale$LV3$(v) {
	return M44$setScale$LM44$LV3$(new M44(), v);
};

M44.scale$LV3$ = M44$scale$LV3$;

function M44$scale$AN(v) {
	return M44$setScale$LM44$AN(new M44(), v);
};

M44.scale$AN = M44$scale$AN;

function M44$scale$LFloat32Array$(v) {
	return M44$setScale$LM44$LFloat32Array$(new M44(), v);
};

M44.scale$LFloat32Array$ = M44$scale$LFloat32Array$;

M44.prototype.setRotation$NNNN = function (rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	this.m11 = x * x * _c + c;
	this.m21 = y * x * _c + z * s;
	this.m31 = x * z * _c - y * s;
	this.m12 = x * y * _c - z * s;
	this.m22 = y * y * _c + c;
	this.m32 = y * z * _c + x * s;
	this.m13 = x * z * _c + y * s;
	this.m23 = y * z * _c - x * s;
	this.m33 = z * z * _c + c;
	this.m41 = this.m42 = this.m43 = this.m14 = this.m24 = this.m34 = 0;
	this.m44 = 1;
	return this;
};


function M44$setRotation$LM44$NNNN($this, rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	$this.m11 = x * x * _c + c;
	$this.m21 = y * x * _c + z * s;
	$this.m31 = x * z * _c - y * s;
	$this.m12 = x * y * _c - z * s;
	$this.m22 = y * y * _c + c;
	$this.m32 = y * z * _c + x * s;
	$this.m13 = x * z * _c + y * s;
	$this.m23 = y * z * _c - x * s;
	$this.m33 = z * z * _c + c;
	$this.m41 = $this.m42 = $this.m43 = $this.m14 = $this.m24 = $this.m34 = 0;
	$this.m44 = 1;
	return $this;
};

M44.setRotation$LM44$NNNN = M44$setRotation$LM44$NNNN;

M44.prototype.setRotation$NLV3$ = function (rad, a) {
	return M44$setRotation$LM44$NNNN(this, rad, a.x, a.y, a.z);
};


function M44$setRotation$LM44$NLV3$($this, rad, a) {
	return M44$setRotation$LM44$NNNN($this, rad, a.x, a.y, a.z);
};

M44.setRotation$LM44$NLV3$ = M44$setRotation$LM44$NLV3$;

M44.prototype.setRotation$NAN = function (rad, a) {
	return M44$setRotation$LM44$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M44$setRotation$LM44$NAN($this, rad, a) {
	return M44$setRotation$LM44$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M44.setRotation$LM44$NAN = M44$setRotation$LM44$NAN;

M44.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return M44$setRotation$LM44$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M44$setRotation$LM44$NLFloat32Array$($this, rad, a) {
	return M44$setRotation$LM44$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M44.setRotation$LM44$NLFloat32Array$ = M44$setRotation$LM44$NLFloat32Array$;

function M44$rotation$NNNN(rad, ax, ay, az) {
	return M44$setRotation$LM44$NNNN(new M44(), rad, ax, ay, az);
};

M44.rotation$NNNN = M44$rotation$NNNN;

function M44$rotation$NLV3$(rad, axis) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, axis.x, axis.y, axis.z);
};

M44.rotation$NLV3$ = M44$rotation$NLV3$;

function M44$rotation$NAN(rad, axis) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, this$0.m11, this$0.m21, this$0.m31);
};

M44.rotation$NAN = M44$rotation$NAN;

function M44$rotation$NLFloat32Array$(rad, axis) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, this$0.m11, this$0.m21, this$0.m31);
};

M44.rotation$NLFloat32Array$ = M44$rotation$NLFloat32Array$;

M44.prototype.setRotationX$N = function (rad) {
	return M44$setRotation$LM44$NNNN(this, rad, 1, 0, 0);
};


function M44$setRotationX$LM44$N($this, rad) {
	return M44$setRotation$LM44$NNNN($this, rad, 1, 0, 0);
};

M44.setRotationX$LM44$N = M44$setRotationX$LM44$N;

M44.prototype.setRotationY$N = function (rad) {
	return M44$setRotation$LM44$NNNN(this, rad, 0, 1, 0);
};


function M44$setRotationY$LM44$N($this, rad) {
	return M44$setRotation$LM44$NNNN($this, rad, 0, 1, 0);
};

M44.setRotationY$LM44$N = M44$setRotationY$LM44$N;

M44.prototype.setRotationZ$N = function (rad) {
	return M44$setRotation$LM44$NNNN(this, rad, 0, 0, 1);
};


function M44$setRotationZ$LM44$N($this, rad) {
	return M44$setRotation$LM44$NNNN($this, rad, 0, 0, 1);
};

M44.setRotationZ$LM44$N = M44$setRotationZ$LM44$N;

function M44$rotationX$N(rad) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, 1, 0, 0);
};

M44.rotationX$N = M44$rotationX$N;

function M44$rotationY$N(rad) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, 0, 1, 0);
};

M44.rotationY$N = M44$rotationY$N;

function M44$rotationZ$N(rad) {
	var this$0;
	this$0 = new M44();
	return M44$setRotation$LM44$NNNN(this$0, rad, 0, 0, 1);
};

M44.rotationZ$N = M44$rotationZ$N;

M44.prototype.setFrustum$NNNNNN = function (l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	(rl = r - l, tb = t - b, fn = f - n);
	this.m11 = 2 * n / rl;
	this.m22 = 2 * n / tb;
	this.m13 = (r + l) / rl;
	this.m23 = (t + b) / tb;
	this.m33 = - (f + n) / fn;
	this.m43 = -1;
	this.m34 = -2 * f * n / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m14 = this.m24 = this.m44 = 0;
	return this;
};


function M44$setFrustum$LM44$NNNNNN($this, l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	(rl = r - l, tb = t - b, fn = f - n);
	$this.m11 = 2 * n / rl;
	$this.m22 = 2 * n / tb;
	$this.m13 = (r + l) / rl;
	$this.m23 = (t + b) / tb;
	$this.m33 = - (f + n) / fn;
	$this.m43 = -1;
	$this.m34 = -2 * f * n / fn;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m14 = $this.m24 = $this.m44 = 0;
	return $this;
};

M44.setFrustum$LM44$NNNNNN = M44$setFrustum$LM44$NNNNNN;

function M44$frustum$NNNNNN(l, r, b, t, n, f) {
	return M44$setFrustum$LM44$NNNNNN(new M44(), l, r, b, t, n, f);
};

M44.frustum$NNNNNN = M44$frustum$NNNNNN;

M44.prototype.setOrtho$NNNNNN = function (l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	(rl = r - l, tb = t - b, fn = f - n);
	this.m11 = 2 / rl;
	this.m22 = 2 / tb;
	this.m33 = -2 / fn;
	this.m14 = - (r + l) / rl;
	this.m24 = - (t + b) / tb;
	this.m34 = - (f + n) / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = 0;
	this.m44 = 1;
	return this;
};


function M44$setOrtho$LM44$NNNNNN($this, l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	(rl = r - l, tb = t - b, fn = f - n);
	$this.m11 = 2 / rl;
	$this.m22 = 2 / tb;
	$this.m33 = -2 / fn;
	$this.m14 = - (r + l) / rl;
	$this.m24 = - (t + b) / tb;
	$this.m34 = - (f + n) / fn;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m13 = $this.m23 = $this.m43 = 0;
	$this.m44 = 1;
	return $this;
};

M44.setOrtho$LM44$NNNNNN = M44$setOrtho$LM44$NNNNNN;

function M44$ortho$NNNNNN(l, r, b, t, n, f) {
	return M44$setOrtho$LM44$NNNNNN(new M44(), l, r, b, t, n, f);
};

M44.ortho$NNNNNN = M44$ortho$NNNNNN;

M44.prototype.toString = function () {
	return "M44" + JSON.stringify(M44$array$LM44$(this));
};


function Quat() {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function Quat$0(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
};

function Quat$1(q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
};

function Quat$2(q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
};

function Quat$3(w, x, y, z) {
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};

$__jsx_extend([Quat, Quat$0, Quat$1, Quat$2, Quat$3], Object);
Quat.prototype.array$ = function () {
	return [ this.w, this.x, this.y, this.z ];
};


function Quat$array$LQuat$($this) {
	return [ $this.w, $this.x, $this.y, $this.z ];
};

Quat.array$LQuat$ = Quat$array$LQuat$;

Quat.prototype.clone$ = function () {
	return new Quat$0(this);
};


function Quat$clone$LQuat$($this) {
	return new Quat$0($this);
};

Quat.clone$LQuat$ = Quat$clone$LQuat$;

Quat.prototype.setZero$ = function () {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function Quat$setZero$LQuat$($this) {
	$this.w = 0;
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

Quat.setZero$LQuat$ = Quat$setZero$LQuat$;

Quat.prototype.setIdentity$ = function () {
	this.w = 1;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function Quat$setIdentity$LQuat$($this) {
	$this.w = 1;
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

Quat.setIdentity$LQuat$ = Quat$setIdentity$LQuat$;

function Quat$zero$() {
	var this$0;
	this$0 = new Quat();
	this$0.w = 0;
	this$0.x = 0;
	this$0.y = 0;
	this$0.z = 0;
	return this$0;
};

Quat.zero$ = Quat$zero$;

function Quat$identity$() {
	var this$0;
	this$0 = new Quat();
	this$0.w = 1;
	this$0.x = 0;
	this$0.y = 0;
	this$0.z = 0;
	return this$0;
};

Quat.identity$ = Quat$identity$;

Quat.prototype.set$NNNN = function (w, x, y, z) {
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


function Quat$set$LQuat$NNNN($this, w, x, y, z) {
	$this.w = w;
	$this.x = x;
	$this.y = y;
	$this.z = z;
	return $this;
};

Quat.set$LQuat$NNNN = Quat$set$LQuat$NNNN;

Quat.prototype.set$LQuat$ = function (q) {
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
	return this;
};


function Quat$set$LQuat$LQuat$($this, q) {
	$this.w = q.w;
	$this.x = q.x;
	$this.y = q.y;
	$this.z = q.z;
	return $this;
};

Quat.set$LQuat$LQuat$ = Quat$set$LQuat$LQuat$;

Quat.prototype.set$AN = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


function Quat$set$LQuat$AN($this, q) {
	$this.w = q[0];
	$this.x = q[1];
	$this.y = q[2];
	$this.z = q[3];
	return $this;
};

Quat.set$LQuat$AN = Quat$set$LQuat$AN;

Quat.prototype.set$LFloat32Array$ = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


function Quat$set$LQuat$LFloat32Array$($this, q) {
	$this.w = q[0];
	$this.x = q[1];
	$this.y = q[2];
	$this.z = q[3];
	return $this;
};

Quat.set$LQuat$LFloat32Array$ = Quat$set$LQuat$LFloat32Array$;

Quat.prototype.set$NLV3$ = function (w, v) {
	this.w = w;
	this.x = v.x;
	this.y = v.y;
	this.z = v.z;
	return this;
};


function Quat$set$LQuat$NLV3$($this, w, v) {
	$this.w = w;
	$this.x = v.x;
	$this.y = v.y;
	$this.z = v.z;
	return $this;
};

Quat.set$LQuat$NLV3$ = Quat$set$LQuat$NLV3$;

Quat.prototype.equals$LQuat$ = function (q) {
	return Quat$equals$LQuat$LQuat$N(this, q, 0.000001);
};


function Quat$equals$LQuat$LQuat$($this, q) {
	return Quat$equals$LQuat$LQuat$N($this, q, 0.000001);
};

Quat.equals$LQuat$LQuat$ = Quat$equals$LQuat$LQuat$;

Quat.prototype.equals$LQuat$N = function (q, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return ((x$0 = this.w - q.w, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = this.x - q.x, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = this.y - q.y, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = this.z - q.z, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : true);
};


function Quat$equals$LQuat$LQuat$N($this, q, eps) {
	var x$0;
	var x$1;
	var x$2;
	var x$3;
	return ((x$0 = $this.w - q.w, x$0 >= 0 ? x$0 : - x$0) >= eps ? false : (x$1 = $this.x - q.x, x$1 >= 0 ? x$1 : - x$1) >= eps ? false : (x$2 = $this.y - q.y, x$2 >= 0 ? x$2 : - x$2) >= eps ? false : (x$3 = $this.z - q.z, x$3 >= 0 ? x$3 : - x$3) >= eps ? false : true);
};

Quat.equals$LQuat$LQuat$N = Quat$equals$LQuat$LQuat$N;

Quat.prototype.dot$LQuat$ = function (q) {
	return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
};


function Quat$dot$LQuat$LQuat$($this, q) {
	return $this.w * q.w + $this.x * q.x + $this.y * q.y + $this.z * q.z;
};

Quat.dot$LQuat$LQuat$ = Quat$dot$LQuat$LQuat$;

Quat.prototype.inverse$ = function () {
	var q0;
	var q1;
	var q2;
	var q3;
	var dot;
	var invDot;
	(q0 = this.w, q1 = this.x, q2 = this.y, q3 = this.z);
	dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	this.w *= invDot;
	this.x *= - invDot;
	this.y *= - invDot;
	this.z *= - invDot;
	return this;
};


function Quat$inverse$LQuat$($this) {
	var q0;
	var q1;
	var q2;
	var q3;
	var dot;
	var invDot;
	(q0 = $this.w, q1 = $this.x, q2 = $this.y, q3 = $this.z);
	dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	$this.w *= invDot;
	$this.x *= - invDot;
	$this.y *= - invDot;
	$this.z *= - invDot;
	return $this;
};

Quat.inverse$LQuat$ = Quat$inverse$LQuat$;

Quat.prototype.conjugate$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this;
};


function Quat$conjugate$LQuat$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	return $this;
};

Quat.conjugate$LQuat$ = Quat$conjugate$LQuat$;

Quat.prototype.len$ = function () {
	return Math.sqrt(Quat$len2$LQuat$(this));
};


function Quat$len$LQuat$($this) {
	return Math.sqrt(Quat$len2$LQuat$($this));
};

Quat.len$LQuat$ = Quat$len$LQuat$;

Quat.prototype.len2$ = function () {
	var w;
	var x;
	var y;
	var z;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	return w * w + x * x + y * y + z * z;
};


function Quat$len2$LQuat$($this) {
	var w;
	var x;
	var y;
	var z;
	(w = $this.w, x = $this.x, y = $this.y, z = $this.z);
	return w * w + x * x + y * y + z * z;
};

Quat.len2$LQuat$ = Quat$len2$LQuat$;

Quat.prototype.normalize$ = function () {
	var w;
	var x;
	var y;
	var z;
	var l;
	var il;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	l = Math.sqrt(x * x + y * y + z * z + w * w);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	this.w *= il;
	this.x *= il;
	this.y *= il;
	this.z *= il;
	return this;
};


function Quat$normalize$LQuat$($this) {
	var w;
	var x;
	var y;
	var z;
	var l;
	var il;
	(w = $this.w, x = $this.x, y = $this.y, z = $this.z);
	l = Math.sqrt(x * x + y * y + z * z + w * w);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	$this.w *= il;
	$this.x *= il;
	$this.y *= il;
	$this.z *= il;
	return $this;
};

Quat.normalize$LQuat$ = Quat$normalize$LQuat$;

Quat.prototype.add$LQuat$ = function (q) {
	this.w += q.w;
	this.x += q.x;
	this.y += q.y;
	this.z += q.z;
	return this;
};


function Quat$add$LQuat$LQuat$($this, q) {
	$this.w += q.w;
	$this.x += q.x;
	$this.y += q.y;
	$this.z += q.z;
	return $this;
};

Quat.add$LQuat$LQuat$ = Quat$add$LQuat$LQuat$;

Quat.prototype.sub$LQuat$ = function (q) {
	this.w -= q.w;
	this.x -= q.x;
	this.y -= q.y;
	this.z -= q.z;
	return this;
};


function Quat$sub$LQuat$LQuat$($this, q) {
	$this.w -= q.w;
	$this.x -= q.x;
	$this.y -= q.y;
	$this.z -= q.z;
	return $this;
};

Quat.sub$LQuat$LQuat$ = Quat$sub$LQuat$LQuat$;

Quat.prototype.mul$LQuat$ = function (q) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	(aw = this.w, ax = this.x, ay = this.y, az = this.z);
	(bw = q.w, bx = q.x, by = q.y, bz = q.z);
	this.w = aw * bw - ax * bx - ay * by - az * bz;
	this.x = aw * bx + ax * bw + ay * bz - az * by;
	this.y = aw * by - ax * bz + ay * bw + az * bx;
	this.z = aw * bz + ax * by - ay * bx + az * bw;
	return this;
};


function Quat$mul$LQuat$LQuat$($this, q) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	(aw = $this.w, ax = $this.x, ay = $this.y, az = $this.z);
	(bw = q.w, bx = q.x, by = q.y, bz = q.z);
	$this.w = aw * bw - ax * bx - ay * by - az * bz;
	$this.x = aw * bx + ax * bw + ay * bz - az * by;
	$this.y = aw * by - ax * bz + ay * bw + az * bx;
	$this.z = aw * bz + ax * by - ay * bx + az * bw;
	return $this;
};

Quat.mul$LQuat$LQuat$ = Quat$mul$LQuat$LQuat$;

Quat.prototype.mul$N = function (s) {
	this.w *= s;
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


function Quat$mul$LQuat$N($this, s) {
	$this.w *= s;
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	return $this;
};

Quat.mul$LQuat$N = Quat$mul$LQuat$N;

Quat.prototype.slerp$LQuat$LQuat$N = function (q0, q1, slerp) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	var cosHalfTheta;
	var halfTheta;
	var sinHalfTheta;
	var ratioA;
	var ratioB;
	(aw = q0.w, ax = q0.x, ay = q0.y, az = q0.z);
	(bw = q1.w, bx = q1.x, by = q1.y, bz = q1.z);
	cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		this.w = (aw + bw) / 2;
		this.x = (ax + bx) / 2;
		this.y = (ay + by) / 2;
		this.z = (az + bz) / 2;
		return this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	this.w = aw * ratioA + bw * ratioB;
	this.x = ax * ratioA + bx * ratioB;
	this.y = ay * ratioA + by * ratioB;
	this.z = az * ratioA + bz * ratioB;
	return this;
};


function Quat$slerp$LQuat$LQuat$LQuat$N($this, q0, q1, slerp) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	var cosHalfTheta;
	var halfTheta;
	var sinHalfTheta;
	var ratioA;
	var ratioB;
	(aw = q0.w, ax = q0.x, ay = q0.y, az = q0.z);
	(bw = q1.w, bx = q1.x, by = q1.y, bz = q1.z);
	cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return $this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		$this.w = (aw + bw) / 2;
		$this.x = (ax + bx) / 2;
		$this.y = (ay + by) / 2;
		$this.z = (az + bz) / 2;
		return $this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	$this.w = aw * ratioA + bw * ratioB;
	$this.x = ax * ratioA + bx * ratioB;
	$this.y = ay * ratioA + by * ratioB;
	$this.z = az * ratioA + bz * ratioB;
	return $this;
};

Quat.slerp$LQuat$LQuat$LQuat$N = Quat$slerp$LQuat$LQuat$LQuat$N;

Quat.prototype.toString = function () {
	return "Quat" + JSON.stringify([ this.w, this.x, this.y, this.z ]);
};


function _Main$0() {
};

$__jsx_extend([_Main$0], Object);
function _Main$0$main$AS(args) {
};

_Main$0.main = _Main$0$main$AS;
_Main$0.main$AS = _Main$0$main$AS;

var js$0 = (function () {
	var global = (function () { return this; }());
	return {
		global: global,
		eval: global.eval,
		invoke: function(invocant, methodName, args) {
			return invocant[methodName].apply(invocant, args);
		},
		newFunction: Function
	};
}());
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
MVQ.EQUAL_EPSILON = 0.000001;

var $__jsx_classMap = {
	"iota.jsx": {
		_Main: _Main,
		_Main$: _Main,
		Iota: Iota,
		Iota$LHTMLCanvasElement$: Iota
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		ScrollOptionsHorizontal: ScrollOptionsHorizontal,
		ScrollOptionsHorizontal$: ScrollOptionsHorizontal,
		ScrollOptionsVertical: ScrollOptionsVertical,
		ScrollOptionsVertical$: ScrollOptionsVertical,
		BoxQuadOptions: BoxQuadOptions,
		BoxQuadOptions$: BoxQuadOptions,
		ConvertCoordinateOptions: ConvertCoordinateOptions,
		ConvertCoordinateOptions$: ConvertCoordinateOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		DOMPointInit: DOMPointInit,
		DOMPointInit$: DOMPointInit,
		SourceInfo: SourceInfo,
		SourceInfo$: SourceInfo,
		MediaStreamTrackEventInit: MediaStreamTrackEventInit,
		MediaStreamTrackEventInit$: MediaStreamTrackEventInit,
		MediaSourceStates: MediaSourceStates,
		MediaSourceStates$: MediaSourceStates,
		CapabilityRange: CapabilityRange,
		CapabilityRange$: CapabilityRange,
		AllVideoCapabilities: AllVideoCapabilities,
		AllVideoCapabilities$: AllVideoCapabilities,
		AllAudioCapabilities: AllAudioCapabilities,
		AllAudioCapabilities$: AllAudioCapabilities,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		MinMaxConstraint: MinMaxConstraint,
		MinMaxConstraint$: MinMaxConstraint,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"system:lib/js/Timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	},
	"mvq.jsx": {
		MVQ: MVQ,
		MVQ$: MVQ,
		V2: V2,
		V2$: V2,
		V2$LV2$: V2$0,
		V2$AN: V2$1,
		V2$LFloat32Array$: V2$2,
		V2$NN: V2$3,
		V2$LV3$: V2$4,
		V2$LV4$: V2$5,
		V3: V3,
		V3$: V3,
		V3$LV3$: V3$0,
		V3$AN: V3$1,
		V3$LFloat32Array$: V3$2,
		V3$NNN: V3$3,
		V3$LV2$N: V3$4,
		V3$LV4$: V3$5,
		V4: V4,
		V4$: V4,
		V4$LV4$: V4$0,
		V4$AN: V4$1,
		V4$LFloat32Array$: V4$2,
		V4$NNNN: V4$3,
		V4$LV2$NN: V4$4,
		V4$LV3$N: V4$5,
		M22: M22,
		M22$: M22,
		M22$LM22$: M22$0,
		M22$AN: M22$1,
		M22$LFloat32Array$: M22$2,
		M22$NNNN: M22$3,
		M22$LV2$LV2$: M22$4,
		M22$N: M22$5,
		M22$LM33$: M22$6,
		M22$LM44$: M22$7,
		M33: M33,
		M33$: M33,
		M33$LM33$: M33$0,
		M33$AN: M33$1,
		M33$LFloat32Array$: M33$2,
		M33$NNNNNNNNN: M33$3,
		M33$LV3$LV3$LV3$: M33$4,
		M33$N: M33$5,
		M33$LM22$N: M33$6,
		M33$LM44$: M33$7,
		M44: M44,
		M44$: M44,
		M44$LM44$: M44$0,
		M44$AN: M44$1,
		M44$LFloat32Array$: M44$2,
		M44$NNNNNNNNNNNNNNNN: M44$3,
		M44$LV4$LV4$LV4$LV4$: M44$4,
		M44$N: M44$5,
		M44$LM22$NN: M44$6,
		M44$LM33$N: M44$7,
		Quat: Quat,
		Quat$: Quat,
		Quat$LQuat$: Quat$0,
		Quat$AN: Quat$1,
		Quat$LFloat32Array$: Quat$2,
		Quat$NNNN: Quat$3,
		_Main: _Main$0,
		_Main$: _Main$0
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("iota.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
