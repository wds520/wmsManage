
<template>
	<view class="container">
		
		<view class="item">
            <text>任务名称:</text>
            <text class="val">任务1</text>
        </view>
        <view class="item">
            <text>仓库名称:</text>
            <text class="val">仓库1</text>
        </view>
        <view class="item">
            <text>车辆数量:</text>
            <text class="val">10</text>
        </view>
        <view class="item">
            <text>是否到达:</text>
            <text class="val">否</text>
        </view>
        <view class="item">
            <text>是否卸车完成:</text>
            <text class="val">否</text>
        </view>
        <view class="item">
            <text>预计到达时间:</text>
            <text class="val">2024-07-12: 10:00:00</text>
        </view>
        <view class="item">
            <text>打卡图片:</text>
            <!-- <text class="val">2024-07-12: 10:00:00</text> -->
            <image
                class="val-img"
                src="https://ts1.cn.mm.bing.net/th/id/R-C.87f5998c3e4289fb8b3f3d67aac9c6ad?rik=pYnav3oVPlItYA&riu=http%3a%2f%2fwww.szgsg.com%2fuploads%2fallimg%2f210119%2f1-210119163409192.jpg&ehk=DU5cystGmVgQv0S7T2by6aTz13uCIrJd4vPk5T7m3r4%3d&risl=&pid=ImgRaw&r=0"
                mode="scaleToFill"
            />
        </view>
        <view>
            <button class="mini-btn" type="default" size="mini" @click="uploadLocationImg">上传打卡照片</button>
        </view>
        <view class="uni-padding-wrap uni-common-mt uni-fixed-bottom" style="position:fixed;bottom: 30px; width: 80%;left: 10%;">
            <button type="primary">确认到达</button>
        </view>
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
                    url: 'pages/task/taskDetail'
                })
            },
            uploadLocationImg() {
                uni.chooseMedia({
                    count: 9,
                    mediaType: ['image'],
                    sourceType: ['album', 'camera'],
                    maxDuration: 30,
                    camera: 'back',
                    success(res) {
                        console.log(res.tempFiles)
                    }
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
        .item {
            display: flex;
            justify-content: space-between;
            background-color: #eee;
            border-radius: 20rpx;
            padding: 10rpx 36rpx;
            margin-bottom: 20rpx;
            .val {
                color: #666;
                font-weight: 500;
            }
            .val-img {
                width: 150rpx;
                height: 150rpx;
                border-radius: 10rpx;
            }
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
    margin-bottom: 40rpx;
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
