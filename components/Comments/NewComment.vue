<template>
  <div class="relative flex items-top justify-center sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="flex flex-wrap md:flex-nowrap justify-between gap-6">

        <div class="commentHolder bg-white overflow-hidden shadow sm:rounded-lg p-6 w-full md:w-1/2">
          <div class="container">
            <h3 class="mt-3 text-2xl leading-7 font-semibold">
            Нам важно ваше мнение. Поделитесь своими впечатлениями и помогите нам стать лучше!
            </h3>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow sm:rounded-lg p-6 w-full md:w-1/2">
          <form @submit.prevent="onSubmit" class="contact-form">
            <div class="container">
              <h3 class="mt-3 text-2xl leading-7 font-semibold">
                Комментарий
              </h3>
              <AppInput type="text" id="name" v-model="comment.name" required> Имя<br> </AppInput>
            </div>
            <div class="container">
              <AppInput id="content" v-model="comment.content" required> Комментарий<br> </AppInput>
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
    onSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
        .then(() => {
          this.message = "Submited!"
          // Reset
          this.comment.name = ''
          this.comment.content = ''
        })
        .catch(e => { console.log(e) })
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
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

.commentHolder {
  background-image: url('@/assets/img/about-1.jpg');
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  color: white; /* Ensure text is readable on dark background */
  overflow: hidden; /* Hide any overflow content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  border-radius: 10px; /* Add rounded corners */
  padding: 1.5rem; /* Add padding inside the box */
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
}

.commentHolder .container {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for text */
  padding: 1rem;
  border-radius: 5px; /* Optional: rounded corners for the inner container */
}

.commentHolder h3 {
  color: white; /* Ensure the header is readable */
  margin-top: 0; /* Remove any default top margin */
  text-align: center; /* Center align the text */
}

</style>
