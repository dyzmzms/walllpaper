import request from '../request.js' // 根据实际路径进行修改

// import store from '@/store/index.js'
// 导航栏接口
export function avatar(data) {
	return request({
		url: 'Wallpaper/headimage',
		method: 'GET',
		data
	})
}