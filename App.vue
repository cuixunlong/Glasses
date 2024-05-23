<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			if (uni.canIUse('getUpdateManager')) {

				const updateManager = uni.getUpdateManager();
				// 监听向微信后台请求检查更新结果事件
				updateManager.onCheckForUpdate(function(res) {
					//如果hasUpdate为true表示有版本更新
					console.log(res.hasUpdate)
					if (res.hasUpdate) {
						//小程序有版本更新事件回调
						updateManager.onUpdateReady(function() {
							uni.showModal({
								title: '更新提示',
								content: '新版本已经准备好，是否重启应用？',
								success: function(res) {
									if (res.confirm) {
										//强制小程序重启并使用新版本
										updateManager.applyUpdate()
									}
								},
							})
						})
						//监听小程序更新失败事件
						updateManager.onUpdateFailed(function() {
							uni.showModal({
								title: '已经有新版本了哟~',
								content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
							})
						})
					}
				})

			} else {
				uni.showModal({
					title: '提示',
					content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
				})
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	@import url("./static/iconfonts/iconfont.css");
	image{
		will-change: transform;
		display: block;
	}
	.h_auto{
		height: calc(48px+ constant(safe-area-inset-bottom)) !important; //兼容 IOS<11.2
		
		height: calc(48px + env(safe-area-inset-bottom)) !important; //兼容 IOS>11.2
		
		padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
		
		padding-bottom: env(safe-area-inset-bottom) !important; //兼容 IOS>11.2
	}
	.padd_auto{
		padding-bottom: calc(48px + constant(safe-area-inset-bottom)) !important; //兼容 IOS<11.2
		padding-bottom: calc(48px + env(safe-area-inset-bottom)) !important; //兼容 IOS>11.2
	}
	image{will-change: transform}
	//底部按钮
	.preservation {
		display: flex;
		align-items: center;
		position: fixed;
		height: 98px;
		width: 100%;
		bottom: 0;
		font-size: 14px;
		padding: 0 14px;
		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 36px;
			border-radius: 18px;
			background-color:#0E1E75;
			text-align: center;
			color: #FFFFFF;
		}
	}
	//暂无数据
	.empty{
		margin-top: 100px;
		.image{
			width: 100%;
			display: flex;
			justify-content: center;
		}
		image{
			width: 100%;
			display: block;
		}
		// #ifdef MP-TOUTIAO
		image{
			width: 100%;
			display: block;
		}
		// #endif 
		.empty_title{
			margin-top: 22px;
			color: #BFC4CC;
			font-size: 14px;
			text-align: center;
		}
	}
</style>
