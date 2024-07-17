
<template>
	<view class="container">
		
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="账号" name="userName">
				<uni-easyinput type="text" v-model="formData.userName" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="账号类型" name="role">
                <uni-data-select
					v-model="formData.role"
					:localdata="range"
					@change="change"
					></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="密码" name="pwd">
                <uni-easyinput type="text" v-model="formData.pwd" placeholder="请输入密码" />
				
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">确认</button>
	</view>


	</view>
</template>

<script>
import {getUserInfo, registerUser} from '@/request/api'
	export default {
	data() {
		return {
			// 表单数据
			formData: {
				userName: '',
				pwd: '',
				role: ''
			},
			range: [
				{ value: 1, text: "系统管理员" },
				{ value: 20, text: "中心管理员" },
				{ value: 21, text: "查询功能账户" },
				{ value: 22, text: "库房保管员" },
				{ value: 30, text: "县级(公司)管理员" },
				{ value: 31, text: "站点保管员" },
				{ value: 40, text: "第三方物流公司" },
				{ value: 41, text: "车辆驾驶员" },
			],
			rules: {
				// 对name字段进行必填验证
				userName: {
					rules: [{
							required: true,
							errorMessage: '请输入账号',
						},
						// {
						// 	minLength: 2,
						// 	maxLength: 16,
						// 	errorMessage: '账号长度在 {minLength} 到 {maxLength} 个字符',
						// }
					]
				},
				role: {
					rules: [{
						required: true,
						errorMessage: '请选择账号类型',
					}]
				},
				// 对email字段进行必填验证
				pwd: {
					rules: [{
						required: true,
						format: 'password',
						errorMessage: '请输入正确的密码',
					}]
				}
			}
		}
	},
	methods: {
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		//   this.$refs.form.setValue(name, value)
		// },
		// 触发提交表单
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);

				registerUser(res).then(res => {
					if(res.code === 200) {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					} else {
						uni.showToast({
							icon: 'error',
							title: res.message
						})
					}
				}).catch((err) => {
                                    uni.showToast({
                                        title: '创建账号失败',
                                        duration: 2000
                                    });
                                })
                 



			}).catch(err =>{
				console.log('表单错误信息：', err);
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
