<template>
	<view class="same_day">
		<view class="same_day_content">
			<scroll-view scroll-y class="same_day_left">
				<view v-for="(item,index) in list" :key="item.sid" class="same_day_left_item"
					@click="choose(item,index)" :class="{active:itemIndex===index}">
					<view class="line" v-show="itemIndex===index"></view>
					<view class="same_day_left_info">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" :show-scrollbar="false" class="same_day_right">
				<view class="right_box">
					<u-image :src="list[itemIndex].logo" mode="widthFix" class="cake_top_image" border-radius="10px" />
					<u-loadmore :status="status" v-if="goodsInfo.length == 0" :load-text="loadText" color="#C2C5CC"
						fontSize="20" margin-top='20' />
					<view class="same_day_right_list">
						<view class="same_day_right_item" v-for="(item,index) in goodsInfo" :key="item.goods_id"
							@click="toDetail(item)">
							<u-image :src="item.logo" mode="" class="same_day_right_item_image" />
							<view class="item_text">
								<view class="title">{{item.name}}</view>
								<u-parse class='info' :html="item.title"></u-parse>
								<view class="price">
									<view class="price_number">￥{{item.price}}</view>
									<image src="../../static/sort/jia.png" mode="widthFix" />
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemIndex: 0,
				list: [], //商品分类
				goodsInfo: [], //商品信息
				stock: 1,
				status: 'nomore',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '该品类暂未上架'
				}
			}
		},
		onLoad() {
			this.itemIndex = 0
		},
		onShow() {
			// 获取分类列表
			this.$u.post('/index/getGoodsSort').then(res => {
				if (res.error == 0) {
					this.list = res.data.items
					this.choose(this.list[this.itemIndex], this.itemIndex)
				}
			})
		},
		methods: {
			choose(item, index) {
				// 获取商品列表
				this.$u.post('/index/getGoodsList', {
					sid: item.sid,
					stock: this.stock
				}).then(res => {
					console.log(res.data)
					if (res.error == 0) {
						this.goodsInfo = res.data.items
					}
				})
				this.itemIndex = index
			},
			toDetail(item) {
				this.$u.route('/pages/index/detail', {
					goods_id: item.goods_id,
					stock: this.stock
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F8F7FC;
	}

	.same_day {
		box-sizing: border-box;
		display: flex;
		padding-bottom: constant(safe-area-inset-bottom) !important; //兼容 IOS<11.2
		padding-bottom: env(safe-area-inset-bottom) !important; //兼容 IOS>11.2

		.same_day_content {
			flex: 1;
			display: flex;

			.same_day_left {
				background-color: #FFFFFF;
				text-align: center;
				width: 100px;
				height: 100vh;

				::-webkit-scrollbar {
					display: none;
					width: 0;
					height: 0;
					color: transparent;
				}

				.same_day_left_item {
					height: 52px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 12px;
					color: rgba(14, 30, 117, 0.5);
					background-color: #FFFFFF;
					position: relative;

					.line {
						width: 2px;
						height: 24px;
						background: #0E1E75;
						border-radius: 2px;
						position: absolute;
						left: 0;
						top: 13px;
					}

					.same_day_left_info {
						max-width: 90px;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
				}

				.active {
					background-color: #FFFFFF;
					color: #0E1E75;
					font-weight: bold;
					font-size: 14px;
				}
			}

			.same_day_right {
				flex: 1;
				height: 100vh;

				::-webkit-scrollbar {
					display: none;
					width: 0;
					height: 0;
					color: transparent;
				}

				.right_box {
					padding: 0 12px;
					padding-bottom: 12px;
					box-sizing: border-box;

					.cake_top_image {
						width: 100%;
						display: block;
						margin-top: 12px;
					}

					.same_day_right_top {
						padding-top: 12px;
						height: auto;
						overflow: hidden;
					}

					.same_day_right_list {
						width: 100%;
						padding-bottom: 12px;

						.same_day_right_item {
							display: flex;
							align-items: center;
							margin-top: 12px;

							image {
								width: 100px;
								height: 80px;
								border-radius: 10px !important;
								overflow: hidden;
								display: block;
							}

							.item_text {
								flex: 1;
								margin-left: 12px;

								.title {
									font-size: 12px;
									color: #606265;
									font-weight: bold;
									max-width: 130px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									margin-top: 2px;
								}

								.info {
									font-size: 10px;
									height: 30px;
									color: #BFC4CC;
									max-width: 130px;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									margin-top: 4px;
								}

								.price {
									display: flex;
									justify-content: space-between;
									align-items: center;

									.price_number {
										font-size: 16px;
										color: #0E1E75;
										font-weight: bold;
									}

									image {
										width: 24px;
										border-radius: 0 !important;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
