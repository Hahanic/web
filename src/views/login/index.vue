<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="title">欢迎登录</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="请输入用户名"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="请输入密码"
            required
          />
        </div>
        <div class="form-options">
          <label class="remember-password">
            <input type="checkbox" v-model="rememberPassword" />
            <span>记住密码</span>
          </label>
        </div>
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? '登录中...' : '立即登录' }}
        </button>
      </form>
      <div class="register-link">
        还没有账号？<router-link to="/register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const rememberPassword = ref(false)
const formData = reactive({
  username: '',
  password: '',
})

// 页面加载时检查是否有保存的账号密码
onMounted(() => {
  const savedCredentials = localStorage.getItem('userCredentials')
  if (savedCredentials) {
    const { username, password, remember } = JSON.parse(savedCredentials)
    if (remember) {
      formData.username = username
      formData.password = password
      rememberPassword.value = true
    }
  }
})

const handleSubmit = async () => {
  try {
    //设置登陆中的效果
    loading.value = true
    //发送登录请求
    const response = await axios.post('http://localhost:3000/login', formData)
    //如果登录成功
    if (response.data.success) {
      //用pinia存储登录信息
      userStore.login({
        username: formData.username,
        id: response.data.user.id,
        avatar: response.data.user.avatar || '',
      })
      // userStore.login(response.data.token, {
      //   username: formData.username,
      //   avatar: response.data.avatar || '',
      // })

      //有没有勾选记住密码 在本地保存账号密码
      if (rememberPassword.value) {
        localStorage.setItem(
          'userCredentials',
          JSON.stringify({
            username: formData.username,
            password: formData.password,
            remember: true,
          }),
        )
      } else {
        localStorage.removeItem('userCredentials')
      }
      //然后就跳转首页了
      router.push('/home')
    } else {
      alert(response.data.message || '登陆失败')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-box {
  background: #2d2d2d;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  border: 1px solid #3d3d3d;
}

.title {
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  color: #a0a0a0;
  font-size: 14px;
}

input {
  padding: 12px;
  border: 1px solid #3d3d3d;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
  background: #1a1a1a;
  color: #ffffff;
}

input::placeholder {
  color: #666;
}

input:focus {
  outline: none;
  border-color: #1e85e2;
  box-shadow: 0 0 0 2px rgba(30, 133, 226, 0.2);
}

.submit-btn {
  background: linear-gradient(180deg, #7be7ff 2%, #1e85e2);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 133, 226, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.register-link {
  text-align: center;
  margin-top: 20px;
  color: #a0a0a0;
  font-size: 14px;
}

.register-link a {
  color: #1e85e2;
  text-decoration: none;
  transition: color 0.3s;
}

.register-link a:hover {
  color: #7be7ff;
  text-decoration: underline;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.remember-password {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.remember-password input[type='checkbox'] {
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
  accent-color: #1e85e2;
}

.remember-password span {
  color: #a0a0a0;
  font-size: 14px;
}

.remember-password:hover span {
  color: #ffffff;
}
</style>
