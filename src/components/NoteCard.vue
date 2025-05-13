<template>
  <div
    :class="{ 'note-card': !isDetail, 'note-card-detail': isDetail }"
    :style="{ width: `${width}px`, background: background }"
  >
    <!-- 顶部日期和标签 -->
    <div class="card-top">
      <p class="card-time">{{ item.createdAt }}</p>
      <p class="card-label">{{ label[item.type][item.label] }}</p>
    </div>
    <!-- 主要文本 -->
    <p :class="{ 'card-message': !isDetail, 'detail-message': isDetail }">{{ item.content }}</p>
    <!-- 底部点赞数和评论数 lz姓名 -->
    <div
      :style="{ width: `${width - 45}px` }"
      :class="{ 'card-foot': !isDetail, 'detail-foot': isDetail }"
    >
      <div class="foot-left">
        <!-- 点赞 -->
        <div @click.stop="like(item)">
          <span class="card-like"></span> <span>{{ item.likes }}</span>
        </div>

        <!-- 评论 -->
        <div @click.stop="() => console.log(2)">
          <span class="card-liuyan"></span> <span>{{ item.commentsCount }}</span>
        </div>
      </div>
      <!-- lz姓名 -->
      <span class="foot-right">{{ item.author.username }}</span>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { usepostStore } from '@/stores/postList'
const userStore = useUserStore()
const postStore = usepostStore()
defineProps({
  width: {
    default: 288,
  },
  background: {
    default: 'rgba(252,175,162,0.3)',
  },
  item: {
    type: Object,
  },
  label: {
    type: Array,
  },
  isDetail: {
    type: Boolean,
    default: false,
  },
})

//点赞
const like = async function async(e) {
  if (!userStore.isLoggedIn) return alert('还没登录喵')
  console.log('帖子id', e._id)
  console.log('用户', userStore.userInfo.id)
  console.log(postStore.postList)
  await axios
    .post('http://localhost:3000/posts/like', {
      userId: userStore.userInfo.id,
      postId: e._id,
    })
    .then(() => {
      // 更新本地该帖子的点赞数（+1 或 -1，具体看后端逻辑）
      postStore.getPostlist()
    })
}
</script>

<style scoped>
.note-card {
  min-height: 240px;
  margin-top: 20px;
  padding: 10px 20px;
  position: relative;
  border-radius: 15px;
}
/* 弹窗用 */
.note-card-detail {
  min-height: 240px;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
.card-top {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #949494;
  margin-bottom: 8px;
}
.card-message {
  letter-spacing: 1.2px; /* 字符间隔1px */
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 7;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
/* 弹窗用 */
.detail-message {
  letter-spacing: 1.2px; /* 字符间隔1px */
  font-size: 16px;
  line-height: 22px;
  flex-grow: 1;
}
.foot-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.card-like {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-image: url('../assets/icons/aixin.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  filter: opacity(0.4);
}
.card-liuyan {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background-image: url('../assets/icons/liuyan.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  filter: opacity(0.6);
}
.card-foot {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0.7rem;
}
.detail-foot {
  display: flex;
  justify-content: space-between;
}
</style>
