<template>
  <TopBar></TopBar>
  <video src="@/assets/gif3.webm" autoplay loop muted playsinline />
  <transition name="fade">
    <RouterView></RouterView>
  </transition>
  <FootBar></FootBar>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
import FootBar from './components/FootBar.vue'; 
</script>

<style scoped>
/* 进入时 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

/* 进入前 & 离开后 */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 进入后 & 离开前 */
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
video {
  /* backdrop-filter: blur(50px); */
  filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
</style>