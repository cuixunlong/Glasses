<template>
	<view class="all_order">
		<view class="top">
			<view class="order_type" v-for="(item,index) in topList" :key="index" :class="{active:index===itemindex}"
				@click="orderType(index)">
				<text class="title">{{item}}</text>
			</view>
		</view>
		<view class="empty" v-if="orderList.length == 0">
			<!-- #ifndef MP-TOUTIAO -->
			<u-image src="/static/user_info/order_empty.png" mode="widthFix" />
			<!-- #endif -->
			<!-- #ifdef MP-TOUTIAO -->
			<image src="../..//static/user_info/order_empty.png" mode="widthFix" />
			<!-- #endif -->
			<view class="empty_title">暂无订单</view>
		</view>
		<view class="order_list" v-else>
			<view class="order" v-for="(item,index) in orderList" :key="item.order_id">
				<navigator :url="'orderDetails?order_id='+item.order_id" hover-class="none">
					<view class="info">
						<view class="infoImg">
							<!-- <u-image :src="item.goods_cover" mode="" /> -->
							<image src="../../static/details/glasses1.jpg" mode=""></image>
						</view>
						<view class="info_item">
							<view class="item_top">
								<view class="goods_title">{{item.goods_name}}</view>
								<view class="number">x{{item.goods_num}}</view>
							</view>
							<view class="item_bottom">
								<view class="distribu">{{item.need_time}}</view>
								<view class="number">
									<view>共{{item.goods_num}}件</view>
									<view class="goods_price">￥{{item.amount}}</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 操作 -->
					<view class="operation">
						<view class="time">{{item.create_time}}</view>
						<view class="state">{{item.order_status_text}}</view>
						<view class="order_detail">订单详情</view>
					</view>
				</navigator>
			</view>
		</view>
		<u-loadmore :status="status" fontSize="20" color="#C2C5CC" :icon-type="iconType" :load-text="loadText"
			v-if="orderList.length != 0" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [
					'全部', '派送中', '已完成',
				],
				paramsData: {
					page: '1',
					limit: '10'
				},
				itemindex: 0,
				orderList: [{
					goods_name: 'BOLON暴龙眼镜框商务休闲眉框合金光学镜架BJ7130',
					goods_num: 1,
					need_time:'2024-01-11',
					amount:999
				}],
				totalPages: 1, //总页数
				status: 'loadmore',
				iconType: 'circle',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '加载中',
					nomore: '暂无更多订单'
				},
				order_status: 0, //订单类型
			}
		},
		onLoad() {
			this.getList()
		},
		//下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				this.paramsData.page = 1
				this.paramsData.limit = 15
				this.$u.post('/ucenter/getMemberMoneyLog', {
					page: this.paramsData.page,
					limit: this.paramsData.limit
				}).then(res => {
					if (res.error == 0) {
						this.detailedList = []
						this.detailedList = res.data.items
						uni.stopPullDownRefresh(); //停止当前页面下拉刷新
					}
				})
			}, 1500)
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
		onShow() {},
		methods: {
			// 获取订单列表
			getList() {
				if (uni.getStorageSync('token') === '') {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
					// setTimeout(()=>{
					// 	uni.reLaunch({
					// 		url:'../login/login'
					// 	})
					// },1000)
				} else if (uni.getStorageSync('is_bind') == 0) {
					uni.clearStorageSync()
				} else {
					this.$u.post('/order/getOrderList', {
						order_status: this.order_status,
						page: this.paramsData.page,
						limit: this.paramsData.limit
					}).then(res => {
						if (res.error == 0) {
							this.totalPages = Math.ceil(res.data.count / this.paramsData.limit)
							res.data.items.forEach(item => {
								if (item.need_time == '') {
									item.need_time = '立即配送'
								} else {
									if (item.need_time.substr(item.need_time.length - 1, 1) == '-') {
										item.need_time = item.need_time.slice(0, item.need_time.length - 1)
									}
								}
								if (item.need_time != '立即配送') {
									item.need_time = item.need_time.substring(0, 10) + ' ' + item.need_time
										.substring(11 + 1);
								}
								console.log(item.need_time)
							})
							this.orderList = [...this.orderList, ...res.data.items]
							if (this.totalPages <= this.paramsData.page) {
								this.status = 'nomore';
							}
						}
					})
				}
			},
			changeList() {
				this.orderList = ''
				this.paramsData.page = 1
				this.$u.post('/order/getOrderList', {
					order_status: this.order_status,
					page: this.paramsData.page,
					limit: this.paramsData.limit
				}).then(res => {
					if (res.error == 0) {
						this.totalPages = Math.ceil(res.data.count / this.paramsData.limit)
						res.data.items.forEach(item => {
							if (item.need_time == '') {
								item.need_time = '立即配送'
							} else {
								if (item.need_time.substr(item.need_time.length - 1, 1) == '-') {
									item.need_time = item.need_time.slice(0, item.need_time.length - 1)
								}
							}
							if (item.need_time != '立即配送') {
								item.need_time = item.need_time.substring(0, 10) + ' ' + item.need_time
									.substring(11 + 1);
							}
							console.log(item.need_time)
						})
						this.orderList = res.data.items
						console.log(this.orderList)
						if (this.totalPages <= this.paramsData.page) {
							this.status = 'nomore';
						}
					}
				})
			},
			orderType(index) {
				if (index == 0) {
					this.order_status = 0
					console.log(this.order_status)
					this.changeList()
				} else if (index == 1) {
					this.order_status = 3
					this.changeList()
				} else if (index == 2) {
					this.order_status = 4
					console.log(this.order_status)
					this.changeList()
				}
				this.itemindex = index
			}
		},
	}
</script>

<style lang="less">
	page {
		background-color: #F8F7FC;
	}

	.all_order {
		overflow: hidden;
		height: auto;
		padding-bottom: 12px;

		.top {
			height: 44px;
			width: 100%;
			display: flex;
			align-items: center;
			font-size: 14px;
			padding: 0 10px;
			position: fixed;
			top: 0;
			z-index: 10000;
			background-color: #fff;
			box-sizing: border-box;

			.order_type {
				flex: 1;
				text-align: center;
				font-size: 12px;
				color: #8F9399;
				position: relative;

				.title {
					border-bottom: 2px solid #fff;
					padding-bottom: 2px;
					box-sizing: border-box;
				}
			}

			.active {
				.title {
					font-size: 14px;
					font-weight: bold;
					color: #0E1E75;
					border-bottom: 2px solid #0E1E75;
				}
			}
		}


		.order_list {
			margin: 0 15px;
			padding-bottom: 12px;
			margin-top: 56px;

			.order:last-child {
				margin-bottom: 0;
			}

			.order {
				background-color: #FFFFFF;
				border-radius: 8px;
				margin-bottom: 12px;
				padding: 12px;

				.info {
					display: flex;

					.info_item {
						width: 100%;
						margin-left: 12px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.item_top {
							display: flex;
							justify-content: space-between;
							margin-bottom: 20px;

							.goods_title {
								font-size: 14px;
								font-weight: bold;
							}

							.number {
								font-size: 14px;
								color: #303133;
							}
						}

						.item_bottom {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							margin-top: 3px;
							font-size: 12px;
							color: #8F9399;

							.send_time {
								margin-bottom: 3px;
								color: #8F9399;
								font-size: 12px;
							}

							.number {
								display: flex;
								align-items: center;

								.goods_price {
									margin-left: 7px;
									color: #0E1E75;
									font-size: 14px;
									font-weight: bold;
								}
							}
						}
					}

					image {
						width: 100px;
						height: 100px;
						border-radius: 6px !important;
						vertical-align: middle;
					}
				}

				.operation {
					margin-top: 11px;
					display: flex;
					align-items: center;
					color: #BFC4CC;
					font-size: 12px;

					.state {
						margin-left: 12px;
						flex: 7;
					}

					.order_detail {
						width: 70px;
						height: 24px;
						line-height: 24px;
						text-align: center;
						background: #0E1E75;
						border-radius: 4px;
						color: #FFFFFF;
						font-size: 12px;
					}
				}
			}
		}
	}
</style>