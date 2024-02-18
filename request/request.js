// import store from '../store/index.js'
const baseUrl = 'http://uni.gaowa.love/api/'; // 接口地址
export default function request({
	url,
	method = 'POST',
	data,
	header,
}) {
	return new Promise((reslove, reject) => {s
		uni.request({
			url: baseUrl + url,
			method: method,
			data: {s
				...data
			},
			header: {
				Authorization: '123' // 在请求头中添加token
			},
			success(res) {
				if (res.data.code == 1) {
					reslove(res.data)
					// console.log(res.data)
				} else {
					reject(res.data)
					// uni.navigateTo({
					//   url: '/pages/login/login'
					// })
				}
			},
			fail(err) {
				reject(err)
			}
		})
	})
}