<template>
	<view class="success">
		<view class="success_top">
			<!-- <image src="../../static/index/pay_success.png" mode="widthFix" class="success_img"></image> -->
			<u-image src="/static/index/pay_success.png" mode="widthFix" class="success_img"></u-image>
			<view class="success_title">恭喜您，支付成功</view>
		</view>
		<view class="btn_list">
			<view class="back_index" @click="toIndex">返回首页</view>
			<view class="all_order" @click="toAll">查看订单</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			toAll(){
				uni.switchTab({
					url:'order'
				})
			}
		}
	}
</script>

<style lang="less">
	.success{
		.success_top{
			width: 100%;
			text-align: center;
			image{
				display: block;
				width: 200px;
				margin: 0 auto;
				margin-top: 60px;
			}
			.success_title{
				text-align: center;
				color: #919499;
				font-size: 16px;
				margin-top: 14px;
			}
		}
		.btn_list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 14px;
			margin-top: 108px;
			padding:  0 15px;
			.back_index{
				width: 48%;
				height: 36px;
				line-height: 36px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #0E1E75;
				border-radius: 18px;
				box-sizing: border-box;
				color: #0E1E75;
			}
			.all_order{
				width: 48%;
				height: 36px;
				line-height: 36px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 18px;
				color: #fff;
				background-color: #0E1E75;
			}
		}
	}
</style>
