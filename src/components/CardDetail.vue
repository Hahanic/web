<template>
  <div class="card-detail">
    <!-- 顶部两个fixed的东西 -->
    <div class="top-bt">
      <p class="revoke">联系墙主撕掉标签</p>
      <p class="report">举报</p>
    </div>
    <!-- card -->
    <NoteCard
      class="cardshow"
      :item="card"
      :label="label"
      :width="320"
      :background="cardColor[card.imgURL]"
      :isDetail="isDetail"
    ></NoteCard>
    <!-- 表单 也就是写评论 -->
    <div class="form">
      <!-- 文本框 -->
      <textarea v-model="content" class="message" placeholder="请输入..."></textarea>
      <!-- 名字和按钮 -->
      <div class="btn">
        <input type="text" class="name" placeholder="姓名" />
        <YkButton @click="createComment" size="small">确定</YkButton>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="comments">
      <div class="comment-li" v-for="(e, index) in commentStore.commentList.comments" :key="index">
        <!-- 头像 -->
        <div
          class="user-head"
          :style="{ backgroundImage: `url(http://localhost:3000${e.author.avatar})` }"
        ></div>
        <!-- 主要内容 -->
        <div class="comm-m">
          <!-- 上 -->
          <div class="m-top">
            <span>{{ e.createdAt }}</span>
            <p>{{ e.author.username }}</p>
          </div>
          <!-- 下 -->
          <div class="m-main">{{ e.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import NoteCard from './NoteCard.vue'
import YkButton from './YkButton.vue'
import { cardColor } from '@/utils/data'
import { usecommentStore } from '@/stores/commentList'
import { usepostStore } from '@/stores/postList'
const props = defineProps({
  //当前浏览帖子信息
  card: {
    type: Object,
  },
  //全部标签
  label: {
    type: Array,
  },
})
const isDetail = ref(true)

const commentStore = usecommentStore()
const postStore = usepostStore()

watch(
  () => props.card?._id,
  async (newID) => {
    if (newID) {
      await commentStore.getcommentlist(newID)
      console.log('当前帖子评论', commentStore.commentList)
    }
  },
  { immediate: true },
)

//发送评论
import { useUserStore } from '@/stores/user'
//个人信息
const userStore = useUserStore()
console.log('当前登录的用户信息', userStore.userInfo)
//评论内容
const content = ref('')
const createComment = async () => {
  if (!userStore.isLoggedIn) {
    return alert(content.value ? '还请先登录^_^' : '诶！？你还没登录哦...而且评论什么都没写^_^')
  }
  if (!content.value) {
    return alert('诶！？好像评论什么都没写^_^')
  }

  //发送!!
  await axios
    .post('http://localhost:3000/comments', {
      content: content.value,
      postId: props.card._id,
      userId: userStore.userInfo.id,
    })
    .then((e) => {
      if (e.status == 201) {
        console.log('新建评论成功了喵~')
        //更新本帖子下的留言
        commentStore.getcommentlist(props.card._id)
        content.value = ''
        //前端本帖子留言数++
        postStore.postList.forEach((el) => {
          if (el._id === props.card._id) el.commentsCount++
        })
      }
    })
    .catch((err) => alert(err))
}
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
  margin-bottom: 50px;
}
.user-head {
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.comm-m {
  font-size: 16px;
  cursor: default;
  user-select: text;
}
</style>
