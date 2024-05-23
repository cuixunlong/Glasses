<template>
	<view class="remarks">
		<view class="remarks_input">
			<u-input type="textarea" v-model="remarks" height="260" placeholder="请输入口味、偏好等要求~" :clearable="false" maxlength="50" @input="value"/>
			<view class="number">
				<view class="remarks_length">{{remarks.length}}</view>/50
			</view>
		</view>
		<view class="finish" @click="finish">完成</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				remarks:'',
			}
		},
		onLoad() {
			this.remarks = uni.getStorageSync('remarks')//获取之前备注
		},
		methods:{
			finish(){
				uni.setStorageSync('remarks', this.remarks);
				uni.navigateBack({})
			},
			value(){
				if(this.remarks.length>=50){
					uni.showToast({
						title: "最多输入50个字",
						duration: 2000,
						icon: 'none'
					});
				}
			}
		}
		
	}
</script>

<style lang="less">
	.remarks{
		padding: 12px 15px;
		.remarks_input{
			background-color: #F7F7F7;
			height: 133px;
			border-radius: 8px;
			position: relative;
			.u-input__input {
				padding: 8px;
			}
			.number{
				display: flex;
				position: absolute;
				bottom: 8px;
				right: 8px;
				.remarks_length{
					color: #8F9399;
				}
			}
		}
		.finish{
			margin-top: 24px;
			background-color: #0E1E75;
			text-align: center;
			height: 32px;
			line-height: 32px;
			color: #FFFFFF;
			border-radius: 16px;
			font-size: 14px;
		}
	}
</style>
