<template>
  <transition name="modal">
    <div class="yk-modal" v-show="isModal">
      <div class="yk-modal-head">
        <p class="modal-name">写留言</p>
        <span class="modal-x" @click="() => emit('close')"></span>
      </div>
      <div class="yk-modal-main">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isModal: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: all 0.4s ease-in-out;
}
.modal-enter-from, .modal-leave-to {
  transform: translateX(360px);
  opacity: 0;
}
.modal-enter-to, .modal-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.yk-modal {
  color: black;
  width: 362px;
  height: 100%;
  background-color: rgba(255,255,255,0.8);
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

</style>