	<template>
		<!-- 优惠券 -->
		<view class="coupon">
			<view class="empty" v-if="couponList.length == 0">
					<!-- <image src="../../static/user_info/order_empty.png" mode="widthFix"></image> -->
					<u-image src="/static/user_info/order_empty.png" mode="widthFix"/>
				<view class="empty_title">暂无可用优惠卷</view>
			</view>
			<view class="coupon_list">
				<view class="coupon_item" v-for="(item,index) in couponList":key="item.m_coupon_id">
					<view class="info">
						<view class="title">{{item.coupon_name}}</view>
						<view class="type" v-if="item.coupon_type == 0">品类限制：全场通用</view>
						<view class="type" v-if="item.coupon_type == 1">品类限制：{{item.sort_name}}</view>
						<view class="type" v-if="item.coupon_type == 2">品类限制：{{item.goods_name}}</view>
						<view class="type">有限期至：{{item.end_time}}</view>
					</view>
					<!-- 状态 -->
					<view class="state">
						<view class="money">
							<view class="number">￥{{item.coupon_money}}</view>
							<view class="coupon_desc">{{item.desc}}</view>
							<view class="condition" @click="choose(item)">立即使用</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</template>
	
	<script>
		export default {
			data() {
				return {
					itemindex: 0,
					couponList: [],
					// image: false,
				}
			},
			onLoad() {
				var from = uni.getStorageSync('order_key');
				this.$u.post('/order/previewOrder', from).then(res => {
					if (res.error == 0) {
						this.couponList = res.data.CouponList
					}
				})
			},
			methods: {
				choose(item){
					console.log(item)
					uni.$emit("m_coupon_id", {
						m_coupon_id: JSON.stringify(item.m_coupon_id),
					});
					uni.navigateBack({})
				}
			},
		}
	</script>
	
	<style lang="less">
		page {
			background-color: #F3F4F5;
			letter-spacing: .1px;
		}
	
		.coupon {
			.coupon_list {
				height: auto;
				overflow: hidden;
				padding: 0 15px;
				margin-top: 15px;
				padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
				padding-bottom: env(safe-area-inset-bottom) !important; //兼容 IOS>11.2
	
				.invalid_coupon {
					background-image: url(../../static/user_info/coupon2.png) !important;
	
					.condition {
						color: #C3C3C4 !important;
					}
				}
	
				.coupon_item {
					width: 100%;
					background-image: url(../../static/user_info/coupon1.png);
					background-size: 100% 100%;
					display: flex;
					align-items: center;
					margin-bottom: 12px;
					height: 100px;
	
					.coupon_image {
						width: 17.3%;
						margin-left: 8px;
					}
	
					.info {
						flex: 7;
						overflow: hidden;
						font-size: 12px;
						margin-left: 8px;
						color: #8F9399;
	
						.title {
							font-size: 14px;
							font-weight: bold;
							color: #303133;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							margin-top: 0;
							margin-bottom: 12px;
						}
	
						.type {
							margin-top: 4px;
						}
					}
	
					.state {
						font-size: 14px;
						color: #50A4FF;
						width: 26.6%;
	
						.money {
							font-size: 30px;
							color: #FFFFFF;
							text-align: center;
							font-weight: bold;
	
							.condition {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 56px;
								height: 18px;
								margin: 0 auto;
								margin-top: 5px;
								font-size: 10px;
								border-radius: 10px;
								color: #7084C3;
								background-color: #FFFFFF;
								font-weight: normal;
							}
	
							.coupon_desc {
								color: #FFFFFF;
								font-size: 10px;
								font-weight: normal;
							}
						}
					}
				}
			}
		}
	</style>
	
</template>
