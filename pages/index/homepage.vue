<template>
	<view style="background-color: #f4f4f6;height: 100vh;">
		<!-- 导航栏 -->
		<view>
			<u-navbar leftIcon="" leftText="Hi,欢迎来到小妖精美化" rightIcon="question-circle-fill" :fixed="true">
			</u-navbar>
		</view>
		<!-- 页面 -->
		<view class="page-one">
			<!-- 轮播图 -->
			<view class="swiper">
				<swiper :indicator-dots="false" style="height: 120px;" :autoplay="true" :interval="3000"
					:duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/swiper.png" mode=""
								style="border-radius: 15px; width: 100%;height: 120px;"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播图结束 -->
			<!-- 滑动列表开始 -->
			<view style="margin-top: 30rpx;">
				<scroll-view scroll-x="true" style="white-space: nowrap;height: 150rpx;">
					<view style="display: flex; align-items: center;" class="text-nav">
						<view style="margin-right: 55rpx; margin-left: 20rpx;">
							<image src="../../static/navone.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -100rpx;">锁屏组件</text>
						</view>
						<view style="margin-right: 55rpx; ">
							<image src="../../static/navtwo.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -100rpx;">套图投稿</text>
						</view>
						<view style="margin-right: 55rpx; text-align: center;">
							<image src="../../static/navthree.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -90rpx;">倒计时</text>
						</view>
						<view style="margin-right: 55rpx; text-align: center;">
							<image src="../../static/navfour.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -100rpx;">桌面美化</text>
						</view>
						<view style="margin-right: 55rpx; text-align: center;">
							<image src="../../static/navfive.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -100rpx;">桌面宠物</text>
						</view>
						<view style=" ">
							<image src="../../static/navsix.png" mode=""
								style="height: 100rpx;width: 100rpx; border-radius: 15px;margin-right: 20rpx;"></image>
							<text style="position: absolute;margin-top: 100rpx;margin-left: -110rpx;">换图标</text>
						</view>
					</view>
				</scroll-view>


			</view>
		</view>
		<view class="body" style="margin-top: 10rpx;background-color: #FFF; height: 80vh;">
			<view style="height: 50rpx;">
			</view>
			<!-- 标签 -->
			<view style="margin-left: 20px;">
				<u-tag text="ios锁屏组件" plain shape="circle"></u-tag>
			</view>
			<view
				style="background-color: #E7F9FD; border: 1px dashed #B6E6E1; height: 40px; width: 90%; top: 40px; margin: 20rpx auto 0 auto; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
				<text style="color: #4ECBE4;">编辑组件文字内容</text>
			</view>
			<!-- 纪念日 -->
			<view style="display: flex; margin-top: 20px;">
				<!-- 纪念日 -->
				<view
					style="margin-left: 40rpx; width: 300rpx;height: 120rpx; border-radius: 5px; background: linear-gradient(to bottom, #FFEBF8, #FFF5FC);">
					<image src="../../static/img.png" style="width: 20px; height: 20px;" mode=""></image>
					<text>我们在一起</text>
					<view style="display: flex;">
						<text style="font-size: 40rpx; margin-left: 200rpx;">521</text>
						<text style="font-size: 25rpx; margin-top: 5px;">天</text>
					</view>
					<text style="position: absolute; margin-left: 100rpx;margin-top: 22rpx;font-size: 30rpx;">纪念日</text>
				</view>
				<!-- 趣味文字 -->
				<view
					style="margin-left: 70rpx; display: flex; align-items: center; justify-content: center; height: 105rpx; width: 120rpx;height: 120rpx; border-radius: 50%; background-color: #FFF1E1;">
					<view>
						<text>暴富</text>
					</view>
					<view><text style="position: absolute; margin-left: -85rpx; margin-top:70rpx;font-size: 30rpx;">趣味文字</text></view>
				</view>

				<!-- 趣味文字 -->
				<view
					style="margin-left: 70rpx; display: flex; align-items: center; justify-content: center; height: 105rpx; width: 120rpx;height: 120rpx; border-radius: 50%; background-color: #E1EDFF;">
					<text>暴富</text>
					<view><text style="position: absolute; margin-left: -85rpx; margin-top:70rpx;font-size: 30rpx;">圆形动物</text></view>
				</view>
			</view>
			<!-- 桌面组件 -->
			<view style="background-color: ; margin-top: 100rpx;">
				<view style="margin-left: 20px;">
					<u-tag text="桌面组件" plain shape="circle"></u-tag>
				</view>
				<!-- 小号 -->
				<view style="margin-top: 50rpx;">
					<text style="margin-left: 20px;">小号</text>
					<!-- 示例 -->
					<view style="display: flex; flex-wrap: wrap;margin-top: 20px;" class="body-two">
						<view
							style=" width: 200rpx; height: 200rpx; margin-right: 50rpx; margin-bottom: 60rpx; margin-left: 25rpx;">
							<image src="../../static/dog.png" mode=""
								style="width: 100%; height: 100%; border-radius: 15px;"></image>
							<text style="margin-left: 12rpx;">桌面主题换图</text>
						</view>
						<view style=" width: 200rpx; height: 200rpx; margin-right: 50rpx; margin-bottom: 10px; ">
							<image src="../../static/sweet.png" mode=""
								style="width: 100%; height: 100%;border-radius: 15px;"></image>
							<text style="margin-left: 32rpx;">甜点纪念日</text>
						</view>
						<view style="width: 200rpx; height: 200rpx; margin-right: 10px; margin-bottom: 10px; ">
							<image src="../../static/love.png" mode=""
								style="width: 100%; height: 100%;border-radius: 15px;"></image>
							<text style="margin-left: 32rpx;">恋爱纪念日</text>
						</view>
						<view
							style="width: 200rpx; height: 200rpx; margin-right: 50rpx; margin-bottom: 10px; margin-left: 25rpx; ">
							<image src="../../static/peer.png" mode=""
								style="width: 100%; height: 100%;border-radius: 15px;"></image>
							<text style="margin-left: 12rpx;">薄荷小熊电量</text>
						</view>
						<view style="width: 200rpx; height: 200rpx; margin-right: 50rpx; margin-bottom: 10px;">
							<image src="../../static/study.png" mode=""
								style="width: 100%; height: 100%; border-radius: 15px;"></image>
							<text style="margin-left: 32rpx;">考研倒计时</text>
						</view>
						<view style="width: 200rpx; height: 200rpx; margin-right: 10px; margin-bottom: 10px;">
							<image src="../../static/loveday.png" mode=""
								style="width: 100%; height: 100%; border-radius: 15px;"></image>
							<text style="margin-left: 80rpx;">恋爱</text>
						</view>
					</view>
				</view>
				<!-- 小号结束 -->
				<view style="margin-top: 100rpx;display: flex; justify-content: center; align-items: center;">
					<text style="font-size: 14px;">还有更多组件喔~</text>
				</view>

			</view>
		</view>
		<u-tabbar :value="value6" @change="name => value6 = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="精选" icon="photo" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="论坛" icon="play-right" @click="handleTabClick"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="handleTabClick"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value6: 0,
				list: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				}]
			}
		},
		methods: {
			handleTabClick: function(name) {
				// console.log(name)
				this.value6 = name; // 更新当前选中的tab索引
				if (name === 3) {
					uni.redirectTo({
						url: "/pages/index/index?value6="+name,
					})
				} else if (name === 1) {
					uni.redirectTo({
						url: "/pages/index/start"
					})
				} else if (name == 2) {
					uni.redirectTo({
						url: "/pages/index/forum"
					})
				}
			},
		}
	}
</script>

<style>
	.page-one {
		height: 450rpx;
		background-color: #FFF;
	}

	.swiper {
		position: relative;
		margin-top: 180rpx;
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		/* background-color: red; */
		z-index: 2;
	}

	.text-nav text {
		font-size: 14px;
	}

	.body-two text {
		font-size: 14px;
	}
</style>