import request from '../request.js' // 根据实际路径进行修改

// import store from '@/store/index.js'
// 导航栏接口
export function banner(data) {
	return request({
		url: 'nav1',
		method: 'GET',
		data
	})
}
export function login(data){
	return request({
		url:'',
		method:"POST",
		data
	})
}