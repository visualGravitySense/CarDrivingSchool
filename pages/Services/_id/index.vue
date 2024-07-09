<!-- Please remove this file from your project -->
<template>

  <div class="container">

    <category :category="category"/>

    <comments :comments="comments" />



    <newComment/>

  </div>

</template>

<script>
import axios from 'axios'

import newComment from '@/components/Comments/NewComment.vue';
import comments from '@/components/Comments/Comments.vue';
import category from '@/components/Categories/Category.vue';

export default {
  components: {
    category, newComment, comments
},


async asyncData (context) {
  let [category, comments] = await Promise.all([
    axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/categories/${context.params.id}.json`),
    axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
  ])

  return {
    category: category.data,
    comments: comments.data
  }
},

  name: 'CategoryIndex'
}
</script>
