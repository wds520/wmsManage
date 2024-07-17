
<template>
	<view class="container">
		
		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<button @click="jumpPage('/pages/user/userList')" class="mb">用户账户页面</button>
		<button @click="jumpPage('/pages/storage/StorageList')" class="mb">库房列表页面</button>
		<button @click="jumpPage('/pages/good/goodsList')" class="mb">货物列表页面</button>
		<button @click="jumpPage('/pages/car/carList')" class="mb">车辆页面</button>
		<button @click="jumpPage('/pages/driver/driverList')" class="mb">司机页面</button>
		<button @click="jumpPage('/pages/task/taskList')" class="mb">任务页面</button>
		<button @click="jumpPage('/pages/task/taskDetail')" class="mb">任务详情</button>
	</view>
</template>

<script>
	import {getUserInfo, registerUser} from '@/request/api'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		onLoad() {
			console.log('onload')
		},
		methods: {
			jumpPage(pageUrl) {
				uni.navigateTo({
					url: pageUrl,
					success: () => {
						console.log('跳转成功')
					},
					error: () => {
						console.log('调整失败')
					}
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		.mb {
			margin-bottom: 20px;
		}
	}
</style>
