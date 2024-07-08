<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm'
export default {
  layout: 'admin',
  methods: {
    onSubmit (category) {
      this.$store.dispatch('editPost', category)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  },
  components: { newPostForm }
}
</script>
