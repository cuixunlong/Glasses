<template>
	<view class="confirm_order">
		<u-select v-model="sendShow" :default-value="defaultTime" mode="mutil-column" :list="timeList"
			@confirm="sendConfirm" confirm-color="#0E1E75"></u-select>
		<view class="order_item">
			<view class="order_info">
				<view class="address_info" v-if="orderInfo.address.length != 0">
					<view class="title">配送地址</view>
					<view class="user_info">
						<view class="name">{{orderInfo.address.contacts}}</view>
						<view class="number">{{orderInfo.address.contacts_phone}}</view>
					</view>
					<view class="address" @click="toAddress">
						<view class="address_detail">{{orderInfo.address.address}}</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</view>
				<view class="empty_address" v-else @click="toAddress">
					<view class="iconfont icon_add icon-xinjain-copy"></view>
					请增加配送地址
				</view>
				<view class="send_time" @click="openSennd">
					<view class="send_top">
						<view class="title" v-if="sendTime == '立即送出'">配送时间</view>
						<view class="title" v-else>预约配送时间</view>
						<view class="order_data">{{arriveDay}}</view>
					</view>
					<view class="send_state">
						<view class="">{{sendTime}}</view>
						<view class="item_right" v-if="sendTime != '立即送出'">
							<u-icon name="arrow-down" size="40" color="#0E1E75"></u-icon>
						</view>
					</view>
				</view>
				<view class="goods_detail">
					<view class="title">订单详情</view>
					<view class="goods_info">
						<view class="">
							<image :src="orderInfo.goods.logo" mode="widthFix" class="goods_img"></image>
						</view>
						<view class="detail_right">
							<view class="goods_title">{{orderInfo.goods.name}}</view>
							<view class="goods_price">
								<view class="pirce">
									{{orderInfo.TasteSelect.name == undefined?'':orderInfo.TasteSelect.name}}({{orderInfo.goods.sku.specs_name}})
								</view>
								<view class="quantity">×1</view>
							</view>
						</view>
					</view>
					<view class="goods_info" v-if="orderInfo.CandleSelect == undefined">
						<view class="">
							<image :src="orderInfo.CandleSelect.cover_img" mode="widthFix" class="goods_img"></image>
						</view>
						<view class="detail_right">
							<view class="goods_title">{{orderInfo.CandleSelect.name}}</view>
							<view class="goods_price">
								<view class="pirce">￥{{orderInfo.CandleSelect.price}}</view>
								<view class="quantity">×1</view>
							</view>
						</view>
					</view>
					<view class="goods_info">
						<view class="">
							<image src="../../static/user_info/plate.png" mode="widthFix" class="goods_img"></image>
						</view>
						<view class="detail_right">
							<view class="goods_title">圆形餐盘</view>
							<view class="goods_price">
								<view class="pirce">￥{{orderInfo.TablewarePrice}}</view>
								<view class="quantity">×{{orderInfo.TablewareNum}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="invoice" @click="chooseInvoice">
					<u-select v-model="show" :default-value="defaultInvoice" :list="list" @confirm="confirm"
						confirm-color="#0E1E75"></u-select>
					<view class="invoice_title">发票</view>
					<view class="">{{invoice}}</view>
					<view class="item_right">
						<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
					</view>
				</view>
				<view class="serve_money">
					<view class="title">账号抵用金</view>
					<view class="serve_number">-￥{{orderInfo.discount_money}}元</view>
					<view class="check_box" @click="cardCheck" :class="{is_checked:checked == true}"></view>
				</view>
				<navigator url="remarks" hover-class="none">
					<view class="remarks">
						<view class="remarks_title">备注</view>
						<view class="remarks_content">{{remark}}</view>
						<view class="item_right">
							<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="coupon_item" @click="toCoupon">
			<view class="coupon">
				<view class="title">优惠券</view>
				<view class="" v-if="coupon!=''">{{coupon}}元</view>
				<view class="" v-else>{{couponNum}}</view>
				<view class="item_right">
					<u-icon name="arrow-right" size="30" color="#8F9399"></u-icon>
				</view>
			</view>
		</view>
		<view class="btn_list">
			<view class="btn_item">
				<view class="number">共{{number}}件，合计：</view>
				<view class="price">￥{{orderInfo.Allprice}}元</view>
				<view class="toPay" @click="toPay">立即支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false, //发票选择
				timeShow: false, //选择时间
				sendShow: false, //送达时间显示
				checked: '', //是否使用账号抵用金
				arriveDay: '', //送达时间日期
				sendTime: '选择预约配送时间', //送达时间
				coupon: '', //优惠卷金额
				couponNum: '', //优惠卷数量
				invoice: '不开发票', //发票信息
				remark: '选填，可填写特殊需求等', //订单备注
				number: 1, //数量
				defaultTime: [0, 0], //默认时间
				defaultInvoice: [0], //默认发票
				orderInfo: [], //订单信息
				from: {}, //提交的信息
				stock: '',
				list: [{
						value: '0',
						label: '不开发票'
					},
					{
						value: '1',
						label: '开发票'
					}
				],
				timeList: [],
			}
		},
		onLoad(option) {
			console.log(option.stock)
			if (option.stock != 'undefined') {
				this.stock = option.stock
			}
			console.log(this.stock)
			var timeStart = 7
			if (option.stock == 1) {
				var date = new Date();
				var year = date.getFullYear();
				var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
				var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				var rq = year + "-" + month + "-" + day;
				this.sendTime = '立即送出'
				this.arriveDay = rq
				console.log(this.timeList)
			}
			//获取系统当前时间
			var now = new Date();
			var nowTime = now.getTime();
			var oneDayTime = 24 * 60 * 60 * 1000;
			var dataArr = {}
			for (var i = 0; i < 30; i++) {
				//显示周一
				var ShowTime = nowTime + i * oneDayTime;
				//初始化日期时间
				var myDate = new Date(ShowTime);
				var year = myDate.getFullYear();
				var nextMonth = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1);
				var date = myDate.getDate() < 10 ? "0" + (myDate.getDate() + 1) : (myDate.getDate() + 1);
				var datList = year + "-" + nextMonth + "-" + date
				var str = "星期" + "日一二三四五六".charAt(myDate.getDay());
				dataArr[i] = {};
				dataArr[i].label = ''
				dataArr[i].value = i
				dataArr[i].label = datList
				this.timeList[0] = dataArr
			}

			var timeArr = [];
			var time = [];
			for (var i = 0; i < 12; i++) {
				timeArr[i] = {};
				time[i] = {};
				time[i].label = ''
				timeArr[i].label = ''
				timeArr[i].label += ((timeStart + i * 2) > 24 ? (timeStart + i * 2) - 24 : timeStart + i * 2)
				timeArr[i].label = (timeArr[i].label < 10 ? '0' + timeArr[i].label : timeArr[i].label) + ':00'
				var j = i + 1;
				var a = i
				time[i].label += ((timeStart + j * 2) > 24 ? (timeStart + j * 2) - 24 : timeStart + j * 2)
				time[i].label = (time[a].label < 10 ? '0' + time[a].label : time[a].label) + ':00'
				timeArr[i].label += '-' + time[i].label
				timeArr[i].value = i
			}
			this.timeList[1] = timeArr

			var val = uni.getStorageSync('order_key');
			this.$u.post('/order/previewOrder', val).then(res => {
				if (res.error == 0) {
					console.log('123')
					this.orderInfo = res.data
					this.from = val
					this.from.is_invoice = 0 //发票默认不需要
					this.couponNum = '可用' + res.data.CouponList.length + '张'
					this.from.address_id = res.data.address.address_id
					console.log(this.from)
				}
			})
		},
		onShow() {
			if (uni.getStorageSync('remarks') != '') {
				this.remark = uni.getStorageSync('remarks');
				this.from.remark = this.remark
			} else {
				this.remark = '选填，可填写特殊需求等'
				this.from.remark = ''
			}
			//监听选择的地址
			uni.$on("address_id", (res) => {
				this.from.address_id = res.address_id //修改地址id
				if (res.address_id != '') {
					this.$u.post('/ucenter/getUserRegions').then(resA => {
						if (resA.error == 0) {
							this.orderInfo.address = resA.data.items.filter((item => {
								return item.address_id == res.address_id
							}))
							this.orderInfo.address = this.orderInfo.address[0]
						}
					})
				}
				// 清除监听
				uni.$off("address_id");
			});
			//监听选择的发票id
			uni.$on("invoice_id", (item) => {
				console.log(item)
				this.from.is_invoice = item.invoice_id //开发票的id
				// 清除监听
				uni.$off("invoice_id");
			});
			//监听选择的优惠卷id
			uni.$on("m_coupon_id", (res) => {
				this.from.coupon_id = res.m_coupon_id //优惠卷id
				this.from.use_voucher = 0
				var from = uni.getStorageSync('order_key');
				this.$u.post('/order/previewOrder', from).then(now => {
					if (now.error == 0) {
						console.log("id")
						this.orderInfo.Allprice = now.data.Allprice
						//过滤出选中的优惠卷
						var arr = now.data.CouponList.filter(item => res.m_coupon_id == item.m_coupon_id)
						this.checked = false
						this.coupon = -arr[0].coupon_money
						this.coupon = this.keepFull(this.coupon)
						this.orderInfo.Allprice = +this.orderInfo.Allprice + +this.coupon
						this.orderInfo.Allprice = this.keepFull(this.orderInfo.Allprice)
						if(this.orderInfo.Allprice <=0){
							this.orderInfo.Allprice = 0.01
						}
					}
				})
				// 清除监听
				uni.$off("coupon_id");
			});
		},
		methods: {
			// 选择发票
			confirm(e) {
				console.log(e[0].value)
				this.defaultInvoice = [e[0].value] //控制选择后的值
				this.invoice = e[0].label; //是否需要发票显示
				if (e[0].value == 1) {
					uni.navigateTo({
						url: '../index/invoice/invoice?id=' + 1
					})
				}
			},
			// 计算金额
			keepFull(num) {
				var result = Math.round(num * 100) / 100;
				var s_x = result.toString(); //将数字转换为字符串

				var pos_decimal = s_x.indexOf('.'); //小数点的索引值
				// 当整数时，pos_decimal=-1 自动补0  
				if (pos_decimal < 0) {
					pos_decimal = s_x.length;
					s_x += '.';
				}

				// 当数字的长度< 小数点索引+2时，补0  
				while (s_x.length <= pos_decimal + 2) {
					s_x += '0';
				}
				return s_x;
			},
			chooseInvoice() {
				this.show = true
			},
			// 去备注
			toRemarks() {
				uni.navigateTo({
					url: 'remarks'
				})
			},
			// 选择账号低用金
			cardCheck() {
				this.checked = !this.checked
				var from = uni.getStorageSync('order_key');
				this.$u.post('/order/previewOrder', from).then(res => {
					if (res.error == 0) {
						this.orderInfo = res.data
						console.log(this.orderInfo.Allprice)
						var price = parseFloat(this.orderInfo.Allprice);
						var money = parseFloat(this.orderInfo.discount_money);
						if (this.checked == true) {
							price = +(price - money).toFixed(2)
							this.from.coupon_id = ''
							this.from.use_voucher = money
							if (isFinite(this.coupon) == true) {
								this.coupon = ''
							}
						} else {
							// price = +(+price + +money).toFixed(2)
							this.from.use_voucher = 0
							// if (isFinite(this.coupon) == true) {
								// price = +(price - this.coupon).toFixed(2)
							// }
						}
						this.orderInfo.Allprice = price
						this.orderInfo.Allprice = this.keepFull(this.orderInfo.Allprice)
					}
				})
			},
			toCoupon() {
				uni.navigateTo({
					url: 'usCoupon'
				})
			},
			// 选择地址
			toAddress() {
				uni.navigateTo({
					url: '../user_info/address/address?id=' + 1
				})
			},
			// 选择送达时间
			sendConfirm(e) {
				this.arriveDay = e[0].label
				this.sendTime = e[1].label
				var time = this.sendTime.slice(6, 11)
				console.log(time)
				this.from.need_time = this.arriveDay + '-' + time
				console.log(this.from.need_time)
				this.defaultTime = [e[0].value, e[1].value]
			},
			openSennd() {
				if (this.sendTime != '立即送出') {
					this.sendShow = true
				}
			},
			// 去支付
			toPay() {
				console.log(this.stock)
				if (this.from.address_id == undefined) {
					uni.showToast({
						title: '请添加收获地址',
						icon: 'none'
					})
				} else if (this.stock == '') {
					console.log(this.from.need_time)
					if (this.from.need_time == undefined) {
						uni.showToast({
							title: '请选择配送时间',
							icon: 'none'
						})
						this.sendShow = true
					} else {
						this.pay()
					}
				} else {
					this.pay()
				}
			},
			pay() {
				this.$u.post('/order/createOrder', this.from).then(res => {
					if (res.error == 0) {
						uni.navigateTo({
							url: 'payment?order_id=' + res.data
						})
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			}
		},
		onUnload() {
			uni.removeStorageSync('remarks')
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F3F4F5;
	}

	.confirm_order {
		padding-bottom: 58px;

		.order_item {
			background-color: #F3F4F5;
			padding: 12px 15px;
			padding-bottom: 0;

			.order_info {
				background-color: #FFFFFF;
				border-radius: 10px;
				padding: 0 12px;

				.address_info {
					padding: 16px 0;
					color: #606265;
					font-size: 16px;

					.title {
						font-size: 12px;
					}

					.user_info {
						display: flex;
						justify-content: space-between;
						margin-top: 8px;
						padding-bottom: 16px;
						border-bottom: 1px solid #EDEDED;
						box-sizing: border-box;
					}

					.address {
						padding: 16px 0;
						border-bottom: 1px solid rgba(0, 0, 0, 0.5);
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.address_detail {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
						}
					}
				}

				.empty_address {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24px;
					color: #0E1E75;
					font-weight: bold;
					border-bottom: 1px solid rgba(0, 0, 0, .5);
					padding: 16px 0;
					box-sizing: border-box;

					.icon_add {
						margin-right: 4px;
					}
				}
			}

			.send_time {
				font-size: 12px;
				color: #606265;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				padding: 16px 0;
				box-sizing: border-box;

				.send_top {
					display: flex;
					justify-content: space-between;

				}

				.send_state {
					display: flex;
					justify-content: flex-end;
					color: #0E1E75;
					font-size: 24px;
					font-weight: bold;
					text-align: right;
					margin-top: 4px;

					.item_right {
						margin-left: 8px;
					}
				}
			}

			.goods_detail {
				padding: 16px 0;
				color: #303133;
				font-size: 14px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);

				.title {
					color: #606265;
					font-size: 12px;
				}

				.goods_info {
					display: flex;
					height: 56px;
					margin-top: 16px;

					.goods_img {
						width: 56px;
						border-radius: 4px;
					}

					.detail_right {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: 100%;
						margin-left: 16px;

						.goods_title {}

						.goods_price {
							display: flex;
							justify-content: space-between;
						}
					}
				}
			}

			.invoice {
				display: flex;
				color: #606265;
				font-size: 12px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				padding: 16px 0;

				.invoice_title {
					flex: 7;
				}

				.item_right {
					margin-left: 8px;
				}
			}

			// .vipCar {
			// 	display: flex;
			// 	align-items: center;
			// 	color: #606265;
			// 	font-size: 12px;
			// 	border-bottom: 1px solid rgba(0, 0, 0, 0.5);
			// 	padding: 16px 0;

			// 	.title {
			// 		flex: 7;
			// 	}


			// 	/deep/.u-checkbox {
			// 		display: block;
			// 		margin-left: 8px;
			// 	}

			// 	/deep/.u-checkbox__icon-wrap {
			// 		background-color: rgba(14, 30, 117, 0.16);
			// 		border: 1px solid #0E1E75;
			// 		border-radius: 5px;
			// 	}
			// }

			.serve_money {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
				color: #0E1E75;
				font-size: 12px;
				padding: 16px 0;

				.title {
					flex: 1;
					color: #606265;
				}

				.check_box {
					width: 20px;
					height: 20px;
					margin-left: 8px;
					background: rgba(14, 30, 117, 0.16);
					border: 1px solid #0E1E75;
					border-radius: 5px;
					box-sizing: border-box;
				}

				.is_checked {
					background-image: url(../../static/user_info/checked.png);
					background-size: 100%;
					border: none;
				}
			}

			.remarks {
				display: flex;
				color: #606265;
				font-size: 12px;
				padding: 16px 0;

				.remarks_title {
					flex: 7;
				}

				.remarks_content {
					max-width: 80%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.item_right {
					margin-left: 8px;
				}
			}
		}

		.coupon_item {
			margin-top: 11px;
			padding: 0 15px;
			box-sizing: border-box;
			margin-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
			margin-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2

			.coupon {
				width: 100%;
				margin: 0 auto;
				display: flex;
				color: #606265;
				font-size: 12px;
				background-color: #FFFFFF;
				border-radius: 10px;
				padding: 16px 12px;
				box-sizing: border-box;

				.title {
					flex: 7;
				}

				.item_right {
					margin-left: 8px;
				}
			}
		}

		.btn_list {
			position: fixed;
			bottom: 0;
			width: 100%;
			background: #FFFFFF;
			font-size: 14px;
			height: calc(48px+ constant(safe-area-inset-bottom)); //兼容 IOS<11.2
			height: calc(48px + env(safe-area-inset-bottom)); //兼容 IOS>11.2
			padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
			padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2

			.btn_item {
				height: 100%;
				display: flex;
				align-items: center;
				padding: 0 15px;

				.toPay {
					width: 110px;
					height: 32px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #0E1E75;
					border-radius: 16px;
					color: #FFFFFF;
					text-align: center;
				}

				.number {
					color: #303133;
				}

				.price {
					color: #F16464;
					flex: 7;
				}
			}
		}
	}
</style>
