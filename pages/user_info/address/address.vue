<template>
	<view class="administration">
		<view class="empty" v-if="addressList.length===0">
			<u-image src="/static/user_info/address_empty.png" mode="widthFix"></u-image>
			<view class="empty_title">没有收货地址</view>
		</view>
		<u-modal v-model="delShow" content="确定删除吗" :show-title="false" :show-cancel-button="true"
			confirm-color="#0E1E75" @confirm="sure"></u-modal>
		<view class="address_list .padd_auto" v-if="addressList.length != 0">
			<view class="address_item" v-for="(item, index) in addressList" :key="item.address_id">
				<view class="address">
					<view class="top_info" @click="chooseAdd(item,index)">
						<view class="name_num">
							<text class="name">{{item.contacts}}</text>
							<text class="number">{{item.contacts_phone}}</text>
						</view>
						<view class="detailed_address">
							<text>{{item.address}}</text>
						</view>
					</view>
					<view class="btn_list">
						<view class="left_check" @click="isDefault(item)">
							<view class="check_box" :class="{is_check:item.is_default == 1}">
							</view>
							<view class="is_default">设为默认</view>
						</view>
						<view class="right_btn">
							<view class="btn" @click="deleteI(item)">删除</view>
							<view class="btn" @click="toDetail(item)">编辑</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="preservation h_auto bg_btn">
			<view class="btn" @click="newAddress">
				<u-icon name="plus"></u-icon>
				<text>新建收货地址</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				delShow: false, //删除显示
				delId: '', //删除的地址id
				addressList: [], //地址列表
				id: '', //判断从那个页面进入
			}
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id
		},
		onShow() {
			this.getAdd()
		},
		methods: {
			// 获取地址列表方法
			getAdd() {
				this.$u.post('/ucenter/getUserRegions').then(res => {
					if (res.error == 0) {
						this.addressList = res.data.items
					}
				})
			},
			// 添加新地址
			newAddress() {
				uni.navigateTo({
					url: "newAddress"
				})
			},
			// 选择地址返回
			chooseAdd(item, index) {
				if (this.id == 1) {
					uni.$emit("address_id", {
						address_id: JSON.stringify(this.addressList[index].address_id),
					});
					//返回页面
					uni.navigateBack({});
				} else {
					uni.navigateTo({
						url: 'editAddress?address_id=' + item.address_id
					})
				}
			},
			// 查看地址详情
			toDetail(item) {
				uni.navigateTo({
					url: 'editAddress?address_id=' + item.address_id
				})
			},
			// 设置默认地址
			isDefault(item) {
				if (item.is_default == 0) {
					item.is_default = 1
				} else {
					item.is_default = 0
				}
				this.$u.post('/ucenter/editUserRegion', item).then(res => {
					if (res.error == 0) {
						uni.showToast({
							title: '设置成功',
							duration: 2000,
							icon: 'none',
							success: () => {
								this.getAdd()
							}
						})
					}
				})
			},
			// 是否删除地址
			deleteI(item) {
				this.delShow = true
				this.delId = item.address_id
			},
			// 删除地址
			sure() {
				this.$u.post('/ucenter/delUserRegion', {
					address_id: this.delId
				}).then(res => {
					this.getAdd()
					uni.showToast({
						title: '删除成功',
						duration: 2000,
						icon: 'none',
					})
				})
			},
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.administration {
		font-size: 14px;

		.address_list {
			background-color: #F3F4F5;
			padding-bottom: 90px;
			padding: 12px 15px;
			height: auto;
			overflow: hidden;

			.address_item {
				margin-bottom: 15px;

				.address {
					background-color: #FFFFFF;
					position: relative;
					border-radius: 8px;

					.top_info {
						flex: 7;
						border-bottom: 1px solid rgba(0, 0, 0, .1);
						padding: 12px;
						padding-bottom: 8px;

						.name_num {
							font-size: 14px;
							display: flex;
							align-items: center;

							.name {
								color: #303133;
								font-size: 16px;
								font-weight: bold;
							}

							.number {
								margin-left: 4px;
								color: #999999;
							}

							.default {
								margin-left: 8px;
								display: flex;
								align-items: center;

								image {
									width: 30px;
									margin: auto 0;
								}
							}
						}

						.detailed_address {
							width: 100%;
							font-size: 14px;
							margin-top: 4px;
							color: #999999;
							display: -webkit-box;
							overflow: hidden;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: (2);
						}
					}

					.btn_list {
						padding: 8px 12px;
						display: flex;
						align-items: center;
						justify-content: space-between;

						/deep/.u-radio__label {
							font-size: 12px !important;
						}

						.left_check {
							display: flex;
							align-items: center;

							.is_default {
								margin-left: 4px;
								color: #333333;
								font-size: 12px;
							}

							.check_box {
								width: 16px;
								height: 16px;
								background: #FFFFFF;
								border: 1px solid #BFC4CC;
								border-radius: 50%;
								opacity: 1;
							}

							.is_check {
								background-image: url(../../../static/index/checked.png);
								background-size: 100%;
								border: none;
								width: 16px;
								height: 16px;
								box-sizing: border-box;
								border-radius: 50%;
							}
						}

						.right_btn {
							display: flex;
							align-items: center;

							.btn:first-child {
								margin-right: 12px;
							}

							.btn {
								width: 52px;
								height: 24px;
								background: #FFFFFF;
								border: 1px solid #666666;
								border-radius: 4px;
								display: flex;
								align-items: center;
								justify-content: center;
								box-sizing: border-box;
								font-size: 14px;
							}
						}
					}

					.icon {
						margin: auto 0;
						font-size: 16px;
						margin-left: 22px;
						color: #8F9399;
					}

					.right-icon {
						margin: auto 0;
						margin-right: 15px;
						margin-left: 28px;
						padding-bottom: 12px;
					}
				}
			}
		}

		.bg_btn {
			background-color: #F3F4F5;
		}
	}
</style>
