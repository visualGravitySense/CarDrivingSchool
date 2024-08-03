<template>

    <div class="">
      <br>
      <h3 class="register mt-3 text-2xl leading-7 font-semibold">
          Регистрация в школу
    </h3><br>
    <p class="register">Оставьте заявку заполнив форму</p> 
    <br>
  
    <form @submit.prevent class="contact-form">
      
      <div class="form-row">
        <div class="form-group">
          <label for="name">Имя:</label>
          <AppInput type="text" id="name" v-model="user.name" required />
        </div>
        <div class="form-group">
          <label for="email">Электронная почта:</label>
          <AppInput type="email" id="email" v-model="user.email" required />
        </div>        
      </div>
  
      <div class="form-row">
        
        <div class="form-group">
          <label for="email">Ваше сообщение:</label>
          <AppInput type="email" id="email" v-model="user.email" required />
        </div>
        
      </div>
  
      <div class="controls">
        <AppButton @click="onSubmit"> Отправить  </AppButton>
  
        <!-- Message -->
        <Message v-if="message" :message="message" />
      </div>
    </form><br>
  
    </div>
  
  
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
        console.log(this.user)
        this.message = 'Submitted!'
      }
    }
  };
  </script>
  
  <style >
  
  .register {
    text-align: center;
  }
  
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
  
  .contact-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    gap: 20px; /* Space between columns */
    margin-bottom: 20px;
  }
  
  .form-group {
    flex: 1;
    min-width: 45%; /* Ensures inputs are not too small */
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  
  .controls {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .controls AppButton {
    margin-top: 10px;
  }
  
  .message {
    margin-top: 10px;
    text-align: center;
    color: #28a745; /* Green color for success message */
  }
  
  </style>
  