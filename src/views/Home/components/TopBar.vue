<template>
  <div class="top-bar">
    <div class="logo">
      <img src="@/assets/images/logo.svg" class="logo-img" />
      <p class="logo-name">WCORP</p>
    </div>
    <div class="menu">
      <YkButton :size="'base'" class="message-wall" @click="$router.push('/home')">留言墙</YkButton>
      <YkButton :size="'base'" @click="$router.push('/home/join')">加入我们</YkButton>
    </div>
    <div class="user">
      <div class="user-info" @click.stop="toggleDropdown">
        <div
          class="user-avatar"
          :style="{
            backgroundImage: userStore.userInfo.avatar
              ? `url(${userStore.userInfo.avatar})`
              : 'linear-gradient(180deg, #7be7ff 2%, #1e85e2)',
          }"
        >
          <span v-if="!userStore.userInfo.avatar">{{
            userStore.userInfo.username?.charAt(0)?.toUpperCase()
          }}</span>
        </div>
        <span class="username" v-if="userStore.isLoggedIn">{{ userStore.userInfo.username }}</span>
        <div class="dropdown-menu" v-if="showDropdown" v-click-outside="closeDropdown">
          <template v-if="!userStore.isLoggedIn">
            <div class="dropdown-item" @click="navigateTo('/login')">
              <i class="icon-login"></i>登录
            </div>
            <div class="dropdown-item" @click="navigateTo('/register')">
              <i class="icon-register"></i>注册
            </div>
          </template>
          <template v-else>
            <div class="dropdown-item" @click="navigateTo('/user/profile')">
              <i class="icon-user"></i>个人信息
            </div>
            <div class="dropdown-item" @click="handleLogout">
              <i class="icon-logout"></i>退出登录
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YkButton from '@/components/YkButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const navigateTo = (path) => {
  closeDropdown()
  router.push(path)
}

const handleLogout = () => {
  userStore.logout()
  closeDropdown()
}

// 点击外部关闭下拉菜单
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 52px;
  background: rgba(45, 45, 45, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0 30px;
}

.logo {
  display: flex;
  align-items: center;
  width: 200px;
}

.logo-name {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  padding-left: 10px;
}

.user {
  width: 200px;
  display: flex;
  justify-content: flex-end;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.username {
  color: #ffffff;
  font-size: 14px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #2d2d2d;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  padding: 8px 0;
  min-width: 140px;
  margin-top: 8px;
  z-index: 1000;
  border: 1px solid #3d3d3d;
}

.dropdown-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-item:hover {
  background-color: #3d3d3d;
  color: #ffffff;
}

.dropdown-item i {
  font-size: 14px;
}

.message-wall {
  margin-right: 24px;
}
</style>
