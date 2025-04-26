<template>
  <div class="wall-message">
    <!-- 标题 -->
    <p class="title">{{ wallType[id].name }}</p>
    <!-- 短语 -->
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <!-- 12个标签 -->
    <div class="label">
      <!-- <p :class="{lbSelected: nlabel == -1}" @click="selectnote(-1)">全部</p> -->
      <p :class="{lbSelected: nlabel == index}" v-for="(e, index) in label[id]" :key="index" @click="selectnote(index)">{{ e }}</p>
    </div>
    <!-- 卡片整体 -->
    <div class="cards">
      <noteCard @click="() => isModal = true" v-for="(e, index) in mockData.data" :key="index" :item="e" :label="label" :background="cardColor[e.imgURL]"></noteCard>
    </div>
    <!-- add按钮 -->
    <div @click="() => isModal = true" class="add" :style="{ bottom: addBottom + 'px' }">
      <img src="../assets/icons/tianjia.svg">
    </div>
    <!-- 弹窗 -->
    <YkModal @close="() => isModal = false" :isModal="isModal">
      <NewCard :labels="label" :id="id"></NewCard>
    </YkModal>
  </div>

</template>

<script setup>
import { onUnmounted, ref } from 'vue';
import { wallType, label, cardColor } from '@/utils/data';
import noteCard from '@/components/noteCard.vue';
import YkModal from '@/components/YkModal.vue';
import NewCard from '@/components/NewCard.vue';
import mockData from '@/Mock/index.js';
//id表示 留言墙 or 照片墙
const id = ref(0);

//点击label
const nlabel = ref(0)
const selectnote = function(e) {
  nlabel.value = e
}

//添加按钮默认高度
const addBottom = ref(30)
const addBtnScroll = function() {
  //当前页面滚动的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //文档的总高度
  let scrollHeight = document.documentElement.scrollHeight
  //浏览器窗口看得到的
  let clientHeight = document.documentElement.clientHeight
  if(scrollTop + clientHeight + 400 >= scrollHeight) {
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

//控制显示和隐藏
const isModal = ref(false)
</script>

<style scope>
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
  border: 1px solid rgba(32,32,32,1);
  border-radius: 16px;
}
.cards {
  position: relative;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.add {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: aliceblue;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
  position: fixed;
  right: 30px;
  display: flex;
}
</style>