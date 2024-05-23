<template>
	<view class="activity">
		<u-parse class="article_content" :html="activityDetail.article_content"></u-parse>
		<view class="activity_cover">
			<!-- <image :src="activityDetail.cover_img" mode="widthFix"></image> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				activityDetail:[]
			}
		},
		onLoad(option) {
			this.$u.post('/index/getArticles', {
				article_id:option.article_id
			}).then(res=>{
				if(res.error == 0){
					this.activityDetail = res.data
					uni.setNavigationBarTitle({
						title: res.data.article_title
					})
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
	.activity{
		height: auto;
		overflow: hidden;
		.article_content{
			color: #303133;
			font-size: 14px;
			/deep/._ul-bef{
				display: none !important;
			}
		}
		.activity_cover{
			width: 100%;
			image{
				width: 100%;
				display: block;
			}
		}
	}
</style>
