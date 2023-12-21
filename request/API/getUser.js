// import request from 
export function getUser(token) {
	return new Promise((resolve, reject) => {
		const url = 'http://uni.gaowa.love/api/info';
		const header = {
			'Authorization': token // 在请求标头中添加名为 "token" 的字段和访问令牌
		};
		uni.request({
			url: url,
			method: 'GET',
			header: header,
			success: res => {
				// 请求成功的处理逻辑
				resolve(res.data);
			},
			fail: err => {
				// 请求失败的处理逻辑
				reject(err);
			}
		});
	});
}