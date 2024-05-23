<template>
	<view class="cake_page">
		<view class="top_swiper">
			<u-swiper :list="swiperList" mode="round" name="ad_image" height="420" border-radius="10" @click="toPage">
			</u-swiper>
		</view>
		<view class="page_content">
			<view class="page_content_icons_list">
				<!-- #ifndef MP-TOUTIAO -->
				<view class="page_content_icons_item" @click='mention'>
					<image src="../../static/index/self_mention.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">预约服务</view>
				</view>
				<!-- #endif -->
				<view class="page_content_icons_item" @click="sameDay">
					<image src="../../static/index/distribution.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">眼健康档案</view>
				</view>
				<view class="page_content_icons_item" @click="book">
					<image src="../../static/index/appointment.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">近视防控记录</view>
				</view>
			</view>
			<view class="page_content_icons_list">
				<!-- #ifndef MP-TOUTIAO -->
				<view class="page_content_icons_item" @click='mention'>
					<image src="../../static/index/self_mention.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">预约记录</view>
				</view>
				<!-- #endif -->
				<view class="page_content_icons_item" @click="sameDay">
					<image src="../../static/index/distribution.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">消费记录</view>
				</view>
				<view class="page_content_icons_item" @click="book">
					<image src="../../static/index/appointment.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">消息通知</view>
				</view>
				<view class="page_content_icons_item" @click="book">
					<image src="../../static/index/appointment.png" mode="" class="page_content_icon"></image>
					<view class="page_content_icon_title">视力自测</view>
				</view>
			</view>
		</view>
		<navigator url="../login/login" hover-class="none">
			<view class="index_sign" v-if="isLogin">
				<u-icon name="plus"></u-icon>添加萌主
			</view>
		</navigator>
		<view class="index_activity" :class="{is_login: isLogin == true}">
			<view class="index_activity_item" v-for="(item,index) in activity" :key="item.article_id"
				@click="activity_detail(item)">
				<u-image :src="item.cover_img" mode="widthFix" class="index_activity_image" />
				<view class="index_activity_content">
					<view class="index_activity_info">
						<view class="index_activity_info_title">{{item.article_title}}</view>
						<view class="index_activity_info_time">{{item.time}}</view>
					</view>
					<view class="index_activity_icon">
						<image src="../../static/index/jinru.png" mode="heightFix" class=""></image>
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
				Height: 0,
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/1.jpg',
					'https://cdn.uviewui.com/uview/swiper/2.jpg',
					'https://cdn.uviewui.com/uview/swiper/3.jpg',
				],
				activity: [],
				isLogin: '',
				show: false
			}
		},
		onLoad(option) {
			if (uni.getStorageSync('is_bind') == 0) {
				uni.clearStorageSync()
			}
			console.log(option)
			if (option.uid != undefined) {
				uni.setStorageSync('uid_key', option.uid)
			}
			if (option.qrcode != undefined) {
				uni.setStorageSync('uid_key', option.qrcode)
			}
			// 活动列表
			// this.$u.post('/index/getArticlesList').then(res => {
			// 	if (res.error == 0) {
			// 		this.activity = res.data.items
			// 	} else {
			// 		uni.showToast({
			// 			title: res.msg,
			// 			icon: 'none'
			// 		})
			// 	}
			// })
			//顶部伦播图
			// this.$u.post('/index/getAd', {
			// 	position_code: 'HomeBanner'
			// }).then(res => {
			// 	if (res.error == 0) {
			// 		this.swiperList = res.data.items
			// 	} else {
			// 		uni.showToast({
			// 			title: res.msg,
			// 			icon: 'none'
			// 		})
			// 	}
			// })

		},
		onShow() {
			if (uni.getStorageSync('token') == '') {
				this.isLogin = true
			} else {
				this.isLogin = false
			}
			console.log(this.$u.config.v);
		},
		methods: {
			//今日配送
			sameDay() {
				uni.navigateTo({
					url: 'sameDay'
				})
			},
			// 预约配送
			book() {
				wx.switchTab({
					url: '../book/book',
				})
			},
			// 新闻详情
			activity_detail(item) {
				uni.navigateTo({
					url: 'activity?article_id=' + item.article_id
				})
			},
			mention() {
				uni.navigateTo({
					url: './book/book',
				})
			},
			toPage(index) {
				console.log(this.swiperList[index])
				if (this.swiperList[index].link_type == "product") {
					uni.navigateTo({
						url: '../index/detail?goods_id=' + this.swiperList[index].ad_url
					})
				}
				if (this.swiperList[index].link_type == "article") {
					uni.navigateTo({
						url: 'activity?article_id=' + this.swiperList[index].ad_url
					})
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F8F7FC;
	}

	.cake_page {
		background-color: #F8F7FC;
		padding: 0 15px;
		height: auto;
		overflow: hidden;

		.top_swiper {
			margin-top: 15px;
			// background-color: red;
		}

		.page_content {
			width: 100%;
			// height: 65px;
			background: #fff;
			box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
			margin-top: 15px;
			font-size: 12px;
			border-radius: 10px;

			.page_content_icons_list {
				padding: 13px;
				display: flex;
				justify-content: space-around;

				.page_content_icons_item {
					text-align: center;
					// margin-top: -34px;

					.page_content_icon {
						width: 61px;
						height: 61px;
					}

					.page_content_icon_title {
						margin-top: 7px;
						color: #999;
						font-size: 12px;
					}

					.page_content_icon_info {
						margin-top: 18px;
						font-size: 10px;
						color: #7986B9;
					}
				}
			}
		}

		.index_sign {
			width: 100%;
			height: 40px;
			line-height: 40px;
			color: #ffffff;
			text-align: center;
			font-size: 14px;
			// background-color: rgba(166, 181, 236, 0.5);
			background-color: #28A9C7;
			border-radius: 10px;
			margin-top: 15px;
		}

		.is_login {
			margin-top: 40px !important;
		}

		.index_activity {
			height: auto;
			overflow: hidden;
			margin-top: 66px;

			.index_activity_image {
				width: 100%;
				vertical-align: middle
			}

			.index_activity_item {
				background-color: #FFFFFF;
				border-radius: 10px;
				margin-bottom: 16px;

				.index_activity_content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 7px 12px 8px 8px;

					.index_activity_info {
						font-size: 12px;
						flex: 7;

						.index_activity_info_title {
							font-weight: bold;
							color: #141F61;
							white-space: nowrap;
							overflow: hidden;
							max-width: 300px;
							text-overflow: ellipsis;
						}

						.index_activity_info_time {
							font-size: 10px;
							color: #999999;
							margin-top: 4px;
						}
					}
				}

				.index_activity_icon {
					display: flex;
					align-items: center;

					image {
						height: 15px;
					}
				}
			}
		}
	}
</style>