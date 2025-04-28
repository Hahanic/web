<template>
  <div class="card-detail">
    <!-- 顶部两个fixed的东西 -->
    <div class="top-bt">
      <p class="revoke">联系墙主撕掉标签</p>
      <p class="report">举报</p>
    </div>
    <!-- card -->
    <NoteCard class="cardshow" :item="card" :label="label" :width="320" :background="background" :isDetail="isDetail"></NoteCard>
    <!-- 表单 也就是写评论 -->
    <div class="form">
      <!-- 文本框 -->
      <textarea class="message" placeholder="请输入..."></textarea>
      <!-- 名字和按钮 -->
      <div class="btn">
        <input type="text" class="name" placeholder="姓名">
        <YkButton size="small">确定</YkButton>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="comments">
      <div class="comment-li" v-for="(e,index) in mockComment.data" :key="index">
        <!-- 头像 -->
        <div class="user-head" :style="{ backgroundImage: cardColor[e.imgURL]}"></div>
        <!-- 主要内容 -->
        <div class="comm-m">
          <!-- 上 -->
          <div class="m-top">
            <span>{{ e.moment }}</span>
            <p>{{ e.name }}</p>
          </div>
          <!-- 下 -->
          <div class="m-main">{{ e.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoteCard from './NoteCard.vue';
import YkButton from './YkButton.vue';
import { mockComment } from '@/Mock';
import { cardColor } from '@/utils/data';
//头像的颜色
defineProps({
  card: {
    type: {}
  },
  label: {
    type: []
  },
  background: {
    type: String
  }
})
const isDetail = ref(true)
</script>

<style scoped>
.card-detail {
  position: relative;
}
.top-bt {
  position: fixed;
  top: 20px;
  left: 80px;
  display: flex;
}
.revoke {
  margin-right: 20px;
}
.cardshow {
  min-height: 300px;
  user-select: text;
  overflow-y: scroll;
}
.form {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form .message {
  background: none;
  border: none;
  resize: none;
  overflow-y: scroll;
  min-height: 142px;
  width: 100%;
  font-size: 18px;
}
.form .name {
  margin-top: 20px;
  background: none;
  border: none;
  font-size: 14px;
}
.btn {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.comments {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}
.user-head {
  width: 30px;
  height: 30px;
  background-color: aliceblue;
  border-radius: 50%;
}
.comm-m {
  font-size: 16px;
  cursor:default;
  user-select: text;
}
</style>