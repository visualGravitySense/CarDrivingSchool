<template>

  <div class="about-page bg-gray-100">
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
.about-page {

}

section {
  margin-bottom: 40px;
}

h1, h2, h3 {
  margin: 20px 0;
}

video {
  width: 100%;
  max-width: 600px;
}

.instructors, .interviews, .success-stories, .reviews, .certificates, .partners, .social-media {
  display: flex;
  flex-wrap: wrap;
}

.instructors > div, .interviews > div, .success-stories > div, .reviews > div, .certificates > div, .partners > div, .social-media > a {
  flex: 1 1 45%;
  margin: 10px;
}

#map {
  height: 300px;
  background: #ccc;
}
</style>
