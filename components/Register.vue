<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Имя:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div>
      <label for="email">Электронная почта:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div>
      <label for="phone">Телефон:</label>
      <input type="tel" id="phone" v-model="form.phone" required />
    </div>
    <div>
      <label for="dob">Дата рождения:</label>
      <input type="date" id="dob" v-model="form.dob" required />
    </div>
    <button type="submit">Регистрация</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        dob: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Здесь вы можете добавить логику отправки данных на сервер
      console.log(this.form);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
div {
  margin-bottom: 1em;
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
