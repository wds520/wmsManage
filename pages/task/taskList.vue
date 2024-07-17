
<template>
	<view class="container">
		
		<!-- <uni-tag text="添加车辆" type="primary"  @click="toCreateCar" class="toCreateCar"></uni-tag> -->
        <!-- <text style="float: right;"> 已选车总载重： 8990吨</text> -->
    <!-- <uni-list> -->
        <uni-list :border="true">
            <!-- 显示圆形头像 -->
            

           <uni-list-chat title=""  note=""  @click="toDetail"  time="2020-02-02 20:20"  v-for="item in items" :key="item.value">
                    <template v-slot:header>
                        <view class="flex flex-col">
                            <label class="uni-list-cell uni-list-cell-pd flex flex-col">
                                <view>
                                    <checkbox :value="item.value" :checked="item.checked" />
                                </view>
                                <view>
                                    <view>
                                        <text class="chat-custom" style="margin-left: 10px;">任务1</text>
                                    </view>
                                    <view>
                                        <text class="chat-custom" style="margin-left: 10px;font-size: 14px;font-weight: 400;">发起仓库： 仓库A</text>
                                    </view>
                                    
                                </view>
                            </label>
                            
                        </view>
                        
                        
                    </template>
                    <view class="chat-custom-right">
                        <text class="chat-custom-text" >等待接单</text>
                        <text class="chat-custom-text" @click   ="receiveTask">接受任务</text>
                        <!-- 需要使用 uni-icons 请自行引入 -->
                        <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                    </view>
                <!-- </view> -->
                
            </uni-list-chat>
            
            <view class="uni-padding-wrap uni-common-mt uni-fixed-bottom" style="position:fixed;bottom: 30px; width: 80%;left: 10%;">
                <button type="primary">接受任务</button>
            </view>
<!-- 
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
                
                </uni-popup> -->
        </uni-list>
        
        
    <!-- </uni-list> -->


	</view>
</template>

<script>
	export default {
		data() {
			return {
                avatarList: [],
                popup: null,
                
                formData: {
                    datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
                },
                items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					}
				]
			}
		},
		methods: {
			resetPassword() {
                this.$refs.popup.open('bottom')
            },
            toCreateCar() {
                    uni.navigateTo({
                        url: '/pages/car/createCar'
                    })
                
            },
            luruStorageInfo() {
                uni.navigateTo({
                        url: '/pages/storage/inStorageNum'
                    })
            },
            submit() {
                
            },
            receiveTask() {
                 uni.navigateTo({
                        url: '/pages/car/carList'
                    })
            },
            toDetail() {
                uni.navigateTo({
                    url: '/pages/task/taskDetail'
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
