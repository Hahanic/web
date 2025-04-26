<template>
  <TopBar></TopBar>
  <video src="@/assets/gif3.webm" autoplay loop muted playsinline />
  <RouterView></RouterView>
  <FootBar></FootBar>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
import FootBar from './components/FootBar.vue'; 
</script>

<style scoped>
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