<template>
  <div :class="{ 'note-card': !isDetail, 'note-card-detail': isDetail }" :style="{width: `${width}px`, background: background}">
    <!-- 顶部日期和标签 -->
    <div class="card-top">
      <p class="card-time">{{ item.moment }}</p>
      <p class="card-label">{{ label[item.type][item.label] }}</p>
    </div>
    <!-- 主要文本 -->
    <p :class="{ 'card-message': !isDetail, 'detail-message': isDetail }">{{ item.message }}</p>
    <!-- 底部点赞数和评论数 lz姓名 -->
    <div :style="{width: `${width - 45}px`}" :class="{ 'card-foot': !isDetail, 'detail-foot': isDetail }">
      <div class="foot-left">
        <!-- 点赞 -->
        <span class="card-like"></span>
        <span>{{ item.like }}</span>
        <!-- 评论 -->
        <span class="card-liuyan"></span>
        <span>{{ item.comment }}</span>
      </div>
      <!-- lz姓名 -->
      <span class="foot-right">{{ item.name }}</span>
    </div>
  </div>

</template>

<script setup>

defineProps({
  width: {
    default: 288
  },
  background: {
    default: 'rgba(252,175,162,0.3)'
  },
  item: {
    type: Array
  },
  label: {
    type: Array
  },
  isDetail: {
    type: Boolean,
    default: false
  }
})
</script>

<style scope>
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
  cursor: pointer;
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