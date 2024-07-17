
<template>
	<view class="container">
	<!-- <text>录入日出库数</text> -->
    <view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			 <uni-forms-item label="出入库时间" name="movementDate">
					<uni-datetime-picker v-model="formData.movementDate" type="datetime" rangeSeparator="至" />
			</uni-forms-item>
			<uni-forms-item label="货物名称" name="stockId">
					<uni-data-select
						v-model="formData.stockId"
						:localdata="stockList"
					></uni-data-select>
			</uni-forms-item>

			
			<uni-forms-item label="类型" name="movementType">
					<radio-group @change="radioChange" name="formData.movementType">
						<label class="" v-for="(item, index) in items" :key="item.value" style="margin-right: 10px;">
							
								<radio :value="item.value" :checked="item.checked" />
							<text>{{item.name}}</text>
						</label>
					</radio-group>
			</uni-forms-item>
			<uni-forms-item label="货物数量" name="stockQuantity">
                <uni-easyinput type="number" v-model="formData.stockQuantity" placeholder="请输入货物数量" />
				
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">录入</button>
	</view>


	</view>
</template>

<script>

 import {addStock, editStock, queryStock, moveStockInHouse} from '@/request/api'
	export default {
	data() {
		return {
			// 表单数据
			formData: {
				stockId: '',
				email: '',
				stockQuantity: '',
				movementType: 1
			},
			stockList: [
			],
			items: [
				{
					value: 1,
					name: '出库',
					checked: true
				},
				{
					value: 0,
					name: '入库'
				}
			],
			warehouseInfo: {},
			pageType: 'addStock',
			rules: {
				// 对name字段进行必填验证
				stockId: {
					rules: [{
							required: true,
							errorMessage: '请选择货物',
						}
					]
				},
				// 对email字段进行必填验证
				quantity: {
					rules: [{
						required: true,
						errorMessage: '请输入正确的货物容量',
					}]
				},
				stockQuantity: {
					rules: [{
						required: true,
						errorMessage: '请输入正确的货物数量',
					}]
				}
			}
		}
	},
	onLoad(options) {
		console.log(options, 'opitons')
		this.warehouseInfo = options;
		this.queryData()
		this.$forceUpdate();
	},
	methods: {
		radioChange(item) {
			console.log("🚀 ~ radioChange ~ item:", item)
			this.formData.movementType = item.detail.value;
		},
		queryData() {
                queryStock({warehouseId: this.warehouseInfo.warehouseId}).then(res => {
					console.log(res, 'res')
                    if (res.code === 200) {
                        this.stockList = res.data.list.filter(v => v.status !== 1).map(v => {
							return {
								...v, 
								value: v.id,
								text: v.name
							}
						});
                    }
                })
            },
		// 触发提交表单

		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
				const stockInfo = this.stockList.find(v => v.id === res.stockId);
				moveStockInHouse({
					...res,
					stockName: stockInfo.name,
					stockId: stockInfo.id,
					warehouseId: this.warehouseInfo.warehouseId,
					stockQuantity: Number(res.stockQuantity),
					// movementType: this.items.find(v => v.checked).value
				}).then(res1 => {
					if(res1.code !== 200) {
						uni.showToast({
							icon: 'error',
							title: res1.message,
							duration: 2000
						});
						return
					}
					uni.showToast({
						title: res.movementType ==  0 ? '入库成功' : '出库成功',
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
