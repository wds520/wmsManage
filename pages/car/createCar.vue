
<template>
	<view class="container">
		
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="车牌号" name="number">
				<uni-easyinput type="text" v-model="formData.number" placeholder="请输入车牌号" />
			</uni-forms-item>
			<uni-forms-item label="当前位置" name="currentLocation">
				<uni-easyinput type="text" v-model="formData.currentLocation" placeholder="请输入当前位置" />
			</uni-forms-item>
			<uni-forms-item label="载重量" name="capacity">
                <uni-easyinput type="text" v-model="formData.capacity" placeholder="请输入车辆载重量" />
				<!-- <input class="input" v-model="formData.email" type="text" placeholder="请输入总库容" @input="binddata('email',$event.detail.value)" /> -->
			</uni-forms-item>
			<uni-forms-item label="车辆类型" name="type">
                <uni-data-select
					v-model="formData.type"
					:localdata="range"
					@change="change"
					></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="车辆状态" name="status">
                <uni-data-select
					v-model="formData.status"
					:localdata="range1"
					@change="change"
					></uni-data-select>
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">确认</button>
	</view>


	</view>
</template>

<script>

 import {addCar, editCar, queryCarDetail} from '@/request/api'
	export default {
	data() {
		return {
			// 表单数据
			formData: {
				number: '',
				email: '',
				capacity: '',
				currentLocation:'',
				type: 1,
				status: 0
			},
			range: [
				{ value: '0', text: "小型车" },
				{ value: '1', text: "中型车" },
				{ value: '2', text: "大型车" },
			],
			range1: [
				{ value: '0', text: "空闲" },
				{ value: '1', text: "运输中" },
				{ value: '2', text: "废弃" }
			],
			carInfo: {},
			rules: {
				// 对name字段进行必填验证
				number: {
					rules: [{
							required: true,
							errorMessage: '请输入车牌号',
						}
					]
				},
				capacity: {
					rules: [{
						required: true,
						errorMessage: '请输入车辆载重量',
					}]
				}
			}
		}
	},
	onLoad(options) {
		if(options.type === 'edit') {
			this.carInfo = options;
			this.queryCarDetailFn();
		}
	},
	methods: {
		queryCarDetailFn() {
			queryCarDetail(this.carInfo.carId).then(res => {
				if(res.code !== 200) {
					uni.showToast({
						icon: 'error',
						title: res.message,
						duration: 2000
					});
					return
				}
				// this.carInfo = res.data;
				this.formData = res.data;
			})
		},
		// 触发提交表单
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
				if(this.carInfo.type === 'edit') {
					return editCar({
						...res,
						id: this.carInfo.carId
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
				addCar(res).then(res1 => {
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
