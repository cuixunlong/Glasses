<template>
	<view class="invita">
		<!-- <view class="empty" v-if="invitaList.length == 0">
				<u-image src="/static/user_info/order_empty.png" mode="widthFix"/>
			<view class="empty_title">还没有邀请好友</view>
		</view> -->
		<u-empty v-if="invitaList.length == 0" text="还没有邀请好友" mode="history" margin-top="200" iconSize="130px"></u-empty>
		<view class="invita_list" v-else>
			<view class="invita_item" v-for="(item,index) in invitaList" :key="index">
				<u-image :src="item.face" mode="widthFix" v-if="item.face != ''" shape="circle"/>
				<view class="invita_info">
					<view class="number">{{item.mobile}}</view>
					<view class="time">{{item.create_time}}</view>
				</view>
				<view class="coupon">{{item.coupon}}</view>
			</view>
		</view>
		<u-loadmore :status="status" font-size="20" color="#C2C5CC" :icon-type="iconType" :load-text="loadText"
			v-if="invitaList.length != 0" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invitaList: [],
				paramsData: {
					page: '1',
					limit: '10'
				},
				totalPages: 1, //总页数
				status: 'loadmore',
				iconType: 'circle',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '加载中',
					nomore: '只有这么多啦'
				},
			}
		},
		//上拉加载
		onReachBottom() {
			// 判断当前页是否大于等于总页数
			if (this.totalPages <= this.paramsData.page) {
				this.status = 'loading';
				setTimeout(() => {
					this.status = 'nomore';
				}, 1500)
			} else {
				this.paramsData.page++
				this.status = 'loading';
				setTimeout(() => {
					this.getList() // 每次滑动请求接口，实现上拉加载更多数据
				}, 1500)
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			getList() {
				this.$u.post('/ucenter/getInviteList', {
					page: this.paramsData.page,
					limit: this.paramsData.limit
				}).then(res => {
					if (res.error == 0) {
						if(this.totalPages <= this.paramsData.page){
							this.status = 'nomore';
						}
						this.totalPages = Math.ceil(res.data.count / this.paramsData.limit)
						res.data.items.filter(item => {
							item.mobile = item.mobile.replace(item.mobile.substr(3, 4), "****")
						})
						this.invitaList = [...this.invitaList, ...res.data.items]
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.invita {
		.invita_list {
			.invita_item:first-child {
				border-radius: 8px 8px 0 0;
			}

			.invita_item:last-child {
				border-radius: 0 0 8px 8px;
				border: none;
			}

			.invita_item {
				background-color: #fff;
				display: flex;
				align-items: center;
				padding: 16px 15px;
				border-bottom: 1px solid rgba(0, 0, 0, .1);
				box-sizing: border-box;

				image {
					width: 40px;
					border-radius: 50%;
				}

				.invita_info {
					flex: 7;
					margin-left: 12px;

					.number {
						font-size: 14px;
						color: #333333;
					}

					.time {
						color: #999999;
						font-size: 12px;
					}
				}

				.coupon {
					color: #0E1E75;
					font-size: 14px;
					font-weight: bold;
				}
			}
		}
	}
</style>
