<template>
	<view class="jinian_day">
		<u-modal v-model="delShow" content="确定删除吗" :show-title="false" :show-cancel-button="true"
			confirm-color="#0E1E75" @confirm="sure"></u-modal>
		<view class="empty" v-if="dayList.length == 0">
			<view class="empty_image">
				<!-- <image src="../../../static/user_info/detail_emoty.png" mode="widthFix"></image> -->
				<u-image src="/static/user_info/detail_emoty.png" mode="widthFix"/>
			</view>
			<view class="empty_title">暂无纪念日</view>
		</view>
		<view class="day_list">
			<view class="day_item" v-for="(item,index) in dayList" :key='item.memorial_id'>
				<view class="">
					<view class="day_title">{{item.memorial_title}}</view>
					<view class="day_time">{{item.memorial_day}}</view>
				</view>
				<view class="bnt_list">
					<view class="btn" @click="delClick(item)">删除</view>
					<view class="btn" @click="toDetail(item)">编辑</view>
				</view>
			</view>
		</view>
		<navigator url="newDay" hover-class="none" v-if="cannotAdd">
			<view class="preservation h_auto bg_btn">
				<view class="btn">
					<u-icon name="plus"></u-icon>
					<text>增加新的纪念日</text>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dayList: [],
				delIndex: 0,
				delShow: false,
				delId: '' //删除的纪念日id
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			// 获取纪念日列表
			getList() {
				this.$u.post('/ucenter/getMemberMemorialList').then(res => {
					if (res.error == 0) {
						this.dayList = res.data.items
					}
				})
			},
			// 询问是否删除
			delClick(item) {
				this.delId = item.memorial_id
				this.delShow = !this.delShow
			},
			// 删除
			sure() {
				this.$u.post('/ucenter/delMemberMemorial', {
					memorial_id: this.delId
				}).then(res => {
					if (res.error == 0) {
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						})
						this.getList()
					}
				})
			},
			// 查看详情
			toDetail(item) {
				uni.navigateTo({
					url: 'editDay?memorial_id=' + item.memorial_id
				})
			}
		},
		computed: {
			cannotAdd() {
				if (this.dayList.length >= 3) {
					return false
				} else {
					return true
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.jinian_day {
		.day_list {
			padding: 0 15px;

			.day_item:last-child {
				margin-bottom: 16px;
			}

			.day_item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 12px;
				margin-top: 16px;
				color: #000000;
				font-size: 16px;
				background: #FFFFFF;
				box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
				border-radius: 8px;

				.bnt_list {
					display: flex;

					.btn:first-child {
						margin-right: 12px;
					}

					.btn {
						width: 52px;
						height: 24px;
						box-sizing: border-box;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #FFFFFF;
						color: #666666;
						font-size: 14px;
						border: 1px solid #666666;
						border-radius: 4px;
					}
				}

				.day_time {
					color: #919499;
					font-size: 12px;
					margin-top: 8px;
				}

				.day_title {
					font-weight: bold;
				}
			}
		}

		.bg_btn {
			// background-color: #F3F4F5;
		}
	}
</style>
