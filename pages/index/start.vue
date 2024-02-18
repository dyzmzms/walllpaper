<template>
	<view class="u-page">
		<!-- <u-navbar leftIcon="" :fixed="true" height="22rpx">
		</u-navbar> -->
		<view class="nav">

		</view>
		<!-- 导航栏开始 -->
		<view class="u-tabs-wrapper">
			<view>
				<u-tabs :list="list1" @click="tabsOne" :activeStyle="{
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
			<u-tabs :list="list2" @click="tabsTwo" :current="tabsNum" v-if="listShow"></u-tabs>
			<u-tabs :list="list3" @click="tabsTwo" :current="tabsNum" v-else></u-tabs>
		</view>
		<!-- 导航栏结束 -->
		<!-- 头像内容开始 -->
		<swiper :style="`height: ${fullHeight}; width: 100%;  margin: 0; position: fixed;`" :current="currentCategory"
			@change="swiper" v-if="listShow">
			<swiper-item style="width: 100%; overflow-x: hidden;" catchtouchmove="preventDefault">
				<scroll-view scroll-y="true" style="height: 100%; width: 96%; margin:0 auto; overflow-x: hidden;"
					@scrolltolower="scrolltolower">
					<u-album :urls="urls[0]" multipleSize="230rpx" :showMore="false" maxCount="10000"></u-album>
					<!-- <view><u-loadmore :status="status" /></view> -->
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%; width: 96%; margin: 0 auto; "
					@scrolltolower="scrolltolower">
					<u-album :urls="urls[1]" multipleSize="230rpx" :showMore="false" maxCount="10000"></u-album>
				</scroll-view>
			</swiper-item>
		</swiper>
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
	import {
		avatar
	} from 'request/API/avatar';
	export default {
		data() {
			return {
				list1: [{
						name: '头像',
					},
					{
						name: '壁纸',
					},
					{
						name: '推荐',
					},
				],
				list2: [{
						name: '男头',
					},
					{
						name: '女头',
					},
					{
						name: '情头',
					},
				],
				list3: [{
						name: '插画',
					},
					{
						name: '风景',
					},
					{
						name: '文字',
					},
				],
				value6: 1,
				fullHeight: '',
				listShow: true,
				status: 'loading',
				nomoreText: '实在没有了',
				scrollTop: 0,
				currentCategory: 0,
				tabsNum: 0, //标签索引
				page: 1,
				urls: { // 对象映射，将分类和对应的数组关联起来
					0: [], // 存放第一个分类的数据的数组
					1: [] // 存放第二个分类的数据的数组
				},
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
			avatar()
				.then(data => {
					// 提取所有的 "image" 参数
					const images = data.data.img.map(item => item.image);
					// console.log(images)
					this.urls[this.currentCategory] = images
				})
				.catch(error => {
					// 处理错误情况
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
				// console.log(name)
				this.value6 = name; // 更新当前选中的tab索引
				if (name === 3) {
					uni.redirectTo({
						url: "/pages/index/index"
					})
				} else if (name === 0) {
					uni.redirectTo({
						url: "/pages/index/homepage"
					})
				} else if (name == 2) {
					uni.redirectTo({
						url: "/pages/index/forum"
					})
				}
			},
			tabsOne(index) {
				console.log(index.index)
				// this.currentCategory = index.index;
				this.listShow = false
				if (index.index == 0) {
					this.listShow = true
				}
			},
			tabsTwo(index) { //切换标签时切换轮播容器
				this.currentCategory = index.index;
				// const type_id = index.index + 1;
				// if (this.urls[this.currentCategory].length === 0) {
				// 	avatar({
				// 			type_id
				// 		})
				// 		.then(data => {
				// 			// 提取所有的 "image" 参数
				// 			const images = data.data.img.map(item => item.image);
				// 			// console.log(images)
				// 			this.urls[this.currentCategory] = images
				// 		})
				// 		.catch(error => {
				// 			// 处理错误情况
				// 		});
				// }

			},
			swiper(event) {
				const index = event.detail.current;
				this.tabsNum = index;
				this.currentCategory = index;
				const totalPages = Math.ceil(this.urls[this.currentCategory].length / 25);
				const numberOfPages = totalPages === 0 ? 1 : totalPages;
				this.page = numberOfPages;
				const type_id = index + 1;
				const page = this.page;
				if (this.urls[this.currentCategory].length === 0) {
					avatar({
							type_id,
							page
						})
						.then(data => {
							// 提取所有的 "image" 参数
							const images = data.data.img.map(item => item.image);
							this.urls[this.currentCategory] = images

						})
						.catch(error => {
							// 处理错误情况
						});
				}
			},
			scrolltolower(e) {
				this.totalpage() //调用分页
			},
			totalpage() { //加载更多
				const page = this.page;
				const type_id = this.currentCategory + 1;
				avatar({
						page,
						type_id
					})
					.then(data => {
						// 提取所有的 "image" 参数
						this.page++;
						const images = data.data.img.map(item => item.image);
						this.urls[this.currentCategory].push(...images)
					})
					.catch(error => {
						// 处理错误情况
					});
			},
		},
		computed: {},
	}
</script>
<style>
	.item {
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		top: 145rpx;
		z-index: 2;
		/* 设置较低的层级 */
	}

	.nav {
		position: fixed;
		background-color: #FFFFFF;
		left: 0;
		right: 0;
		z-index: 2;
		height: 80rpx;
	}

	.scroll-Y {
		height: 100%;
	}

	.album {
		background-color: red;
	}

	.category-content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.u-tabs-wrapper {
		position: fixed;
		z-index: 4;
		background-color: #FFFFFF;
		/* top: 7rpx; */
		left: 0;
		right: 0;
		margin-top: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.icon-wrapper {
		/* display: flex; */
		margin-right: 30rpx;
		/* margin-top: 7rpx; */
	}
</style>