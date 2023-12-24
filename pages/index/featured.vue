<template>
	<view class="u-page">
		<u-navbar title="" leftIcon="" :fixed="true" @rightClick="rightClick" :autoBack="true" height="5px">
		</u-navbar>
		<!-- 导航栏开始 -->
		<view class="u-tabs-wrapper">
			<view>
				<u-tabs :list="list1" :activeStyle="{
				    color: '#303133',
				    fontWeight: 'bold',
				    transform: 'scale(1.20)'
				}" :inactiveStyle="{
				    color: '#C5C5C5',
				    transform: 'scale(1)' 
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>
			</view>
			<view class="icon-wrapper">
				<u-icon name="search" class="search-icon" size="36"></u-icon>
			</view>
		</view>
		<view class="item">
			<u-tabs :list="list1" @click="tabs" :current="tabsNum"></u-tabs>
		</view>
		<!-- 导航栏结束 -->
		<!-- 内容开始 -->
		<view class="wallpaper">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
				<!-- <u-swiper class="swiper"> -->
				<view v-if="tabsNum === 0">
					<!-- 第一个标签对应的内容 -->
					<u-album :urls="urls2" multipleSize="230rpx" :showMore="false" maxCount="10000"></u-album>
					<u-loadmore :status="status" />
				</view>
				<view v-else-if="tabsNum === 1">
					<!-- 第二个标签对应的内容 -->
					<u-album :urls="urls3" multipleSize="230rpx" :showMore="false" maxCount="10000"></u-album>
				</view>
				<!-- </u-swiper> -->
			</scroll-view>
		</view>
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
	export default {
		data() {
			return {
				list1: [{
						name: '头像',
					}, {
						name: '壁纸',
					},
					{
						name: '推荐',
					}
				],
				value6: "",
				status: 'loading',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				currentCategory: 0,
				tabsNum: 0, //标签索引
				imageHeight: 95,
				urls2: [
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',
					'http://qiniu.gaowa.love/Wallpaper/a8827ff28204a9c8ee945525cf2ae9d.jpg',

				],
				urls3: [
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
					'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
				],

			}
		},
		onReachBottom() {
			const newUrls = [
				'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
				'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
				'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
				'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
				'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
			];
			// console.log(0)
			this.urls2.push(...newUrls);
			// console.log(this.urls2)
			// 更新showPage属性以显示加载更多的页面 
		},

		methods: {
			navigateBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			rightClick() {
				console.log('rightClick');
			},
			leftClick() {
				console.log('leftClick');
			},
			handleTabClick: function(name) {
				uni.redirectTo({
					url: "/pages/index/index"
				}), console.log(name)
			},
			tabs(index) { //切换标签时切换轮播容器
				this.tabsNum = index.index;
				console.log(this.tabsNum)
			},
			swiper(event) {
				const index = event.detail.current;
				this.tabsNum = index;
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},

		},
		computed: {},
	}
</script>
<style>
	.item {
		position: fixed;
		/* top: calc(44px + 44px); */
		/* 导航栏高度 + u-tabs-wrapper高度 */
		width: 100%;
		background-color: #FFFFFF;
		top: 150rpx;
		/* margin-left: 5px; */
		z-index: 2;
		/* 设置较低的层级 */
	}

	.wallpaper {
		/* position: absolute; */
		margin-left: 18rpx;
		margin-right: 10rpx;
		z-index: 0;
		margin-top: 250rpx;
		/* height: 900rpx; */
	}

	.scroll-Y {
		height: 100%;
	}

	.swiper {
		height: auto;
	}

	.category-content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.u-tabs-wrapper {
		position: fixed;
		z-index: 2;
		background-color: #FFFFFF;
		top: 5px;
		left: 0;
		right: 0;
		margin-top: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 更新为 flex-end */
	}

	.icon-wrapper {
		display: flex;
		margin-right: 30rpx;
	}

	.search-icon {
		margin-left: 10px;
	}
</style>