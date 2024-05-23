<template>
	<!-- 修改手机号码 -->
	<view class="change_num">
		<view class="phone">
			<text>绑定新手机号</text>
			<view class="input">
				<input type="number" value="" v-model="number" placeholder="请输入新手机号"
				 placeholder-class="phcolor"/>
			</view>
		</view>
		<view class="verification">
			<text>短信验证码</text>
			<view class="verification_item">
				<view class="input">
					<input type="number" value="" placeholder-class="phcolor" placeholder="请输入验证码"/>
				</view>
				<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"
					change-text="剩余x秒" class="start">
				</u-verification-code>
				<text class="code"  @tap="getCode">{{tips}}</text>
			</view>
		</view>
		<view class="next">
			<text>完成</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				number:'',
				tips: '获取验证码',
				seconds: 60, //验证码倒计时
			}
		},
		methods:{
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.code=true
				this.$u.toast('倒计时结束');
			},
			start() {
				this.code=false
				this.$u.toast('倒计时开始');
			},
		}
	}
</script>

<style lang="less">
	.change_num{
		background-color: #F3F4F5;
		padding: 0 15px;
		padding-top: 24px;
		height: 100vh;
		font-size: 14px;
		.phone{
			font-size: 14px;
			color: #303133;
			.input{
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				border-radius: 22px;
				padding-left: 12px;
				height: 36px;
				box-sizing: border-box;
				margin-top: 8px;
			}
		}
		.verification{
			margin-top: 24px;
			font-size: 14px;
			.verification_item{
				display: flex;
				align-items: center;
				margin-top: 8px;
				.input{
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				border-radius: 22px;
				height: 36px;
				box-sizing: border-box;
				padding-left: 12px;
				flex: 7;
			}
				.code{
					padding: 0 20px;
					height: 36px;
					line-height: 36px;
					color: #FFFFFF;
					background-color: #0E1E75;
					border-radius: 22px;
					margin-left: 9px;
					font-size: 14px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					max-width: 110px;
				}
			}
		}
		.next{
			height: 36px;
			line-height: 36px;
			color: #FFFFFF;
			font-size: 14px;
			background-color: #0E1E75;
			text-align: center;
			margin-top: 110px;
			border-radius: 18px;
		}
		.phcolor{
			font-size: 14px;
			color: #8F9399;
		}
	}
</style>
