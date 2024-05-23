<template>
	<view class="new_day">
		<view class="day_item">
			<view class="day_title">
				<u-input v-model="from.memorial_title" :type="type" :border="border" :clearable="false"
					maxlength="20" />
			</view>
			<view class="time" @click="getTime">
				<view class="title">时间</view>
				<view class="choose">{{from.memorial_day}}</view>
				<u-icon name="arrow-right"></u-icon>
				<u-picker mode="time" :default-time="defaulTime" :end-year="endYear" v-model="timeShow" @confirm="getData" confirm-color="#0E1E75">
				</u-picker>
			</view>
			<view class="time" @click="getRemind">
				<view class="title">提醒</view>
				<view class="choose">{{remind}}</view>
				<u-icon name="arrow-right"></u-icon>
				<u-select v-model="remindShow" :default-value="defaultValue" :list="remindList" @confirm="changeRemind"
					confirm-color="#0E1E75">
				</u-select>
			</view>
		</view>
		<view class="preservation h_auto">
			<view class="btn" @click="save">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {},
				remind: '', //显示的提醒时间
				timeShow: false, //纪念日时间
				remindShow: false, //提醒时间
				endYear: '',
				defaultValue: [0],
				memorial_id: '',
				defaulTime:[],
				remindList: [{
						value: '1',
						label: '提前一天'
					},
					{
						value: '3',
						label: '提前三天'
					}
				]
			}
		},
		onLoad(option) {
			// 获取纪念日详情
			this.from.memorial_id = option.memorial_id
			this.$u.post('/ucenter/getMemberMemorial', {
				memorial_id: option.memorial_id
			}).then(res => {
				if (res.error == 0) {
					//默认的提醒时间转化，把数字转化为字符
					let arr = this.remindList.filter(item => {
						return item.value == res.data.memorial_remind
					})
					this.remind = arr[0].label
					this.from = res.data
					//默认的提醒时间的显示时间
					this.remindList.forEach((item, index) => {
						if (this.remindList[index].value == res.data.memorial_remind) {
							this.defaultValue = [index]
						}
					})
					//默认时间列表的显示时间
					this.defaulTime = res.data.memorial_day
				}
			})
			//设置生日年份最小为今年
			var date = new Date();
			var year = date.getFullYear();
			this.endYear = year
		},
		methods: {
			// 选择时间
			getTime() {
				this.timeShow = true
			},
			getData(e) {
				this.from.memorial_day = e.year + '-' + e.month + '-' + e.day
				this.defaulTime = this.from.memorial_day
			},
			// 选择提醒时间
			getRemind() {
				this.remindShow = true
			},
			changeRemind(e) {
				console.log(e)
				this.remind = e[0].label
				this.from.memorial_remind = e[0].value
				this.remindList.forEach((item, index) => {
					if (this.remindList[index].value == e[0].value) {
						console.log(index)
						this.defaultValue = [index]
					}
				})
			},
			// 保存防抖
			saveBtn() {
				this.$u.throttle(this.save, 1000)
			},
			save() {
				if ((this.$u.test.isEmpty(this.from.memorial_title)) == true) {
					uni.showToast({
						title: '纪念日标题不能为空',
						icon: 'none'
					})
				} else if ((this.$u.test.isEmpty(this.from.memorial_day)) == true) {
					uni.showToast({
						title: '请选择纪念日时间',
						icon: 'none'
					})
				} else if ((this.$u.test.isEmpty(this.from.memorial_remind)) == true) {
					uni.showToast({
						title: '请选择提醒时间',
						icon: 'none'
					})
				} else {
					this.$u.post('/ucenter/editMemberMemorial', this.from).then(res => {
						if (res.error == 0) {
							uni.showToast({
								title: '添加成功',
								duration: 2000,
								icon: 'success'
							});
							setTimeout(() => {
								uni.navigateBack({})
							}, 1000)
						} else {
							uni.showToast({
								title: res.msg,
								duration: 2000,
								icon: 'none'
							});
						}
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.new_day {
		.day_item {
			padding: 0 15px;

			.day_title {
				background-color: #F0F0F0;
				border-radius: 8px;
				margin-top: 24px;
				padding: 12px;

				/deep/.u-input__input {
					min-height: 0 !important;
				}
			}

			.time {
				display: flex;
				align-items: center;
				margin-top: 24px;
				color: #919499;
				font-size: 14px;
				padding-left: 12px;

				.title {
					flex: 7;
					color: #303133;
					font-size: 16px;
					font-weight: bold;
				}

				.choose {
					margin-right: 8px;
				}
			}
		}
	}
</style>
