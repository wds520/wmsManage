
<template>
	<view class="container">
	<!-- <text>录入日出库数</text> -->
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="货物名称" name="name">
					<uni-data-select
						v-model="formData.name"
						:localdata="goodsNamesList"
						:disabled="pageType === 'editStock'"
					></uni-data-select>
			</uni-forms-item>
			<!-- <uni-forms-item label="类型" name="name">
					<radio-group @change="radioChange" name="">
						<label class="" v-for="(item, index) in items" :key="item.value" style="margin-right: 10px;">
							
								<radio :value="item.value" :checked="item.checked" />
							<text>{{item.name}}</text>
						</label>
					</radio-group>
			</uni-forms-item> -->
			<uni-forms-item label="货物容量" name="quantity">
                <uni-easyinput type="number" v-model="formData.quantity" placeholder="请输入货物容量" />
				
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">录入</button>
	</view>


	</view>
</template>

<script>

 import {addStock, editStock} from '@/request/api'
	export default {
	data() {
		return {
			// 表单数据
			formData: {
				name: '',
				email: ''
			},
			goodsNamesList: [
				{ value: 'C1F', text: "C1F" },
				{ value: "C2F", text: "C2F" },
				{ value: "C3F", text: "C3F" },
			],
			items: [
				{
					value: 0,
					name: '出库',
					checked: true
				},
				{
					value: 1,
					name: '入库'
				}
			],
			stockInfo: {},
			pageType: 'addStock',
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入货物名称',
						}
					]
				},
				// 对email字段进行必填验证
				quantity: {
					rules: [{
						required: true,
						errorMessage: '请输入正确的货物容量',
					}]
				}
			}
		}
	},
	onLoad(options) {
		console.log(options, 'opitons')
		this.stockInfo = options;
		if(options.stockId && options.stockId !== 'undefined') {
			this.formData.name = options.stockName
			this.formData.quantity = options.quantity
			this.pageType = 'editStock'	
			
		} else {
			this.pageType = 'addStock'
		
		}
		this.$forceUpdate();
	},
	methods: {
		// 触发提交表单
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
				if (this.pageType === 'addStock') {
					addStock({
						...res,
						warehouseId: this.stockInfo.warehouseId
					}).then(res => {
						uni.showToast({
							title: `录入成功`,
							icon: 'none'
						})
					})
				} else {
					editStock({
						...res,
						warehouseId: this.stockInfo.warehouseId,
						id: this.stockInfo.stockId
					}).then(res => {
						uni.showToast({
							title: `更新成功`,
							icon: 'none'
						})
					})
				}
				
                 

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
