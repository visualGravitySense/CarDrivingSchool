<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm'
export default {
  layout: 'admin',
  methods: {
    onSubmit (category) {
      console.log('Post added!')
      console.log(category)
    }
  },
  components: { newPostForm }
}
</script>
