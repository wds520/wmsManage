<!--
 * @Author: wds520 1065580834@qq.com
 * @Date: 2024-07-07 22:51:19
 * @LastEditors: wds520 1065580834@qq.com
 * @LastEditTime: 2024-07-08 00:51:36
 * @FilePath: /wmsManage/pages/user/createUser.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<view class="container">
		
		<uni-tag text="录入货物" type="primary"  @click="luruStorageInfo" class="toCreateUser"></uni-tag>

        <uni-list :border="true">
           
           <uni-list-chat title=""  note=""  thumb='"总库容： 234"' time="2020-02-02 20:20"  v-for="item in stockList" :key="item.id">
                <template v-slot:header>
                    <view>
                        <view>
                            <text class="chat-custom" style="margin-left: 10px;">货物名称：{{item.name}}</text>
                        </view>
                        <view>
                            <text class="chat-custom" style="margin-left: 10px;font-size: 14px;font-weight: 400;">存储量： {{item.quantity}}</text>
                        </view>
                        
                    </view>
                    
                </template>
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="luruStorageInfo(item)">编辑</text>
                    <text class="chat-custom-text" @click="deleteStock(item)">删除</text>
                </view>
            </uni-list-chat>
        </uni-list>
	</view>
</template>

<script>
    import { addTask, queryStock, delStock} from '@/request/api'
	export default {
		data() {
			return {
                avatarList: [],
                popup: null,
                carPopup: null,
                formData: {
                    datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
                    
                },
                applyFormData: {
                    actualArrivalTime: '',
                    estimatedArrivalTime: '',
                    stockQuantity: '',
                    warehouseTo: ''
                },
                stockList: [],
                stockListSelect: [],
                warehouseInfo:{},
                tobaccoList: [
                    {
                        value: 'C1F',
                        text: 'C1F'
                    }
                ],
                curWarehouseInfo: {},
                applyTaskPopupRef: null,
                applyTaskrules: {
                    // 对name字段进行必填验证
                    stockQuantity: {
                        rules: [{
                                required: true,
                                errorMessage: '请输入装载量',
                            }
                        ]
                    },
                    warehouseTo: {
                        rules: [{
                                required: true,
                                errorMessage: '请输入目的地仓库',
                            }
                        ]
                    },
                    actualArrivalTime: {
                        rules: [{
                                required: true,
                                errorMessage: '请输入预计出发时间',
                            }
                        ]
                    },
                    estimatedArrivalTime: {
                        rules: [{
                                required: true,
                                errorMessage: '请输入预计到达时间',
                            }
                        ]
                    },
                }
			}
		},
        watch: {
            stockList(nv) {
                this.stockListSelect = nv.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    }
                })
            }
        },
        onLoad(options) {
            this.warehouseInfo = options;
            this.queryData()
        },
		methods: {
            queryData() {
                queryStock({warehouseId: this.warehouseInfo.warehouseId}).then(res => {
                    if (res.code === 200) {
                        this.stockList = res.data.list.filter(v => v.status !== 1);
                    }
                })
            },
            luruStorageInfo(data) {
                uni.navigateTo({
                        url: '/pages/good/goodsDetail?warehouseId=' + this.warehouseInfo?.warehouseId + '&stockId=' + (data?.id ? data?.id : '') + '&stockName=' + data?.name + '&quantity=' + data?.quantity
                    })
            },
            deleteStock(item) {
                delStock(item.id).then(res => {
                    uni.showToast({
                        title: `删除成功`,
                        icon: 'none'
                    })

                    this.queryData()
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
        background-color: #fff;
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
.toCreateUser {
    margin-bottom: 20rpx;
}
.itemtxt {
    line-height: 40rpx;
    color: #333;
    padding: 10px 0;
}
.carPopContent {
    background-color: #fff;
    padding: 20px;
}


</style>
