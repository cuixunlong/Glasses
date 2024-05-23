<template>
	<view class="problem">
		<view class="problem_list">
			<view class="problem_item" v-for="(item,index) in list" :key="index" @click="toDetail(item.index)">
				<view class="title">{{item.title}}</view>
				<view class="">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.$u.post('/common/getQuestion').then(res => {
				if (res.error == 0) {
					this.list = res.data
				}
			})
		},
		methods: {
			toDetail(index) {
				uni.navigateTo({
					url: 'sendProblem?index=' + index
				})
			}
		}
	}
</script>

<style lang="less">
	.problem {
		.problem_list {
			.problem_item {
				padding: 16px 20px;
				font-size: 14px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				box-sizing: border-box;

				.title {
					flex: 7;
				}
			}
		}
	}
</style>
