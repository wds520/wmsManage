
<template>
	<view class="container">
		
		<uni-tag text="添加司机" type="primary"  @click="toCreateDriver" class="toCreateDriver"></uni-tag>
        <!-- <text style="float: right;"> 已选车总载重： 8990吨</text> -->
    <!-- <uni-list> -->
        <uni-list :border="true">
            <!-- 显示圆形头像 -->
            

           <uni-list-chat title=""  note=""   time="2020-02-02 20:20"  v-for="item in driverList" :key="item.value">
                    <template v-slot:header>
                        <view class="flex flex-col">
                            <label class="uni-list-cell uni-list-cell-pd flex flex-col">
                                <view>
                                    <checkbox :value="item.value" :checked="item.checked" />
                                </view>
                                <view>
                                    <view>
                                        <text class="chat-custom" style="margin-left: 10px;">{{item.name}}</text>
                                    </view>
                                    <view>
                                        <text class="chat-custom" style="margin-left: 10px;font-size: 14px;font-weight: 400;">手机号： {{item.phone}}</text>
                                    </view>
                                    
                                </view>
                            </label>
                            
                        </view>
                        
                        
                    </template>
                    <view class="chat-custom-right">
                        <!-- <text class="chat-custom-text" >{{statusList[item.status]}}</text> -->
                        <text class="chat-custom-text" @click="deleteDriverFn(item)" >删除司机</text>
                        <text class="chat-custom-text" @click="editCarFn(item)" >编辑司机</text>
                        <!-- <text class="chat-custom-text" @click="callCar">呼叫车辆</text> -->
                        <!-- 需要使用 uni-icons 请自行引入 -->
                        <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                    </view>
                <!-- </view> -->
                
            </uni-list-chat>
            
            <view class="uni-padding-wrap uni-common-mt uni-fixed-bottom" style="position:fixed;bottom: 30px; width: 80%;left: 10%;">
                <button type="primary">发起申请</button>
            </view>

        </uni-list>



	</view>
</template>

<script>
import {queryDriverList, delDriver} from '@/request/api'
	export default {
		data() {
			return {
                avatarList: [],
                popup: null,
                
                formData: {
                    datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
                },
                driverList: [],
                statusList: ['空闲', '运输中', '废弃']
			}
		},
        onShow(options) {
            this.queryDriverListFn()
        },
		methods: {
			resetPassword() {
                this.$refs.popup.open('bottom')
            },
            toCreateDriver() {
                    uni.navigateTo({
                        url: '/pages/driver/createDriver'
                    })
                
            },
            editCarFn(data) {
                uni.navigateTo({
                        url: '/pages/driver/createDriver?driverId=' + data.id + '&type=edit'
                    })
            },
            callCar() {
                uni.makePhoneCall({
                    phoneNumber: '17346736734',
                    success: (result) => {},
                    fail: (error) => {}
                })
            },
            queryDriverListFn() {
                queryDriverList({}).then(res => {
                    if(res.code !== 200) {
                        uni.showToast({
                            icon: 'error',
                            title: res.message,
                            duration: 2000
                        });
                        return;
                    }
                    this.driverList = res.data.list.filter(v => v.status !== 1);
                })
            },
            deleteDriverFn(data) {
                delDriver(data.id).then(res => {
                    if(res.code !== 200) {
                        uni.showToast({
                            icon: 'error',
                            title: res.message,
                            duration: 2000
                        });
                        return;
                    }
                    uni.showToast({
                        title: `删除成功`,
                        icon: 'none'
                    });
                    this.queryDriverListFn();
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
        ::v-deep .uni-list-chat__header-warp {
            display: none;
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
.flex-col {
    display: flex;
    flex-direction: row;
    align-items: center;
}


</style>
