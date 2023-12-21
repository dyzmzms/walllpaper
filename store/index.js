import { createStore } from 'vuex'

const store = createStore({
  state: {
    //用户信息
    userInfo: {
      name: '', //用户昵称
      avatar: '/static/user/user.png', //用户头像
      phone: '', //用户手机号
      id: '', //用户id
      sex: '', //用户性别
    }, 
  },
})

export default store
