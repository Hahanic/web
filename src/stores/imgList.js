import { ref } from 'vue'
import { defineStore } from 'pinia'
import { mockPhoto } from '@/Mock'
const useimgStore = defineStore('imgList', () => {
  const currentImg = ref(0)

  return { currentImg, mockPhoto }
})

export default useimgStore