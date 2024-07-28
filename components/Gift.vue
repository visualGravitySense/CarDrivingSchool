<template>
  
    <div class="gift-card">

      <div class="gift-info">
        <p class="mt-4 pt-4 text-gray-800">Подарите свободу на дороге!</p>
        <h2 class="certificate-heading">Подарочный сертификат автошколы <b>Viktorija</b></h2>
        <p class="mt-4 pt-4 text-gray-800">Идеальный подарок для тех, кто мечтает стать уверенным водителем. Этот сертификат предоставляет возможность пройти курс обучения у лучших инструкторов, на современных автомобилях и по доступной цене. Сделайте особенный подарок, который откроет новые горизонты и подарит уверенность за рулём!</p>
        <br>

        <div class="custom-component">
          <!-- Блок с SVG картинкой -->
          <div class="image-block">
            <svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#4CAF50">
              <!-- Руль автомобиля -->
              <circle cx="32" cy="32" r="28" stroke="#4CAF50" stroke-width="4" fill="none"/>
              <circle cx="32" cy="32" r="14" stroke="#4CAF50" stroke-width="4" fill="none"/>
              <line x1="32" y1="4" x2="32" y2="60" stroke="#4CAF50" stroke-width="4"/>
              <line x1="4" y1="32" x2="60" y2="32" stroke="#4CAF50" stroke-width="4"/>
              
              <!-- Место для текста -->
              <text x="32" y="36" font-family="Arial" font-size="8" text-anchor="middle" fill="#4CAF50">ЛОГО</text>
            </svg>
          </div>

          <!-- Блок с текстами в ряд -->
          <data class="text-block">
            <p class="green-text"><b>Уверенность на дороге: </b>Подарите свободу и уверенность за рулём, открывая новые возможности.</p>
            <!-- <p>Text random</p> -->
            <!-- <p class="orange-text"><b>Это текст с оранжевым цветом</b></p> -->
          
          </data>          
            
        </div>

        <div class="custom-component">
          <!-- Блок с SVG картинкой -->
          <div class="image-block">
            <svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#4CAF50">
              <!-- Руль автомобиля -->
              <circle cx="32" cy="32" r="28" stroke="#4CAF50" stroke-width="4" fill="none"/>
              <circle cx="32" cy="32" r="14" stroke="#4CAF50" stroke-width="4" fill="none"/>
              <line x1="32" y1="4" x2="32" y2="60" stroke="#4CAF50" stroke-width="4"/>
              <line x1="4" y1="32" x2="60" y2="32" stroke="#4CAF50" stroke-width="4"/>
              
              <!-- Место для текста -->
              <text x="32" y="36" font-family="Arial" font-size="8" text-anchor="middle" fill="#4CAF50">ЛОГО</text>
            </svg>


          </div>

          <!-- Блок с текстами в ряд -->
          <data class="text-block">
            <p class="green-text"><b>Профессиональные инструктора: </b>Обучение у лучших специалистов с индивидуальным подходом на современных автомобилях.</p>
            <!-- <p>Text random</p> -->
            <!-- <p class="orange-text"><b>Это текст с оранжевым цветом</b></p> -->
          
          </data>          
            
        </div>

        <div class="custom-component">
          <!-- Блок с SVG картинкой -->
          <div class="image-block">
            <svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#4CAF50">
              <path d="M52 18H12c-3.31 0-6 2.69-6 6v26c0 3.31 2.69 6 6 6h40c3.31 0 6-2.69 6-6V24c0-3.31-2.69-6-6-6zM12 22h40c1.1 0 2 .9 2 2v6H10v-6c0-1.1.9-2 2-2zm40 28H12c-1.1 0-2-.9-2-2V32h44v16c0 1.1-.9 2-2 2z"/>
            </svg>
          </div>

          <!-- Блок с текстами в ряд -->
          <data class="text-block">
            <p class="green-text"><b>Доступные цены: </b>Выгодные пакетные предложения и скидки, подтверждённые положительными отзывами выпускников.</p>
            <!-- <p>Text random</p> -->
            <!-- <p class="orange-text"><b>Это текст с оранжевым цветом</b></p> -->
          
          </data>          
            
        </div>
        
      </div>
      <div class="gift-certificate">
        <p class="mt-4 pt-4 text-gray-800">Подарочный сертификат на обучение в автошколе <b>Viktorija.</b></p><br>
        <h2 class="certificate-heading">🎁 Купить подарочную карточку 🎁</h2>
        
        
        <form @submit.prevent>
          <div class="form-group">
            <!-- <label for="amount">Сумма:</label> -->
            <AppInput class="form-input " v-model="amount" id="amount" type="number" required> Сумма: </AppInput>
          </div>
          <div class="form-group">

            <AppInput class="form-input " v-model="friendName" type="email" id="email" required> Email друга: </AppInput>
          </div>
          <AppButton2 class="submit-btn" @click="onSubmit">Создать сертификат</AppButton2>

          <!-- Message -->
          <Message v-if="message" :message="message" />

          <div v-if="certificate" class="certificate">
          <!-- Отображение сертификата -->
          <!-- <h3>Cертификат</h3> -->
          <div class="certificate-content">
            <p class="certificate-amount">Сумма: {{ certificate.amount }} euro</p>
            <p class="certificate-name">Для: {{ certificate.friendName }}</p>
            <p class="certificate-code">Код: {{ certificate.code }}</p>

          </div>
      </div>

        </form>
        
    </div>
    
    
      
    

    <!-- <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
      To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
    </p> -->

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

.gift-card {
    display: flex;
    gap: 20px; /* Расстояние между блоками */
    padding: 20px;
  }

.gift-info {
  
  flex: 1; /* Чтобы блоки занимали равное пространство */
  border: 1px solid #ddd; /* Лёгкая граница для визуального отделения */
  padding: 20px; /* Внутренние отступы для блока */
  border-radius: 8px; /* Закруглённые углы */
  background-color: #f9f9f9; /* Лёгкий фоновый цвет */

  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  /* background-color: #f9f9f9; */
}

  .gift-certificate {
  
  flex: 1; /* Чтобы блоки занимали равное пространство */
  border: 1px solid #ddd; /* Лёгкая граница для визуального отделения */
  padding: 20px; /* Внутренние отступы для блока */
  border-radius: 8px; /* Закруглённые углы */
  background-color: #f9f9f9; /* Лёгкий фоновый цвет */

  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
}

.certificate-heading {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 0px;
  
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  /* border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff; */
  font-size: 16px;
}

.submit-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #11b445;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0e9e38;
}

.message {
  margin-top: 20px;
  /* color: #3182ce; */
}

.certificate {
  max-width: 400px;
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #3182ce;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  font-family: 'Times New Roman', Times, serif;
  position: relative;
  background-image: url('@/assets/img/certificate_1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
}

.certificate-content {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 20px 0;
}

.certificate-amount,
.certificate-code {
  font-size: 18px;
  margin: 10px 0;
}

.certificate-name {
  font-size: 16px;
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


.custom-component {
  display: flex; /* Размещаем блоки в ряд */
  align-items: center; /* Выравниваем по вертикали по центру */
  gap: 8px; /* Расстояние между блоками */
  /*padding: 20px;  Добавляем отступы */
}

.image-block {
  /* Дополнительные стили для блока с изображением (если необходимо) */
}

.text-block {
  display: flex; /* Размещаем текстовые блоки в ряд */
  flex-direction: row; /* Вертикальное расположение текстов */
  gap: 3px; /* Расстояние между текстами */
}

.green-text {
  color: #333; /* Устанавливаем зелёный цвет текста */
}

.orange-text {
  color: #333; /* Устанавливаем оранжевый цвет текста */
}

</style>
