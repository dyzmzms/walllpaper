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
		<view class="wallpaper" :style="{ height: wallpaperHeight }">
			<scroll-view scroll-y="true" class="scroll-Y" scroll-x="true">
				<swiper :current="currentCategory" class="swiper" @change="swiper">
					<swiper-item v-for="(category, index) in categories" :key="index">
						<view class="category-content">
							<u-album :urls="category.urls" multipleSize="250rpx" :showMore="false"
								maxCount="10000"></u-album>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>
		</view>
		<view>
			<u-loadmore :status="status" />
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
				currentCategory: 0,
				tabsNum: 0, //标签索引
				imageHeight: 95,
				categories: [{
						name: '男头',
						urls: ['http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
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
						]
					},
					{
						name: '女头',
						urls: [
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
								'http://qiniu.gaowa.love/比赛系统/404f4f1a665833be7e3bd40e388317a.jpg',
						]
					},
				],
				urls2: [

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

			this.categories.forEach(category => {
				category.urls.push(...newUrls);
			});
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
				this.currentCategory = index.index
			},
			swiper(event) {//切换轮播图时切换标签
				const index = event.detail.current;
				this.tabsNum = index
			}
		},
		computed: {
			wallpaperHeight() {
				// console.log(currentCategory)
				// 计算滚动容器的高度
				// const currentCategory = this.categories[this.currentCategory];
				const imageCount = this.categories[0].urls.length;
				return `${(this.imageHeight) * imageCount}rpx`; //
			},
		},
	}
</script>
<style>
	.item {
		position: fixed;
		/* top: calc(44px + 44px); */
		/* 导航栏高度 + u-tabs-wrapper高度 */
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 80px;
		/* margin-left: 5px; */
		z-index: 2;
		/* 设置较低的层级 */
	}

	.scroll-view::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.wallpaper {
		/* height: 2000rpx; */
		position: relative;
		margin-left: 10rpx;
		margin-right: 10rpx;
		top: 130px;
		z-index: 0;
	}

	.scroll-Y {
		height: 100%;
		width: 100%;
	}

	.swiper {
		height: 100%;
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