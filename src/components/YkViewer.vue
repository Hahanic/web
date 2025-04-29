<template>
  <div class="yk-viewer">
    <!-- 模糊背景 -->
    <div class="bg"></div>
    <!-- 照片容器 -->
    <div class="viewer-photo" :style="{ paddingRight: isModal ? '362px' : '0px'}" @click="emit('closeCard')">
      <img :src="`/src/static/${img.currentImg.imgURL}.jpg`">
    </div>
    <!-- 按钮 -->
    <div class="switch sw-left" @click="nextimg(-1)">
      <span>Left</span>
    </div>
    <div class="switch sw-right" @click="nextimg(1)" :style="{ right: isModal ? '382px' : '20px' }">
      <span>Right</span>
    </div>
  </div>
</template>

<script setup>
import useimgStore from '@/stores/imgList.js'
const img = useimgStore()
defineProps({
  isModal: {
    type: Boolean
  },
})
const emit = defineEmits(['closeCard'])

const nextimg = function (e) {
  const photos = img.mockPhoto.data
  const currentIndex = photos.findIndex(el => el.id === img.currentImg.id)

  let nextIndex
  if (e > 0) {
    nextIndex = (currentIndex + 1) % photos.length
  } else {
    nextIndex = (currentIndex - 1 + photos.length) % photos.length
  }

  img.currentImg = photos[nextIndex]
}

// const nextimg = function(e){
//   if(e > 0) {
//     if(img.mockPhoto.data.length > img.currentImg.id) {
//       img.currentImg = img.mockPhoto.data.find(el => el.id === img.currentImg.id + 1)
//     } else {
//       return img.currentImg = img.mockPhoto.data[0]
//     }
//   } else {
//     if(img.currentImg.id > 1) {
//       img.currentImg = img.mockPhoto.data.find(el => el.id === img.currentImg.id - 1)
//     } else {
//       return img.currentImg = img.mockPhoto.data[img.mockPhoto.data.length - 1]
//     }
//   }
// }
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
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 18px;
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