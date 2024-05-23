<template>
	<view class="user_agreen">
		<u-parse class="content" :html='userAgreen'></u-parse>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userAgreen:[]
			}
		},
		onLoad() {
			this.$u.post('/common/getUserAgreement').then(res=>{
				if(res.error == 0){
					this.userAgreen = res.data
				}else{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				}
			})
		}
	}
</script>

<style lang="less">
	.user_agreen{
		padding: 0 15px;
		padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
		padding-bottom: calc(env(safe-area-inset-bottom) + 15px) !important; //兼容 IOS>11.2
		.content{
			
		}
	}
</style>
