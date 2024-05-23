<template>
	<view class="payment">
		<view class="payment_num">
			<view class="title">支付金额</view>
			<view class="money"><text class="icon">￥</text>{{order.amount}}</view>
		</view>
		<view class="pay_way">
			<view class="weixin_pay" @click="chooseWx">
				<view class="weixin">
					<view class="iconfont vx_color icon_pay icon-wxpay"></view>
					<view class="weixin_item">
						<view class="title">微信支付</view>
					</view>
					<view class="check_box" v-if="weixinCheck == true"></view>
					<view class="no_check" v-else></view>
				</view>
			</view>
			<view class="weixin_pay" @click="chooseCard">
				<view class="weixin">
					<view class="iconfont card_color icon_pay icon-pay"></view>
					<view class="weixin_item">
						<view class="title">会员卡支付</view>
						<view class="money">可用￥{{integral}}</view>
					</view>
					<view class="no_check" v-if="checked == false"></view>
					<view class="check_box" v-else></view>
				</view>
			</view>
		</view>
		<view class="preservation auto">
			<view @click="payData" class="btn">确认支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				weixinCheck: true,
				order: {
					amount: '999'
				},
				integral: '10888'
			}
		},
		onLoad(option) {
			console.log(option)
			//获取订单详情
			// this.$u.post('/order/getorder', {
			// 	order_id: option.order_id
			// }).then(res => {
			// 	if (res.error == 0) {
			// 		this.order = res.data

			// 		// #ifndef MP-TOUTIAO
			// 		this.order.pay_type = 'wxpay'
			// 		// #endif

			// 		// #ifdef MP-TOUTIAO
			// 		this.order.pay_type = 'dypay'
			// 		// #endif

			// 		console.log(this.order)
			// 	}
			// })
		},
		onShow() {
			// this.$u.post('/ucenter/getUserInfo').then(res => {
			// 	if (res.error == 0) {
			// 		this.integral = res.data.money
			// 	}
			// })
		},
		methods: {
			chooseCard() {
				this.checked = true
				this.weixinCheck = false
				this.order.pay_type = "money"
			},
			chooseWx() {
				this.checked = false
				this.weixinCheck = true
				// #ifndef MP-TOUTIAO
				this.order.pay_type = 'wxpay'
				// #endif

				// #ifdef MP-TOUTIAO
				this.order.pay_type = 'dypay'
				// #endif
			},
			payData() {
				this.$u.throttle(this.toPay, 2000)
			},
			toPay() {
				// 微信支付
				this.$u.post('/Payments/payOrder', {
					order_id: this.order.order_id,
					type: this.order.pay_type
				}).then(res => {
					if (res.error == 0) {
						console.log(this.order.pay_type == "money")
						if (this.order.pay_type == "money") {
							uni.showToast({
								title: '支付成功',
								duration: 2000,
								icon: 'success'
							});
							setTimeout(() => {
								uni.reLaunch({
									url: 'pay_success'
								});
							}, 1000)
						} else {
							// #ifndef MP-TOUTIAO
							wx.requestPayment({
								timeStamp: res.data.timeStamp,
								nonceStr: res.data.nonceStr,
								package: res.data.package,
								signType: res.data.signType,
								paySign: res.data.paySign,
								success(res) {
									console.log('123')
									uni.showToast({
										title: '支付成功',
										duration: 2000,
										icon: 'success'
									});
									setTimeout(() => {
										console.log('123')
										uni.reLaunch({
											url: 'order'
										});
									}, 1000)
								},
								fail(res) {
									uni.showToast({
										title: '取消支付',
										duration: 2000,
										icon: 'none'
									});
								}
							})
							// #endif
							// #ifdef MP-TOUTIAO
							tt.pay({
								orderInfo: {
									order_id: res.data.order_id,
									order_token: res.data.order_token,
								},
								service: 5,
								success(item) {
									if (item.code == 0) {
										// 支付成功处理逻辑，只有res.code=0时，才表示支付成功
										// 但是最终状态要以商户后端结果为准
										uni.showToast({
											title: '支付成功',
											duration: 2000,
											icon: 'success'
										});
										setTimeout(() => {
											uni.reLaunch({
												url: 'order'
											});
										}, 1000)
									}
								},
								fail(res) {
									// 调起收银台失败处理逻辑
									console.log('支付失败')
								},
							});
							// #endif
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.payment {
		.icon_pay {
			font-size: 24px;
			padding: 18px 12px;
		}

		.payment_num {
			margin-top: 24px;
			text-align: center;

			.title {
				color: #303133;
				font-size: 14px;
			}

			.money {
				margin-top: 8px;
				font-size: 32px;
				color: #DA271E;
				font-weight: bold;

				.icon {
					font-size: 16px;
					color: #DA271E;
				}
			}
		}

		.pay_way {
			background-color: #FFFFFF;
			border-radius: 8px;
			margin: 0 15px;
			margin-top: 24px;


			.yuer_way {
				box-sizing: border-box;

				.yuer {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;

					.ye_color {
						color: #0E1E75;
					}

					.yuer_item {
						flex: 1;

						.title {
							color: #303133;
							font-size: 14px;
						}

						.number {
							color: #919499;
							font-size: 10px;
						}
					}
				}
			}

			.weixin_pay:first-child {
				border-bottom: 1px solid rgba(0, 0, 0, .1);
			}

			.weixin_pay {
				box-sizing: border-box;

				.weixin {
					display: flex;
					align-items: center;

					.vx_color {
						color: #41B035;
					}

					.card_color {
						color: #0E1E75;
					}

					.weixin_item {
						flex: 7;

						.title {
							color: #303133;
							font-size: 14px;
						}

						.money {
							color: #919499;
							font-size: 10px;
							margin-top: 2px;
						}
					}

					.check_box {
						background-image: url(../../static/user_info/checked.png);
						background-size: 100%;
						width: 20px;
						height: 20px;
						border-radius: 50%;
						margin-right: 15px;
						border: none;
						box-sizing: border-box;
					}

					.no_check {
						width: 20px;
						height: 20px;
						border-radius: 50%;
						margin-right: 15px;
						// background-image: none;
						border: 1px solid #919499;
						box-sizing: border-box;
					}
				}
			}
		}
	}
</style>