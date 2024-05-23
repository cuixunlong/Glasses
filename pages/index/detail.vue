<template>
	<!-- 商品详情 -->
	<view class="detail">
		<u-modal v-model="sureShow" content="请登录" @confirm="confirm" @cancel="cancel" :async-close="true"
			:show-title="false" :show-cancel-button="true" confirm-text="去登录" cancel-text="我再想想"
			confirm-color="#0E1E75"></u-modal>
		<!-- 顶部图片 -->
		<view class="top_image">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="topswiper"
				indicator-active-color="rgba(80, 164, 255, 1)" :circular="true">
				<swiper-item v-for="(item,index) in swiper" :key="index">
					<image :src="item" mode="widthFix" @click="swiperPreview(index)"></image>
				</swiper-item>
			</swiper>
			<navigator open-type="navigateBack" url="">
				<view class="left_back" :style="{top: navBarHeight+'px'}">
					<image src="../../static/details/left.png" mode="widthFix" class="top_icon">
					</image>
				</view>
			</navigator>
		</view>
		<view class="goods_describe">
			<view class="goods_price">
				￥999
			</view>
			<view class="goods_title">
				BOLON暴龙眼镜框商务休闲眉框合金光学镜架BJ7130
			</view>
			<view class="goods_info">
				送依视路精视1.56防蓝光镜片，可配度数：建议近视度数300
				以内，散光200以内，拍前联系在线客服提供近视度数，瞳
				距，散光度数及散光轴位等配镜数据，注：若没有散光则不需
				要提供散光度数及散光轴位应数据
			</view>

		</view>
		<u-toast ref="uToast" />
		<view class="goods_details">
			<u-parse :html="goodsDetail.intro"></u-parse>
		</view>
		<view class="botton">
			<view class="navigation">
				<view class="left">
					<view class="item">
						<u-icon name="server-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">客服</view>
					</view>
					<view class="item">
						<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">店铺</view>
					</view>
					<view class="item car">
						<u-badge class="car-num" :count="9" type="error" :offset="[-3, -6]"></u-badge>
						<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">购物车</view>
					</view>
				</view>
				<view class="right">
					<view class="cart btn u-line-1">加入购物车</view>
					<view class="buy btn u-line-1">立即购买</view>
				</view>
			</view>
		</view>
		<view class="choose_detail">
			<!-- 选择数字蜡烛 -->
			<u-popup v-model="show" mode="bottom" height="60%" width="100%" border-radius="16">
				<u-select v-model="partsShow" :default-value="defalt" @confirm="changeCandle" @cancel="cancelCandle"
					confirm-color="#0E1E75" :list="list"></u-select>
				<!-- 选择餐盘数量 -->
				<u-select v-model="plateShow" :default-value="plateDefalt" @confirm="choosePlate" @cancel="cancelPlate"
					confirm-color="#0E1E75" :list="plateList"></u-select>
				<view class="top_info">
					<view class="top_info_item">
						<image :src="goodsDetail.logo" mode="widthFix" class="top_info_image"></image>
						<view class="cake_info">
							<view class="price">
								<view class="total_price">￥{{goodsDetail.price}}元</view>
								<view class="close" @click="show = false">
									<image src="../../static/details/cha.png" mode="widthFix" class="close_icon">
									</image>
								</view>
							</view>
							<view class="orderInfo">
								<text v-if="sizeName != ''">尺寸：{{sizeName}}</text>
								<text v-if="flavorName != ''">、口味：{{flavorName}}个</text>
								<text v-if="partsName != ''">、配件：{{partsName}}个</text>
								<text v-if="from.tableware_num != ''">、餐盘数量：{{from.tableware_num}}个</text>
							</view>
						</view>
					</view>
				</view>
				<scroll-view scroll-y="true" class="scroll_list">
					<view class="size_choose">
						<view class="title">蛋糕规格</view>
						<view class="size_list">
							<view class="size_item" v-if="stock == 1"
								:class="sizeIndex === index?'is_choose':item.specs_stock ==0?'no_choose':''"
								v-for="(item,index) in sizeList" @click="chooseSize(index,item)" :key="item.id">
								{{item.specs_name}}
							</view>
							<view class="size_item" v-if="stock == ''" :class="{is_choose:sizeIndex === index}"
								v-for="(item,index) in sizeList" @click="chooseSize(index,item)" :key="item.id">
								{{item.specs_name}}
							</view>
						</view>
					</view>
					<view class="blessing">
						<view class="title">祝福卡片</view>
						<u-input type="text" placeholder="请输入祝福语" :clearable="false" height="50" maxlength="20"
							v-model="blessing" @input="value">
						</u-input>
					</view>
					<view class="partsItem">
						<view class="parts" v-if="flavorList.length != 0">
							<view class="title">口味选择</view>
							<scroll-view scroll-x="true" :show-scrollbar="false" class="parts_list">
								<view class="parts_item" v-for="(item, index) in flavorList" :key="item.id"
									:class="{parts_item_choose:index===flavorIndex}" @click="changeFlavor(item,index)">
									<view class="content">
										<view class="parts_item_left">
											<image :src="item.cover_img" mode="widthFix" class="parts_item_image">
											</image>
										</view>
										<view class="parts_item_right">
											<view class="parts_item_title">{{item.name}}</view>
											<text class="parts_item_info">{{item.price}}元</text>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
						<view class="parts" v-if="partsList.length != 0">
							<view class="title">蜡烛配件</view>
							<scroll-view scroll-x="true" :show-scrollbar="false" class="parts_list">
								<view class="parts_item" v-for="(item, index) in partsList" :key="item.id"
									:class="{parts_item_choose:index===partsIndex}" @click="changeColor(index,item)">
									<view class="content">
										<view class="parts_item_left">
											<image :src="item.cover_img" mode="widthFix" class="parts_item_image">
											</image>
										</view>
										<view class="parts_item_right">
											<view class="parts_item_title">{{item.name}}</view>
											<text class="parts_item_info">{{item.price}}元</text>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
				</scroll-view>
				<view class="submit_btn">
					<view class="btn" @click="sureBtn">确定</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				swiperHeight: '',
				sureShow: false, //未登录提示登录
				show: false, //选择商品详情
				partsShow: false, //蜡烛配件
				candleNum: '', //蜡烛数量
				platePrice: 0, //盘子总价
				changePlate: '',
				plate: '', //盘子单价
				plateNum: '', //盘子一次加的个数
				plateIndex: 0, //餐盘索引
				plateShow: false,
				plateList: [],

				flavorIndex: 0, //口味索引
				flavorPrice: '', //口味价格
				flavorName: '', //口味名称

				sizeIndex: 0, //尺寸索引
				sizePrice: '', //尺寸价格
				sizeName: '', //尺寸名称

				partsIndex: 0, //蜡烛索引
				partsPrice: '', //蜡烛价格
				partsName: '', //蜡烛名称

				navBarHeight: 0, //顶部返回按钮位置
				blessing: '', //卡片祝福
				swiper: [
					'../../static/details/glasses1.jpg',
					'../../static/details/glasses2.jpg',
					'../../static/details/glasses3.jpg',
					'../../static/details/glasses4.jpg',
					'../../static/details/glasses5.jpg',
				],
				sizeList: [], //尺寸列表
				partsList: [], //蜡烛列表
				flavorList: [], //口味列表
				goodsDetail: [], //商品详情
				plateList: [], //餐盘列表
				list: [], //岁数
				defalt: [0], //默认岁数
				from: {}, //需要提交的数据
				swiperList: [],
				number: '',
				stock: ''
			}
		},
		onLoad(option) {
			this.stock = option.stock
			const that = this;
			// 获取系统信息
			const systemInfo = wx.getSystemInfoSync();
			that.swiperHeight = systemInfo.screenWidth
			// 胶囊按钮位置信息
			const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
			// 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
			that.navBarHeight = ((menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + systemInfo.statusBarHeight);
			// 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
			// 循环出岁数
			for (var i = 1; i <= 100; i++) {
				var arr = {}
				arr.value = i
				arr.label = i + '岁'
				this.list.push(arr)
			}
			//获取商品详情
			// this.$u.post('/index/getGoodsDetail', {
			// 	goods_id: option.goods_id
			// }).then(res => {
			// 	if (res.error == 0) {
			// 		//获取默认的商品提交信息
			// 		this.from.goods_id = res.data.goods_id //获取商品id
			// 		this.from.goods_sku_id = res.data.sku[this.partsIndex].id //获取商品规格ID
			// 		if (res.data.candle_select[this.partsIndex] != undefined) {
			// 			this.from.candle_select = res.data.candle_select[this.partsIndex].candle_name //获取蜡烛
			// 			this.from.candle_select = res.data.candle_select[this.partsIndex].id //获取是否为数字蜡烛，0不是，1是
			// 		}
			// 		if (res.data.taste_select[this.flavorIndex] != undefined) {
			// 			this.from.taste_select = res.data.taste_select[this.flavorIndex].id //获取默认口味
			// 		}
			// 		this.from.tableware_num = ''
			// 		// 获取商品详情
			// 		this.goodsDetail = res.data
			// 		this.swiperList = res.data.album.split(',');
			// 		// 口味
			// 		if (res.data.taste_select != '') {
			// 			this.flavorList = res.data.taste_select //口味列表
			// 			this.flavorPrice = res.data.taste_select[this.flavorIndex].price //口味价格
			// 			this.flavorName = res.data.taste_select[this.flavorIndex].name //口味名称
			// 		}
			// 		// 蜡烛
			// 		if (res.data.candle_select != '') {
			// 			this.partsList = res.data.candle_select //蜡烛列表
			// 			this.partsPrice = res.data.candle_select[this.partsIndex].price //蜡烛价格
			// 			this.partsName = res.data.candle_select[this.partsIndex].name //蜡烛名称
			// 		}
			// 		//尺寸
			// 		this.sizeList = res.data.sku //尺寸列表
			// 		console.log(this.stock)
			// 		if (this.stock == 1) {
			// 			this.sizeIndex = this.sizeList.findIndex(item => item.specs_stock > 0) // 返回子项的下标
			// 		}
			// 		this.sizePrice = res.data.sku[this.sizeIndex].specs_price //尺寸价格
			// 		this.sizeName = res.data.sku[this.sizeIndex].specs_name //尺寸名称
			// 		this.number = +res.data.tableware_num
			// 		//餐盘价格
			// 		this.plate = res.data.tableware_price
			// 		// 餐盘的加减默认是三份
			// 		this.changePlate = (+res.data.tableware_price * 2)
			// 		this.totalPrice()
			// 	} else {
			// 		uni.showToast({
			// 			title: res.msg,
			// 			icon: 'none'
			// 		})
			// 	}

			// })

			//餐盘列表
			for (var i = 1; i <= 30; i++) {
				var a = {}
				this.plateNum = this.goodsDetail.tableware_num
				this.plate = this.goodsDetail.tableware_price
				a.value = i
				a.label = '餐盘数量' + i * this.plateNum + '个' + '（' + (i * this.plateNum - this.plate) + '元' + '）'
				this.plateList.push(a)
			}
			console.log(this.plateList)
		},
		methods: {
			//确认去登录
			confirm() {
				uni.reLaunch({
					url: '../login/login'
				})
				this.sureShow = false
			},
			// 取消去登录
			cancel() {
				this.sureShow = false
			},
			//选择口味选择
			changeFlavor(item, index) {
				console.log(item)
				this.from.taste_select = item.id
				this.flavorPrice = item.price
				this.flavorName = item.name
				this.totalPrice()
				this.flavorIndex = index
			},
			// 选择尺寸
			chooseSize(index, item) {
				this.from.goods_sku_id = item.id
				if (this.stock != 1) {
					this.sizePrice = item.specs_price
					this.sizeName = item.specs_name
					this.totalPrice()
					this.sizeIndex = index
				} else if (item.specs_stock == 0) {
					uni.showToast({
						title: '当前门店该尺寸库存已售罄',
						icon: 'none'
					})
				} else {
					this.sizePrice = item.specs_price
					this.sizeName = item.specs_name
					this.totalPrice()
					this.sizeIndex = index
				}
			},
			// 选择蜡烛配件
			changeColor(index, item) {
				console.log(item)
				if (item.is_default == 1) {
					this.partsShow = true
				}
				this.from.candle_select = item.id
				this.partsPrice = item.price
				this.partsName = item.name
				this.totalPrice()
				if (item.candle_num == 1) {
					this.partsShow = true
				}
				this.partsIndex = index
			},
			// 选择蜡烛数量
			changeCandle(e) {
				this.defalt = [e[0].label - 1]
				console.log(e)
				this.from.candle_num = e[0].value
				console.log(this.from.candle_num)
			},
			// 取消输入蜡烛数量
			cancelCandle() {
				this.candleNum = this.candleNum
				console.log(this.candleNum)
			},
			// 选择餐盘数量
			choosePlate(e) {
				this.from.tableware_num = e[0].value * this.plateNum
				this.from.tableware_num = this.from.tableware_num //获取餐盘数量
				//计算餐盘的价格，总餐盘数减去免费餐盘再除以几个一组，再乘以一份餐盘的价格
				var price = (this.from.tableware_num - this.plateNum) / this.plateNum * this.plate
				this.goodsDetail.price = this.keepFull(+this.goodsDetail.price + price) //总价保留两位小数
			},
			// 祝福卡片
			value() {
				if (this.blessing.length >= 20) {
					uni.showToast({
						title: "最多输入20个字",
						duration: 2000,
						icon: 'none'
					});
				} else {
					this.from.wish_remark = this.blessing
				}
			},
			// 确认按钮防抖
			sureBtn() {
				this.$u.throttle(this.sure, 1000)
			},
			// 确认
			sure() {
				console.log(this.from.tableware_num)
				// 判断有无登录
				if (uni.getStorageSync('token') === '') {
					this.sureShow = true
				} else if (uni.getStorageSync('is_bind') == 0) {
					uni.clearStorageSync()
					// 判断是否为数字蜡烛
				}
				if (this.sizePrice == '') {
					uni.showToast({
						title: '当前门店库存已售罄',
						icon: 'none'
					})
				} else if (this.blessing == '') {
					uni.showToast({
						title: '请输入祝福语',
						icon: 'none'
					})
				} else
				if (this.from.tableware_num == '') {
					uni.showToast({
						title: '请选择餐盘数量',
						icon: 'none'
					})
					this.plateShow = !this.plateShow
				} else {
					this.$u.post('/order/previewOrder', this.from).then(res => {
						if (res.error == 0) {
							uni.setStorageSync('order_key', this.from);
							uni.navigateTo({
								url: '../order/confirm_order?stock=' + this.stock
							})
						} else if (res.msg == '数字蜡烛,需要您选择年龄') {
							this.partsShow = true
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
						} else {
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
						}
					})
				}
			},
			// 轮播图查看详情
			swiperPreview(index) {
				uni.previewImage({
					urls: this.swiperList,
					current: index,
				});
			},
			totalPrice() {
				console.log(this.sizePrice)
				if (this.sizePrice == '') {
					this.goodsDetail.price = + +this.flavorPrice + +this.partsPrice + +this.platePrice
				} else {
					this.goodsDetail.price = +this.sizePrice + +this.flavorPrice + +this.partsPrice + +this.platePrice
				}
				this.goodsDetail.price = this.keepFull(this.goodsDetail.price)
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
		},
	}
</script>

<style lang="less">
	.navigation {
		width: 100%;
		display: flex;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		border-bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #ff7900;
			}
		}
	}

	page {
		background-color: #FFFFFF;
	}

	.detail {
		background-color: #FFFFFF;
		overflow: hidden;

		.top_image {
			position: relative;

			.topswiper {
				height: 375px;
				overflow: hidden;

				image {
					width: 100%;
				}
			}

			.left_back {
				position: absolute;
				left: 20px;

				.top_icon {
					width: 28px;
				}
			}
		}

		.goods_details {
			background-color: #FFFFFF;
			height: auto;
			overflow: hidden;
			padding-bottom: calc((48px + env(safe-area-inset-bottom)) + (env(safe-area-inset-bottom)));
		}

		.goods_describe {
			background-color: #FFFFFF;
			padding: 0 25px;
			padding-bottom: 10px;
			padding-top: 20px;
			letter-spacing: 0.1em;

			.goods_price {
				font-weight: bold;
				font-size: 44rpx;
				color: #FF7459;
				line-height: 36rpx;
				margin-bottom: 40rpx;
			}

			.goods_title {
				font-size: 16px;
				max-width: 345px;
				color: #333333;
				margin-bottom: 10rpx;
			}

			.goods_info {
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
				// text-overflow: ellipsis;
				// display: -webkit-box;
				// -webkit-box-orient: vertical;
				// -webkit-line-clamp: 3;
				// overflow: hidden;	
			}
		}

		.botton {
			display: flex;
			justify-content: space-between;
			height: 49px;
			background: #FFFFFF;
			box-shadow: 0px -3px 3px rgba(0, 92, 191, 0.05);
			align-items: center;
			font-size: 16px;
			color: #0E1E75;
			position: fixed;
			bottom: 0px;
			width: 100%;
			height: calc(48px+ constant(safe-area-inset-bottom)); //兼容 IOS<11.2

			height: calc(48px + env(safe-area-inset-bottom)); //兼容 IOS>11.2

			padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2

			padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2

			.toBuy {
				width: 121px;
				padding: 6px 0;
				background: #0E1E75;
				border-radius: 16px;
				font-size: 14px;
				text-align: center;
				color: #FFFFFF;
			}
		}

		.active {
			text {
				color: #50A4FF !important;
				font-weight: bold;
				font-size: 16px;
			}
		}

		.choose_detail {
			.parts_input {
				border: 1px solid #BFC4CC;
				border-radius: 4px;
				margin: 16px 22px;
				color: #919499;
				font-size: 12px;
				height: 33px;
				box-sizing: border-box;
				padding-left: 8px;
			}

			.top_info {
				width: 100%;
				padding: 12px 15px;
				// position: fixed;
				top: 0;
				box-sizing: border-box;
				background-color: #FFFFFF;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				z-index: 110;

				.top_info_item {
					display: flex;
					align-items: center;

					.top_info_image {
						width: 64px;
						border-radius: 4px;
					}

					.cake_info {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 12px;

						.price {
							display: flex;
							align-items: center;
							justify-content: space-between;
							color: #F16464;
							font-size: 20px;

							.close {
								width: 50px;
								display: flex;
								justify-content: flex-end;
								margin-right: 3px;

								.close_icon {
									width: 18px;
								}
							}
						}

						.orderInfo {
							font-size: 12px;
							color: #919499;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
					}
				}
			}

			.scroll_list {
				height: calc(100vh * 0.6 - 89px);

				.size_choose {
					margin: 0 15px;

					.title {
						font-size: 14px;
						font-weight: bold;
						color: #303133;
						margin-top: 12px;
						margin-bottom: 8px;
					}

					.size_list {
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						border-bottom: 1px solid rgba(0, 0, 0, .1);

						.size_item {
							height: 26px;
							line-height: 26px;
							margin-right: 13px;
							margin-bottom: 12px;
							padding: 0 28px;
							background: #F4F3F8;
							color: #0E1E75;
							font-size: 12px;
							border: 1px solid #0E1E75;
							border-radius: 4px;
						}

						.is_choose {
							background: #0E1E75;
							color: #fff;
						}

						.no_choose {
							background-color: #66666654;
						}
					}
				}

				.blessing {
					margin: 0 15px;
					padding-top: 12px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);

					.title {
						margin-bottom: 11px;
						font-size: 14px;
						font-weight: bold;
						color: #303133;
						margin-top: 12px;
						margin-bottom: 8px;
					}
				}

				.partsItem {
					margin: 0 15px;
					padding-bottom: calc(70px+ constant(safe-area-inset-bottom)) !important; //兼容 IOS<11.2
					padding-bottom: calc(70px + env(safe-area-inset-bottom)) !important; //兼容 IOS>11.2

					.parts {
						padding: 12px 0;
						padding-bottom: 8px;
						border-bottom: 1px solid rgba(0, 0, 0, 0.1);

						.title {
							font-size: 14px;
							font-weight: bold;
							color: #303133;
							margin-top: 12px;
							margin-bottom: 8px;
						}

						.parts_list {
							white-space: nowrap; // 滚动必须加的属性
							width: 100%;

							::-webkit-scrollbar {
								display: none;
								width: 0;
								height: 0;
								color: transparent;
							}

							.parts_item {
								width: 104px !important;
								height: 48px;
								margin: 5px 6px;
								box-sizing: border-box;
								display: inline-block;
								border-radius: 4px;
								background: #FFFFFF;
								box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
								padding: 4px;

								.content {
									display: flex;
									align-items: center;

									.parts_item_left {
										height: 40px;

										image {
											width: 40px;
										}
									}

									.parts_item_right {
										flex: 1;
										height: 40px;
										padding: 5px 0;
										display: flex;
										flex-direction: column;
										justify-content: space-between;
										color: #000000;
										font-size: 10px;
										margin-left: 4px;

										.parts_item_title {
											word-break: break-all;
											text-overflow: ellipsis;
											display: -webkit-box;
											-webkit-box-orient: vertical;
											-webkit-line-clamp: 1;
											overflow: hidden;
											white-space: pre-wrap;
										}

										.parts_item_info {
											color: #F16464;
											display: block;
										}
									}
								}
							}

							.parts_item_choose {
								background-color: #0E1E75;

								.parts_item_right {
									color: #FFFFFF !important;
								}

								.parts_item_info {
									color: #FFFFFF !important;
								}
							}
						}
					}
				}

				.plate {
					margin-bottom: 40px;

					.title {
						font-size: 14px;
						font-weight: bold;
						color: #303133;
						margin-top: 12px;
						margin-bottom: 8px;
					}

					.plate_list {
						display: flex;
						align-items: center;
						white-space: nowrap; // 滚动必须加的属性
						width: 100%;

						.plate_item {
							width: 104px !important;
							height: 48px;
							margin: 5px 6px;
							box-sizing: border-box;
							display: inline-block;
							border-radius: 4px;
							background: #FFFFFF;
							box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
							padding: 6px 0;

							.number {
								height: 18px;
								text-align: center;
								overflow: hidden;
								text-overflow: ellipsis;
								color: #F16464;
								font-size: 12px;
								margin-top: 4px;
							}

							.plate_item_title {
								color: #000000;
								text-align: center;
								font-size: 10px;
							}

							.plate_item_price {
								display: flex;
								align-items: center;
								margin-top: 4px;

								.plate_item_info {
									margin-right: 40px;
									color: #F16464;
									font-size: 10px;
								}
							}

							.choose_num {
								display: flex;
								justify-content: space-between;
								margin-top: 4px;

								.minus {
									flex: 1;
									display: flex;
									justify-content: flex-end;

									/deep/.u-icon__icon {
										box-sizing: border-box;
										padding: 2px;
										border-radius: 50%;
										color: #FFFFFF;
										background-color: #0E1E75;
										border: 1px solid #0E1E75;
									}
								}

								.add {
									flex: 1;
									display: flex;
									justify-content: flex-start;

									/deep/.u-icon__icon {
										box-sizing: border-box;
										padding: 2px;
										border-radius: 50%;
										border: 1px solid #0E1E75;
										color: #FFFFFF;
										background-color: #0E1E75;
									}
								}

								.number {
									flex: 1;
									text-align: center;
									overflow: hidden;
									text-overflow: ellipsis;
									color: #F16464;
									font-size: 12px;
									margin-top: 0;
								}
							}
						}

						.plate_item_choose {
							background-color: #0E1E75;

							.plate_item_title {
								color: #FFFFFF;
							}

							.number {
								color: #FFFFFF;
							}

							.choose_num {
								.number {
									color: #FFFFFF;
								}

								.minus {
									color: #FFFFFF;

									/deep/.u-icon__icon {
										border: 1px solid #FFFFFF;
										box-sizing: border-box;
									}
								}

								.add {
									color: #0E1E75;

									/deep/.u-icon__icon {
										color: #0E1E75;
										border: 1px solid #FFFFFF;
										background-color: #FFFFFF;
									}
								}
							}
						}
					}
				}
			}

			.submit_btn {
				width: 100%;
				padding: 0 15px;
				position: fixed;
				display: flex;
				bottom: 0;
				height: calc(48px+ constant(safe-area-inset-bottom)) !important; //兼容 IOS<11.2
				height: calc(48px + env(safe-area-inset-bottom)) !important; //兼容 IOS>11.2

				.btn {
					width: 100%;
					background: #0E1E75;
					border-radius: 20px;
					height: 40px;
					color: #fff;
					line-height: 40px;
					text-align: center;
				}
			}
		}
	}
</style>