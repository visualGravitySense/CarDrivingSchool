<template>
  <div class="about-page bg-retro">
    <!-- Главная секция -->
    <aboutHero/>

    <!-- Секция "Команда" -->
    <aboutUs/>

    <!-- Секция "Учебный процесс" -->
    <section class="learning-process-section">
      <h2>Учебный процесс</h2>
      <h3>Программа обучения</h3>
      <p>{{ program }}</p>
      <h3>Преимущества обучения у нас</h3>
      <ul>
        <li v-for="advantage in advantages" :key="advantage.id">{{ advantage }}</li>
      </ul>
      <h3>Процедура сдачи экзаменов</h3>
      <p>{{ examProcedure }}</p>
    </section>

    <!-- Секция "Успехи и отзывы" -->
    <section class="success-reviews-section">
      <h2>Наши достижения</h2>
      <p>{{ achievements }}</p>
      <h2>Истории успеха учеников</h2>
      <div v-for="successStory in successStories" :key="successStory.id">
        <h3>{{ successStory.title }}</h3>
        <p>{{ successStory.content }}</p>
      </div>
      <h2>Отзывы учеников</h2>
      <div v-for="review in reviews" :key="review.id">
        <p>{{ review }}</p>
      </div>
    </section>

    <!-- Секция "Сертификаты и лицензии" -->
    <section class="certificates-licenses-section">
      <h2>Сертификаты и лицензии</h2>
      <div v-for="certificate in certificates" :key="certificate.id">
        <p>{{ certificate }}</p>
      </div>
      <h2>Партнеры и спонсоры</h2>
      <div v-for="partner in partners" :key="partner.id">
        <p>{{ partner }}</p>
      </div>
    </section>

    <!-- Секция "Контакты" -->
    <section class="contact-section">
      <h2>Контактная информация</h2>
      <p>{{ contactInfo }}</p>
      <h2>Карта проезда</h2>
      <div id="map"></div>
      <h2>Мы в социальных сетях</h2>
      <div class="social-media">
        <a v-for="social in socialMedia" :key="social.platform" :href="social.link">{{ social.platform }}</a>
      </div>
    </section>
  </div>
</template>

<script>
import instructorsList from '~/components/Instructors/InstructorsList.vue';
import aboutHero from '~/components/aboutHero.vue';
import aboutUs from '~/components/AboutUs.vue';

export default {
  components: { instructorsList, aboutHero, aboutUs },
  data() {
    return {
      history: 'Краткая история автошколы...',
      mission: 'Миссия и ценности...',
      program: 'Описание программы обучения...',
      advantages: [
        'Преимущество 1',
        'Преимущество 2'
      ],
      examProcedure: 'Процедура сдачи экзаменов...',
      achievements: 'Наши достижения...',
      successStories: [
        { id: 1, title: 'История успеха 1', content: 'Текст истории...' },
        { id: 2, title: 'История успеха 2', content: 'Текст истории...' }
      ],
      reviews: [
        'Отзыв 1',
        'Отзыв 2'
      ],
      certificates: [
        'Сертификат 1',
        'Сертификат 2'
      ],
      partners: [
        'Партнер 1',
        'Партнер 2'
      ],
      contactInfo: 'Контактная информация...',
      socialMedia: [
        { platform: 'Facebook', link: 'https://facebook.com' },
        { platform: 'Instagram', link: 'https://instagram.com' }
      ],
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&family=Pacifico&display=swap');

.about-page {
  background-color: #f5e6c8; /* Пастельный цвет для фона */
  font-family: 'Crimson Text', serif;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 10px 10px 0 #000;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 5px 5px 0 #000;
}

h2, h3 {
  font-family: 'Pacifico', cursive;
  color: #d32f2f; /* Красный цвет для заголовков */
  text-shadow: 2px 2px 0 #000; /* Тень для заголовков */
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #e0d4a3;
  border: 2px dashed #000;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

p, li {
  font-size: 1.2rem;
  color: #333;
}

.social-media a {
  display: inline-block;
  margin-right: 15px;
  color: #3182ce; /* Синий цвет для ссылок */
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #fff;
}

.social-media a:hover {
  color: #d32f2f; /* Красный цвет при наведении */
}

#map {
  height: 300px;
  background: #ccc;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0 #000;
}

.instructors, .interviews, .success-stories, .reviews, .certificates, .partners, .social-media {
  display: flex;
  flex-wrap: wrap;
}

.instructors > div, .interviews > div, .success-stories > div, .reviews > div, .certificates > div, .partners > div, .social-media > a {
  flex: 1 1 45%;
  margin: 10px;
}
</style>
