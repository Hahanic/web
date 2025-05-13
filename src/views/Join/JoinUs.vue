<template>
  <div class="wall-message">
    <!-- 标题 -->
    <p class="title">{{ wallType[id].name }}</p>
    <!-- 短语 -->
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <!-- 12个标签 -->
    <div class="label">
      <p
        :class="{ lbSelected: nlabel == index }"
        v-for="(e, index) in label[id]"
        :key="index"
        @click="selectnote(index)"
      >
        {{ e }}
      </p>
    </div>
    <!-- 在这里写图片 -->
    <div class="photo-contain">
      <PhotoCard @openCard="open"></PhotoCard>
    </div>
    <!-- add按钮 -->
    <div @click="changeModal" class="add" :style="{ bottom: addBottom + 'px' }">
      <img src="../../assets/icons/tianjia.svg" />
    </div>
    <!-- 弹窗 -->
    <transition name="modal">
      <YkModal @close="changeModal" v-if="isModal" :title="title"> </YkModal>
    </transition>

    <!-- 大图弹窗 -->
    <transition name="modal">
      <YkViewer :isModal="isModal" v-if="isOpen" @closeCard="close"></YkViewer>
    </transition>
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import { wallType, label } from '@/utils/data'
import PhotoCard from '../../components/PhotoCard.vue'
import YkModal from '@/components/YkModal.vue'
import YkViewer from '@/components/YkViewer.vue'
//当前imgindex
import useimgStore from '@/stores/imgList.js'
const img = useimgStore()

const isModal = ref(false)
const title = ref('照片留言')
const changeModal = function () {
  isModal.value = !isModal.value
}

const isOpen = ref(false)
const open = function (e) {
  img.currentImg = e
  isOpen.value = true
}
const close = function () {
  isOpen.value = false
}
//id表示 留言墙 or 照片墙
const id = ref(1)

//点击label
const nlabel = ref(0)
const selectnote = function (e) {
  nlabel.value = e
}

//添加按钮默认高度
const addBottom = ref(30)
const addBtnScroll = function () {
  //当前页面滚动的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //文档的总高度
  let scrollHeight = document.documentElement.scrollHeight
  //浏览器窗口看得到的
  let clientHeight = document.documentElement.clientHeight
  if (scrollTop + clientHeight + 400 >= scrollHeight) {
    addBottom.value = scrollTop + clientHeight + 430 - scrollHeight
  } else {
    addBottom.value = 30
  }
}
//监听
window.addEventListener('scroll', addBtnScroll)
//退出监听
onUnmounted(() => {
  window.removeEventListener('scroll', addBtnScroll)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  transform: translateX(360px);
  opacity: 0;
}
.modal-enter-to,
.modal-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.wall-message {
  width: 100%;
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.title {
  font-size: 56px;
  color: white;
  font-weight: 500;
  padding-top: 48px;
  padding-bottom: 8px;
}
.label {
  display: flex;
  margin-top: 40px;
  box-sizing: border-box;
}
.label p {
  padding: 4px 14px;
}
.lbSelected {
  font-weight: 600;
  border: 1px solid rgba(32, 32, 32, 1);
  border-radius: 16px;
}
.add {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: aliceblue;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  position: fixed;
  right: 30px;
  display: flex;
  z-index: 999;
}
.photo-contain {
  columns: 5;
  column-gap: 10px;
}
@media (max-width: 1750px) {
  .photo-contain {
    columns: 4;
  }
}
@media (max-width: 1400px) {
  .photo-contain {
    columns: 3;
  }
}
@media (max-width: 1050px) {
  .photo-contain {
    columns: 2;
  }
}
@media (max-width: 700px) {
  .photo-contain {
    columns: 1;
  }
}
</style>
