<!--
 * @Author: wds520 1065580834@qq.com
 * @Date: 2024-07-07 22:51:19
 * @LastEditors: wds520 1065580834@qq.com
 * @LastEditTime: 2024-07-08 00:04:39
 * @FilePath: /wmsManage/pages/user/createUser.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<view class="container">
    <uni-tag text="创建新用户" type="primary" @click="handleCreateNewUserBtnClick" class="toCreateUser"></uni-tag>
		
    <uni-list>
        <uni-list :border="true">
            <!-- 显示圆形头像 -->
            
           
           <uni-list-chat title="三级管理员1" :avatar-list="avatarList" note="" time="2020-02-02 20:20" >
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="resetPassword">重置密码</text>
                    <!-- 需要使用 uni-icons 请自行引入 -->
                    <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                </view>
            </uni-list-chat>

            <uni-list-chat title="三级管理员2" :avatar-list="avatarList" note="" time="2020-02-02 20:20" >
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="resetPassword">重置密码</text>
                    <!-- 需要使用 uni-icons 请自行引入 -->
                    <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                </view>
            </uni-list-chat>

            <uni-list-chat title="三级管理员3" :avatar-list="avatarList" note="" time="2020-02-02 20:20" >
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="resetPassword">重置密码</text>
                    <!-- 需要使用 uni-icons 请自行引入 -->
                    <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                </view>
            </uni-list-chat>

            <uni-list-chat title="三级管理员4" :avatar-list="avatarList" note="" time="2020-02-02 20:20" >
                <view class="chat-custom-right">
                    <text class="chat-custom-text" @click="resetPassword">重置密码</text>
                    <!-- 需要使用 uni-icons 请自行引入 -->
                    <!-- <uni-icons type="star-filled" color="#999" size="18"></uni-icons> -->
                </view>
            </uni-list-chat>
        </uni-list>
        
        
    </uni-list>


	</view>
</template>

<script>
	export default {
		data() {
			return {
                avatarList: [{
                    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
                }, {
                    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
                }, {
                    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
                }]
			}
		},
		methods: {
			resetPassword() {
                uni.showToast({
						title: `用户XXX的密码已重置为初始密码：123456`,
						icon: 'none'
					})
            },
            handleCreateNewUserBtnClick () {
                    uni.navigateTo({
                        url: '/pages/user/createUser'
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


</style>
