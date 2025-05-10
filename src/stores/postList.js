import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usepostStore = defineStore('postList', () => {
  const postList = ref([])
  const getPostlist = async () => {
    await axios.get('http://localhost:3000/posts').then((e) => {
      postList.value = e.data
    })
  }

  return {
    postList,
    getPostlist,
  }
})
