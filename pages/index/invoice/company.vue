<template>
	<view class="personal">
		<view class="personal_option">
			<view class="personal_option_item">
				<view class="title">发票抬头</view>
				<input v-model="info.invoice_head" class="content" placeholder="请输入公司名称(必填)" clearable="false" />
			</view>
			<view class="personal_option_item">
				<view class="title">纳税号识别号</view>
				<input v-model="info.invoice_code" class="content" placeholder="(必填)" clearable="false" />
			</view>
			<view class="personal_option_item">
				<view class="title">注册地址</view>
				<input v-model="info.address" class="content" placeholder="(选填)" clearable="false" />
			</view>
			<view class="personal_option_item">
				<view class="title">注册电话</view>
				<input v-model="info.invoice_phone" class="content" placeholder="(选填)" clearable="false" />
			</view>
			<view class="personal_option_item">
				<view class="title">开户银行</view>
				<input v-model="info.invoice_bankName" class="content" placeholder="(选填)" clearable="false" />
			</view>
			<view class="personal_option_item">
				<view class="title">银行账号</view>
				<input v-model="info.invoice_bankNo" class="content" placeholder="(选填)" clearable="false" />
			</view>
		</view>
		<u-toast ref="uToast" />
		<view class="preservation h_auto">
			<view class="btn" @click="saveBtn">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					invoice_type: 0,
					invoice_head: '',
					invoice_code: '',
					invoice_addr: '',
					invoice_phone: '',
					invoice_bankName: '',
					invoice_bankNo: ''
				},
				id: ''
			}
		},
		onLoad(option) {
			this.id = option.id
			if (this.id != undefined) {
				this.$u.post('/Ucenter/getInvoiceDetail', {
					id: this.id
				}).then(res => {
					if(res.error == 0){
						res.data.invoice_type = 0
						this.info = res.data
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}
		},
		methods: {
			// 保存按钮防抖
			saveBtn() {
				this.$u.throttle(this.toInvoice, 1000)
			},
			toInvoice() {
				if ((this.$u.test.isEmpty(this.info.invoice_head)) == true) {
					uni.showToast({
						title: '发票抬头不能为空',
						icon: 'none'
					})
				} else if (this.$u.test.rangeLength(this.info.invoice_head, [4, 20]) == false) {
					uni.showToast({
						title: '请输入正确的发票抬头',
						icon: 'none'
					})
				} else if ((this.$u.test.isEmpty(this.info.invoice_code)) == true) {
					uni.showToast({
						title: '发票税号不能为空',
						icon: 'none'
					})
				} else if (this.$u.test.rangeLength(this.info.invoice_code, [15, 20]) == false) {
					uni.showToast({
						title: '请输入正确的税号',
						icon: 'none'
					})
				} else if (this.id != undefined) {
					this.$u.post('/ucenter/editInvoice', this.info).then(res => {
						// res为服务端返回的数据
						if (res.error == 0) {
							uni.showToast({
								title: '修改成功',
								duration: 2000,
								icon: 'success'
							});
							setTimeout(() => {
								uni.navigateBack({})
							}, 1500)
						}
					})
				} else {
					this.$u.post('/Ucenter/addInvoice', this.info).then(res => {
						if (res.error === 0) {
							uni.showToast({
								title: '添加成功',
								duration: 2000,
								icon: 'success'
							});
							setTimeout(() => {
								uni.navigateBack({})
							}, 1500)
						} else {
							uni.showToast({
								title: '发票信息有误',
								duration: 2000,
								icon: 'none'
							})
						}
					})
				}
			}
		},
	}
</script>

<style lang="less" scoped>
	page {
		background-color: #F3F4F5;
	}

	.personal {
		background-color: #F3F4F5;
		padding: 12px 0;
		height: 100vh;

		.personal_option {
			width: 100%;
			background-color: #FFFFFF;

			.personal_option_item:last-child {
				border: none;
			}

			.personal_option_item {
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				box-sizing: border-box;
				display: flex;
				align-items: center;

				.title {
					padding: 12px 0;
					color: #303133;
					font-size: 14px;
					width: 104px;
					margin-left: 20px;
					box-sizing: border-box;
				}

				.content {
					flex: 1;
					color: #8F9399;
					font-size: 12px;
				}
			}
		}
	}
</style>
