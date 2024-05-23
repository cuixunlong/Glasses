<template>
	<view class="user_data">
		<view class="user_data_info">
			<view class="user_item">
				<view class="user_item_head">
					<u-image :src="userInfo.face" mode="widthFix" class="head_image" shape="circle" />
				</view>
			</view>
			<view class="user_item">
				<u-modal v-model="nameshow" title="修改昵称" :show-cancel-button="true" width="90%" @confirm="changeName"
					 confirm-color="#0E1E75">
					<input type="text" value="" class="name_input" v-model="newName" maxlength="15" />
				</u-modal>
				<u-cell-item title="昵称" :value="userInfo.nickname" @click="openname" :arrow="false" hover-class="none">
				</u-cell-item>
			</view>
				<view class="user_item">
					<u-cell-item title="电话" :value="userInfo.mobile" :arrow="false" hover-class="none">
					</u-cell-item>
				</view>
			<view class="user_item">
				<u-picker mode="time" :default-time="defaultTime" :end-year="endYear" v-model="labshow"
					@confirm="getData" confirm-color="#0E1E75"></u-picker>
				<u-cell-item title="生日" :value="userInfo.birthday" @click="openlab" :arrow="true" arrow-direction="down"
					hover-class="none" confirm-color="#0E1E75">
				</u-cell-item>
			</view>
			<view class="user_item">
				<u-select v-model="sexShow" :default-value="defaultValue" :list="sexList" @confirm="getSex"
					confirm-color="#0E1E75"></u-select>
				<u-cell-item title="性别" :value="userInfo.sex" @click="openSex" :arrow="true" arrow-direction="down"
					hover-class="none">
				</u-cell-item>
			</view>
			<view class="user_item">
				<u-cell-item title="账户抵用金" :value="userInfo.voucher_money" :arrow="false" hover-class="none">
				</u-cell-item>
			</view>
		</view>
		<view class="outSign" @click="outSign">退出登录</view>
		<u-modal v-model="show" content="确认退出吗" :title-show="false" :show-cancel-button="true" confirm-text="退出"
			cancel-text="取消" confirm-color="#0E1E75" @confirm="outConfirm" @cancel="outCancel"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: [],
				labshow: false,
				nameshow: false,
				sexShow: false,
				show: false,
				defaultTime: '',
				endYear: '',
				newName: '',
				defaultValue: [0],
				sexList: [{
						value: '0',
						label: '男'
					},
					{
						value: '1',
						label: '女'
					}
				],
			}
		},
		onLoad() {
			this.getInfo()
			//设置生日年份最小为今年
			var date = new Date();
			var year = date.getFullYear();
			this.endYear = year
		},
		methods: {
			getInfo() {
				//获取用户信息
				this.$u.post('/ucenter/getUserInfo').then(res => {
					if (res.error == 0) {
						if (res.data.birthday == null) {
							res.data.birthday = '请选择生日'
						} else {
							res.data.birthday = res.data.birthday.substr(0, 10)
							this.defaultTime = res.data.birthday
						}
						if (res.data.sex == 1) {
							res.data.sex = '男'
							this.defaultValue = [0]
						} else if (res.data.sex == 2) {
							res.data.sex = '女'
							this.defaultValue = [1]
						} else {
							res.data.sex = '请选择性别'
						}
						this.newName = res.data.nickname
						this.userInfo = res.data
					}
				})
			},
			// 打开选中生日
			openlab() {
				this.labshow = !this.labshow
			},
			// 选择生日
			getData(e) {
				this.$u.post('/ucenter/editUserBirthday', {
					birthday: e.year + '-' + e.month + '-' + e.day
				}).then(res => {
					if (res.error == 0) {
						uni.showToast({
							title: '保存成功',
							icon: 'none'
						});
						this.defaultTime = e.year + '-' + e.month + '-' + e.day
						this.getInfo()
					}
				})
			},
			// 修改昵称
			openname() {
				this.nameshow = !this.nameshow
			},
			changeName() {
				console.log(this.newName)
				this.$u.post('/ucenter/editUserNickName', {
					nickname: this.newName
				}).then(res => {
					this.getInfo()
					uni.showToast({
						title: '保存成功',
						icon: 'none'
					});
				})
			},
			// // 取消修改昵称
			// cancel() {
			// 	this.newName = this.userName
			// },
			// 打开性别
			openSex() {
				this.sexShow = true
			},
			getSex(e) {
				console.log(typeof(e[0].value))
				var sex = ''

				this.$u.post('/ucenter/editUserSex', {
					sex: +e[0].value + 1
				}).then(res => {
					if (res.error == 0) {
						this.defaultValue = [e[0].value]
						this.getInfo()
						uni.showToast({
							title: '保存成功',
							icon: 'none'
						});
					}
				})
			},
			// 退出登录
			outSign() {
				this.show = true
			},
			outConfirm() {
				uni.clearStorageSync();
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #FFFFFF;
	}

	.user_data {
		background-color: #FFFFFF;
		padding: 0 15px;
		margin: 12px 0;

		.user_item {
			text-align: center;

			/deep/.u-model__title {
				font-size: 14px;
				font-weight: bold;
				color: #303133;
			}

			/deep/ .u-cell_title {
				font-size: 16px;
				color: #303133;
				font-weight: bold;
			}

			/deep/.u-cell__value {
				color: #0E1E75;
				font-size: 14px;
				font-weight: bold;
			}

			/deep/.u-icon__icon {
				color: #0E1E75;
			}

			.user_item_head {
				display: flex;
				justify-content: center;
				margin: auto 0;
				height: auto;
				position: relative;
				margin-bottom: 11px;

				image {
					width: 72px;
					border-radius: 50%;
					box-sizing: border-box;
				}

				.new_header {
					width: 72px;
					position: absolute;
					left: 50%;
					top: 75%;
					transform: translate(-50%, -50%);
				}
			}

			.u-cell {
				padding: 16px 0px;
			}

			.u-cell_title {
				color: #303133;
			}
		}

		.name_input {
			border: 1px solid #BFC4CC;
			background: #F5F5F5;
			box-sizing: border-box;
			height: 36px;
			padding: 0 10px;
			margin: 16px 22px;
			margin-bottom: 31px;
			border-radius: 4px;
			font-size: 12px;
			text-align: left;
			color: #303133;
		}

		.outSign {
			background-color: #0E1E75;
			width: 100%;
			color: #FFFFFF;
			font-size: 14px;
			text-align: center;
			padding: 8px 0;
			border-radius: 18px;
			margin-top: 117px;
		}
	}
</style>
