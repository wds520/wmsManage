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
		
		<uni-tag text="创建新库房" type="primary"  @click="handleCreateNewUserBtnClick" class="toCreateUser"></uni-tag>
    <!-- <uni-list> -->
        <uni-list :border="true">
            <!-- 显示圆形头像 -->
            
           
           <uni-list-chat title=""  note=""  thumb='"总库容： 234"' time="2020-02-02 20:20"  v-for="item in wareHouseList" :key="item.id">
                <template v-slot:header>
                    <view>
                        <view>
                            <text class="chat-custom" style="margin-left: 10px;">{{item.name}}</text>
                        </view>
                        <view>
                            <text class="chat-custom" style="margin-left: 10px;font-size: 14px;font-weight: 400;">总库容： {{item.maxCapacity}}</text>
                        </view>
                        
                    </view>
                    
                </template>
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="handleNeedCar(item)">装车申请</text>
                    <text class="chat-custom-text" @click="luruStorageInfo(item)">出入库</text>
                    <text class="chat-custom-text" @click="seeGoodsList(item)">查看货物</text>
                    <text class="chat-custom-text" @click="resetPassword">查询进销存</text>
                    <!-- 需要使用 uni-icons 请自行引入 -->
                    <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                </view>
            </uni-list-chat>
        </uni-list>
        
        <uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
                <view style="background-color: #ccc;padding: 20rpx;">
                    <view style="display: flex;align-items: center;">
                    <uni-forms ref="form" :modelValue="formData" style="flex: 1;height: 37px;">
                        <uni-forms-item label="" name="datetimerange">
                                <uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
                        </uni-forms-item>
                    </uni-forms>
                    <button @click="submit" style="width: fit-content;height: 37px;">查询</button>
                </view>
                <view class="itemtxt">进库： 12322</view>
                <view  class="itemtxt">销售： 123</view>
                <view  class="itemtxt">存量： 123</view>
                </view>
                
                </uni-popup>

        <!-- 装车申请基本信息 -->
            <uni-popup ref="carPopup" type="bottom" border-radius="10px 10px 0 0">
                <view class="carPopContent">
                    <uni-forms ref="applyTaskPopupRef" :modelValue="applyFormData" :rules="applyTaskrules">
                        <!-- <uni-forms-item label="车辆数" name="name">
                            <uni-easyinput type="text" v-model="applyFormData.name" placeholder="请输入车辆数量" />
                        </uni-forms-item> -->
                        <uni-forms-item label="装载量" name="stockQuantity">
                            <uni-easyinput type="text" v-model="applyFormData.stockQuantity" placeholder="请输入单车装载量" />
                           
                        </uni-forms-item>
                        <uni-forms-item label="烟叶等级" name="name">
                            <uni-data-select
                                v-model="applyFormData.name"
                                :localdata="tobaccoList"
                                @change="change"
                                ></uni-data-select>
                           
                        </uni-forms-item>
                        <uni-forms-item label="目的地仓库" name="warehouseTo">
                            <!-- <uni-easyinput type="text" v-model="applyFormData.warehouseTo" placeholder="请输入目的地仓库" /> -->
                           <uni-data-select
                                v-model="applyFormData.warehouseTo"
                                :localdata="wareHouseListSelect"
                                @change="change"
                                ></uni-data-select>
                        </uni-forms-item>
                        <uni-forms-item label="预计出发时间" name="actualArrivalTime">
                                <uni-datetime-picker type="datetime" v-model="applyFormData.actualArrivalTime" @change="changeLog" />
                        </uni-forms-item>
                        <uni-forms-item label="预计到达时间" name="estimatedArrivalTime">
                                <uni-datetime-picker type="datetime" v-model="applyFormData.estimatedArrivalTime" @change="changeLog" />
                        </uni-forms-item>
                    </uni-forms>
                    <button @click="applyTaskSubmit">确认申请装车</button>
                </view>
                
                </uni-popup>
    <!-- </uni-list> -->


	</view>
</template>

<script>
import {queryWareHouseList, addTask} from '@/request/api'
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
                wareHouseList: [],
                wareHouseListSelect: [],
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
            wareHouseList(nv) {
                this.wareHouseListSelect = nv.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    }
                })
            }
        },
        onLoad(options) {
            queryWareHouseList().then(res => {
                if (res.code === 200) {
                    this.wareHouseList = res.data.list;
                }
            })
        },
		methods: {
			resetPassword() {
                this.$refs.popup.open('bottom')
            },
            handleCreateNewUserBtnClick () {
                    uni.navigateTo({
                        url: '/pages/storage/createStorage'
                    })
                
            },
            luruStorageInfo(data) {
                uni.navigateTo({
                        url: '/pages/storage/inStorageNum?warehouseId=' + data.id
                    })
            },
            seeGoodsList(data) {
                uni.navigateTo({
                        url: '/pages/good/goodsList?warehouseId=' + data.id
                    })
            },
            handleNeedCar(item) {
                this.curWarehouseInfo = item;
                this.$refs.carPopup.open('bottom')
                // uni.navigateTo({
                //         url: '/pages/car/carList'
                //     })
            },
            submit() {
                
            },
            applyTaskSubmit() {
                this.$refs.applyTaskPopupRef.validate().then(res => {
                    console.log('表单数据信息：', res);
                    addTask({
                            ...res,
                            warehouseFrom: this.curWarehouseInfo.id,
                            status: 1
                        })
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
