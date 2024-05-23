<template>
	<view class="login">
		<view class="info">
			<view class="top">
				<view class="welcome">
					<view class="left">欢迎使用</view>
					<view class="right">玖子贵</view>
				</view>
				<view v-if="show" class="shouquan">授权微信头像、昵称</view>
				<view v-if="!show" class="shouquan">立即登录，享受优质服务</view>
				<view class="logo">
					<image :src="avatarUrl" mode="heightFix"></image>
				</view>
				<view class="getInfo" v-if="show">
					<view class="title">为提供优质服务，玖子贵需要获取你的以下信息</view>
					<view class="content">· 你的公开信息(头像、昵称等)</view>
				</view>
				<!-- #ifndef MP-TOUTIAO -->
				<button v-if="show" class="getInfo_btn" open-type="getuserinfo" lang="zh_CN"
					@click="getInfoBtn">授权进入玖子贵</button>
				<button type="primary" v-if="number" class="login_btn" open-type="getPhoneNumber" lang="zh_CN"
					@getphonenumber="getPhoneNumber" :class="{active:number == true}">
					微信用户一键登录
				</button>
				<!-- #endif -->


				<!-- #ifdef MP-TOUTIAO -->
				<button type="primary" class="login_btn" lang="zh_CN" @click="douyinLogin">
					抖音用户一键登录
				</button>
				<!-- #endif -->
				<view class="back" @click="back">取消登录</view>
			</view>
			<view class="agreement_list">
				<view class="agreement_title">登录/注册即视为同意</view>
				<navigator url="userAgreen" hover-class="none">
					<view class="agreement">《用户协议》</view>
				</navigator>
			</view>
		</view>
		<u-modal v-model="sureShow" content="登录成功" :show-title="false" confirm-color="#0E1E75" @confirm="confirm">
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SessionKey: '',
				phoneNumber: '',
				OpenId: '',
				nickName: null, //昵称
				avatarUrl: '/static/sign/logo_sign.png', //头像
				show: true,
				number: false,
				sureShow: false, //登录成功确定
			};
		},
		onLoad() { //默认加载
			this.sign();
		},
		methods: {
			getInfoBtn() {
				uni.$u.throttle(this.getInfo, 1000)
			},
			getInfo() {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 300);
				uni.getUserProfile({
					desc: "获取个人信息",
					success: (res) => {
						uni.hideLoading();
						this.avatarUrl = res.userInfo.avatarUrl
						uni.setStorageSync('nickName', res.userInfo.nickName); //昵称
						uni.setStorageSync('avatarUrl', res.userInfo.avatarUrl); //头像
						this.show = false
						this.number = true
					}
				})
			},
			getPhoneNumber(e) {
				console.log(e)
				this.$u.post('/login/getWxPhone', {
						encryptedData: e.detail.encryptedData,
						session_key: uni.getStorageSync('session_key'),
						iv: e.detail.iv
					})
					.then(res => {
						console.log(res.error)
						if (res.error == 0) {
							this.show = false
							this.phoneNumber = res.data.purePhoneNumber;
							uni.setStorageSync('phoneNumber', res.data.purePhoneNumber);
							this.doBind();
							this.$u.post('/login/userBind', {
								mobile: this.phoneNumber,
								face: uni.getStorageSync('avatarUrl'),
								nickname: uni.getStorageSync('nickName'),
								wx_openid: uni.getStorageSync('wx_openid'),
								invite: uni.getStorageSync('uid_key')
							}).then(res => {
								if (res.error == 0) {
									uni.setStorageSync('is_bind', 1);
									this.sureShow = true
								} else {
									this.loginFalse()
								}
							})
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					});
			},
			confirm() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			back() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			douyinLogin() {
				//字节跳动登录
				let that = this
				tt.login({
					force: true,
					success(res) {
						that.$u.post('/login/dylogin', {
							code: res.code
						}).then(now => {
							console.log(now.error)
							if (now.error == 0) {
								uni.setStorageSync('token', now.data.token);
								uni.setStorageSync('session_key', now.data.session_key);
								uni.setStorageSync('is_bind', now.data.is_bind);
								uni.setStorageSync('wx_openid', now.data.wx_openid);
								uni.getUserInfo({
									withCredentials: true,
									success(item) {
										uni.setStorageSync('avatarUrl', item.userInfo.avatarUrl); //头像z
										that.$u.post('/login/userBind', {
											mobile: '18888888888',
											face: item.userInfo.avatarUrl,
											nickname: item.userInfo.nickName,
											wx_openid: now.data.wx_openid,
											invite: ''
										}).then(items => {
											if (items.error == 0) {
												that.sureShow = true
											} else {
												that.loginFalse()
											}
										})
									},
									fail() {
										console.log(`getUserInfo 调用失败`);
									},
								});
							}
						})
					},
					fail(res) {
						console.log(`login 调用失败`);
					},
				});
			},
			//登录
			sign() {
				// #ifndef MP-TOUTIAO
				// 1.wx获取登录用户code
				let _this = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						console.log(code)
						// 2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						_this.$u.post('/login/getOpenid', {
							code: code
						}).then(res => {
							// 本地存储
							if (res.error == 0) {
								uni.setStorageSync('token', res.data.token);
								uni.setStorageSync('session_key', res.data.session_key);
								uni.setStorageSync('is_bind', res.data.is_bind);
								uni.setStorageSync('wx_openid', res.data.wx_openid);
								// 判断是否绑定
								console.log(uni.getStorageSync('is_bind'))
								if (uni.getStorageSync('is_bind') === 0) {
									_this.show = true
								} else {
									_this.show = false
									_this.number = false
									_this.$u.post('/ucenter/getUserInfo').then(res => {
										console.log(res)
										uni.setStorageSync('avatarUrl', res.data.face); //头像
										// 此为uView的方法，详见路由相关文档
										uni.showToast({
											title: '登录成功',
											duration: 2000,
											icon: 'success'
										});
										setTimeout(() => {
											// 此为uView的方法，详见路由相关文档
											uni.switchTab({
												url: '../index/index'
											})
										}, 1500)
									})
								}
							} else {
								uni.showToast({
									title: res.msg,
									icon: 'none'
								})
							}
						})
					},
				});
				// #endif
			},
			doBind() {
				uni.hideKeyboard();
				//模板示例部分验证规则
				if (!this.phoneNumber) {
					uni.showToast({
						title: '获取手机号码失败',
						icon: 'none'
					});
					return false;
				}
				// uni.showLoading({
				// 	title: '提交中...'
				// });
			},
			loginFalse() {
				uni.hideKeyboard();
				//模板示例部分验证规则
				uni.showToast({
					title: '登录失败',
					icon: 'none'
				});
				return false;
			},
		},
	}
</script>


<style lang="less">
	.login {
		// height: 100vh;
		// overflow: hidden;
		// padding-top: 106px;
		// box-sizing: border-box;


		.info {
			height: auto;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			box-sizing: border-box;

			.top {
				height: 100vh;
				min-height: 625px;
				padding: 0 15px;
				padding-top: 106px;
				padding-bottom: 50px;
				overflow: hidden;
				box-sizing: border-box;

				.welcome {
					display: flex;
					font-size: 28px;

					.left {
						margin-right: 20px;
					}
				}

				.shouquan {
					margin-top: 8px;
					color: #919499;
					font-size: 16px;
				}

				.logo {
					text-align: center;
					margin-top: 85px;
					display: flex;
					justify-content: center;

					image {
						height: 100px;
						border-radius: 50%;
					}
				}

				.getInfo {
					margin-top: 55px;

					.title {
						color: #303133;
						font-size: 14px;
					}

					.content {
						color: #919499;
						font-size: 12px;
						margin-top: 12px;
					}
				}

				.getInfo_btn {
					background-color: #0E1E75;
					border-radius: 25px;
					width: 100%;
					height: 40px;
					color: #FFFFFF;
					font-size: 14px;
					margin-top: 30px;
					line-height: 40px;
				}

				.active {
					margin-top: 62px !important;
				}

				.login_btn {
					width: 100%;
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #0E1E75;
					border-radius: 25px;
					color: #FFFFFF;
					font-size: 14px;
					margin-top: 30px;
					line-height: 40px;

					image {
						width: 23px;
						margin: auto 0;
						margin-right: 8px;
					}
				}

				.back {
					height: auto;
					overflow: hidden;
					color: #616366;
					margin-top: 8px;
					font-size: 12px;
					text-align: center;
				}
			}

			.agreement_list {
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				color: #606265;
				margin-top: -50px;

				.agreement {
					color: #50A4FF;
				}
			}
		}
	}
</style>
