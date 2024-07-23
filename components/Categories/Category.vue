<template>

  <section class="relative items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <header class="header categoryBg">
      <p class="welcome-text">
        <code>Добро пожаловать в автошколу Виктория</code>
      </p>
      <h1 class="hero-title">
        Научитесь водить<br> с
        <span class="confidence">уверенностью</span>
      </h1>
      <p class="description">
        Профессиональные инструктора и гибкий график занятий.<br>
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>
    </header>

  <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">



      <!--<img :src="category.image" :alt="category.title"><br>-->

      <h1 class="text-4xl leading-7 font-semibold">
        {{ category.title }}
      </h1>

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          {{ category.intro }}
        </h2>

        <p class="mt-3 text-gray-600">
          {{ category.content }}
        </p></br>

        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
        </p>
      </div>

    </div>

    <br>

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">



        <!--<img :src="category.image" :alt="category.title"><br>-->

        <h1 class="text-4xl leading-7 font-semibold">
          {{ category.title }}
        </h1>

        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h2 class="text-2xl leading-7 font-semibold">
            {{ category.intro }}
          </h2>

          <p class="mt-3 text-gray-600">
            {{ category.content }}
          </p></br>

          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
          </p>
        </div><br>

        <newComment/>

        <comments :comments="comments" />

      </div>


  </section>

</template>

<script>
import axios from 'axios'

import newComment from '@/components/Comments/NewComment.vue';
import comments from '@/components/Comments/Comments.vue';

export default {
  data () {
    return {
      category:
        { id: 1,
          title: 'Испытайте радость вождения на курсах категории B!',
          description: 'Описание категории A...',
          image: require('@/assets/img/car1.jpg'), // Adjust this path as necessary
          intro: 'This is the test intro ...',
          content: 'Стоимость базового курса составляет 840 €, включая теорию и 28 обязательных часов вождения на учебном автомобиле с механической коробкой передач. Первоначальный взнос составляет 140 € (160 € за теоретический курс и 700 € за практическое обучение в рамках онлайн-обучения). Курс на автомобиле с автоматической коробкой передач стоит 840 €. Возможна гибкая система оплаты в рассрочку.' },
      comments: [
        {
          name: 'Commentor Name 1',
          content: 'Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
          img: 'https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US'
          },
        {
          name: 'Commentor Name 2',
          content: 'Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
          img: 'https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US'
        }

      ]

    }
  },
  components: {
    newComment, comments
  },
  props: {
    category: {
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
.header button {
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

.categoryBg {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Полупрозрачный черный градиент */
    url('@/assets/img/about-1.jpg'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}


</style>
