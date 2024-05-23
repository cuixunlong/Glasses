<template>
	<view class="integral">
		<view class="top">
			<view class="integral_money">
				<view class="balance">积分余额</view>
				<view class="integral_money_number">0.00</view>
			</view>
		</view>
		<view class="integral_list">
			<view class="integral_item" v-for="(item,index) in integralList" :key="index">
				<view class="integral_item_left">
					<view class="title">{{item.title}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="integral_item_right">
					<view class="iconfont icon-plus icon"></view>
					<text>{{item.number}}</text>
				</view>
			</view>
			<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" fontSize="20" color="#C2C5CC"
				margin-top="16" v-if="integralList.length != 0" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				integralList: [],
				iconType: 'circle',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '加载中',
					nomore: '只有这么多了'
				},
			}
		},
		onLoad() {
			this.$u.post('/ucenter/getLogMemberIntegralList').then(res => {
				if (res.error == 0) {
					this.integralList = res.data.items
					if (this.integralList.length == 0) {
						this.status = this.loadText.nomore
						console.log(this.status)
					}
				}
			})
		}
	}
</script>

<style lang="less">
	.integral {

		// padding: 0 15px;
		.top {
			width: 100%;
			padding: 0 15px;
			position: fixed;
			top: 20px;

			.integral_money {
				background-image: url(/static/user_info/wallet_bg.png);
				background-size: 100% 100%;
				box-shadow: 0px 0px 12px rgba(14, 30, 117, 0.2);
				height: 180px;
				width: 100%;
				padding: 12px;
				box-sizing: border-box;
				color: #0E1E75;
				font-size: 16px;
				border-radius: 8px;

				.balance {
					display: flex;
					justify-content: space-between;
					font-size: 16px;
				}

				.integral_money_number {
					font-size: 24px;
					display: flex;
					align-items: center;
					justify-content: center;
					transform: translate(-50%, -50%);
					position: absolute;
					top: 50%;
					left: 50%;
				}
			}
		}

		.integral_list {
			margin-top: 220px;
			padding: 0 15px;
			padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
			padding-bottom: env(safe-area-inset-bottom) !important; //兼容 IOS>11.2

			.integral_item {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 12px 0;
				border-bottom: 1px solid rgba(0, 0, 0, .1);

				.integral_item_left {
					flex: 7;

					.title {
						color: #303133;
						font-size: 16px;
						font-weight: bold;
					}

					.time {
						color: #919499;
						font-size: 12px;
						margin-top: 2px;
					}
				}

				.integral_item_right {
					display: flex;
					align-items: center;
					color: #0E1E75;
					font-size: 16px;

					.icon {
						font-size: 8px;
					}
				}
			}
		}
	}
</style>
