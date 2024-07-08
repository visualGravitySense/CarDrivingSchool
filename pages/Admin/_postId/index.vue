<template>
  <newPostForm
    :categoryEdit="category"
    @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm'
export default {
  layout: 'admin',
  asyncData (contex) {
    return axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/categories/${contex.params.postId}.json`)
      .then(res => {
        return {
          category: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSubmit (category) {
      console.log('Post Editing!')
      this.$store.dispatch('editPost', category)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  },
  components: { newPostForm }
}
</script>
