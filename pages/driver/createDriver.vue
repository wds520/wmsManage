
<template>
	<view class="container">
		
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="名字" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入名字" />
			</uni-forms-item>
			<uni-forms-item label="手机号" name="phone">
                <uni-easyinput type="number" v-model="formData.phone" placeholder="请输入手机号" />
				
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">确认</button>
	</view>


	</view>
</template>

<script>

 import {addDriver, editDriver, queryDriverDetail} from '@/request/api'
	export default {
	data() {
		return {
			// 表单数据
			formData: {
				name: '',
				phone: ''
			},
			driverInfo: {},
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入名字',
						}
					]
				},
				phone: {
					rules: [{
						required: true,
						errorMessage: '请输入手机号',
					}]
				}
			}
		}
	},
	onLoad(options) {
		if(options.type === 'edit') {
			this.driverInfo = options;
			this.queryDriverDetailFn();
		}
	},
	methods: {
		queryDriverDetailFn() {
			queryDriverDetail(this.driverInfo.driverId).then(res => {
				if(res.code !== 200) {
					uni.showToast({
						icon: 'error',
						title: res.message,
						duration: 2000
					});
					return
				}
				// this.driverInfo = res.data;
				this.formData = res.data;
			})
		},
		// 触发提交表单
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
				if(this.driverInfo.type === 'edit') {
					return editDriver({
						...res,
						id: this.driverInfo.driverId
					}).then(res2 => {
						if(res2.code !== 200) {
							uni.showToast({
								icon: 'error',
								title: res2.message,
								duration: 2000
							});
							return
						}
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					})
				}
				addDriver(res).then(res1 => {
					if(res1.code !== 200) {
						uni.showToast({
							icon: 'error',
							title: res1.message,
							duration: 2000
						});
						return
					}
					uni.showToast({
						title: `创建成功`,
						icon: 'none'
					});
					uni.navigateBack({ delta: 1 })
				})

			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		},
		change() {

		}
	}
}

</script>

<style lang="scss" scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
        .userItem {
            margin-bottom: 20rpx;
        }
	}


.chat-custom-right {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.chat-custom-text {
	font-size: 12px;
	color: #999;
}
.subBtn {
    margin-top: 10rpx;
}


</style>
