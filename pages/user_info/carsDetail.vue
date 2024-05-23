<template>
	<view class="cars_detail">
		<view class="cars_item">
			<view class="cars_cover">
				<!-- <image :src="carsInfo.card_cover" mode="widthFix" class="cars_image"></image> -->
				<u-image :src="carsInfo.card_cover" mode="widthFix" class="cars_image"/>
			</view>
			<view class="detail">
				<view class="title">详情</view>
				<view class="content">
					<view class="content_left">
						<view class="money">{{carsInfo.charge_money}}</view>
						<view class="">{{carsInfo.charge_money}}元消费金额</view>
					</view>
					<view class="content_right">
						<view class="">购买后包含:</view>					
						<view class="">拥有{{carsInfo.charge_money}}元充值金额</view>					
						<view class="">再赠送{{carsInfo.give_money}}元消费金额</view>					
					</view>
				</view>
			</view>
		</view>
		<view class="btn_list">
			<view class="total_price">￥{{carsInfo.charge_money}}</view>
			<view class="toPay" @click="toPay">去付款</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				checked:false,
				carsInfo:[]
			}
		},
		onLoad(option) {
			console.log(option)
			this.$u.post('/ucenter/getChargeConfigList').then(res => {
				if(res.error == 0){
					let arr =  res.data.items.filter(item=>{
						return item.id == option.id
					})
					this.carsInfo = arr[0]
					console.log(this.carsInfo)
				}
			})
		},
		methods:{
			toPay(){
				// uni.navigateTo({
				// 	url:'../order/payment'
				// })
				this.$u.post('/Payments/chargeMoney',{
					money:this.carsInfo.charge_money
				}).then(res => {
					if(res.error == 0){
						wx.requestPayment({
							timeStamp: res.data.timeStamp,
							nonceStr: res.data.nonceStr,
							package: res.data.package,
							signType: res.data.signType,
							paySign: res.data.paySign,
							success(res) {
								uni.showToast({
									title: '支付成功',
									duration: 2000,
									icon: 'success'
								});
								setTimeout(() => {
									console.log('123')
									uni.navigateBack({})
								}, 1000)
							},
							fail(res) {}
						})
					}
				})	
			}
		}
	}
</script>

<style lang="less">
	.cars_detail{
		.cars_item{
			padding: 0 15px;
			margin-top: 27px;
			.cars_cover{
				width: 100%;
				.cars_image{
					width: 100%;
					display: block;
				}
			}
			.detail{
				margin-top: 24px;
				color: #919499;
				font-size: 10px;
				.title{
					color: #303133;
					font-size: 16px;
					text-align: center;
					font-weight: bold;
				}
				.content{
					border: 1px solid #C2C6CC;
					box-sizing: border-box;
					border-radius: 10px;
					margin-top: 12px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 14px 67px 14px 24px;
					.content_left{
						text-align: center;
						.money{
							color: #0E1E75;
							font-size: 28px;
						}
					}
				}
			}
		}
		.btn_list{
			position: fixed;
			width: 100%;
			height: auto;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			padding: 10px 15px;
			.total_price{
				color: #F16464;
				font-size: 20px;
			}
			.toPay{
				color: #FFFFFF;
				font-size: 14px;
				padding: 8px 34px;
				background-color: #0E1E75;
				border-radius: 10px;
			}
			height: calc(48px+ constant(safe-area-inset-bottom));//兼容 IOS<11.2
			height: calc(48px + env(safe-area-inset-bottom));//兼容 IOS>11.2
			padding-bottom: constant(safe-area-inset-bottom);//兼容 IOS<11.2
			padding-bottom: env(safe-area-inset-bottom);//兼容 IOS>11.2
		}
	}
</style>
