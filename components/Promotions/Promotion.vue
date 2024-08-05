<template>

<section class="relative flex flex-col items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

  <div>
    <header class="header promotionsBg ">
      <p class="welcome-text">
        <code> {{ promotion.intro }} </code>
      </p>
      <h1 class="promo-title">
        <!-- Запишись на курс прямо сейчас и получи <br> -->
        <!-- <span class="confidence">бесплатное занятие!</span> -->

        {{ promotion.title }}
        
      </h1>
      <p class="description">
        Профессиональные инструктора и гибкий график занятий.<br>
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>
    </header>

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <!-- <img :src="promotion.image" :alt="promotion.title" /> -->

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <h2 class="text-2xl leading-7 font-semibold">
          {{ promotion.title }}
          <!-- Только до конца месяца в автошколе "Viktorija" -->
        </h2>

        <p class="mt-3 text-gray-600">
          {{ promotion.description }}
          <br><br>
          {{ promotion.content }}
          <br><br>
          
          Не ждите удобного момента – создайте его! Наши опытные инструкторы помогут вам освоить все нюансы вождения, чтобы вы чувствовали себя уверенно на дороге. <br>
        </p></br>

       

        <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>

        </br>


        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          
            <code class="bg-gray-100 text-sm p-1 rounded border">
              Условия:</code>
              {{ promotion.terms }}
        </p>
      </div> 

          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            📞 Для записи звоните: <code class="bg-gray-100 text-sm p-1 rounded border"><a href="tel:+37253464508">+372 53464508</a></code> 🌐 Для дополнительной информации <code class="bg-gray-100 text-sm p-1 rounded border"><a href="mailto:info@viktorijaautokool.ee">info@viktorijaautokool.ee</a></code> 
          </p><br>
        </div>

      </div>
  </section>

</template>

<script>
export default {
  props: {
    promotion: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.header {
  padding: 9rem 2rem;
  text-align: center;
  margin-bottom: 36px;

  background: #f1f1f1;
  border-bottom: 2px solid #000;
}
.header h1 {
  font-size: 3em;
  margin: 0;
}
.header p {
  margin: 10px 0;
}
.button {
  padding: 10px 20px;
  background: #4165de;
  color: #fff;
  border: none;
  cursor: pointer;
}
.header a {
  color: #41de73;
}

.headre a:hover {
  text-decoration: underline;
  color: #ff5200;
}

.promotionsBg {

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Полупрозрачный черный градиент */
    url('@/assets/img/about-1.jpg'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}

.promo-title {
  color: #d4d4d4; 
}



</style>
