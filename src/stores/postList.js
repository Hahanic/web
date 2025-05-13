import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usepostStore = defineStore('postList', () => {
  const postList = ref([])
  const postListTemp = ref([])
  const getPostlist = async () => {
    await axios.get('http://localhost:3000/posts').then((e) => {
      postList.value = e.data.posts //e.data {posts: Array(24), total: 24}
      postListTemp.value = e.data.posts
      console.log('全部帖子', e.data)
    })
  }

  return {
    postList,
    postListTemp,
    getPostlist,
  }
})
