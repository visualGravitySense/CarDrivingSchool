<template>
  <section v-if="comments" class="max-w-4xl mx-auto sm:px-6 lg:px-8">

    <h1 class="mt-3 text-4xl leading-7 font-bold">
      Комментарии
    </h1>

    <div class="comment" v-for="comment in comments" :key="comment.name">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

          <p class="name">{{ comment.name }}</p>
          <p class="text">{{ comment.text }}</p>

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
    font-size: 24px;

  }
}

</style>
