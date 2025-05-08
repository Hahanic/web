import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  //从本地拿userInfo
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo')) || {})
  //登录状态
  const isLoggedIn = computed(() => !!userInfo.value.username)

  const setUserInfo = (info) => {
    userInfo.value = info
    localStorage.setItem('userInfo', JSON.stringify(info))
  }

  const login = (userInfo) => {
    setUserInfo(userInfo)
  }

  const logout = () => {
    userInfo.value = {}
    localStorage.removeItem('userInfo')
    localStorage.removeItem('userCredentials')
  }
  return {
    userInfo,
    isLoggedIn,
    setUserInfo,
    login,
    logout,
  }
})

// export const useUserStore = defineStore('user', () => {
//   // 状态
//   const token = ref(localStorage.getItem('token') || '')
//   const userInfo = ref(JSON.parse(localStorage.getItem('userInfo') || '{}'))
//   const isLoggedIn = computed(() => !!token.value)

//   // 方法
//   const setToken = (newToken) => {
//     token.value = newToken
//     localStorage.setItem('token', newToken)
//   }

//   const setUserInfo = (info) => {
//     userInfo.value = info
//     localStorage.setItem('userInfo', JSON.stringify(info))
//   }

//   const login = (token, userInfo) => {
//     setToken(token)
//     setUserInfo(userInfo)
//   }

//   const logout = () => {
//     token.value = ''
//     userInfo.value = {}
//     localStorage.removeItem('token')
//     localStorage.removeItem('userInfo')
//     localStorage.removeItem('userCredentials')
//   }

//   return {
//     token,
//     userInfo,
//     isLoggedIn,
//     login,
//     logout,
//     setToken,
//     setUserInfo,
//   }
// })
