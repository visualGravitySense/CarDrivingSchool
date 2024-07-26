<template>
  <div class="gift-certificate">
    
    
    
    <h2 class="certificate-heading">Создать подарочный сертификат</h2>
    
    <form @submit.prevent>
      <div>
        <!-- <label for="amount">Сумма:</label> -->
        <AppInput class="bg-gray-100" v-model="amount" id="amount" type="number" required> Сумма: </AppInput>
      </div>
      <div>

        <AppInput class="bg-gray-100" v-model="friendName" type="email" id="email" required> Имя друга: </AppInput>
      </div>
      <AppButton2 @click="onSubmit">Создать сертификат</AppButton2>

      <!-- Message -->
      <Message v-if="message" :message="message" />
    </form>
    <div v-if="certificate" class="certificate">
      <!-- Отображение сертификата -->
      <!-- <h3>Cертификат</h3> -->
      <div class="certificate-content">
        <p class="certificate-amount">Сумма: {{ certificate.amount }} euro</p>
        <p class="certificate-name">Для: {{ certificate.friendName }}</p>
        <p class="certificate-code">Код: {{ certificate.code }}</p>

      </div>
      
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
    onSubmit (certificate) {
    this.$store.dispatch('addGift', certificate)
      /*.then(()=>{
        this.$router.push('/admin')
      })*/
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
  max-width: 800px;
  margin: auto;
  margin-top: 42px;
  margin-bottom: 42px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование по горизонтали */
  text-align: center; /* Центрирование текста */

  
}

.certificate {
  max-width: 400px;
  margin-top: 20px;
  padding: 120px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  position: relative;
  background-image: url('@/assets/img/certificate_1.jpg'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.certificate h3 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #3182ce;
}

.certificate-content {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 20px 0;
}

.certificate-amount, .certificate-code {
  font-size: 18px;
  margin: 10px 0;
}

.certificate-name {
  font-size: 10px;
  margin: 10px 0;
}

.certificate-amount {
  font-weight: bold;
}

.certificate-code {
  background: #f9f9f9;
  border: 1px dashed #4CAF50;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
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
