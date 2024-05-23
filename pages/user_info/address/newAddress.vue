<template>
	<view class="new_address">
		<view class="name_num">
			<view class="from">
				<view class="from_item">
					<view class="item_name">收货人</view>
					<u-input class="content" placeholder="填写收货人姓名" v-model="form.contacts"
						placeholderStyle="color:#8F9399;font-weight:normal;font-size:12px" />
				</view>
				<view class="from_item">
					<view class="item_name">手机号码</view>
					<u-input class="content" placeholder="填写收货人手机号" v-model="form.contacts_phone"
						placeholderStyle="color:#8F9399;font-weight:normal;font-size:12px" />
				</view>
			</view>
		</view>
		<view class="area">
			<view class="from_item" @click="areaShow =true">
				<view class="item_name">所在地区</view>
				<u-input class="content" v-model="area" placeholder="选择所在地区"
					placeholderStyle="color:#8F9399;font-weight:normal;font-size:12px" @click="areaShow =true"
					disabled="true" />
				<u-picker mode="region" v-model="areaShow" @confirm="chooseArea" confirm-color="#0E1E75"></u-picker>
				<view class="iconfont icon-right icon_right"></view>
			</view>
			<view class="from_item">
				<view class="item_name">详细地址</view>
				<u-input type="textarea" placeholderStyle="color:#8F9399;font-weight:normal;font-size:12px"
					class="content" placeholder="小区、楼牌号等" v-model="form.address" />
			</view>
		</view>
		<view class="default">
			<text>设置为默认地址</text>
			<view class="switch">
				<u-switch v-model="checked" @change="change" active-color="#0E1E75"></u-switch>
			</view>
		</view>
		<view class="preservation h_auto">
			<view class="btn" @click="saveBtn">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				areaShow: false,
				Height: 0,
				area: '',
				form: {
					area_path: '',
					contacts: '',
					contacts_phone: '',
					address: '',
					is_default: 0
				}
			}
		},
		onLoad() {},
		methods: {
			saveBtn() {
				this.$u.throttle(this.save, 1000)
			},
			save() {
				//判断用户信息
				if ((this.$u.test.isEmpty(this.form.contacts)) == true) {
					uni.showToast({
						title: '联系人不能为空',
						icon: 'none'
					})
				} else if (this.$u.test.rangeLength(this.form.contacts, [1, 8]) == false) {
					uni.showToast({
						title: '请输入正确的联系人',
						icon: 'none'
					})
				} else if (this.$u.test.mobile(this.form.contacts_phone) == false) {
					uni.showToast({
						title: '请输入正确的联系方式',
						icon: 'none'
					})
				} else if ((this.$u.test.isEmpty(this.area)) == true) {
					uni.showToast({
						title: '请选择所在地区',
						icon: 'none'
					})
				} else if (this.$u.test.isEmpty(this.form.address) == true) {
					uni.showToast({
						title: '请填写详细地址',
						icon: 'none'
					})
				} else {
					this.$u.post('/ucenter/addUserRegion', this.form).then(res => {
						if (res.error == 0) {
							uni.showToast({
								title: '添加成功',
								duration: 2000,
								icon: 'success'
							});
							setTimeout(() => {
								uni.navigateBack({})
							}, 1000)
						}
					})
				}
			},
			chooseArea(e) {
				console.log(e)
				this.area = e.province.label + ' ' + e.city.label + ' ' + e.area.label;
				this.form.area_path = [e.province.value, e.city.value, e.area.value]
			},
			// 设置是否为默认地址
			change(status) {
				console.log(status)
				if (this.checked == true) {
					this.form.is_default = 1
				} else {
					this.form.is_default = 0
				}
			},
		}
	}
</script>
<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.new_address {
		background-color: #F3F4F5;

		.top {
			padding: 10px 15px;
			background-color: #FFFFFF;
			display: flex;
			line-height: 21px;

			.title {
				flex: 7;
				text-align: center;
				font-size: 16px;
			}

			.detail {
				color: #8F9399;
				font-size: 12px;
			}
		}

		.name_num {
			background-color: #FFFFFF;
			margin-bottom: 12px;

			.from {
				.from_item:last-child {
					border: none;
				}

				.from_item {
					display: flex;
					align-items: center;
					font-size: 14px;
					border-bottom: 1px solid rgba(0, 0, 0, .1);

					.item_name {
						width: 75px;
						margin-left: 20px;
						padding: 12px 0;
						color: #666666;
					}

					.content {
						flex: 1;
						color: #333333;
						margin-right: 20px;
					}

					/deep/.u-input__input {
						color: #333333 !important;
						padding: 12px 0 !important;
						min-height: 0 !important;
					}
				}
			}
		}

		.area {
			background-color: #FFFFFF;
			margin-bottom: 12px;

			.from_item:last-child {
				border: none;
			}

			.from_item {
				display: flex;
				align-items: center;
				font-size: 14px;
				border-bottom: 1px solid rgba(0, 0, 0, .1);

				/deep/.u-input__input {
					color: #333333 !important;
					padding: 12px 0 !important;
					min-height: 0 !important;
				}

				.item_name {
					width: 75px;
					margin-left: 20px;
					padding: 12px 0;
					color: #666666;
				}

				.content {
					flex: 1;
					color: #333333;
					margin-right: 20px;
				}

				.icon_right {
					margin-right: 20px;
					font-size: 12px;
					color: #999999;
				}

			}
		}

		.default {
			background-color: #FFFFFF;
			height: 44px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			padding: 0 15px;
			color: #666;

			.switch {
				display: flex;
				align-content: center;
				/deep/.u-switch{
					display: block !important; 
				}
			}
		}


		.detail_address {
			/deep/.u-input__input {
				min-height: 0 !important;
			}
		}
	}
</style>
