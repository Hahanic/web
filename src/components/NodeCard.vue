<template>
  <div class="node-card" :style="{width: `${width}px`, background: background}">
    <div class="card-top">
      <p class="card-time">2022.07.12</p>
      <p class="card-label">具有</p>
    </div>
    <p class="card-message">1234567890123456789012345678901234567890文本文本文本文本文本文本文本文本文本文本文本文本文本本文本文本文本文本文本文本文本文本文本文本文本文本文文本文本文本文本文本文本文本文本文本文本文1234567890123456789012345678901234567890</p>
    <div :style="{width: `${width - 45}px`}" class="card-foot">
      <div class="foot-left">
        <span class="card-like"></span>
        <span>1</span>
        <span class="card-like"></span>
        <span>1</span>
      </div>
      <span class="foot-right">亦刻</span>
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
  }
})
</script>

<style scope>
.node-card {
  height: 240px;
  background: rgba(252,175,162,0.3);
  padding: 10px 20px;
  position: relative;
  border-radius: 15px;
}
.card-top {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #949494;
  margin-bottom: 8px;
}
.card-message {
  user-select: text;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  font-size: 16px;
  line-height: 22px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
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
.card-foot {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0.7rem;
  align-items: center;
}
</style>