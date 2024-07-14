<template>

  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

          <h1>Post!!! editing, new post</h1>

          <form @submit.prevent class="contact-form">
            <AppInput v-model="category.title"> Title </AppInput>
            <AppInput v-model="category.description"> Descr </AppInput>
            <AppInput v-model="category.image"> Img link </AppInput>
            <AppInput v-model="category.content"> Content </AppInput>
            <div class="controls">
              <AppButton class="cancel-button" @click="cancel"> Cancel </AppButton>
              <AppButton @click="onSubmit"> Save </AppButton>
              <!-- Message -->
              <Message v-if="message" :message="message" />
            </div>

          </form>


      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    categoryEdit: {
      type: Object,
      required: false
    }
  },

  data () {
    return {
      message: null,

      category: this.categoryEdit ? { ...this.ctegoryEdit } : {
        title: '',
        description: '',
        image: '',
        content: '',
      }
    }
  },

  methods: {
    onSubmit () {
      this.message = 'Submitted!'
      this.$emit('submit', this.category)
    },
    cancel () {
      this.$router.push('/admin/')
    }
   }

}
</script>

<style>
.cancel-button {
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  margin-left: 1rem;
  transition: background-color 0.3s;
}
</style>
