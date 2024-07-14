<template>
  <newPostForm
    :categoryEdit="category"
    @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm'
export default {
  layout: 'admin',
  data () {
    return {
      category:
        {
            id: 1,
            title: 'Категория AA',
            description: 'Описание категории A...',
            image: require('@/assets/img/car1.jpg'), // Adjust this path as necessary
            intro: 'This is the test intro ...',
            content: 'We recommend you take a look at the ...',
        }
    }
  },
  methods: {
    onSubmit (category) {
      console.log('Post edited!')
      console.log(category)
    }
  },
  components: { newPostForm }
}
</script>
