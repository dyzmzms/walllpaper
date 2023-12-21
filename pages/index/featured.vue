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
			<u-tabs :list="list1"></u-tabs>
		</view>
		<!-- 导航栏结束 -->
		<!-- 内容开始 -->
		<view class="wallpaper">
			<u-album :urls="urls2" multipleSize="120" :showMore="false" maxCount="10000"></u-album>
		</view>
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
				urls2: [
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

				],

			}
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
			}
		}
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
			position: absolute;
			background-color: red;
			margin-left: 18rpx;
			margin-right: 15rpx;
			top: 130px;
			z-index: 0;
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