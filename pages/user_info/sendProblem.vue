<template>
	<view class="send_problem">
		<u-collapse hover-class="none">
			<u-collapse-item :title="item.question" v-for="(item, index) in itemList.data" :key="item.q_id">
				<view class="problem_item">
					<view class="">A：</view>
					<view class="">{{item.answer}}</view>
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [],
			}
		},
		onLoad(option) {
			console.log(option)
			this.$u.post('/common/getQuestion').then(res => {
				if (res.error == 0) {
					res.data[option.index].open = false
					res.data[option.index].data.forEach(item => {
						item.question = 'Q' + ':' + item.question
						console.log(item.question)
					})
					this.itemList = res.data[option.index]
				}
			})
		}
	}
</script>

<style lang="less">
	.send_problem {
		/deep/.u-navbar {
			border-bottom: 1px solid rgba(0, 0, 0, .1);
		}

		/deep/.u-collapse-item {
			padding: 0 20px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
		}

		/deep/.u-title {
			color: #000000 !important;
			font-weight: bold !important;
		}

		/deep/.u-collapse-head {
			padding: 16px 0 !important;
		}

		/deep/.u-collapse-title {
			color: #0E1E75;
			font-size: 16px;
		}

		/deep/.u-icon__icon {
			color: #0E1E75 !important;
		}

		.problem_item {
			display: flex;
			padding: 20px 0;
		}
	}
</style>
