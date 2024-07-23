<template>

<section class="relative flex flex-col items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

  <div>
    <header class="header promotionsBg ">
      <p class="welcome-text">
        <code>Специальное предложение: Стань профессионалом за рулем уже сегодня!</code>
      </p>
      <h1 class="hero-title">
        Запишись на курс прямо сейчас и получи <br>
        <span class="confidence">бесплатное занятие!</span>
      </h1>
      <p class="description">
        Профессиональные инструктора и гибкий график занятий.<br>
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>
    </header>

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <!--<img :src="promotion.img" :alt="promotion.title" />-->

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <h2 class="text-2xl leading-7 font-semibold">
          <!--{{ promotion.title }}-->
          Только до конца месяца в автошколе "Viktorija"
        </h2>

        <p class="mt-3 text-gray-600">
          <!--{{ promotion.descr }}-->
          Пройди курс обучения вождения и получи дополнительное занятие с профессиональным инструктором абсолютно бесплатно. Не упустите свой шанс научиться водить уверенно и безопасно.
          <br><br>
          Мотиватор:
          Не ждите удобного момента – создайте его! Наши опытные инструкторы помогут вам освоить все нюансы вождения, чтобы вы чувствовали себя уверенно на дороге. <br>
        </p></br>

        <p class="mt-3 text-gray-600">
          <!--{{ promotion.content }}-->

        </p>

        <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>

        </br>


        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Еще что-нибудь:
            <code class="bg-gray-100 text-sm p-1 rounded border">
              Успейте записаться до конца месяца</code>
              и получите скидку на теоретический курс. Подарите себе свободу передвижения и уверенность за рулем вместе с <code class="bg-gray-100 text-sm p-1 rounded border">автошколой "Виктория"!</code>. Have fun!
        </p>
      </div>

          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
          </p>
        </div>

      </div></div>
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



</style>
