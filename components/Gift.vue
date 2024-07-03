<template>
  <div class="gift-certificate">
    <h2>Создать подарочный сертификат</h2>
    <form @submit.prevent="generateCertificate">
      <div>
        <label for="amount">Сумма oт 140 дo 1050 euro:</label>
        <input v-model="amount" id="amount" type="number" required>
      </div>
      <div>
        <label for="friendName">Имя друга:</label>
        <input v-model="friendName" id="friendName" type="text" required>
      </div>
      <button type="submit">Создать сертификат</button>
    </form>
    <div v-if="certificate">
      <h3>Ваш сертификат</h3>
      <p>Сумма: {{ certificate.amount }} рублей</p>
      <p>Для: {{ certificate.friendName }}</p>
      <p>Код: {{ certificate.code }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      friendName: '',
      certificate: null
    };
  },
  methods: {
    generateCertificate() {
      // Генерация уникального кода сертификата
      const uniqueCode = Math.random().toString(36).substr(2, 9).toUpperCase();
      this.certificate = {
        amount: this.amount,
        friendName: this.friendName,
        code: uniqueCode
      };
    }
  }
};
</script>

<style scoped>
.gift-certificate {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
