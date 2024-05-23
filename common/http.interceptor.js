// common/http.interceptor.js

const install = (Vue, vm) => {
	// 点击“运行”编译出来的代码是开发环境，点击“发行”编译出来的代码是生产环境
	
	if (process.env.NODE_ENV === 'development') {
		var baseUrl = 'https://jzg.phpgzs.top/api';
	} else {
		var baseUrl = 'https://jzg.apphf.cn/api';
	}

	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		// ......
		baseUrl: baseUrl, // 请求的本域名
		// method: 'POST',
		// 设置为json，返回后会对数据进行一次JSON.parse()
		dataType: 'json',
		showLoading: true, // 是否显示请求中的loading
		loadingText: '加载中...', // 请求loading中的文字提示z
		loadingTime: 200, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		originalData: false, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 配置请求头信息
		header: {
			// 'content-type': 'application/x-www-form-urlencoded;charset=utf-8;'
			'content-type': 'application/json;charset=UTF-8;'
		},
	});

	// 请求拦截部分，如配置，每次请求前都会执行，见上方说明
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// ......
		config.header.token = uni.getStorageSync('token');
		return config;
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.error == 0) {
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return res;
		} else if (res.error == 1002 || res.error == 1003) {
			uni.showToast({
				title: '请重新登录',
				duration: 2000,
				icon: 'none'
			});
			uni.clearStorageSync();
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/login/login')
			}, 1000)
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			return res;
		} else if (res.error == 1001) {
			uni.showToast({
				title: '未登录',
				duration: 2000,
				icon: 'none'
			});
			uni.clearStorageSync();
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/login/login')
			}, 1000)
		} else {
			// vm.$u.toast(res.msg);
			uni.showToast({
				title: res.msg,
				icon: 'none'
			})
			return res;
		}
	}
}

export default {
	install
}
