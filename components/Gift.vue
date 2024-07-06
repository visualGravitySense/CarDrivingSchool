<template>
  <div class="gift-certificate">
    <h2>Создать подарочный сертификат</h2>
    <form @submit.prevent="generateCertificate">
      <div>
        <label for="amount">Сумма oт 140 дo 1050 euro:</label>
        <AppInput class="bg-gray-100" v-model="amount" id="amount" type="number" required> </AppInput>
      </div>
      <div>
        <label for="friendName">Имя друга:</label><br>
        <AppInput class="bg-gray-100" v-model="friendName" id="friendName" type="text" required> </AppInput>
      </div>
      <AppButton type="submit">Создать сертификат</AppButton>
      <!-- Message -->

      <Message v-if="message" :message="message" />
    </form>
    <div v-if="certificate">
      <h3>Ваш сертификат</h3>
      <p>Сумма: {{ certificate.amount }} рублей</p>
      <p>Для: {{ certificate.friendName }}</p>
      <p>Код: {{ certificate.code }}</p>
    </div>

    <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
      To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
    </p>

  </div>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';
import Message from '@/components/UI/Message.vue';
export default {
  components: { AppButton, AppInput, Message },
  data() {
    return {
      message: null,
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
      this.message = 'Submitted!'
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
