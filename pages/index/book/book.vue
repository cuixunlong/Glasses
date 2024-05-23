<template>
	<view class="form">
		<u-form :model="form" ref="uForm" errorType="['toast']">
			<div class="form_item">
				<u-form-item label="姓名" prop="name"><u-input placeholder="请输入姓名" v-model="form.name" /></u-form-item>
			</div>
			<div class="form_item">
				<u-form-item label="性别">
					<u-radio-group v-model="form.sex">
						<u-radio key="1" name="男"> 男 </u-radio>
						<u-radio key="2" name="女"> 女 </u-radio>
					</u-radio-group>
				</u-form-item>
			</div>
			<div class="form_item">
				<u-form-item label="手机号"><u-input placeholder="请输入手机号" v-model="form.number"
						type="number" /></u-form-item>
			</div>
			<div class="form_item">
				<!-- <u-form-item label="验证码"><u-input type="number" placeholder="请输入验证码" v-model="form.code" />
					<u-button slot="right" type="success" size="mini"
						@click="getCode">{{codeTips}}</u-button></u-form-item> -->
						<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="150">
							<u-input placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
							<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
						</u-form-item>
			</div>
			<div class="form_item" @click="bookDate">
				<u-form-item label="预约日期">
					<div style="text-align: right;">{{form.date}}</div>
				</u-form-item>
			</div>
		</u-form>
		<u-button @click="submit" type="primary">预约</u-button>
		<u-calendar v-model="dateShow" mode="date" @change="dateChange" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateShow: false,
				form: {
					name: '',
					code: '',
					sex: '男',
					date: '',
					number: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					intro: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}]
				}
			};
		},
		onLoad() {},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			// 预约日期
			bookDate() {
				this.dateShow = !this.dateShow
			},
			dateChange(e) {
				console.log(e)
				this.form.date = e.result
			}
		}
	}
</script>

<style lang="less">
	.form {
		padding: 40rpx 30rpx;
		background-color: #F3F4F6;
		height: 100vh;
		overflow: auto;

		.form_item {
			background-color: #fff;
			padding: 0 40rpx;
			border-radius: 10rpx;
			margin-bottom: 30rpx;
			box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(164, 164, 164, 0.2);
		}

		/deep/.u-form-item--left__content__label {
			white-space: nowrap !important;
		}

		/deep/.u-form-item--left {
			min-width: 60px !important;
			width: auto !important;
		}

		/deep/.u-input__input {
			text-align: right !important;
		}

		/deep/.u-radio-group {
			display: flex !important;
			justify-content: flex-end !important;
		}
	}
</style>