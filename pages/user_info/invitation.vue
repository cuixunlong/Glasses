<template>
	<view class="tuijian">
		<u-modal v-model="show" content="您还没有登录,请登录" @confirm="confirm" @cancel="cancel" :async-close="true"
			:show-title="false" :show-cancel-button="true" confirm-text="去登录" cancel-text="我再想想"
			confirm-color="#0E1E75"></u-modal>
		<u-navbar title=" " back-icon-color="#8F9399" title-size="32" title-color='#fff' :background="background"
			:border-bottom="false"></u-navbar>
			<view class="invita_item" @click="toHis">邀请记录</view>
		<view class="content">
			<view class="content_item_title">
				<u-image src="/static/user_info/bgone.png" class="title" mode="widthFix" />
			</view>
			<view class="content_item_bg">
				<u-image src="/static/user_info/bgtwo.png" class="tuijian_bg" mode="widthFix" />
			</view>
		</view>
		<view class="invitation">
			<button open-type="share" class="btn">立即邀请好友</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: 'rgba(255, 255, 255, 0)',
				},
				show: false, //推广权限的弹窗
				uid: '', //邀请传递的uid
			}
		},
		//按钮分享传uid进入首页
		onShareAppMessage() {
			from: 'button'
			return {
				title: '玖子贵',
				path: '/pages/index/index?uid=' + this.uid
			}
		},
		onLoad() {
			if (uni.getStorageSync('token') === '') {
				this.show = true
			} else if (uni.getStorageSync('is_bind') == 0) {
				this.show = true
				uni.clearStorageSync()
			} else {
				this.$u.post('/ucenter/getUserInfo').then(res => {
					if (res.error == 0) {
						this.uid = res.data.uid
					}
				})
			}
		},
		methods: {
			//没有权限返回上一级
			confirm() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			cancel() {
				console.log('123')
				uni.navigateBack({})
			},
			toHis(){
				uni.navigateTo({
					url:'invita'
				})
			}
		},
	}
</script>

<style lang="less">
	page {
		background-image: url(https://z3.ax1x.com/2021/10/29/5jxbKP.png);
		background-size: 100%;
	}

	.tuijian {
		height: auto;
		overflow: hidden;
		padding-bottom: 20px;
		position: relative;
		.invita_item {
			width: 82px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 16px 0 0 16px;
			background: rgba(255, 255, 255, .7);
			font-size: 14px;
			color: #8F9399;
			position: absolute;
			right: 0;
			top: 110px;
		}

		.content {
			margin-top: 70px;
			.content_item_title {
				padding: 0 37px;

				image {
					width: 100%;
					margin-top: 29px;
				}
			}

			.content_item_bg {
				padding: 0 30px;
				margin-top: 176px;

				image {
					width: 100%;
					margin-top: -80px;
				}
			}
		}

		.invitation {
			margin-top: 45px;

			.btn {
				width: 308px;
				height: 54px;
				background: linear-gradient(180deg, #FE5E86 0%, #FF3D11 100%);
				// background-image: url(../../static/user_info/button_bg.png);
				// background-color: #F2F1F1;
				background-size: 100%;
				border-radius: 27px;
				line-height: 54px;
				letter-spacing: 4px;
				border-radius: 27px;
				color: #fff;
				font-size: 20px;
				font-weight: 600;
			}
		}
	}
</style>
