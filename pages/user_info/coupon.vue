<template>
	<!-- 优惠券 -->
	<view class="coupon">
		<view class="coupon_type">
			<view class="coupon_type_item" v-for="(item,index) in couponType" :key="index" @click="choose(index)"
				:class="{active:itemindex===index}">
				<view class="title">{{item}}</view>
				<view class="line" v-show="itemindex===index"></view>
			</view>
		</view>
		<view class="empty" v-if="couponList.length == 0">
				<!-- <image src="../../static/user_info/order_empty.png" mode="widthFix"></image> -->
				<u-image src="/static/user_info/order_empty.png" mode="widthFix"/>
			<view class="empty_title">暂无优惠卷信息</view>
		</view>
		<view class="coupon_list">
			<view class="coupon_item" :class="{invalid_coupon:item.status!=0}" v-for="(item,index) in couponList"
				:key="index">
				<view class="info">
					<view class="title">{{item.coupon_name}}</view>
					<view class="type" v-if="item.coupon_type == 0">品类限制：全场通用</view>
					<view class="type" v-if="item.coupon_type == 1">品类限制：{{item.sort_name}}</view>
					<view class="type" v-if="item.coupon_type == 2">指定商品：{{item.goods_name}}</view>
					<view class="type">有限期至：{{item.end_time}}</view>
				</view>
				<!-- 状态 -->
				<view class="state">
					<view class="money">
						<view class="number">￥{{item.coupon_money}}</view>
						<view class="coupon_desc">{{item.desc}}</view>
						<view class="condition" v-if="item.status == 0" @click="toIndex(item)">立即使用</view>
						<view class="condition" v-if="item.status == 1">已使用</view>
						<view class="condition" v-if="item.status == 2">已失效</view>
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
				couponType: [],
				itemindex: 0,
				current: 0,
				couponList: [],
				image: false,
				state: 0,
			}
		},
		onLoad() {
			// this.getList()
			this.$u.post('/ucenter/getMemberCouponList').then(res => {
				if (res.error == 0) {
					let arr = res.data.items.filter(item => item.status == this.state)
					this.couponList = arr
					this.couponType.push('未使用' + '(' + arr.length + ')')
					this.couponType.push('已使用')
					this.couponType.push('已失效')
				}
			})
		},
		methods: {
			getList() {
				this.$u.post('/ucenter/getMemberCouponList').then(res => {
					if (res.error == 0) {
						let arr = res.data.items.filter(item => {
							return item.status == this.state
						})
						this.couponList = arr
						console.log(this.couponList)
					}
				})
			},
			choose(index) {
				console.log(index)
				this.itemindex = index
				this.state = index
				this.getList()
			},
			toIndex(item) {
				console.log(item.s_id)
				if (item.coupon_type == 0) {
					uni.switchTab({
						url: '../sort/sort'
					})
				} else if (item.coupon_type == 1) {
					uni.switchTab({
						url: '../sort/sort'
					})
					let sid = item.s_id
					//把参数保存至全局变量
					getApp().globalData.sid = sid
				} else if (item.coupon_type == 2) {
					uni.navigateTo({
						url: '../index/detail?goods_id=' + item.goods_id
					})
				}
			}
		},
		computed: {}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
		letter-spacing: .1px;
	}

	.coupon {
		.coupon_type {
			position: fixed;
			top: 0;
			width: 100%;
			display: flex;
			align-items: center;
			height: 51px;
			font-size: 12px;
			color: #8F9399;
			background-color: #FFFFFF;
			z-index: 10000;

			.coupon_type_item {
				flex: 1;
				text-align: center;

				.title {
					border-radius: 14px;
				}

				.line {
					width: 30px;
					height: 2px;
					margin: 0 auto;
					margin-top: 2px;
					background: #0E1E75;
					border-radius: 2rpx;
				}
			}
		}

		.coupon_list {
			height: auto;
			overflow: hidden;
			padding: 0 15px;
			margin-top: 63px;
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
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
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
							color: #0E1E75;
							background-color: #FFFFFF;
							font-weight: normal;
						}

						.coupon_desc {
							color: #FFFFFF;
							font-size: 10px;
							font-weight: normal;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}

		.active {
			.title {
				color: #0E1E75;
				font-size: 28rpx !important;
			}
		}
	}
</style>
