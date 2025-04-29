<template>
  <div class="yk-viewer">
    <!-- 模糊背景 -->
    <div class="bg"></div>
    <!-- 照片容器 -->
    <div class="viewer-photo" :style="{ paddingRight: isModal ? '362px' : '0px'}" @click="emit('closeCard')">
      <img :src="`/src/static/${imgData.imgURL}.jpg`">
    </div>
    <!-- 按钮 -->
    <div class="switch sw-left">
      <span>Left</span>
    </div>
    <div class="switch sw-right" :style="{ right: isModal ? '382px' : '20px' }">
      <span>Right</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isModal: {
    type: Boolean
  },
  imgData: {
    type: Object
  }
})
const emit = defineEmits(['closeCard'])
</script>

<style scoped>
.yk-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  margin-top: 52px;
  z-index: 99;
}
.bg {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.viewer-photo {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.viewer-photo img {
  max-width: 100%;
  max-height: 90%;
  object-fit: contain;
}
.switch {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}
.sw-left {
  left: 20px;
}
.switch:hover {
  background-color: rgba(0,0,0,1);
}
</style>