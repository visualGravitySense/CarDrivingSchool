<template>
  <div class="relative flex items-top justify-center sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">


          <form @submit.prevent="onSubmit" class="contact-form">
            <div class="container">
              <h3 class="mt-3 text-2xl leading-7 font-semibold">
                Комментарий
              </h3>
              <label for="name">Имя:</label>
              <AppInput type="text" id="name" v-model="comment.name" required > </AppInput>
            </div>
            <div class="container">
              <label for="content">Комментарий:</label>
              <AppInput id="content" v-model="comment.content" required ></AppInput>
            </div>


            <div class="container">
              <!-- Message -->

              <Message v-if="message" :message="message" />

              <AppButton type="submit">Отправить</AppButton>

            </div>

          </form>


      </div>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      message: null,
      comment: {
        name: '',
        content: '',

      }
    };
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
        .then(()=>{
          this.message = "Submited!"
          // Reset
          this.comment.name = ''
          this.comment.content = ''
        })
        .catch(e=>{console.log(e)})
    }
  }
};
</script>

<style >

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
div {

}
label {
  margin-bottom: 0.5em;
  color: #333333;
  font-weight: bold;
}
input {
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

textarea {
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.signin-button {
  background-color: #4165de;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  margin-left: 1rem;
  transition: background-color 0.3s;
}



</style>
