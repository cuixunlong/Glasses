<template>
	<view class="detailed">
		<view class="empty" v-if="detailedList.length == 0">
			<u-image src="/static/user_info/detail_emoty.png" mode="widthFix" />
			<view class="empty_title">暂时没有明细</view>
		</view>
		<view class="detailed_list">
			<view class="detailed_item" v-for="(item,index) in detailedList" :key="index">
				<view class="left">
					<view class="title">{{item.intro}}</view>
					<view class="time">{{item.create_time}}</view>
				</view>
				<view class="right">
					<view class="pay" v-show="item.type== 'sub'">-{{item.money}}</view>
					<view class="recharge" v-show="item.type== 'add'">+{{item.money}}</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" fontSize="24" margin-top="30" color="#C2C5CC" :icon-type="iconType" :load-text="loadText"
			v-if="detailedList.length != 0" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				iconType: 'flower',
				totalPages:'',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '已无更多明细'
				},
				detailedList: [],
				paramsData: {
					page: '1',
					limit: '15'
				},
			}
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			setTimeout(() => {
				this.status = 'loading';
			}, 2000)
			this.status = 'nomore';
		},
		methods:{
			getList(){
				this.$u.post('/ucenter/getMemberMoneyLog', {
					page: this.paramsData.page,
					limit: this.paramsData.limit
				}).then(res => {
					if (res.error == 0) {}
					this.totalPages = Math.ceil(res.data.count / this.paramsData.limit)
					this.detailedList = [...this.detailedList, ...res.data.items]
					if (this.totalPages <= this.paramsData.page) {
						this.status = 'nomore';
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.detailed {
		height: auto;
		overflow: hidden;
		padding-bottom: 12px;
		

		.detailed_list {
			.detailed_item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				// height: 65px;
				padding: 12px 20px;
				height: auto;
				box-sizing: border-box;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);

				.left {
					flex: 1;
					// margin-top: 12px;
					font-size: 14px;

					.title {
						// white-space: nowrap;
						// overflow: hidden;
						// text-overflow: ellipsis;
						max-width: 100%;
						font-weight: bold;
					}

					.time {
						font-size: 12px;
						margin-top: 2px;
						color: #919499;
					}
				}

				.right {
					// line-height: 65px;
					font-size: 14px;
					display: flex;
					justify-content: flex-end;
					font-weight: 500;
					color: #303133;
					margin-right: 10px;

					.pay {
						color: #FF5A5A;
					}
				}
			}
		}

		.more {
			margin-top: 9px;
			text-align: center;
			color: #C2C5CC;
			font-size: 10px;
		}
	}
</style>
