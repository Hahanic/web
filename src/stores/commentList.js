import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usecommentStore = defineStore('commentList', () => {
  const commentList = ref([])
  const getcommentlist = async (postID) => {
    await axios.get(`http://localhost:3000/posts/${postID}/comments`).then((e) => {
      commentList.value = e.data
    })
  }

  return {
    commentList,
    getcommentlist,
  }
})
