<template>
  <TopBar></TopBar>
  <img src="@/assets/Gif3.gif" />
  <RouterView></RouterView>
  <FootBar></FootBar>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
import FootBar from './components/FootBar.vue'; 
</script>

<style scoped>
img {
  /* backdrop-filter: blur(50px); */
  filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
</style>