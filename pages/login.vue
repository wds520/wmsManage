
<template>
	<view class="loginContent">
		<uni-forms :modelValue="formData" :rules="rules" ref="loginFormRef" >
			<uni-forms-item label="用户名" name="userName">
				<uni-easyinput type="text" v-model="formData.userName" placeholder="请输入用户名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
                <uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">登录</button>
	</view>
</template>

<script>
	import {getUserInfo, registerUser, login} from '@/request/api'
	export default {
		data() {
			return {
				formData: {
                    userName: '',
                    password: ''
                },
                rules: {
				// 对name字段进行必填验证
                    userName: {
                        rules: [{
                                required: true,
                                errorMessage: '请输入姓名',
                            },
                        ]
                    },
                    // 对email字段进行必填验证
                    password: {
                        rules: [{
                            required: true,
                            errorMessage: '请输入密码',
                        }]
                    }
                },
                loginFormRef: null
			}
		},
		onLoad() {
			console.log('onload', uni.getStorageInfoSync('token'))
            if(uni.getStorageInfoSync('token')?.currentSize !== 0) {
                uni.navigateTo({
                    url: "/pages/index/index",
                    success: () => {
                        console.log('跳转成功')
                    },
                    error: () => {
                        console.log('调整失败')
                    }
                })
            }
		},
		methods: {
			jumpPage(pageUrl) {
				uni.navigateTo({
					url: pageUrl,
					success: () => {
						console.log('跳转成功')
					},
					error: () => {
						console.log('调整失败')
					}
				})
			},
            submitForm() {
                this.$refs.loginFormRef.validate().then(res => {
                    console.log(res)
                    login(res).then(res => {
                        console.log(res, 'res')
                        if(res.code !== 200) {
                            uni.showToast({
                                icon: 'error',
                                title: res.message,
                                duration: 2000
                            });
                        } else {
                            // 定向到首页
                            const token = res.data.token;
                            console.log(token, 'token')
                            uni.setStorageSync('token', token)


                                getUserInfo().then(res => {
                                    uni.setStorageSync('userInfo', res.data)
                                    uni.navigateTo({
                                        url: "/pages/index/index",
                                        success: () => {
                                            console.log('跳转成功')
                                        },
                                        error: () => {
                                            console.log('调整失败')
                                        }
                                    })
                                }).catch((err) => {
                                    uni.showToast({
                                        title: '获取用户信息失败，请重试',
                                        duration: 2000
                                    });
                                })
                            
                        }
                    }).catch((err) => {
                        uni.showToast({
                            title: '登录失败，请重试',
                            duration: 2000
                        });
                    })
                })
            }
		}

	}
</script>

<style lang="scss" scoped>
	.loginContent {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		.mb {
			margin-bottom: 20px;
		}
	}
</style>
