<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke">联系墙主撕掉标签</p>
      <p class="report">举报</p>
    </div>
    <NoteCard class="cardshow" :item="card" :label="label" :width="320" :background="background"></NoteCard>
    <div class="form">
      <textarea class="message" placeholder="评论"></textarea>
      <div class="btn">
        <input type="text" class="name" placeholder="姓名">
        <YkButton size="small">确定</YkButton>
      </div>
    </div>
    <!-- 评论列表 -->
    <!-- <p class="comment">评论{{ card.comment }}</p> -->
    <div class="comments">
      <div class="comment-li" v-for="(e,index) in mockComment.data" :key="index">
        <!-- 头像 -->
        <div class="user-head"></div>
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
import NoteCard from './NoteCard.vue';
import YkButton from './YkButton.vue';
import { mockComment } from '@/Mock';
import { cardColor } from '@/utils/data';
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
</script>

<style scope>
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
  height: 300px;
}
.form {
  margin-top: 20px;
  width: 100%;
}
.form .message {
  background: none;
  border: none;
  resize: none;
  overflow-y: scroll;
  min-height: 142px;
  width: 100%;
}
.form .name {
  margin-top: 20px;
  background: none;
  border: none;
  font-size: 14px;
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
</style>