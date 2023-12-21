<template>
	<view class="one">
		<view class="top">
			<u-icon name="setting" class="setting" size="24"></u-icon>
			<u-icon name="scan" class="scan" size="30"></u-icon>
			<!-- 账号信息 -->
			<!-- 未登录时 -->
			<view v-if="isLoggedIn" class="avatar" @click="avatarClickHandler">
				<!-- 头像和登录提示 -->
				<up-avatar shape="circle" size="50"></up-avatar>
				<text class="nickname">请登录/注册</text>
				<u-icon name="arrow-right" color="black" size="20" class="arrow-right"></u-icon>
			</view>
			<view v-else class="avatar" @click="avatarClickHandler">
				<!-- 用户头像和昵称 -->
				<up-avatar :src="src" shape="circle" size="50"></up-avatar>
				<text class="nickname">{{ nickname }}</text>
				<u-icon name="arrow-right" color="black" size="20" class="arrow-right"></u-icon>
			</view>

		</view>
		<view class="two">
			<view class="vip"><text style="color: #F9F3B1;font-size: 35rpx;">尊享会员</text></view>
			<view class="vip-img">
				<u-icon size="30" name="http://qiniu.gaowa.love/比赛系统/vip.png"></u-icon>
			</view>
			<view class="vip-child"><text style="color: #9F9F9F;font-size: 20rpx;">尊享各种特权和福利</text></view>
			<view class="vip-up"><text>立即开通</text></view>
			<up-button size="mini" @click="loginOut" text="退出登录"></up-button>
			<up-button size="mini" @click="checkToken" text="检查token"></up-button>
		</view>
		<view class="two-three"></view>
		<view class="three">
			<view class="item">
				<text class="concern">关注的人</text>
				<image src="/static/img.png" class="concern-image">
				</image>
			</view>
			<view class="item">
				<text class="collection">收藏作品</text>
				<image src="/static/friends.png" class="collection-image">
				</image>
			</view>
			<view class="new-item">
				<u-list @scrolltolower="scrolltolower" height="700rpx">
					<view class="list-view">
						<u-list-item v-for="(item, index) in indexList" :key="index" class="list-item">
							<u-cell :title="menuOptions[index]" @click="handleCellClick(index)">
								<template #icon>
									<u-avatar shape="square" size="25"
										src="http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg"
										customStyle="margin: -3px 5px -3px 0"></u-avatar>
								</template>
							</u-cell>
							<u-icon name="arrow-right" color="black" class="arrow-right-list"></u-icon>
						</u-list-item>
					</view>
				</u-list>
			</view>
		</view>
		<view style="height: 20px;"></view>
		<u-tabbar :value="value6" @change="name => value6 = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="放映厅" icon="photo" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="直播" icon="play-right" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="handleTabClick"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>
<script>
	import {
		getUser
	} from 'request/API/getUser.js';
	export default {
		// 组件的选项
		data() {
			return {
				login: "登录",
				src: "",
				value6: "",
				nickname: "",
				isLoggedIn: "",
				isBtn: false,
				disabled: true,
				indexList: [],
				menuOptions: [
					'成为创作者',
					'联系客服',
					'下载记录',
					'浏览历史',
					'常见问题',
					'关于我们',
					'清理缓存'
				],
				urls: []
			}
		},
		onHide() {
			console.log("小程序进入后台");
			// 处理进入后台时的逻辑
		},
		onLoad() {
			this.checkLoginStatus();
			this.loadmore()
			var token = uni.getStorageSync('token');
			if (token) {
				getUser(token)
					.then(data => {
						const {
							avatar,
							nickname
						} = data;
						console.log(data)
						console.log(data.data.avatar)
						this.src = data.data.avatar;
						this.nickname = data.data.nickname;
						// 在这里可以使用获取到的头像和昵称进行后续操作
					})
					.catch(error => {
						// 处理错误情况
					});
			}
		},
		onShow() {

		},
		methods: {
			//登录页面2
			loginIn: function() {
				uni.redirectTo({
					url: "/pages/login/register",
				});
			},
			handleTabClick: function(name) {

				uni.redirectTo({
					url: "/pages/index/featured"
				})

				console.log(name)
			},
			checkTokenExpiration(token) {
				if (token) { //如果 token 存在
					// console.log("token存在");
					const expiresAt = token.expiresAt;
					const currentTime = Math.floor(Date.now() / 1000);
					const isExpired = currentTime > expiresAt;
					// console.log("Token 是否过期:", isExpired); //false没有过期 true过期
					return isExpired;
				}

			},
			//点击单元格
			handleCellClick(index) {
				// 处理点击事件的逻辑
				console.log('Cell clicked:', index);
			},
			//退出登录
			loginOut: function() {
				uni.removeStorageSync('token');
				console.log('数据已清除');

				this.checkLoginStatus();
			},
			//列表事件
			scrolltolower() {
				// this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 7; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			//登录状态
			checkLoginStatus() {
				var token = uni.getStorageSync('token');
				if (token) { //true 存在
					this.isLoggedIn = false;
					if (this.checkTokenExpiration(token)) { //等于 true 的时候 清除数据
						uni.removeStorageSync('token');
						console.log('数据已清除');
						this.isLoggedIn = true; //显示登录提示
						this.checkLoginStatus();
					}

				} else if (!token) { //true token 不存在 false 存在 存在不走这里
					this.isLoggedIn = true;
					console.log("已经不存在了")
					console.log(!token)
				}
			},
			checkToken() {
				var token = uni.getStorageSync('token');
				if (token) {
					console.log("token存在")
				} else if (!token) {
					console.log("token不存在")
				}
			},
			//修改用户信息
			updateUserInfo() {
				console.log(123)
			}
		},
		computed: {
			// 如果 isLoggedIn 为 true，则返回 loginIn 函数；否则，返回 updateUserInfo 函数。
			avatarClickHandler() {
				return this.isLoggedIn ? this.loginIn : this.updateUserInfo;
			}
		},
		// 其他生命周期钩子和组件选项
	};
</script>
<style>
	.top {
		position: relative;
		height: 400rpx;
		background: linear-gradient(to bottom, rgba(237, 205, 244, 0.8), #C9C8F8);
	}

	.setting {
		position: absolute;
		margin-top: 100rpx;
		left: 650rpx;
	}

	.scan {
		position: absolute;
		margin-top: 95rpx;
		left: 30rpx;
	}

	.one {
		background-color: #F4F3F8;
	}

	/* 头像 */
	.avatar {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 170rpx;
		left: 50rpx;
	}

	.nickname-container {
		display: flex;
		align-items: center;
	}

	.nickname {
		font-size: 36rpx;
		margin-left: 20rpx;
	}

	.arrow-right {
		position: absolute;
		left: 600rpx;
	}

	.arrow-right-list {
		position: absolute;
		margin-top: 24rpx;
		left: 650rpx;
	}

	/* 登录的圆球 */
	.login {
		position: absolute;
		top: 50%;
		font-size: 40rpx;
	}

	.login-text {
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.two {
		position: relative;
		top: -50px;
		/* 向上移动 20px，盖住 .top 的底部一点 */
		height: 200rpx;
		background-color: #292929;
		border-radius: 10px;
		margin: 0 20rpx;
		z-index: 1;
	}

	.vip {
		position: absolute;
		margin-top: 50rpx;
		left: 50rpx;
	}

	.vip-child {
		position: absolute;
		margin-top: 110rpx;
		left: 50rpx;
	}

	.vip-img {
		position: absolute;
		margin-top: 50rpx;
		left: 190rpx;
	}

	.vip-up {
		position: absolute;
		display: flex;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		margin-top: 70rpx;
		height: 70rpx;
		width: 170rpx;
		font-size: 30rpx;
		color: #321A01;
		border-radius: 40rpx;
		background-color: #FDE4A4;
		left: 500rpx;
	}

	.two-three {
		position: relative;
		background-color: #F4F4F6;
		height: 200rpx;
		margin-top: -210rpx;
		border-radius: 10px 10px 0 0;
	}

	.three {
		position: relative;
		height: 850rpx;
		background-color: #F4F4F6;
	}

	.item {
		position: absolute;
		height: 150rpx;
		width: calc(50% - 42rpx);
		/* 让每个 <view> 元素平均占据可用空间 */
		top: -34px;
		background-color: #FFFFFF;
		box-shadow: 0 2px 2px rgba(225, 225, 225, 0.2), 0 -2px 2px rgba(225, 225, 225, 0.2),
			2px 0 2px rgba(225, 225, 225, 0.2), -2px 0 2px rgba(225, 225, 225, 0.2);
		border-radius: 10px;
	}

	.list-item {
		position: relative;
		margin-top: 15rpx;
		/* margin-left: 30rpx; */
	}

	.list-view {
		margin-top: 10rpx;
	}

	.item:nth-child(1) {
		left: 20rpx;
		/* 第一个 <view> 元素的左边距 */
	}

	.item:nth-child(2) {
		right: 20rpx;
		/* 第二个 <view> 元素的右边距 */
	}

	.new-item {
		position: absolute;
		height: 720rpx;
		width: 94%;
		top: 120rpx;
		left: 50%;
		transform: translateX(-50%);
		background-color: #FFFFFF;
		box-shadow: 0 4px 4px rgba(225, 225, 225, 0.2), 0 -4px 4px rgba(225, 225, 225, 0.2),
			4px 0 4px rgba(225, 225, 225, 0.2), -4px 0 4px rgba(225, 225, 225, 0.2);
		border-radius: 10px;
	}

	.concern {
		position: absolute;
		font-size: 30rpx;
		left: 10%;
		top: 36%;
	}

	.page {
		height: 500px;
		/* 固定高度为500像素 */
	}

	.concern-image {
		position: absolute;
		width: 70rpx;
		height: 70rpx;
		right: 10%;
		top: 25%;
	}

	.collection {
		position: absolute;
		font-size: 30rpx;
		left: 10%;
		top: 36%;
	}

	.collection-image {
		position: absolute;
		width: 70rpx;
		height: 70rpx;
		right: 10%;
		top: 25%;
	}
</style>