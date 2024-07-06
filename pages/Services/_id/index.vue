<!-- Please remove this file from your project -->
<template>

  <div class="container">

    <category :category="category"/>

    <comments :comments="comments"/>

    <newComment/>

  </div>

</template>

<script>

import NewComment from '@/components/Comments/NewComment.vue';
import Comments from '@/components/Comments/Comments.vue';
import Category from '@/components/Categories/Category.vue';
export default {
  data () {
    return {
      category:
        {
            id: 1,
            title: 'Категория A',
            description: 'Описание категории A...',
            image: require('@/assets/img/car1.jpg'), // Adjust this path as necessary
            intro: 'This is the test intro ...',
            content: 'We recommend you take a look at the ...',
        },
        comments: [
          { name: 'Alex', text: 'Комментарий к Категория A'},
          { name: 'Nikolai', text: 'Комментарий к Категория Б'}
        ]
    } 
  },
  components: {
    Category, NewComment, Comments
},
  name: 'Category Index'
}
</script>
