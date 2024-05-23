<template>
	<view class="user_info">
		<u-modal v-model="sureShow" content="请登录" @confirm="confirm" @cancel="cancel" :async-close="true"
			:show-title="false" :show-cancel-button="true" confirm-text="去登录" cancel-text="我再想想"
			confirm-color="#0E1E75"></u-modal>
		<view class="user_info_top">
			<view class="top_head" @click="toUserData">
				<u-image :src="userInfo.face" mode="widthFix" class="top_head_image" shape="circle" />
				<view class="user_name">{{userInfo.nickname}}</view>
				<view class="user_num">{{userInfo.mobile}}</view>
				<view class="set_of">
					<image src="../../static/user_info/shezhi.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="top_content">
			<view class="top_list">
				<view class="top_item">
					<navigator url="wallet" hover-class="none">
						<view class="name">钱包</view>
						<view class="number">￥{{walletNum}}</view>
						<view class="right"></view>
					</navigator>
				</view>
				<view class="top_item">
					<navigator url="coupon" hover-class="none">
						<view class="name">优惠券</view>
						<view class="number">{{couponNum}}</view>
						<view class="right"></view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="user_info_list">
			<navigator url="myInfo" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/info.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/info.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">我的消息</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url="integral" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/integral.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/integral.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">我的积分</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url="invitation" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/invitation.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/invitation.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">邀请有礼</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url="../index/invoice/invoice" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/invoice.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/invoice.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">发票管理</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url="address/address" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/address.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/address.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">地址管理</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url="commonProblem" hover-class="none">
				<view class="user_info_content">
					<view class="user_info_item">
						<!-- #ifndef MP-TOUTIAO -->
						<u-image src="/static/user_info/problem.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<image src="/static/user_info/problem.png" mode="widthFix" class="item_icon" />
						<!-- #endif -->
						<view class="item_title">常见问题</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
			</navigator>
			<button open-type="contact" class="customer">
				<!-- #ifndef MP-TOUTIAO -->
				<u-image src="/static/user_info/customer.png" mode="widthFix" class="item_icon" />
				<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				<image src="/static/user_info/customer.png" mode="widthFix" class="item_icon" />
				<!-- #endif -->
				<view class="item_title">在线客服</view>
				<view class="item_right">
					<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
				</view>
			</button>
			<view class="customer_number" @click="show = !show">
				<u-image src="/static/user_info/k_number.png" mode="widthFix"></u-image>
				<view class="item_title">客服电话</view>
				<view class="item_right">{{custNum}}</view>
			</view>
			<u-modal v-model="show" :content="content" :show-confirm-button="false" :show-title="false">
				<view class="call">
					<u-image src="/static/user_info/call.png" mode="widthFix" class="call_image"></u-image>
					<view class="title">将拨打客服电话</view>
					<view class="number">{{custNum}}</view>
					<view class="btn_list">
						<view class="cancel" @click="show = false">取消</view>
						<view class="now_call" @click="callNum()">立即呼叫</view>
					</view>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				userInfo: {}, //用户信息
				couponNum: 0, //优惠卷数量
				walletNum: 0, //钱包
				dayNum: 0, //纪念日
				sureShow: false, //未登录显示登录弹窗
				custNum: '', //客服电话
			}
		},
		onLoad() {},
		onShow() {
			if (uni.getStorageSync('token') === '') {
				// this.sureShow = true
				this.userInfo = {}
				this.userInfo.face = '/static/user_info/head.png'
				this.userInfo.mobile = '手机号'
				this.userInfo.nickname = '登录/注册'
				console.log('123')
			} else if (uni.getStorageSync('is_bind') == 0) {
				// uni.clearStorageSync()
			} else {
				this.sureShow = false
				//获取用户信息
				// this.$u.post('/ucenter/getUserInfo').then(res => {
				// 	if (res.error == 0) {
				// 		this.userInfo = res.data
				// 		this.walletNum = res.data.money
				// 	} else {
				// 		uni.showToast({
				// 			title: '登录过期，请重新登陆',
				// 			icon: 'none'
				// 		})
				// 		setTimeout(() => {
				// 			uni.navigateTo({
				// 				url: '../login/login'
				// 			})
				// 		}, 500)
				// 	}
				// })
				// 获取纪念日长度
				this.$u.post('/ucenter/getMemberMemorialList').then(res => {
					if (res.error == 0) {
						this.dayNum = res.data.items.length
					}
				})
				// 获取优惠卷长度
				this.$u.post('/ucenter/getMemberCouponList').then(res => {
					// 过滤出可以使用的优惠卷数量
					var arr = res.data.items.filter(item => {
						return item.status == 0
					})
					this.couponNum = arr.length
				})
				//获取客服电话
				this.$u.post('/ucenter/getServiceConfig').then(res => {
					if (res.error == 0) {
						this.custNum = res.data.servicePhone
					}
				})
			}
		},
		methods: {
			confirm() {
				uni.reLaunch({
					url: '../login/login'
				})
				this.sureShow = false
			},
			cancel() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			// 个人信息
			toUserData() {
				uni.navigateTo({
					url: 'user_data'
				})
			},
			// 地址管理
			toAddress() {
				uni.navigateTo({
					url: 'address/address'
				})
			},
			//打电话
			callNum() {
				console.log(this.custNum)
				uni.makePhoneCall({
					phoneNumber: this.custNum //仅为示例
				});
			},
		}
	}
</script>

<style lang="less">
	page {
		background-color: #FFFFFF;
	}

	.user_info {
		.user_info_top {
			background-image: url(https://z3.ax1x.com/2021/09/07/hIMDQf.png);
			background-size: 100% 100%;

			.top_head {
				position: relative;
				padding: 0 20px;
				color: #FFFFFF;
				text-align: center;
				padding-top: 30px;

				/deep/.u-image {
					display: flex;
					justify-content: center;

					image {
						width: 64px;
						height: 64px;
						border-radius: 50%;
					}
				}

				.user_name {
					color: #303133;
					font-size: 20px;
					margin: 4px 0;
				}

				.user_num {
					color: #8F9399;
					font-size: 12px;
				}

				.set_of {
					position: absolute;
					top: 10px;
					right: 21px;

					image {
						width: 20px;
					}
				}
			}
		}

		.top_content {
			width: 100%;
			padding: 0 15px;

			.top_list {
				width: 100%;
				height: 80px;
				display: flex;
				margin: 0 auto;
				margin-top: 37px;
				padding: 18px 0;
				text-align: center;
				color: #0E1E75;
				background: #FFFFFF;
				box-shadow: 0px 6px 12px rgba(0, 40, 255, 0.32);
				border-radius: 10px;
				font-size: 16px;

				.top_item {
					flex: 1;
					align-items: center;
					position: relative;
					// width: 100%;
					// max-width: 33.33%;

					.number {
						font-size: 16px;
						color: #0E1E75;
						margin-top: 4px;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.right {
						width: 1px;
						height: 40px;
						background-color: #ECEEED;
						position: absolute;
						right: 0px;
						top: 0;
					}

					.name {
						font-size: 12px;
						color: #7286BF;
					}
				}
			}
		}

		.user_info_list {
			margin-top: 25px;
			border-radius: 8px;
			padding-bottom: 12px;

			.customer {
				background-color: #FFFFFF;
				display: flex;
				padding: 8px 0;
				margin: 0 15px;
				align-items: center;
				border-radius: 0;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);

				image {
					width: 20px;
				}

				.item_title {
					flex: 1;
					font-size: 14px;
					color: #303133;
					margin-left: 8px;
					text-align: left;
				}
			}

			.customer_number {
				display: flex;
				align-items: center;
				padding: 17px 0;
				margin: 0 15px;
				background-color: #FFFFFF;

				image {
					width: 20px;
					display: block;
				}

				.item_title {
					font-size: 14px;
					color: #303133;
					margin-left: 8px;
					flex: 7;
				}

				.item_right {
					color: #C2C5CC;
					font-size: 12px;
				}
			}

			.call {
				width: 100%;
				height: auto;
				background: #FFFFFF;
				border-radius: 8px;
				text-align: center;
				padding: 20px;

				/deep/.u-image {
					display: flex;
					justify-content: center;

					image {
						width: 98px;
					}
				}

				.title {
					color: #303133;
					margin-top: 12px;
					font-size: 14px;
				}

				.number {
					color: #303133;
					margin-top: 8px;
					font-size: 24px;
					font-weight: bold;
				}

				.btn_list {
					margin-top: 24px;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.cancel {
						width: 45%;
						height: 40px;
						line-height: 40px;
						background: #FFFFFF;
						color: #0E1E75;
						border-radius: 8px;
						border: 1px solid #0E1E75;
						box-sizing: border-box;
					}

					.now_call {
						width: 45%;
						height: 40px;
						line-height: 40px;
						background: #0E1E75;
						color: #FFFFFF;
						border-radius: 8px;
						box-sizing: border-box;
					}
				}
			}

			.customer::after {
				border: none;
			}

			.user_info_content {
				.user_info_item {
					display: flex;
					align-items: center;
					padding: 17px 0;
					margin: 0 15px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					background-color: #FFFFFF;

					image {
						width: 20px;
						display: block;
					}

					.item_title {
						font-size: 14px;
						color: #303133;
						margin-left: 8px;
						flex: 7;
					}
				}
			}
		}
	}
</style>
