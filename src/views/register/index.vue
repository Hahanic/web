<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="title">注册账号</h2>
      <form @submit.prevent="handleSubmit" class="register-form">
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
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? '注册中...' : '立即注册' }}
        </button>
      </form>
      <div class="login-link">已有账号？<router-link to="/login">立即登录</router-link></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const loading = ref(false)
const formData = reactive({
  username: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    loading.value = true
    const response = await axios.post('http://localhost:3000/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.data.success) {
      alert('注册成功！')
      router.push('/login')
    } else {
      alert(response.data.message || '注册失败')
    }
  } catch (error) {
    console.error('注册失败:', error)
    alert(error.response?.data?.message || '注册失败，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.register-box {
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

.register-form {
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

.login-link {
  text-align: center;
  margin-top: 20px;
  color: #a0a0a0;
  font-size: 14px;
}

.login-link a {
  color: #1e85e2;
  text-decoration: none;
  transition: color 0.3s;
}

.login-link a:hover {
  color: #7be7ff;
  text-decoration: underline;
}
</style>
