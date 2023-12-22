<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
			@scrolltolower="lower" @scroll="scroll">
			<view>
				<u-album :urls="urls2" multipleSize="230rpx" :showMore="false" maxCount="10000"></u-album>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
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
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			}
		}
	}
</script>
<style>
	.scroll-Y {
		height: 300rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>