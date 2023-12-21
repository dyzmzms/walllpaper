<template>
	<view>    
		<view>
			<!-- 2.0.19支持autoBack，默认为false -->
			<u-navbar title="注册" @leftClick="leftClick" :autoBack="false" :border="true">
			</u-navbar>
		</view>
		<view class="form">
			<u-form labelPosition="left" :model="form" :rules="rules" ref="form1">
				<u-form-item label="账号:" prop="mobile" ref="item1">
					<u-input v-model="form.mobile" type="number" :placeholder="username" maxlength="11"
						:clearable="clear" border="bottom"></u-input>
				</u-form-item>
				<u-form-item label="密码:" prop="password" ref="item1">
					<u-input v-model="form.password" :placeholder="password" password border="bottom"></u-input>
				</u-form-item>
					<view class="a-regiser">
				<text @click="regiser">点我登录</text>
			</view>
				<view class="btn">
					<up-button type="primary" size="small" text="注册" @click="change"></up-button>
				</view>

			</u-form>
		</view>
	</view>
</template>

<script>
	import login from 'request/API/login.js';
	export default {
		data() {
			return {
				value: '',
				clear: true,
				show:true,
				username: "请输入11位手机号",
				password: "请输入密码",
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
					url: "/pages/login/register",
				});
			},
			leftClick() {
				uni.redirectTo({
					url: "/pages/login/register",
				});
			},
			change() {
				const mobile = this.form.mobile;
				const password = this.form.password;
				login(mobile, password)
					.then(data => {
						// 登录成功的处理逻辑
						console.log( data.token);
					})
					.catch(error => {
						// 登录失败的处理逻辑
						console.error('登录失败', error);
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