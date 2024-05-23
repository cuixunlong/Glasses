<template>
	<view class="cars">
		<view class="cars_list">
			<view class="cars_item" v-for="(item,index) in 3" :key="item.id">
				<!-- <navigator :url="'package?product_id='+ item.product_id" hover-class="none"> -->
				<navigator :url="'carsDetail?id='+item.id" hover-class="none">
					<view class="cars_image">
						<image :src="item.card_cover" mode="widthFix"></image>
						<!-- <u-image :src="item.card_cover" mode="widthFix"/> -->
					</view>
					<view class="cars_name">
						<view class="">{{charge_money}}元享卡</view>
						<view class="price">￥{{charge_money}}</view>
					</view>
					<view class="choose_item">
						<view class="recommend">推荐</view>
						<view class="choose">选择</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				carsList:{
					charge_money:'1000',
				}
			}
		},
		onLoad() {
			// this.$u.post('/ucenter/getChargeConfigList').then(res => {
			// 	if(res.error == 0){
			// 		this.carsList = res.data.items
			// 	}
			// })
		}
	}
</script>

<style lang="less">
	.cars{
		.cars_list{
			padding: 0 15px;
			padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
			padding-bottom: env(safe-area-inset-bottom) !important; //兼容 IOS>11.2
			.cars_item{
				margin: 0 auto;
				margin-top: 18px;
				.cars_image{
					image{
						width: 100%;
						display: block;
					}
				}
				.cars_name{
					margin-top: 14px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #303133;
					font-size: 14px;
					font-weight: bold;
					.price{
						color: #0E1E75;
						font-size: 16px;
					}
				}
				.choose_item{
					margin-top: 10px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.recommend{
						border: 1px solid #A6B5EC;
						box-sizing: border-box;
						border-radius: 4px;
						padding: 1px 11px;
						color: #A6B5EC;
						font-size: 10px;
					}
					.choose{
						background-color: #0E1E75;
						border-radius: 4px;
						color: #FFFFFF;
						font-size: 12px;
						padding: 2px 18px;
					}
				}
			}
		}
	}
</style>
