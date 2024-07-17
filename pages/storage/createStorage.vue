<!--
 * @Author: wds520 1065580834@qq.com
 * @Date: 2024-07-07 22:51:19
 * @LastEditors: wds520 1065580834@qq.com
 * @LastEditTime: 2024-07-08 00:55:25
 * @FilePath: /wmsManage/pages/user/createUser.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<view class="container">
		
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="库房名称" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入库房名称" />
			</uni-forms-item>
			<uni-forms-item label="总库容" name="maxCapacity">
                <uni-easyinput type="number" v-model="formData.maxCapacity" placeholder="请输入总库容" />
				
			</uni-forms-item>
			<uni-forms-item label="仓库地址" name="address">
                <uni-easyinput type="text" v-model="formData.address" placeholder="请输入仓库地址" />
				
			</uni-forms-item>
			<uni-forms-item label="仓库等级" name="type">
				<uni-data-select
					v-model="formData.type"
					:localdata="storageLevelList"
					@change="change"
					></uni-data-select>
			</uni-forms-item>
			<!-- <uni-forms-item label="仓库状态" name="status">
                <uni-data-select
					v-model="formData.status"
					:localdata="range"
					@change="change"
					></uni-data-select>
			</uni-forms-item> -->
			<uni-forms-item label="已使用空间" name="usedSpace">
                <uni-easyinput type="text" v-model="formData.usedSpace" placeholder="请输入已使用空间" />
				
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">创建</button>
	</view>


	</view>
</template>

<script>



 import {addWareHouse, registerUser} from '@/request/api'

	export default {
	data() {
		return {
			// 表单数据
			formData: {
				name: '',
				maxCapacity: '',
				address: ''
			},
			storageLevelList: [
				{
					value: 1,
					text: '一级'
				},
				{
					value: 2,
					text: '二级'
				},
				{
					value: 3,
					text: '三级'
				}
			],
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入库房名称',
						},
						{
							minLength: 2,
							maxLength: 16,
							errorMessage: '库房名称长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对email字段进行必填验证
				email: {
					rules: [{
						format: 'password',
						errorMessage: '请输入正确的总库容',
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

				addWareHouse(res).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
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
