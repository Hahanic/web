<template>
  <button :class="[size]" class="yk-botton"><slot></slot></button>
</template>

<script setup>
  defineProps({
    size: {
      type: String,
      default: 'base',
    },
    // nom: {
    //   type: String,
    //   default: 'primary',
    // }
  })
</script>

<style scoped>
.yk-botton {
  text-align: center;
  border: none;
}
.max {
  min-width: 100px;
  height: 48px;
  border-radius: 24px;
  padding: 0 24px;
}
.base {
  min-width: 80px;
  height: 36px;
  border-radius: 24px;
  padding: 0 20px;
}
.small {
  min-width: 72px;
  height: 32px;
  border-radius: 24px;
  padding: 0 20px;
}

/* .primary {
  background: ;
} */
</style>