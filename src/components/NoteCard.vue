<template>
  <div class="note-card" :style="{width: `${width}px`, background: background}">
    <div class="card-top">
      <p class="card-time">{{ item.moment }}</p>
      <p class="card-label">{{ label[item.type][item.label] }}</p>
    </div>
    <p class="card-message">{{ item.message }}</p>
    <div :style="{width: `${width - 45}px`}" class="card-foot">
      <div class="foot-left">
        <span class="card-like"></span>
        <span>{{ item.like }}</span>
        <span class="card-liuyan"></span>
        <span>{{ item.comment }}</span>
      </div>
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
  }
})
</script>

<style scope>
.note-card {
  height: 240px;
  margin-top: 20px;
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
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  font-size: 16px;
  line-height: 22px;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 7;
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
  align-items: center;
}
</style>