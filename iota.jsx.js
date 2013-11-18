// generatedy by JSX compiler 0.9.68 (2013-10-24 16:05:37 +0900; 088594709dac5c6fa5c845dd3daa14b614de22ea)
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

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
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
JSX.DEBUG = true;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas;
	var hdiv;
	var vdiv;
	var create_lattice;
	var create_lattice_index;
	var gl;
	var lattice_buf;
	var lattice_index_buf;
	var lattice_index_array;
	var vs;
	var fs;
	var prog;
	var texture;
	var near;
	var view_h;
	var view_p;
	var z_x;
	var z_y;
	var draw;
	var setImage;
	var onWheel;
	var files;
	var file_index;
	var setFile;
	var input;
	var left_down;
	var left_last_x;
	var left_last_y;
	canvas = dom$id$S('iota_canvas');
	canvas.style.position = 'absolute';
	canvas.style.left = '0px';
	canvas.style.top = '0px';
	canvas.width = dom.window.innerWidth;
	canvas.height = dom.window.innerHeight;
	hdiv = 128;
	vdiv = 64;
	function create_lattice(hdiv, vdiv) {
		var lattice_array;
		var y;
		var x;
		lattice_array = new Float32Array((hdiv + 1) * (vdiv + 1) * 2);
		for (y = 0; y <= vdiv; ++ y) {
			for (x = 0; x <= hdiv; ++ x) {
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
		for (y = 0; y < vdiv; ++ y) {
			for (x = 0; x <= hdiv; ++ x) {
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
	gl.shaderSource(vs, "\n			precision mediump float;\n			uniform mat4 projectionMatrix;\n			attribute vec2 position;\n			varying vec2 v_texcoord;\n			void main() {\n				float h = (position.x + 0.25) * 3.14159265 * 2.0;\n				float v = (position.y - 0.5) * 3.14159265;\n				float hc = cos(h), hs = sin(h);\n				float vc = cos(v), vs = sin(v);\n				v_texcoord = position;\n				gl_Position = projectionMatrix * vec4(vc * hc, vs, vc * hs, 1.0);\n			}\n		");
	gl.compileShader(vs);
	if (! (!! gl.getShaderParameter(vs, gl.COMPILE_STATUS))) {
		console.log(gl.getShaderInfoLog(vs));
	}
	fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, "\n			precision mediump float;\n			uniform sampler2D texture;\n			varying vec2 v_texcoord;\n			void main() {\n				gl_FragColor = texture2D(texture, v_texcoord);\n			}\n		");
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
	gl.useProgram(prog);
	texture = null;
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
		if (! texture) {
			return;
		}
		w = canvas.width;
		h = canvas.height;
		hr = Math.max(1, w / h);
		vr = Math.max(1, h / w);
		gl.uniform1i(gl.getUniformLocation(prog, 'texture'), 0);
		gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$frustum$NNNNNN(- 0.1 * hr, 0.1 * hr, - 0.1 * vr, 0.1 * vr, near, 1.1).mul$LM44$(M44$rotationX$N(- view_p)).mul$LM44$(M44$rotationY$N(- view_h)).mul$LM44$(M44$rotationX$N(z_y)).mul$LM44$(M44$rotationZ$N(- z_x)).array$());
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.1, 0.2, 0.3, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLE_STRIP, lattice_index_array.length, gl.UNSIGNED_SHORT, 0);
	}
	function setImage(img) {
		if (! texture) {
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
	file_index = - 1;
	function setFile(n) {
		var file;
		var file_reader;
		var binary_reader;
		if (! files) {
			return;
		}
		if (n < 0 || n >= files.length) {
			return;
		}
		file = files[n];
		file_reader = new FileReader();
		file_reader.onload = (function (e) {
			var img;
			img = dom.document.createElement('img');
			img.onload = (function (e) {
				view_h = 0;
				view_p = 0;
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
			for (i = 0; i < bin.length; ++ i) {
				bin[i] = result.charCodeAt(i) & 0xff;
			}
			sign = [ 0, 3, 0, 10, 0, 0, 0, 2 ];
			header_bound = 10000;
			for (pos = 0; pos < header_bound; ++ pos) {
				for (i = 0; i < sign.length; ++ i) {
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
	input = dom$id$S('files_input');
	input.onchange = (function (e) {
		files = input.files;
		setFile(((file_index = 0) | 0));
	});
	dom.window.onresize = (function (ev) {
		canvas.width = dom.window.innerWidth;
		canvas.height = dom.window.innerHeight;
		draw();
	});
	canvas.onmousewheel = (function (ev) {
		var wev;
		wev = ev;
		onWheel(+wev.wheelDelta / - 120);
	});
	canvas.addEventListener('DOMMouseScroll', (function (ev) {
		var uev;
		uev = ev;
		onWheel(uev.detail / 3);
	}), false);
	left_down = false;
	left_last_x = 0;
	left_last_y = 0;
	canvas.onmousedown = (function (ev) {
		var mev;
		mev = ev;
		if (mev.button === 0) {
			left_down = true;
			left_last_x = mev.clientX;
			left_last_y = mev.clientY;
		}
		ev.preventDefault();
	});
	canvas.onmouseup = (function (ev) {
		var mev;
		mev = ev;
		if (mev.button === 0) {
			left_down = false;
		}
		ev.preventDefault();
	});
	canvas.onmousemove = (function (ev) {
		var mev;
		mev = ev;
		if (left_down) {
			view_h += (mev.clientX - left_last_x) * 0.0003 / near;
			view_p += (mev.clientY - left_last_y) * 0.0003 / near;
			if (view_p > 3.14159265 / 2) {
				view_p = 3.14159265 / 2;
			}
			if (view_p < - 3.14159265 / 2) {
				view_p = - 3.14159265 / 2;
			}
			draw();
			left_last_x = mev.clientX;
			left_last_y = mev.clientY;
		}
		ev.preventDefault();
	});
	dom.window.onkeydown = (function (ev) {
		var kev;
		kev = ev;
		switch (kev.keyCode) {
		default:
			break;
		case 37:
			if (-- file_index < 0) {
				file_index = 0;
			}
			setFile((file_index | 0));
			break;
		case 39:
			if (files && ++ file_index >= files.length) {
				file_index = files.length - 1;
			}
			setFile((file_index | 0));
			break;
		}
	});
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

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
	EventInit.call(this);
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
	EventInit.call(this);
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
	UIEventInit.call(this);
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
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
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
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	EventInit.call(this);
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
	this.x = 0;
	this.y = 0;
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function TrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	EventInit.call(this);
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	EventInit.call(this);
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	EventInit.call(this);
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	EventInit.call(this);
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
	EventInit.call(this);
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	EventInit.call(this);
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	EventInit.call(this);
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
	EventInit.call(this);
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
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	EventInit.call(this);
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	EventInit.call(this);
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	EventInit.call(this);
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
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
	EventInit.call(this);
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	EventInit.call(this);
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	EventInit.call(this);
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
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for (i = 0; i < prefixes.length; ++ i) {
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
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for (i = 0; i < prefixes.length; ++ i) {
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
	this.x = 0;
	this.y = 0;
	this.set$LV2$(v);
};

function V2$1(v) {
	this.x = 0;
	this.y = 0;
	this.set$AN(v);
};

function V2$2(v) {
	this.x = 0;
	this.y = 0;
	this.set$LFloat32Array$(v);
};

function V2$3(x, y) {
	this.x = 0;
	this.y = 0;
	this.set$NN(x, y);
};

function V2$4(v) {
	this.x = 0;
	this.y = 0;
	this.set$NN(v.x, v.y);
};

function V2$5(v) {
	this.x = 0;
	this.y = 0;
	this.set$NN(v.x, v.y);
};

$__jsx_extend([V2, V2$0, V2$1, V2$2, V2$3, V2$4, V2$5], Object);
V2.prototype.array$ = function () {
	return [ this.x, this.y ];
};


V2.prototype.V3$N = function (z) {
	return new V3$4(this, z);
};


V2.prototype.V4$NN = function (z, w) {
	return new V4$4(this, z, w);
};


V2.prototype.set$LV3$ = function (v) {
	return this.set$NN(v.x, v.y);
};


V2.prototype.set$LV4$ = function (v) {
	return this.set$NN(v.x, v.y);
};


V2.prototype.clone$ = function () {
	return new V2$0(this);
};


V2.prototype.clear$ = function () {
	return this.set$NN(0, 0);
};


V2.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};


V2.prototype.set$LV2$ = function (v) {
	this.set$NN(v.x, v.y);
	return this;
};


V2.prototype.set$AN = function (v) {
	if (! (v.length === 2)) {
		debugger;
		throw new Error("[mvq.jsx:38:24] assertion failure\n        assert(v.length == 2);\n                        ^^\n");
	}
	this.set$NN(v[0], v[1]);
	return this;
};


V2.prototype.set$LFloat32Array$ = function (v) {
	if (! (v.length === 2)) {
		debugger;
		throw new Error("[mvq.jsx:43:24] assertion failure\n        assert(v.length == 2);\n                        ^^\n");
	}
	this.set$NN(v[0], v[1]);
	return this;
};


V2.prototype.equals$LV2$ = function (v) {
	return this.equals$LV2$N(v, MVQ.EQUAL_EPSILON);
};


V2.prototype.equals$LV2$N = function (v, eps) {
	return Math.abs(v.x - this.x) < eps && Math.abs(v.y - this.y) < eps;
};


V2.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};


V2.prototype.add$LV2$ = function (v) {
	return this.add$NN(v.x, v.y);
};


V2.prototype.add$AN = function (v) {
	return this.add$NN(v[0], v[1]);
};


V2.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NN(v[0], v[1]);
};


V2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


V2.prototype.sub$LV2$ = function (v) {
	return this.sub$NN(v.x, v.y);
};


V2.prototype.sub$AN = function (v) {
	return this.sub$NN(v[0], v[1]);
};


V2.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NN(v[0], v[1]);
};


V2.prototype.mul$NN = function (x, y) {
	this.x *= x;
	this.y *= y;
	return this;
};


V2.prototype.mul$LV2$ = function (v) {
	return this.mul$NN(v.x, v.y);
};


V2.prototype.mul$AN = function (v) {
	return this.mul$NN(v[0], v[1]);
};


V2.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NN(v[0], v[1]);
};


V2.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	return this;
};


V2.prototype.neg$ = function () {
	return this.mul$N(- 1);
};


V2.prototype.normalize$ = function () {
	return this.normalize$N(1);
};


V2.prototype.normalize$N = function (n) {
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(n / l);
	} else {
		return this;
	}
};


V2.prototype.cross$LV2$ = function (v) {
	return this.x * v.y - v.x * this.y;
};


V2.prototype.dot$LV2$ = function (v) {
	return this.x * v.x + this.y * v.y;
};


V2.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};


V2.prototype.len2$ = function () {
	var x;
	var y;
	(x = this.x, y = this.y);
	return x * x + y * y;
};


V2.prototype.dist$LV2$ = function (v) {
	return Math.sqrt(this.dist2$LV2$(v));
};


V2.prototype.dist2$LV2$ = function (v) {
	var x;
	var y;
	x = v.x - this.x;
	y = v.y - this.y;
	return x * x + y * y;
};


V2.prototype.lerp$LV2$LV2$N = function (v0, v1, ratio) {
	this.x = v0.x + ratio * (v1.x - v0.x);
	this.y = v0.y + ratio * (v1.y - v0.y);
	return this;
};


V2.prototype.transformBy$LM22$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y;
	this.y = m.m21 * x + m.m22 * y;
	return this;
};


V2.prototype.transformBy$LM33$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y + m.m13;
	this.y = m.m21 * x + m.m22 * y + m.m23;
	return this;
};


V2.prototype.toString = function () {
	return "V2" + JSON.stringify(this.array$());
};


function V3() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function V3$0(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV3$(v);
};

function V3$1(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$AN(v);
};

function V3$2(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LFloat32Array$(v);
};

function V3$3(x, y, z) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$NNN(x, y, z);
};

function V3$4(v, z) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV2$N(v, z);
};

function V3$5(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV4$(v);
};

$__jsx_extend([V3, V3$0, V3$1, V3$2, V3$3, V3$4, V3$5], Object);
V3.prototype.array$ = function () {
	return [ this.x, this.y, this.z ];
};


V3.prototype.V2$ = function () {
	return new V2$4(this);
};


V3.prototype.V4$N = function (w) {
	return new V4$5(this, w);
};


V3.prototype.set$LV2$N = function (v, z) {
	return this.set$NNN(v.x, v.y, z);
};


V3.prototype.set$LV4$ = function (v) {
	return this.set$NNN(v.x, v.y, v.z);
};


V3.prototype.clone$ = function () {
	return new V3$0(this);
};


V3.prototype.clear$ = function () {
	return this.set$NNN(0, 0, 0);
};


V3.prototype.set$NNN = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


V3.prototype.set$LV3$ = function (v) {
	this.set$NNN(v.x, v.y, v.z);
	return this;
};


V3.prototype.set$AN = function (v) {
	this.set$NNN(v[0], v[1], v[2]);
	return this;
};


V3.prototype.set$LFloat32Array$ = function (v) {
	this.set$NNN(v[0], v[1], v[2]);
	return this;
};


V3.prototype.equals$LV3$ = function (v) {
	return this.equals$LV3$N(v, MVQ.EQUAL_EPSILON);
};


V3.prototype.equals$LV3$N = function (v, eps) {
	return Math.abs(v.x - this.x) < eps && Math.abs(v.y - this.y) < eps && Math.abs(v.z - this.z) < eps;
};


V3.prototype.add$NNN = function (x, y, z) {
	this.x += x;
	this.y += y;
	this.z += z;
	return this;
};


V3.prototype.add$LV3$ = function (v) {
	return this.add$NNN(v.x, v.y, v.z);
};


V3.prototype.add$AN = function (v) {
	return this.add$NNN(v[0], v[1], v[2]);
};


V3.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NNN(v[0], v[1], v[2]);
};


V3.prototype.sub$NNN = function (x, y, z) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	return this;
};


V3.prototype.sub$LV3$ = function (v) {
	return this.sub$NNN(v.x, v.y, v.z);
};


V3.prototype.sub$AN = function (v) {
	return this.sub$NNN(v[0], v[1], v[2]);
};


V3.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NNN(v[0], v[1], v[2]);
};


V3.prototype.mul$NNN = function (x, y, z) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	return this;
};


V3.prototype.mul$LV3$ = function (v) {
	return this.mul$NNN(v.x, v.y, v.z);
};


V3.prototype.mul$AN = function (v) {
	return this.mul$NNN(v[0], v[1], v[2]);
};


V3.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NNN(v[0], v[1], v[2]);
};


V3.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


V3.prototype.neg$ = function () {
	return this.mul$N(- 1);
};


V3.prototype.normalize$ = function () {
	return this.normalize$N(1);
};


V3.prototype.normalize$N = function (n) {
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(n / l);
	} else {
		return this;
	}
};


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


V3.prototype.dot$LV3$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z;
};


V3.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};


V3.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	return x * x + y * y + z * z;
};


V3.prototype.dist$LV3$ = function (v) {
	return Math.sqrt(this.dist2$LV3$(v));
};


V3.prototype.dist2$LV3$ = function (v) {
	var x;
	var y;
	var z;
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	return x * x + y * y + z * z;
};


V3.prototype.lerp$LV3$LV3$N = function (v0, v1, ratio) {
	this.x = v0.x + ratio * (v1.x - v0.x);
	this.y = v0.y + ratio * (v1.y - v0.y);
	this.z = v0.z + ratio * (v1.z - v0.z);
	return this;
};


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


V3.prototype.toString = function () {
	return "V3" + JSON.stringify(this.array$());
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
	this.set$LV4$(v);
};

function V4$1(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$AN(v);
};

function V4$2(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$LFloat32Array$(v);
};

function V4$3(x, y, z, w) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN(x, y, z, w);
};

function V4$4(v, z, w) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$LV2$NN(v, z, w);
};

function V4$5(v, w) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$LV3$N(v, w);
};

$__jsx_extend([V4, V4$0, V4$1, V4$2, V4$3, V4$4, V4$5], Object);
V4.prototype.array$ = function () {
	return [ this.x, this.y, this.z, this.w ];
};


V4.prototype.V2$ = function () {
	return new V2$5(this);
};


V4.prototype.V3$ = function () {
	return new V3$5(this);
};


V4.prototype.set$LV2$NN = function (v, z, w) {
	return this.set$NNNN(v.x, v.y, z, w);
};


V4.prototype.set$LV3$N = function (v, w) {
	return this.set$NNNN(v.x, v.y, v.z, w);
};


V4.prototype.clone$ = function () {
	return new V4$0(this);
};


V4.prototype.clear$ = function () {
	return this.set$NNNN(0, 0, 0, 0);
};


V4.prototype.set$NNNN = function (x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	return this;
};


V4.prototype.set$LV4$ = function (v) {
	this.set$NNNN(v.x, v.y, v.z, v.w);
	return this;
};


V4.prototype.set$AN = function (v) {
	this.set$NNNN(v[0], v[1], v[2], v[3]);
	return this;
};


V4.prototype.set$LFloat32Array$ = function (v) {
	this.set$NNNN(v[0], v[1], v[2], v[3]);
	return this;
};


V4.prototype.equals$LV4$ = function (v) {
	return this.equals$LV4$N(v, MVQ.EQUAL_EPSILON);
};


V4.prototype.equals$LV4$N = function (v, eps) {
	return Math.abs(v.x - this.x) < eps && Math.abs(v.y - this.y) < eps && Math.abs(v.z - this.z) < eps && Math.abs(v.w - this.w) < eps;
};


V4.prototype.add$NNNN = function (x, y, z, w) {
	this.x += x;
	this.y += y;
	this.z += z;
	this.w += w;
	return this;
};


V4.prototype.add$LV4$ = function (v) {
	return this.add$NNNN(v.x, v.y, v.z, v.w);
};


V4.prototype.add$AN = function (v) {
	return this.add$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.sub$NNNN = function (x, y, z, w) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	return this;
};


V4.prototype.sub$LV4$ = function (v) {
	return this.sub$NNNN(v.x, v.y, v.z, v.w);
};


V4.prototype.sub$AN = function (v) {
	return this.sub$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.mul$NNNN = function (x, y, z, w) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	return this;
};


V4.prototype.mul$LV4$ = function (v) {
	return this.mul$NNNN(v.x, v.y, v.z, v.w);
};


V4.prototype.mul$AN = function (v) {
	return this.mul$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NNNN(v[0], v[1], v[2], v[3]);
};


V4.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	this.w *= s;
	return this;
};


V4.prototype.neg$ = function () {
	return this.mul$N(- 1);
};


V4.prototype.normalize$ = function () {
	return this.normalize$N(1);
};


V4.prototype.normalize$N = function (n) {
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(n / l);
	} else {
		return this;
	}
};


V4.prototype.dot$LV4$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
};


V4.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};


V4.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	return x * x + y * y + z * z + w * w;
};


V4.prototype.dist$LV4$ = function (v) {
	return Math.sqrt(this.dist2$LV4$(v));
};


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


V4.prototype.lerp$LV4$LV4$N = function (v0, v1, ratio) {
	this.x = v0.x + ratio * (v1.x - v0.x);
	this.y = v0.y + ratio * (v1.y - v0.y);
	this.z = v0.z + ratio * (v1.z - v0.z);
	this.w = v0.w + ratio * (v1.w - v0.w);
	return this;
};


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


V4.prototype.toString = function () {
	return "V4" + JSON.stringify(this.array$());
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
	this.set$LM22$(m);
};

function M22$1(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$AN(m);
};

function M22$2(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LFloat32Array$(m);
};

function M22$3(m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
};

function M22$4(v0, v1) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LV2$LV2$(v0, v1);
};

function M22$5(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$N(s);
};

function M22$6(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LM33$(m);
};

function M22$7(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LM44$(m);
};

$__jsx_extend([M22, M22$0, M22$1, M22$2, M22$3, M22$4, M22$5, M22$6, M22$7], Object);
M22.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m12, this.m22 ];
};


M22.prototype.transposedArray$ = function () {
	return [ this.m11, this.m12, this.m21, this.m22 ];
};


M22.prototype.M33$N = function (m22) {
	return new M33$6(this, m22);
};


M22.prototype.M44$NN = function (m22, m33) {
	return new M44$6(this, m22, m33);
};


M22.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


M22.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


M22.prototype.clone$ = function () {
	return new M22$0(this);
};


M22.prototype.setZero$ = function () {
	return this.set$N(0);
};


M22.prototype.setIdentity$ = function () {
	return this.set$N(1);
};


function M22$zero$() {
	return new M22().setZero$();
};

M22.zero$ = M22$zero$;

function M22$identity$() {
	return new M22().setIdentity$();
};

M22.identity$ = M22$identity$;

M22.prototype.set$NNNN = function (m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
	return this;
};


M22.prototype.set$LV2$LV2$ = function (v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
	return this;
};


M22.prototype.set$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


M22.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


M22.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


M22.prototype.set$N = function (s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
	return this;
};


M22.prototype.equals$LM22$ = function (m) {
	return this.equals$LM22$N(m, MVQ.EQUAL_EPSILON);
};


M22.prototype.equals$LM22$N = function (m, eps) {
	if (Math.abs(this.m11 - m.m11) >= eps) {
		return false;
	}
	if (Math.abs(this.m21 - m.m21) >= eps) {
		return false;
	}
	if (Math.abs(this.m12 - m.m12) >= eps) {
		return false;
	}
	if (Math.abs(this.m22 - m.m22) >= eps) {
		return false;
	}
	return true;
};


M22.prototype.add$LM22$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m12 += m.m12;
	this.m22 += m.m22;
	return this;
};


M22.prototype.sub$LM22$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	return this;
};


M22.prototype.mul$N = function (s) {
	this.m11 *= s;
	this.m21 *= s;
	this.m12 *= s;
	this.m22 *= s;
	return this;
};


M22.prototype.mul$LM22$ = function (m) {
	return this.mul$LM22$LM22$(this.clone$(), m);
};


M22.prototype.mul$LM22$LM22$ = function (m0, m1) {
	this.m11 = m0.m11 * m1.m11 + m0.m12 * m1.m21;
	this.m21 = m0.m21 * m1.m11 + m0.m22 * m1.m21;
	this.m12 = m0.m11 * m1.m12 + m0.m12 * m1.m22;
	this.m22 = m0.m21 * m1.m12 + m0.m22 * m1.m22;
	return this;
};


M22.prototype.transpose$ = function () {
	var m12;
	m12 = this.m12;
	this.m12 = this.m21;
	this.m21 = m12;
	return this;
};


M22.prototype.transpose$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m12 = m.m21;
	this.m22 = m.m22;
	return this;
};


M22.prototype.det$ = function () {
	return this.m11 * this.m22 - this.m21 * this.m12;
};


M22.prototype.inverse$ = function () {
	var d;
	var invDet;
	var org;
	d = this.det$();
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org = this.clone$();
	this.m11 = org.m22 * invDet;
	this.m21 = - org.m21 * invDet;
	this.m12 = - org.m12 * invDet;
	this.m22 = org.m11 * invDet;
	return this;
};


M22.prototype.setScale$N = function (s) {
	return this.setScale$NN(s, s);
};


M22.prototype.setScale$NN = function (x, y) {
	this.m11 = x;
	this.m21 = this.m12 = 0;
	this.m22 = y;
	return this;
};


M22.prototype.setScale$LV2$ = function (v) {
	return this.setScale$NN(v.x, v.y);
};


M22.prototype.setScale$AN = function (v) {
	return this.setScale$NN(v[0], v[1]);
};


M22.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NN(v[0], v[1]);
};


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


M22.prototype.toString = function () {
	return "M22" + JSON.stringify(this.array$());
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
	this.set$LM33$(m);
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
	this.set$AN(m);
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
	this.set$LFloat32Array$(m);
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
	this.set$LV3$LV3$LV3$(v0, v1, v2);
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
	this.set$N(s);
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
	this.set$LM22$N(m, m22);
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
	this.set$LM44$(m);
};

$__jsx_extend([M33, M33$0, M33$1, M33$2, M33$3, M33$4, M33$5, M33$6, M33$7], Object);
M33.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ];
};


M33.prototype.M22$ = function () {
	return new M22$6(this);
};


M33.prototype.M44$N = function (m33) {
	return new M44$7(this, m33);
};


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


M33.prototype.clone$ = function () {
	return new M33$0(this);
};


M33.prototype.setZero$ = function () {
	return this.set$N(0);
};


M33.prototype.setIdentity$ = function () {
	return this.set$N(1);
};


function M33$zero$() {
	return new M33().setZero$();
};

M33.zero$ = M33$zero$;

function M33$identity$() {
	return new M33().setIdentity$();
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


M33.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


M33.prototype.equals$LM33$ = function (m) {
	return this.equals$LM33$N(m, MVQ.EQUAL_EPSILON);
};


M33.prototype.equals$LM33$N = function (m, eps) {
	if (Math.abs(this.m11 - m.m11) >= eps) {
		return false;
	}
	if (Math.abs(this.m21 - m.m21) >= eps) {
		return false;
	}
	if (Math.abs(this.m31 - m.m31) >= eps) {
		return false;
	}
	if (Math.abs(this.m12 - m.m12) >= eps) {
		return false;
	}
	if (Math.abs(this.m22 - m.m22) >= eps) {
		return false;
	}
	if (Math.abs(this.m32 - m.m32) >= eps) {
		return false;
	}
	if (Math.abs(this.m13 - m.m13) >= eps) {
		return false;
	}
	if (Math.abs(this.m23 - m.m23) >= eps) {
		return false;
	}
	if (Math.abs(this.m33 - m.m33) >= eps) {
		return false;
	}
	return true;
};


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


M33.prototype.mul$LM33$ = function (m) {
	return this.mul$LM33$LM33$(this.clone$(), m);
};


M33.prototype.mul$LM33$LM33$ = function (m0, m1) {
	this.m11 = m0.m11 * m1.m11 + m0.m12 * m1.m21 + m0.m13 * m1.m31;
	this.m21 = m0.m21 * m1.m11 + m0.m22 * m1.m21 + m0.m23 * m1.m31;
	this.m31 = m0.m31 * m1.m11 + m0.m32 * m1.m21 + m0.m33 * m1.m31;
	this.m12 = m0.m11 * m1.m12 + m0.m12 * m1.m22 + m0.m13 * m1.m32;
	this.m22 = m0.m21 * m1.m12 + m0.m22 * m1.m22 + m0.m23 * m1.m32;
	this.m32 = m0.m31 * m1.m12 + m0.m32 * m1.m22 + m0.m33 * m1.m32;
	this.m13 = m0.m11 * m1.m13 + m0.m12 * m1.m23 + m0.m13 * m1.m33;
	this.m23 = m0.m21 * m1.m13 + m0.m22 * m1.m23 + m0.m23 * m1.m33;
	this.m33 = m0.m31 * m1.m13 + m0.m32 * m1.m23 + m0.m33 * m1.m33;
	return this;
};


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
	d = this.det$();
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


M33.prototype.setScale$N = function (s) {
	return this.set$N(s);
};


M33.prototype.setScale$NNN = function (x, y, z) {
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


M33.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN(v.x, v.y, v.z);
};


M33.prototype.setScale$AN = function (v) {
	return this.setScale$NNN(v[0], v[1], v[2]);
};


M33.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NNN(v[0], v[1], v[2]);
};


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


M33.prototype.setRotation$NLV3$ = function (rad, a) {
	return this.setRotation$NNNN(rad, a.x, a.y, a.z);
};


M33.prototype.setRotation$NAN = function (rad, a) {
	return this.setRotation$NNNN(rad, this.m11, this.m21, this.m31);
};


M33.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return this.setRotation$NNNN(rad, this.m11, this.m21, this.m31);
};


M33.prototype.setRotateX$N = function (rad) {
	return this.setRotation$NNNN(rad, 1, 0, 0);
};


M33.prototype.setRotateY$N = function (rad) {
	return this.setRotation$NNNN(rad, 0, 1, 0);
};


M33.prototype.setRotateZ$N = function (rad) {
	return this.setRotation$NNNN(rad, 0, 0, 1);
};


M33.prototype.toString = function () {
	return "M33" + JSON.stringify(this.array$());
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
	this.set$LM44$(m);
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
	this.set$AN(m);
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
	this.set$LFloat32Array$(m);
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
	this.set$LV4$LV4$LV4$LV4$(v0, v1, v2, v3);
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
	this.set$N(s);
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
	this.set$LM22$NN(m, m22, m33);
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
	this.set$LM33$N(m, m33);
};

$__jsx_extend([M44, M44$0, M44$1, M44$2, M44$3, M44$4, M44$5, M44$6, M44$7], Object);
M44.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
};


M44.prototype.M22$ = function () {
	return new M22$7(this);
};


M44.prototype.M33$N = function (m33) {
	return new M33$7(this);
};


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


M44.prototype.clone$ = function () {
	return new M44$0(this);
};


M44.prototype.setZero$ = function () {
	return this.set$N(0);
};


M44.prototype.setIdentity$ = function () {
	return this.set$N(1);
};


function M44$zero$() {
	return new M44().setZero$();
};

M44.zero$ = M44$zero$;

function M44$identity$() {
	return new M44().setIdentity$();
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


M44.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = this.m44 = s;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};


M44.prototype.equals$LM44$ = function (m) {
	return this.equals$LM44$N(m, MVQ.EQUAL_EPSILON);
};


M44.prototype.equals$LM44$N = function (m, eps) {
	if (Math.abs(this.m11 - m.m11) >= eps) {
		return false;
	}
	if (Math.abs(this.m21 - m.m21) >= eps) {
		return false;
	}
	if (Math.abs(this.m31 - m.m31) >= eps) {
		return false;
	}
	if (Math.abs(this.m41 - m.m41) >= eps) {
		return false;
	}
	if (Math.abs(this.m12 - m.m12) >= eps) {
		return false;
	}
	if (Math.abs(this.m22 - m.m22) >= eps) {
		return false;
	}
	if (Math.abs(this.m32 - m.m32) >= eps) {
		return false;
	}
	if (Math.abs(this.m42 - m.m42) >= eps) {
		return false;
	}
	if (Math.abs(this.m13 - m.m13) >= eps) {
		return false;
	}
	if (Math.abs(this.m23 - m.m23) >= eps) {
		return false;
	}
	if (Math.abs(this.m33 - m.m33) >= eps) {
		return false;
	}
	if (Math.abs(this.m43 - m.m43) >= eps) {
		return false;
	}
	if (Math.abs(this.m14 - m.m14) >= eps) {
		return false;
	}
	if (Math.abs(this.m24 - m.m24) >= eps) {
		return false;
	}
	if (Math.abs(this.m34 - m.m34) >= eps) {
		return false;
	}
	if (Math.abs(this.m44 - m.m44) >= eps) {
		return false;
	}
	return true;
};


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


M44.prototype.mul$LM44$ = function (m) {
	return this.mul$LM44$LM44$(this.clone$(), m);
};


M44.prototype.mul$LM44$LM44$ = function (m0, m1) {
	this.m11 = m0.m11 * m1.m11 + m0.m12 * m1.m21 + m0.m13 * m1.m31 + m0.m14 * m1.m41;
	this.m21 = m0.m21 * m1.m11 + m0.m22 * m1.m21 + m0.m23 * m1.m31 + m0.m24 * m1.m41;
	this.m31 = m0.m31 * m1.m11 + m0.m32 * m1.m21 + m0.m33 * m1.m31 + m0.m34 * m1.m41;
	this.m41 = m0.m41 * m1.m11 + m0.m42 * m1.m21 + m0.m43 * m1.m31 + m0.m44 * m1.m41;
	this.m12 = m0.m11 * m1.m12 + m0.m12 * m1.m22 + m0.m13 * m1.m32 + m0.m14 * m1.m42;
	this.m22 = m0.m21 * m1.m12 + m0.m22 * m1.m22 + m0.m23 * m1.m32 + m0.m24 * m1.m42;
	this.m32 = m0.m31 * m1.m12 + m0.m32 * m1.m22 + m0.m33 * m1.m32 + m0.m34 * m1.m42;
	this.m42 = m0.m41 * m1.m12 + m0.m42 * m1.m22 + m0.m43 * m1.m32 + m0.m44 * m1.m42;
	this.m13 = m0.m11 * m1.m13 + m0.m12 * m1.m23 + m0.m13 * m1.m33 + m0.m14 * m1.m43;
	this.m23 = m0.m21 * m1.m13 + m0.m22 * m1.m23 + m0.m23 * m1.m33 + m0.m24 * m1.m43;
	this.m33 = m0.m31 * m1.m13 + m0.m32 * m1.m23 + m0.m33 * m1.m33 + m0.m34 * m1.m43;
	this.m43 = m0.m41 * m1.m13 + m0.m42 * m1.m23 + m0.m43 * m1.m33 + m0.m44 * m1.m43;
	this.m14 = m0.m11 * m1.m14 + m0.m12 * m1.m24 + m0.m13 * m1.m34 + m0.m14 * m1.m44;
	this.m24 = m0.m21 * m1.m14 + m0.m22 * m1.m24 + m0.m23 * m1.m34 + m0.m24 * m1.m44;
	this.m34 = m0.m31 * m1.m14 + m0.m32 * m1.m24 + m0.m33 * m1.m34 + m0.m34 * m1.m44;
	this.m44 = m0.m41 * m1.m14 + m0.m42 * m1.m24 + m0.m43 * m1.m34 + m0.m44 * m1.m44;
	return this;
};


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


M44.prototype.setTranslation$NNN = function (x, y, z) {
	this.setIdentity$();
	this.m14 = x;
	this.m24 = y;
	this.m34 = z;
	return this;
};


M44.prototype.setTranslation$LV3$ = function (v) {
	return this.setTranslation$NNN(v.x, v.y, v.z);
};


M44.prototype.setTranslation$AN = function (v) {
	return this.setTranslation$NNN(v[0], v[1], v[2]);
};


M44.prototype.setTranslation$LFloat32Array$ = function (v) {
	return this.setTranslation$NNN(v[0], v[1], v[2]);
};


function M44$translation$NNN(x, y, z) {
	return new M44().setTranslation$NNN(x, y, z);
};

M44.translation$NNN = M44$translation$NNN;

function M44$translation$LV3$(v) {
	return new M44().setTranslation$LV3$(v);
};

M44.translation$LV3$ = M44$translation$LV3$;

function M44$translation$AN(v) {
	return new M44().setTranslation$AN(v);
};

M44.translation$AN = M44$translation$AN;

function M44$translation$LFloat32Array$(v) {
	return new M44().setTranslation$LFloat32Array$(v);
};

M44.translation$LFloat32Array$ = M44$translation$LFloat32Array$;

M44.prototype.setScale$N = function (s) {
	return this.setScale$NNN(s, s, s);
};


M44.prototype.setScale$NNN = function (x, y, z) {
	this.setZero$();
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m44 = 1;
	return this;
};


M44.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN(v.x, v.y, v.z);
};


M44.prototype.setScale$AN = function (v) {
	return this.setScale$NNN(v[0], v[1], v[2]);
};


M44.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NNN(v[0], v[1], v[2]);
};


function M44$scale$N(s) {
	return new M44().setScale$N(s);
};

M44.scale$N = M44$scale$N;

function M44$scale$NNN(x, y, z) {
	return new M44().setScale$NNN(x, y, z);
};

M44.scale$NNN = M44$scale$NNN;

function M44$scale$LV3$(v) {
	return new M44().setScale$LV3$(v);
};

M44.scale$LV3$ = M44$scale$LV3$;

function M44$scale$AN(v) {
	return new M44().setScale$AN(v);
};

M44.scale$AN = M44$scale$AN;

function M44$scale$LFloat32Array$(v) {
	return new M44().setScale$LFloat32Array$(v);
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


M44.prototype.setRotation$NLV3$ = function (rad, a) {
	return this.setRotation$NNNN(rad, a.x, a.y, a.z);
};


M44.prototype.setRotation$NAN = function (rad, a) {
	return this.setRotation$NNNN(rad, this.m11, this.m21, this.m31);
};


M44.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return this.setRotation$NNNN(rad, this.m11, this.m21, this.m31);
};


function M44$rotation$NNNN(rad, ax, ay, az) {
	return new M44().setRotation$NNNN(rad, ax, ay, az);
};

M44.rotation$NNNN = M44$rotation$NNNN;

function M44$rotation$NLV3$(rad, axis) {
	return new M44().setRotation$NLV3$(rad, axis);
};

M44.rotation$NLV3$ = M44$rotation$NLV3$;

function M44$rotation$NAN(rad, axis) {
	return new M44().setRotation$NAN(rad, axis);
};

M44.rotation$NAN = M44$rotation$NAN;

function M44$rotation$NLFloat32Array$(rad, axis) {
	return new M44().setRotation$NLFloat32Array$(rad, axis);
};

M44.rotation$NLFloat32Array$ = M44$rotation$NLFloat32Array$;

M44.prototype.setRotationX$N = function (rad) {
	return this.setRotation$NNNN(rad, 1, 0, 0);
};


M44.prototype.setRotationY$N = function (rad) {
	return this.setRotation$NNNN(rad, 0, 1, 0);
};


M44.prototype.setRotationZ$N = function (rad) {
	return this.setRotation$NNNN(rad, 0, 0, 1);
};


function M44$rotationX$N(rad) {
	return new M44().setRotationX$N(rad);
};

M44.rotationX$N = M44$rotationX$N;

function M44$rotationY$N(rad) {
	return new M44().setRotationY$N(rad);
};

M44.rotationY$N = M44$rotationY$N;

function M44$rotationZ$N(rad) {
	return new M44().setRotationZ$N(rad);
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
	this.m43 = - 1;
	this.m34 = - 2 * f * n / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m14 = this.m24 = this.m44 = 0;
	return this;
};


function M44$frustum$NNNNNN(l, r, b, t, n, f) {
	return new M44().setFrustum$NNNNNN(l, r, b, t, n, f);
};

M44.frustum$NNNNNN = M44$frustum$NNNNNN;

M44.prototype.setOrtho$NNNNNN = function (l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	(rl = r - l, tb = t - b, fn = f - n);
	this.m11 = 2 / rl;
	this.m22 = 2 / tb;
	this.m33 = - 2 / fn;
	this.m14 = - (r + l) / rl;
	this.m24 = - (t + b) / tb;
	this.m34 = - (f + n) / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = 0;
	this.m44 = 1;
	return this;
};


function M44$ortho$NNNNNN(l, r, b, t, n, f) {
	return new M44().setOrtho$NNNNNN(l, r, b, t, n, f);
};

M44.ortho$NNNNNN = M44$ortho$NNNNNN;

M44.prototype.toString = function () {
	return "M44" + JSON.stringify(this.array$());
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
	this.set$LQuat$(q);
};

function Quat$1(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$AN(q);
};

function Quat$2(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LFloat32Array$(q);
};

function Quat$3(w, x, y, z) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$NNNN(w, x, y, z);
};

$__jsx_extend([Quat, Quat$0, Quat$1, Quat$2, Quat$3], Object);
Quat.prototype.array$ = function () {
	return [ this.w, this.x, this.y, this.z ];
};


Quat.prototype.clone$ = function () {
	return new Quat$0(this);
};


Quat.prototype.setZero$ = function () {
	return this.set$NNNN(0, 0, 0, 0);
};


Quat.prototype.setIdentity$ = function () {
	return this.set$NNNN(1, 0, 0, 0);
};


function Quat$zero$() {
	return new Quat().setZero$();
};

Quat.zero$ = Quat$zero$;

function Quat$identity$() {
	return new Quat().setIdentity$();
};

Quat.identity$ = Quat$identity$;

Quat.prototype.set$NNNN = function (w, x, y, z) {
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


Quat.prototype.set$LQuat$ = function (q) {
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
	return this;
};


Quat.prototype.set$AN = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


Quat.prototype.set$LFloat32Array$ = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


Quat.prototype.set$NLV3$ = function (w, v) {
	this.w = w;
	this.x = v.x;
	this.y = v.y;
	this.z = v.z;
	return this;
};


Quat.prototype.equals$LQuat$ = function (q) {
	return this.equals$LQuat$N(q, MVQ.EQUAL_EPSILON);
};


Quat.prototype.equals$LQuat$N = function (q, eps) {
	if (Math.abs(this.w - q.w) >= eps) {
		return false;
	}
	if (Math.abs(this.x - q.x) >= eps) {
		return false;
	}
	if (Math.abs(this.y - q.y) >= eps) {
		return false;
	}
	if (Math.abs(this.z - q.z) >= eps) {
		return false;
	}
	return true;
};


Quat.prototype.dot$LQuat$ = function (q) {
	return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
};


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


Quat.prototype.conjugate$ = function () {
	this.x *= - 1;
	this.y *= - 1;
	this.z *= - 1;
	return this;
};


Quat.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};


Quat.prototype.len2$ = function () {
	var w;
	var x;
	var y;
	var z;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	return w * w + x * x + y * y + z * z;
};


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


Quat.prototype.add$LQuat$ = function (q) {
	this.w += q.w;
	this.x += q.x;
	this.y += q.y;
	this.z += q.z;
	return this;
};


Quat.prototype.sub$LQuat$ = function (q) {
	this.w -= q.w;
	this.x -= q.x;
	this.y -= q.y;
	this.z -= q.z;
	return this;
};


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


Quat.prototype.mul$N = function (s) {
	this.w *= s;
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


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
	if (Math.abs(cosHalfTheta) >= 1.0) {
		return this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if (Math.abs(sinHalfTheta) < 0.001) {
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


Quat.prototype.toString = function () {
	return "Quat" + JSON.stringify(this.array$());
};


function _Main$0() {
};

$__jsx_extend([_Main$0], Object);
function _Main$0$main$AS(args) {
};

_Main$0.main = _Main$0$main$AS;
_Main$0.main$AS = _Main$0$main$AS;

var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
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
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"iota.jsx": {
		_Main: _Main,
		_Main$: _Main
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
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
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
