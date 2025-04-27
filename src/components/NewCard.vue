<template>
  <div class="new-card">
    <!-- 颜色列表 -->
    <ul class="colors">
      <li v-for="(item, index) in cardColor" :key="index" :style="{ background: item, width: '30px', height: '30px' }" :class="{ colorselected: selectColor == index }" @click="changeColor(index)"></li>
    </ul>
    <!-- 文本框 -->
    <div class="card-main" :style="{ background: cardColor[selectColor] }">
      <textarea class="card-message" placeholder="留言..." ></textarea>
      <input class="card-name" type="text" placeholder="签名">
    </div>
    <!-- 标签列表 -->
    <ul class="colors" style="margin-top: 40px;">
      <li v-for="(item, index) in labels[id]" :key="index" :class="{ labelselected: selectLabel == index }" @click="changeLabel(index)">{{ item }}</li>
    </ul>
    <div class="footBtn">
      <YkButton size="max">丢弃</YkButton>
      <YkButton size="max" class="submit">确定</YkButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { cardColor } from '@/utils/data';
import YkButton from './YkButton.vue';

defineProps({
  labels: {
    type: Array
  },
  id: {
    type: Number
  }
})

//更改选择颜色 标签
const selectColor = ref(0)
const selectLabel = ref(0)

const changeColor = function(e) {
  selectColor.value = e
}

const changeLabel = function(e) {
  selectLabel.value = e
}
//

</script>

<style scoped>
.new-card {
  overflow-y: scroll;
}
.new-card::-webkit-scrollbar {
  display: none;
}
.colors {
  display: flex;
  flex-wrap: wrap;
  gap: 6.5px;
  margin: 10px 0;
}
.card-main {
  width: 100%;
  min-height: 340px;
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 100%, rgba(232,61,61,0.8) 70%); */
  padding: 12px;
}
.card-message {
  background: none;
  border: none;
  resize: none;
  overflow-y: scroll;

  min-height: 272px;
  width: 100%;
}
.card-name {
  margin-top: 20px;
  background: none;
  border: none;
}
.colorselected {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
}

.labelselected {
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.4);
}
.footBtn {
  padding: 20px 0 0 0;
  float: right;
}
.submit {
  width: 175px;
  background-color: #333;
  color: white;
  margin: 0 0 0 20px;
}
</style>