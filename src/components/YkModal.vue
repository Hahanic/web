<template>
  <div class="yk-modal">
    <div class="yk-modal-head">
      <p class="modal-name">{{ title }}</p>
      <span class="modal-x" @click="() => emit('close')"></span>
    </div>
    <div class="yk-modal-main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
})

const emit = defineEmits(['close'])
</script>

<style scoped>
.yk-modal {
  color: black;
  width: 362px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 52px;
  right: 0;
  z-index: 1000;
  padding: 20px;
}
.yk-modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
.modal-x {
  width: 1.6rem;
  height: 1.6rem;
  background-image: url('@/assets/icons/guanbi.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.yk-modal {
  overflow-y: scroll;
}
</style>
