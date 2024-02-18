<template>
	<view style="background-color: #F7F9FA;">
		<!-- 整个页面 -->
		<view v-show="true" style="background-color: #FFF;" :border="true">
			<!-- 导航栏 -->
			<view style="">
				<u-navbar leftIcon="" title="论坛" :fixed="true" :placeholder="true" right-icon="plus"
					@rightClick="rightClick">
				</u-navbar>
				<view style="position: fixed;z-index: 2;background-color: #FFF;">
					<u-tabs :list="list1" @click="clickTabs" @change="tabs" :current="tabsNum"></u-tabs>
				</view>
			</view>
			<!-- 主体 -->
			<view style="margin-top: 90rpx; ">
				<swiper :current="currentCategory" @change="swiper"
					:style="`height: ${fullHeight}; width: 100%;  margin: 0;  position: fixed;z-index='0'`">
					<!-- 第一页 -->
					<swiper-item style="width: 100%;height: 100%;">
						<scroll-view :refresher-enabled="refresher" @refresherrefresh="refresherrefresh"
							style="width: 100%;height: 50%; z-index" scroll-x="false" scroll-y="true">
							<view
								style="display: flex;justify-content: center; align-items: center;width: 100%; height: 100%;">
								<text style="">资源不见了~</text>
							</view>
						</scroll-view>
					</swiper-item>
					<!-- 第二页 -->
					<swiper-item style="width: 100%;height: 100%;">
						<scroll-view scroll-y="true"
							style="height: 100%;width: 100%;position: fixed;  background-color: #FFF;">
							<view class="" style="margin-top: 20rpx;" v-for="(item, index) in articleList" :key="index">
								<view
									style=" width: 95%;margin: 20rpx auto ; display: flex; justify-content: space-between;">
									<up-avatar :src="item.avatarsrc"></up-avatar>
									<view style="flex: 1; display: flex; flex-direction: column;margin-left: 20rpx;">
										<view><text style="color: #232323;">{{ item.username }}</text></view>
										<view style=" width: 100%;margin-top: -10rpx;"><text
												style="font-size: 12px;color: #D4D5D6;">{{ item.createtime }}</text>
										</view>
									</view>
									<view
										style="width: 80rpx;margin-right: 20rpx; height: 40rpx;: 10rpx;border-radius: 20px; border: skyblue solid 1px ; display: flex;text-align: center;align-items: center;justify-content: center;">
										<text style="font-size: 10px;color: skyblue;">关注</text>
									</view>
								</view>
								<!-- 文章标题 -->
								<view class="title" style="background-color: ;width: 95%;margin-top: 20rpx;">
									<view style="width: 95%; margin: 0 auto;">
										<text>
											{{ item.resourcename }}
										</text>
									</view>
								</view>
								<!-- 文章内容 -->
								<view style="margin-top: 20rpx;">
									<view style="width: 95%; margin: 0 auto;">
										<up-album :urls="item.imageurls" space="0" multipleSize="230rpx"></up-album>
									</view>
								</view>
								<!-- 文章标签布局 -->
								<view style="width: 95%; margin: 0 auto;">
									<!-- 标签 -->
									<view style="margin-top: 20rpx; display: flex;">
										<view v-for="(tag, tagIndex) in item.type" :key="tagIndex"
											style=" width: 120rpx;margin-right: 20rpx; height: 40rpx;: 10rpx;border-radius: 20px; border: skyblue solid 1px ; display: flex;text-align: center;align-items: center;justify-content: center;">
											<text style="color: #80DDFF;">#</text><text
												style="font-size: 10px;color: #7E7D7F;">{{ tag }}</text>
										</view>
									</view>
								</view>
								<!-- 收藏·评论·点赞 -->
								<view style="margin-top: 30rpx;padding-bottom: 20rpx;">
									<view
										style="width: 85%; margin: 0 auto; display: flex; justify-content: space-between;">
										<view style="display: flex;"><u-icon :color="'#A2A3A4'" name="star"
												size="26px"></u-icon>
											<up-badge :type="badgeType" max="99" :color="'#A2A3A4'"
												:value="item.starvalue"></up-badge>
										</view>
										<view style="display: flex;">
											<u-icon name="chat" :color="'#A2A3A4'" size="26px"></u-icon>
											<up-badge :type="badgeType" max="99" :color="'#A2A3A4'"
												:value="item.chatvalue" style="margin-left: -10rpx;"></up-badge>
										</view>
										<view style="display: flex;">
											<u-icon name="thumb-up" :color="'#A2A3A4'" size="26px"></u-icon>
											<up-badge :type="badgeType" max="99" :color="'#A2A3A4'"
												:value="item.thumbvalue" style="margin-left: -10rpx;"></up-badge>
										</view>
									</view>
								</view>
								<u-line color="#F7F9FA" :hairline="false" :customStyle="{borderWidth: '8px'}"></u-line>
							</view><!-- 模块 -->
						</scroll-view>
					</swiper-item>
					<!-- 第三页 -->
					<swiper-item style="width: 100%;height: 100%;">
						<scroll-view scroll-y="true"
							style="height: 100%;width: 100%;position: fixed;  background-color: #FFF;">
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
			<u-tabbar :value="value6" @change="name => value6 = name" :fixed="true" :placeholder="true"
				:safeAreaInsetBottom="true">
				<u-tabbar-item text="首页" icon="home" @click="handleTabClick"></u-tabbar-item>
				<u-tabbar-item text="精选" icon="photo" @click="handleTabClick"></u-tabbar-item>
				<u-tabbar-item text="论坛" icon="play-right" @click="handleTabClick"></u-tabbar-item>
				<u-tabbar-item text="我的" icon="account" @click="handleTabClick"></u-tabbar-item>
			</u-tabbar>
		</view>

	</view>
</template>

<script>
	import {
		forum
	} from 'request/API/forum';
	export default {
		data() {
			return {
				value6: 2,
				refresher: '',
				fullHeight: '',
				badgeType: "",
				currentCategory: 0,
				tabsNum: 0,
				// 文章内容
				articleList: [],
				list1: [{
					name: '热门',
				}, {
					name: '资源分享',
				}, {
					name: '头像'
				}, {
					name: '交友'
				}, {
					name: '壁纸'
				}, {
					name: '爱豆'
				}, {
					name: '游戏'
				}, {
					name: '生活日常'
				}, {
					name: '意见反馈'
				}]
			}
		},
		mounted() { //生命周期
			var that = this;
			//获取手机屏幕的高度，让其等于swiper的高度，从而使屏幕充满
			uni.getSystemInfo({
				success: function(res) {
					that.fullHeight = res.windowHeight + "px";
					console.log(that.fullHeight)
				}
			});
		},
		onLoad() {

		},
		methods: {
			handleTabClick: function(name) {
				// console.log(name)
				this.value6 = name; // 更新当前选中的tab索引

				if (name === 3) {
					uni.redirectTo({
						url: "/pages/index/index"
					})
				} else if (name === 1) {
					uni.redirectTo({
						url: "/pages/index/start"
					})
				} else if (name === 0) {
					uni.redirectTo({
						url: "/pages/index/homepage"
					})
				}
			},
			clickTabs() {
				console.log(123)
			},
			rightClick() {
              uni.navigateTo({
              	url: '/pages/index/addforum',
              	animationType: 'slide-in-bottom',//页面动画
              	animationDuration: 300
              });
			},
			swiper(index) {
				const type_id = index.detail.current + 1
				// console.log(type_id)
				// 调用接口
				forum({
						type_id
					})
					.then(data => {
						// console.log(data.data)
						this.articleList = data.data;
					})
					.catch(error => {
						// 处理错误情况
					});
				this.tabsNum = index.detail.current
			},
			tabs(index) {
				this.currentCategory = index.index
			},
			refresherrefresh(e) {
				console.log(e)

			}
		}
	}
</script>

<style>
	.text {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		/* 可根据需要调整高度 */
	}
</style>