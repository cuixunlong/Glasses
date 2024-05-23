<template>
	<view class="wallet">
		<view class="wallet_money">
			<view class="balance">
				<view class="">钱包余额</view>
				<navigator url="detailed" hover-class="none">
					<view class="">明细</view>
				</navigator>
			</view>
			<view class="wallet_money_number">{{money}}元</view>
		</view>
		<navigator url="memberCars" hover-class="none">
			<view class="wallet_btn">
				购买会员卡
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:10888,
			}
		},
		onShow() {
			//获取用户余额
			// this.$u.post('/ucenter/getUserInfo').then(res => {
			// 	if (res.error == 0) {
			// 		this.money = res.data.money
			// 	}
			// })
		},
		methods: {}
	}
</script>

<style lang="less">
	page {
		background-color: #FFFFFF;
	}

	.wallet {
		padding: 0 15px;

		.wallet_money {
			background-image: url(/static/user_info/wallet_bg.png);
			background-size: 100% 100%;
			box-shadow: 0px 0px 12px rgba(14, 30, 117, 0.2);
			height: 180px;
			margin-top: 20px;
			padding: 12px;
			color: #0E1E75;
			font-size: 16px;
			position: relative;
			border-radius: 8px;

			.balance {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
			}

			.wallet_money_number {
				font-size: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: translate(-50%, -50%);
				position: absolute;
				top: 50%;
				left: 50%;
			}

			.wallet_money_give {
				font-size: 12px;
				margin-top: 23px;
			}
		}

		.wallet_btn {
			width: 100%;
			margin: 0 auto;
			padding: 8px 0;
			text-align: center;
			color: #FFFFFF;
			background-color: #0E1E75;
			border-radius: 18px;
			margin-top: 32px;
		}
	}
</style>
