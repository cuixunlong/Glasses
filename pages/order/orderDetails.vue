<template>
	<!-- 订单详情页 -->
	<view class="order_details">
		<u-modal v-model="sureShow" content="确认收到货了吗?" @cancel="cancel" :async-close="true" :show-title="false"
			:show-cancel-button="true" confirm-text="确认收货" cancel-text="取消" confirm-color="#0E1E75">
		</u-modal>
		<view class="order_item">
			<view class="order_info">
				<view class="state">{{orderDetail.order_status_text}}</view>
				<view class="address_info">
					<view class="title">配送地址</view>
					<view class="user_info">
						<view class="name">{{orderDetail.contact}}</view>
						<view class="number">{{orderDetail.mobile}}</view>
					</view>
					<view class="address">
						<view class="address_detail">{{orderDetail.address}}</view>
					</view>
				</view>
				<!-- <view class="send_time">
					<view class="send_top">
						<view class="title">配送时间</view>
						<view class="order_data" v-if="orderDetail.need_time == '立即配送'">{{orderDetail.create_time}}
						</view>
						<view class="order_data" v-else>{{orderDetail.need_time}}前送达</view>
					</view>
					<view class="send_state" v-if="orderDetail.need_time == '立即配送'">{{orderDetail.need_time}}</view>
					<view class="send_state" v-else>{{orderDetail.time}}</view>
				</view> -->
				<view class="goods_detail">
					<view class="title">订单详情</view>
					<view class="goods_info">
						<view class="">
							<!-- <u-image :src="orderDetail.order_item[0].goods_cover" mode="widthFix" class="goods_img" /> -->
							<image :src="orderDetail.goods.logo" mode="heightFix" class="goods_img"></image>
						</view>
						<view class="detail_right">
							<view class="goods_title">
								{{orderDetail.goods.name}}
							</view>
							<view class="goods_price">
								<view class="pirce">￥{{orderDetail.goods.price}}</view>
								<view class="quantity">×1</view>
							</view>
						</view>
					</view>
					<!-- <view class="goods_info" v-if="orderDetail.candle_cover != ''">
						<view class="">
							<u-image :src="orderDetail.candle_cover" mode="widthFix" class="goods_img" />
						</view>
						<view class="detail_right">
							<view class="goods_title" v-if="orderDetail.candle_num != ''">
								{{orderDetail.candle_name}}({{orderDetail.candle_num}}岁)
							</view>
							<view class="goods_title" v-else>{{orderDetail.candle_name}}</view>
							<view class="goods_price">
								<view class="pirce">￥{{orderDetail.candle_price}}</view>
								<view class="quantity">×1</view>
							</view>
						</view>
					</view>
					<view class="goods_info">
						<view class="">
							<u-image src="/static/user_info/plate.png" mode="widthFix" class="goods_img" />
						</view>
						<view class="detail_right">
							<view class="goods_title">圆形餐盘</view>
							<view class="goods_price">
								<view class="pirce">￥{{orderDetail.tableware_price}}</view>
								<view class="quantity">×{{orderDetail.tableware_num}}</view>
							</view>
						</view>
					</view> -->
				</view>
				<view class="remarks">
					<view class="title">备注</view>
					<view class="remarks_content">{{remark}}</view>
				</view>
				<!-- <view class="serve_money">
					<view class="title">优惠金额</view>
					<view class="">-￥{{orderDetail.coupon_money}}</view>
				</view> -->
				<view class="total_price">
					<view class="title">总计</view>
					<view class="">￥{{orderDetail.amount}}</view>
				</view>
			</view>
		</view>
		<view class="btn_list">
			<view class="price">￥{{orderDetail.amount}}</view>
			<view class="right_btn">
				<view class="btn" v-if="orderDetail.order_status==1" @click="toPay(orderDetail.order_id)">立即付款</view>
				<view class="btn" v-if="orderDetail.order_status==2" @click="">等待配送中</view>
				<view class="order_state" v-if="orderDetail.order_status==3" @click="">正在派送中</view>
				<view class="btn" v-if="orderDetail.order_status==3" @click="sureShow = !sureShow">确认收货
				</view>
				<view class="btn" v-if="orderDetail.order_status==4" @click="">已签收</view>
				<view class="btn" v-if="orderDetail.order_status==5" @click="">已完成</view>
				<view class="order_state" v-if="orderDetail.order_status==6" @click="">已取消</view>
				<view class="btn" v-if="orderDetail.order_status==6" @click="toBuy">再次购买</view>
				<view class="btn" v-if="orderDetail.order_status==7" @click="">已评价</view>
				<view class="btn" v-if="orderDetail.order_status==8" @click="">申请退款</view>
				<view class="btn" v-if="orderDetail.order_status==9" @click="">退款完成</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				sureShow: false,
				// orderDetail: [],
				orderDetail: {
					goods: {
						logo: '../../static/details/glasses1.jpg',
						name: 'BOLON暴龙眼镜框商务休闲眉框合金光学镜架BJ7130',
						price: '999'
					},
					contact: '张三',
					mobile: '1368678867877',
					address: '安徽省合肥市长丰县',
					amount: '999',
					order_status_text: '派送中',
					order_status:3
				}, //订单信息
				serve_number: '30.00',
				remark: '无备注',
				order_id: '',
			}
		},
		onLoad(option) {
			console.log(option)
			this.order_id = option.order_id
			this.$u.post('/order/getorder', {
				order_id: option.order_id
			}).then(res => {
				if (res.error == 0) {
					console.log(res.data.wish_remark)
					if (res.data.need_time == '') {
						res.data.need_time = '立即配送'
						res.data.create_time = res.data.create_time.slice(0, 10)
					} else {
						res.data.time = '预约配送'
						res.data.need_time = res.data.need_time.substring(0, 10) + ' ' + res.data.need_time
							.substring(11 + 1);
					}
					res.data.address = res.data.address.replace(/_/g, ' ')
					this.orderDetail = res.data
					console.log(this.orderDetail)
					if (res.data.remark != '') {
						this.remark = res.data.remark
					}
				}
			})
		},
		methods: {
			deleteOrder(index) {
				console.log(index)
				this.show = !this.show
			},
			confirm() {
				this.$u.post('/order/confirmOrder', {
					order_id: this.order_id
				}).then(res => {
					if (res.error == 0) {
						uni.showToast({
							title: '收货成功',
						})
						this.sureShow = false
					}
				})
				setTimeout(() => {
					uni.navigateBack({

					})
				}, 1000)
			},
			toBuy() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			toPay(order_id) {
				uni.navigateTo({
					url: 'payment?order_id=' + order_id
				})
			}
		},
	}
</script>

<style lang="less">
	.order_details {
		height: 100vh;

		.order_item {
			background-color: #F3F4F5;
			padding: 12px 15px;
			height: auto;
			padding-bottom: calc(60px + constant(safe-area-inset-bottom)) !important; //兼容 IOS<11.2
			padding-bottom: calc(60px + env(safe-area-inset-bottom)) !important; //兼容 IOS>11.2

			.order_info {
				background-color: #FFFFFF;
				border-radius: 10px;
				padding: 16px 12px;

				.state {
					font-size: 24px;
					font-weight: bold;
					color: #303133;
					text-align: center;
					padding-bottom: 16px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				}

				.address_info {
					padding: 16px 0;
					color: #606265;
					font-size: 16px;

					.title {
						font-size: 12px;
					}

					.user_info {
						display: flex;
						justify-content: space-between;
						margin-top: 8px;
						padding-bottom: 16px;
						border-bottom: 1px solid #EDEDED;
						box-sizing: border-box;
					}

					.address {
						padding: 16px 0;
						border-bottom: 1px solid rgba(0, 0, 0, 0.5);
						font-size: 16px;
						box-sizing: border-box;

						.address_detail {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
						}
					}
				}
			}

			.send_time {
				font-size: 12px;
				color: #606265;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				box-sizing: border-box;

				.send_top {
					display: flex;
					justify-content: space-between;
				}

				.send_state {
					color: #0E1E75;
					font-size: 24px;
					font-weight: bold;
					text-align: right;
					margin-top: 4px;
					padding-bottom: 16px;
				}
			}

			.goods_detail {
				padding: 16px 0;
				color: #303133;
				font-size: 14px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				box-sizing: border-box;

				.title {
					color: #606265;
					font-size: 12px;
				}

				.goods_info {
					margin-top: 12px;
					display: flex;
					height: 56px;

					image {
						height: 100%;
						border-radius: 4px !important;
					}

					.detail_right {
						margin-left: 16px;
						width: 100%;
						font-weight: bold;

						.goods_price {
							display: flex;
							justify-content: space-between;
							margin-top: 12px;
							.price{
								color: #ff1505;
							}
						}
					}
				}
			}

			.remarks {
				padding: 16px 0;
				color: #606265;
				font-size: 12px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				display: flex;
				align-items: center;

				.title {
					flex: 7;
				}

				.remarks_content {
					max-width: 80%;
				}
			}

			.serve_money {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 16px 0;
				color: #0E1E75;
				font-size: 12px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);

				.title {
					color: #606265;
				}
			}

			.total_price {
				display: flex;
				padding-top: 16px;
				justify-content: space-between;
				align-items: center;
				font-size: 19px;
				font-weight: bold;

				.title {
					font-size: 12px;
					color: #606265;
					font-weight: normal;
				}
			}
		}

		.btn_list {
			display: flex;
			background-color: #FFFFFF;
			position: fixed;
			align-items: center;
			justify-content: space-between;
			bottom: 0;
			width: 100%;
			padding: 0 15px;
			height: calc(48px+ constant(safe-area-inset-bottom)); //兼容 IOS<11.2
			height: calc(48px + env(safe-area-inset-bottom)); //兼容 IOS>11.2
			padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
			padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2

			.price {
				color: #F16464;
				font-size: 20px;
				font-weight: bold;
			}

			.right_btn {
				display: flex;
				justify-content: flex-end;

				.btn:last-child {
					background-color: #0E1E75;
				}

				.btn {
					width: 110px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					color: #FFFFFF;
					margin-left: 12px;
					border-radius: 16px;
					font-size: 14px;
					background-color: #DBDDEA;
					box-sizing: border-box;
				}

				.order_state {
					color: #0E1E75;
					font-size: 14px;
					line-height: 32px;
				}
			}
		}
	}
</style>