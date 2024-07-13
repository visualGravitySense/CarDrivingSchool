<template>
  <div class="gift-certificate">
    <h2>Создать подарочный сертификат</h2>
    <form @submit.prevent="generateCertificate">
      <div>
        <!-- <label for="amount">Сумма:</label> -->
        <AppInput class="bg-gray-100" v-model="amount" id="amount" type="number" required> Сумма: </AppInput>
      </div>
      <div>

        <AppInput class="bg-gray-100" v-model="friendName" type="email" id="email" required> Имя друга: </AppInput>
      </div>
      <AppButton2 type="submit">Создать сертификат</AppButton2>

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
import AppButton2 from '@/components/UI/Controls/Button2.vue'
export default {
  components: { AppButton2 },
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

<style >
.gift-certificate {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form button:hover {
  background-color: #41de73;
}

form div {
  margin-bottom: 10px;
}

.sp-btn {
  background-color: #11b445;
  margin-left: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;

  transition: background-color 0.3s;
}


</style>
