<template>
  <div class="yk-photo-card" v-for="(e, index) in mockPhoto.data" :key="index">
    <img class="photo-card" :src="`/src/static/${e.imgURL}.jpg`">
    <div class="photo-bg" @click="emit('openCard', e)"></div>
    <div class="photo-like">
      <span class="card-like"></span>
      <span>{{ e.like }}</span>
    </div>
  </div>
</template>

<script setup>
import { mockPhoto } from '../Mock/index.js'

const emit = defineEmits(['openCard'])
</script>

<style scoped>
.yk-photo-card {
  max-width: 350px;
  position: relative;
  margin-bottom: 10px;
}
.photo-card {
  max-width: 350px;
}
.photo-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
}
.photo-like {
  color: darkturquoise;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 20px;
  padding: 2px 12px;
  display: flex;
  align-items: center;
}
.card-like {
  width: 1rem;
  height: 1rem;
  background-image: url('../assets/icons/aixin.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
.photo-bg,
.photo-like {
  opacity: 0;
  transition: opacity 0.3s;
}

.yk-photo-card:hover .photo-bg,
.yk-photo-card:hover .photo-like {
  opacity: 1;
}
</style>