<template>
	<view class="invoice">
		<u-modal v-model="delShow" content="确定删除吗？" :show-title="false" :show-cancel-button="true"
			confirm-color="#0E1E75" @confirm="sure"></u-modal>
		<u-select v-model="show" :default-value="defaultValue" :list="list" @confirm="confirm"
			confirm-color="rgba(14, 30, 117, 1)"></u-select>
		<view class="empty" v-if="invoiceList.length == 0">
				<u-image src="/static/user_info/detail_emoty.png" mode="widthFix"/>
			<view class="empty_title">暂无发票信息</view>
		</view>
		<view class="invoice_list padd_auto" v-else>
			<view class="inactive_item" v-for="(item,index) in invoiceList" :key="item.id">
				<view class="invoice_info" @click="chooseInvaoice(item,index)">
					<view class="type">{{item.invoice_type}}</view>
					<view class="name">{{item.invoice_head}}</view>
				</view>
				<view class="btn_list">
					<view class="btn" @click="isDel(item)">删除</view>
					<view class="btn" @click="toDetail(item)">编辑</view>
				</view>
			</view>
		</view>
		<view class="preservation h_auto bg_color">
			<view class="btn" @click="show = true">
				<u-icon name="plus"></u-icon>
				<text>增加发票抬头</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				delShow: false,
				defaultValue: [0],
				id: '',
				list: [{
						value: '0',
						label: '公司发票'
					},
					{
						value: '1',
						label: '个人发票'
					}
				],
				invoiceList: [],
				delId: ''
			}
		},
		onLoad(option) {
			console.log(option.id)
			this.id = option.id
			this.getInv()
		},
		onShow() {
			this.getInv()
		},
		methods: {
			//发票列表
			getInv() {
				this.$u.post('/Ucenter/getInvoiceList').then(res => {
					if (res.error == 0) {
						res.data.items.forEach((item, index) => {
							this.list.forEach(now => {
								if (item.invoice_type == now.value) {
									item.invoice_type = now.label
								}
							})
						})
						this.invoiceList = res.data.items
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			// 添加发票选择个人还是公司
			confirm(e) {
				console.log(e)
				if (e[0].value == 0) {
					// 公司发票
					this.defaultValue = [0]
					uni.navigateTo({
						url: 'company'
					})
				} else {
					// 个人发票
					this.defaultValue = [1]
					uni.navigateTo({
						url: 'personal'
					})
				}
			},
			// 查看发票详情
			toDetail(item) {
				console.log(item)
				if (item.invoice_type == "个人发票") {
					uni.navigateTo({
						url: 'personal?id=' + item.id
					})
				} else {
					uni.navigateTo({
						url: 'company?id=' + item.id
					})
				}
			},
			// 选择发票返回
			chooseInvaoice(item, index) {
				console.log(index)
				if (this.id == 1) {
					uni.$emit("invoice_id", {
						invoice_id: JSON.stringify(this.invoiceList[index].id),
					});
					//返回页面
					uni.navigateBack({});
				} else if (item.invoice_type == "个人") {
					uni.navigateTo({
						url: 'personal?id=' + item.id
					})
				} else {
					uni.navigateTo({
						url: 'company?id=' + item.id
					})
				}
			},
			// 是否删除发票
			isDel(item) {
				console.log(item)
				this.delId = item.id
				this.delShow = !this.delShow
			},
			// 确认删除发票
			sure() {
				this.$u.post('/ucenter/delInvoice', this.delId).then(res => {
					if (res.error == 0) {
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						})
						this.getInv()
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
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

	.invoice {
		background-color: #F3F4F5;
		padding: 12px 0;

		.invoice_list {
			padding: 0 15px;

			.inactive_item {
				display: flex;
				align-items: center;
				width: 100%;
				background: #FFFFFF;
				border-radius: 8px;
				margin-bottom: 12px;

				.invoice_info {
					flex: 1;
					padding: 12px;
					font-size: 16px;
					color: #303133;
					font-weight: bold;

					.name {
						margin-top: 8px;
						color: #919499;
						font-size: 14px;
						font-weight: normal;
					}
				}
			}

			.btn_list {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding: 8px 12px;

				.btn:first-child {
					margin-right: 12px;
				}

				.btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 52px;
					height: 24px;
					background: #FFFFFF;
					border: 1px solid #666666;
					border-radius: 4px;
				}
			}
		}

		.bg_color {
			background-color: #F3F4F5;
		}
	}
</style>
