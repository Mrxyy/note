/**
 * Timer 通用高效定时器
 * 兼容FF，Chrome，Safari，IE9及以上浏览器
 * qizi 2016-8-1
 */
/**
 * 曾祥良修改
 * 兼容FF，Chrome，Safari，IE5及以上浏览器
 * 可以通过---param---给回调方法callbackfun传入的参数
 * @param  这里传入window参数使插件更加高效
 */
(function(window) {
	/*兼容处理requestAnimationFrame*/
	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for (var x = 0, length = vendors.length; x < length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
})(window);

/**
 * Timer
 * @param  dis 时间间隔
 * @param  loop 循环次数，如果为0则无限循环
 * @param  callbackfun 回调方法
 * @param  param 给回调方法callbackfun传入的参数
 */
;(function(w) {
	/*定义Timer*/
	function Timer(dis, loop, callbackfun, param) {
		this.dis = dis || 0;
		this.loop = loop || 0;
		this.count = 0;
		this.callbackfun = callbackfun || null;
		this.tid = null;
		this.pretime = 0;
		this.ispause = false;
		this.param = param || null;
	}

	Timer.prototype.start = function() {
		if (this.callbackfun == null) {
			this.errors("回调函数不能为空");
			return;
		} else if (this.loop < 0 || this.dis < 0) {
			this.errors("请输入正确数值");
			return;
		}
		this.pretime = (new Date()).getTime();
		this.ispause = false;
		this.processing();
	}
	Timer.prototype.processing = function() {
		//console.log("test");
		var _self = this;
		if (this.loop > 0 && this.count == this.loop) {
			this.stop();
			return;
		}
		if (this.ispause == true) {
			return;
		}
		if (this.dis > 16.7) {
			var nowtime = (new Date()).getTime();
			if (nowtime - this.pretime > this.dis) {
				this.count++;
				this.callbackfun(this.count, this.param);
				this.pretime = nowtime;
			}
		} else {
			this.count++;
			this.callbackfun(this.count, this.param);
		}
		this.tid = window.requestAnimationFrame(function() {
			_self.processing();
		});
	}
	Timer.prototype.stop = function() {
		if (this.tid != null) {
			this.ispause = true;
			window.cancelAnimationFrame(this.tid);
			this.count = 0;
			this.tid = null;
		}
	}
	Timer.prototype.pause = function() {
		if (this.tid != null) {
			this.ispause = true;
			window.cancelAnimationFrame(this.tid);
			this.tid = null;
		}
	}
	Timer.prototype.errors = function(msg) {
		throw new Error(msg);
	}

	w.Timer = Timer;

})(typeof window !== "undefined" ? window : this);