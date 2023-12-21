// login.js
//二次封装接口
import request from '../request.js'
export function login(data) {
	return request({
		url: '/login',
		method: 'POST',
		data
	})
}

