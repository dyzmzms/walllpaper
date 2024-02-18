<template>
	<view>
		<!-- 导航栏 -->
		<view>
			<uni-nav-bar title="" left-icon="left" :fixed="true" :statusBar="true" :border="false">
				<block slot="right">
					<view>
					<u-button shape="circle" color="#54CEFE" size="mini"  style="width: 90rpx;font-size: 14px; height: 60rpx;">发布</u-button>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<!-- 标签选择入口 -->
		<view style="background-color: #F4F4F4;height: 100rpx;position: fixed;width: 100%; 
		display: flex;justify-content: center;align-items: center; border-top: 1px solid #D4D4D4;">
			<text
				style="color: #54CEFE; font-weight: 1000; font-size: 26rpx; flex: 1; margin-right: 20rpx; margin-left: 30rpx;">
				#&nbsp;请选择标签</text>
			<text
				style="color: #A5A5A5; font-size: 26rpx; flex: 1; text-align: right;margin-right: 15rpx;">选择合适的标签分类哦~</text>
			<u-icon name="arrow-right" :bold='true' style="margin-right: 20rpx;" color="#ABABAB" size="26rpx"></u-icon>
		</view>
		<view class="" style="margin-top: 100rpx; position: fixed; width: 95%;">
			<u--textarea border="none" height="180" v-model="value2" placeholder="说点什么吧..请不要发布违规的内容哦~" count
				style="width: 100%;"></u--textarea>
			<u-upload :fileList="fileList3" @afterRead="afterRead" @delete="deletePic" name="3" :multiple="true"
				:maxCount="10" :previewFullImage="true" style="margin-top: 20rpx;margin-left: 30rpx;">
				<view style="display: flex;justify-content: center;align-items: center; width: 150rpx;height: 150rpx;border: 2px dashed #C6C6C6;border-radius: 6px;">
					<image src="/static/jiahao.png" style="width: 50%;height: 50%;"></image>
				</view>
			</u-upload>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				value2: '',
				fileList3: [],
			}
		},
		methods: {
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
					})
				})
			},
		}
	}
</script>

<style>
</style>