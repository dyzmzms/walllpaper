import request from '../request.js' // 根据实际路径进行修改

// import store from '@/store/index.js'
// 二次封装论坛文章接口
export function forum(data) {
	return request({
		url: 'forumessay/list',
		method: 'GET',
		data
	})
}