<template>
  <div class="wall-message">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <div class="label">
      <p :class="{lbSelected: nlabel == -1}" @click="selectNode(-1)">全部</p>
      <p :class="{lbSelected: nlabel == index}" v-for="(e, index) in label[id]" :key="index" @click="selectNode(index)">{{ e }}</p>
    </div>
    <div class="cards">
      <NodeCard></NodeCard>
      <NodeCard></NodeCard>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { wallType, label } from '@/utils/data';
import NodeCard from '@/components/NodeCard.vue';

//id表示 留言墙 or 照片墙
const id = ref(0);

const nlabel = ref(-1)
const selectNode = function(e) {
  nlabel.value = e
}

</script>

<style scope>
.wall-message {
  height: 700px;
  width: 100%;
  background-color: rgba(146, 130, 161, 0.5);
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
  display: flex;
  flex-wrap: wrap;
}
</style>