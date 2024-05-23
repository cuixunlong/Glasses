<template>
	<view class="my_info">
		<u-empty text="消息列表为空" iconSize="130px" marginTop="200" mode="message" v-if="infoList.length == 0" ></u-empty>
		<view class="info_list" v-else>
			<view class="info_item" v-for="(item,index) in infoList" :key="item.msg_id">
				<view class="create_time">
					<text class="time">{{item.create_time}}</text>
				</view>
				<view class="uinfo_state">
					<view class="state_title">{{item.title}}</view>
					<view class="state_detail">{{item.content}}</view>
				</view>
			</view>
			<u-loadmore :status="status" :icon-type="iconType"fontSize="20" color="#C2C5CC" margin-top="24" :load-text="loadText" v-if="infoList.length != 0" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoList: [],
				totalPages: 1, //总页数
				status: 'loadmore',
				paramsData: {
					page: '1',
					limit: '10'
				},
				status: 'loadmore',
				iconType: 'circle',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '加载中',
					nomore: '暂无更多消息'
				},
			}
		},
		onShow() {
			this.getList()
		},
		//上拉加载
		onReachBottom() {
			// 判断当前页是否大于等于总页数
			console.log(this.totalPages)
			if (this.totalPages <= this.paramsData.page) {
				this.status = 'loading';
				setTimeout(() => {
					this.status = 'nomore';
				}, 1500)
			} else {
				this.paramsData.page++
				this.status = 'loading';
				setTimeout(() => {
					this.getList()
				}, 1500)
			}
		},
		methods: {
			// 获取信息列表
			getList() {
				this.$u.post('/ucenter/getLogMemberMsgList', {
					page: this.paramsData.page,
					limit: this.paramsData.limit
				}).then(res => {
					if (res.error == 0) {
						this.totalPages = Math.ceil(res.data.count / this.paramsData.limit)
						this.infoList = [...this.infoList, ...res.data.items]
						if(this.totalPages <= this.paramsData.page){
							this.status = 'nomore';
						}
					}
				})
			},
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.my_info {
		height: auto;
		overflow: hidden;
		background: #F3F4F5;
		padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
		padding-bottom: env(safe-area-inset-bottom) ; //兼容 IOS>11.2

		.info_list {
			height: auto;
			overflow: hidden;

			.info_item {
				margin-top: 24px;
				padding: 0 15px;
				.create_time{
					display: flex;
					justify-content: center;
					.time {
						color: #919499;
						font-size: 12px;
						background-color: #EBEBEB;
						border-radius: 4px;
						padding: 2px 8px;
						height: 21px;
					}
				}

				.uinfo_state {
					padding: 12px;
					margin-top: 12px;
					width: 100%;
					background: #FFFFFF;
					box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
					color: #919499;
					font-size: 12px;
					border-radius: 8px;

					.state_title {
						color: #000000;
						font-size: 16px;
						font-weight: bold;
						margin-bottom: 4px;
					}
				}
			}
		}
	}
</style>
