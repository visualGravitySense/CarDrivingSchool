<template>
  <section v-if="comments" class="comments max-w-4xl mx-auto sm:px-6 lg:px-8">
    <div class="">
      <h2 class="mt-3 text-4xl leading-7 font-bold">
        Комментарии
      </h2>
      <p v-if="comments.length == 0"> Comments: 0 </p>

        <div v-for="comment in comments" :key="comment.name" class="comment mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

            <p class="name">{{ comment.name }}</p>

            <p class="name">{{ comment.content }}</p>

            <img :src="comment.image" :alt="comment.image">

        </div>
      </div>


  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>

.comment {

  margin-bottom: 20px;
  .name {
    

  }
}

</style>
