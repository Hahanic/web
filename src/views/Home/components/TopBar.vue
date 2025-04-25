<template>
  <div class="top-bar">
    <div class="logo">
      <img src="@/assets/images/logo.svg" class="logo-img">
      <p class="logo-name">一刻时光</p>
    </div>
    <div class="menu">
      <YkButton :size="'base'" class="message-wall">留言墙</YkButton>
      <YkButton :size="'base'">照片墙</YkButton>
    </div>
    <div class="user">
      <div class="user-head"></div>
    </div>
  </div>
</template>

<script setup>
import YkButton from '@/components/YkButton.vue';
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 52px;
  background: rgba(255,255,255,0.8);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
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
  color: var(--primary-text);
  font-weight: 600;
  padding-left: 10px;
}
.user {
  width: 200px;
}
.user-head {
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-image: linear-gradient(180deg, #7BE7FF 2%, #1E85E2);
  float: right;
}
.message-wall {
  margin-right: 24px;
}
</style>