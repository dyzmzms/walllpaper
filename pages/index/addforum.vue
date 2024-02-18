<template>
	<view>
		<view
			style="position: fixed;  height: 70vh; width: 100vw; display: flex; flex-direction: column; margin-top: 400rpx; align-items: center;">
			<view style="padding-bottom: 600rpx;flex: 1; display: flex; flex-direction: column; align-items: center;">
				<view>
					<text style="font-size: 44rpx;">选择您要发布的内容</text>
				</view>
				<view style="margin-top: 30rpx; font-size: 24rpx;color: #9A9A9A;">
					<text>请分享您认为精美的图片或文案哦</text>
				</view>
			</view>

			<view>
				<view style="position: absolute; margin-left: -280rpx; margin-top: -80rpx;">
					<image src="../../static/foruntwo.png" style="width: 150rpx; height: 60rpx;" mode=""></image>
				</view>
				<view style="justify-content: center; align-items: center;" @click="addforum">
					<image src="../../static/forumone.png" style="width: 90rpx;height: 90rpx;border-radius: 10px;">
					</image>
					<view style="margin-left: 22rpx;">
						<text style="font-size: 12px;">帖子</text>
					</view>
				</view>
				<view style="margin-top: 200rpx;margin-left: 22rpx;">
					<u-icon name="close" size='25' @click="close"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {


			}
		},
		methods: {
			close() {
				uni.navigateBack({
					delta: 1,
					animationType: 'slide-out-bottom', //页面动画
					animationDuration: 300
				});
			},
			addforum(){
				uni.navigateTo({
					url:'/pages/index/editforum'
				})
			}
		}
	}
</script>

<style>
</style>