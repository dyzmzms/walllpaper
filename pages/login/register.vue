<template>
	<view>
		<view>
			<!-- 2.0.19支持autoBack，默认为false -->
			<u-navbar title="登录" @leftClick="leftClick" :autoBack="false" :border="true"></u-navbar>
		</view>
		<view class="form">
			<u-form labelPosition="left" :model="form" :rules="rules" ref="form1">
				<u-form-item label="账号:" prop="mobile" ref="item1">
					<u-input v-model="form.mobile" type="number" :placeholder="username" maxlength="11"
						:clearable="clear" border="bottom"></u-input>
				</u-form-item>
				<u-form-item label="密码:" prop="password" ref="item1">
					<u-input v-model="form.password" password border="bottom"></u-input>
				</u-form-item>
				<view class="a-regiser">
					<text @click="regiser">点我注册</text>
				</view>
				<view class="btn">
					<up-button type="primary" size="small" text="登录" @click="change"></up-button>
				</view>
			</u-form>
		</view>
	</view>
</template>

<script>
	// import login from 'request/API/login.js';
	import {
		login
	} from "../../request/API/login";
	export default {
		data() {
			return {
				value: '',
				clear: true,
				// isShow: false,
				username: "用户名/手机号/邮箱",
				title: 'uview-plus的目标是成为uni-app生态最优秀的UI框架',
				description: 'uview-plus是uni-app生态专用的UI框架',
				closable: true,
				form: {
					mobile: "",
					password: "",
				},
				rules: {
					mobile: [{
						required: true,
						message: "请输入手机号",
						trigger: ["blur", "change"],
					}],
					password: [{
						required: true,
						message: "请输入密码",
						trigger: ["blur", "change"],
					}],
				},
			}
		},
		methods: {
			regiser() {
				uni.redirectTo({
					url: "/pages/login/loginIn",
				});
			},
			leftClick() {
				uni.redirectTo({
					url: "/pages/index/index",
				});
			},
			change() {
				const mobile = this.form.mobile;
				const password = this.form.password;
				const Data = {
				    mobile: mobile,
				    password: password
				  };
				uni.showToast({
					// title: '登录中',
					icon: 'loading',
					mask: true,
					// duration: 10000, // 设置显示时长为 10 秒
				});

				const startTime = new Date().getTime(); // 记录请求开始时间
				login(Data)
					.then(data => {
						// console.log(data)
						// 登录成功的处理逻辑
						const endTime = new Date().getTime(); // 记录请求结束时间
						const requestTime = endTime - startTime; // 计算请求时间
						// 根据请求时间来确定加载图标的显示时长
						const minAnimationTime = 1000; // 最小显示时间为 1 秒
						const animationDuration = Math.max(minAnimationTime, requestTime); // 加载图标的显示时长
						setTimeout(() => {
							if (data.token) {
								// 登录成功，进行页面跳转或其他操作
								uni.setStorageSync('token', data.token);
								uni.redirectTo({
									url: "/pages/index/index",
								});
							} else {
								// 登录失败，显示错误提示
								// console.error('登录失败');
								uni.showToast({
									title: data.msg,
									icon: 'none',
								});
							}
						}, animationDuration);
					})
					.catch(error => {
						// 登录失败的处理逻辑
						console.error('登录失败', error);
						uni.showToast({
							title: error.msg,
							icon: 'none',
						});
					});
			}

		}
	}
</script>

<style>
	.form {
		position: relative;
		padding: 40px;
		margin-top: 50%;
	}

	.btn {
		margin-top: 60rpx;
	}

	.a-regiser {
		position: absolute;
		right: 10%;
		margin-top: 20rpx;
		transform: translateY(-50%);
	}
</style>