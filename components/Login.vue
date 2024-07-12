<template>
  <form @submit.prevent class="contact-form">
    <div class="container">
      <h3 class="mt-3 text-2xl leading-7 font-semibold">
        Log in
      </h3>
      <label for="name">Email aadress:</label>
      <AppInput type="email" id="email" v-model="user.email" required > </AppInput>
    </div>
    <div class="container">
      <label for="email">Password:</label>
      <AppInput type="password" id="password" v-model="user.pass" required > </AppInput>
    </div>

    <div class="container">

      <AppButton @click="onSubmit"> Log in </AppButton>

      <!-- Message -->

      <Message v-if="message" :message="message" />
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        phone: '',
        dob: ''
      }
    };
  },
  components: {

},
  methods: {
    onSubmit() {

      console.log(user)
      console.log('registerForm')



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
}
button {
  padding: 0.7em;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}



</style>
