<template>

  <div class="services-page">

    <!-- Заголовок и введение -->

    <div class="relative flex flex-col items-top justify-center bg-gray-100 sm:items-center sm:pt-0">

      <Promo welcomeMessage="Добро пожаловать в нашу автошколу!"
         mainTitle='Научитесь водить с '
         mainTitleAccent='уверенностью'
         subtitle='Профессиональные инструктора и гибкий график занятий.'
         ctaText=' сегодня и начните свой путь к безопасному вождению.'
         ctaButtonText='Зарегистрируйтесь'  />





    <!-- Блоки по категориям водительских прав -->

      <Intro class="intro-section mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"
        title="Наши услуги"
        topic="Мы предлагаем обучение вождению по следующим категориям:"
        paragraph="Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text. Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text"/><br>


        <section v-for="category in categories" :key="category.id" class="category-section">


          <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
            <h2 class="text-2xl leading-7 font-semibold">
              {{ category.title }}
            </h2>

            <p class="mt-3 text-gray-600">
              {{ category.description }}
              </p></br>

            <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
              To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
            </p>

            <p>{{ category.program }}</p>
            <h3>Требования к ученикам</h3>
            <p>{{ category.requirements }}</p>

            <ul>
              <li v-for="advantage in category.advantages" :key="advantage">{{ advantage }}</li>
            </ul>

          </div>

      </section>

    </div>

    <!-- Дополнительные информационные блоки -->
    <section class="faq-section">
      <h2>Часто задаваемые вопросы (FAQ)</h2>
      <div v-for="faq in faqs" :key="faq.id">
        <h3>{{ faq.question }}</h3>
        <p>{{ faq.answer }}</p>
      </div>
    </section>

    <section class="reviews-section">
      <h2>Отзывы учеников</h2>
      <div v-for="review in reviews" :key="review.id">
        <p>{{ review.text }}</p>
        <p><strong>- {{ review.author }}</strong></p>
      </div>
    </section>

    <section class="signup-process-section">
      <h2>Процесс записи на курсы</h2>
      <p>{{ signupProcess }}</p>
    </section>

    <section class="pricing-section">
      <h2>Стоимость обучения</h2>
      <p>{{ pricing }}</p>
    </section>

    <section class="discounts-section">
      <h2>Акции и скидки</h2>
      <div v-for="discount in discounts" :key="discount.id">
        <h3>{{ discount.title }}</h3>
        <p>{{ discount.description }}</p>
      </div>
    </section>

    <section class="gallery-section">
      <h2>Фото галерея учебного процесса</h2>
      <div class="gallery">
        <img v-for="photo in gallery" :src="photo.src" :alt="photo.alt" :key="photo.id" />
      </div>
    </section>

    <section class="video-lessons-section">
      <h2>Видео уроки и примеры занятий</h2>
      <div class="videos">
        <video v-for="video in videos" :src="video.src" controls :key="video.id"></video>
      </div>
    </section>

    <section class="instructors-section">
      <h2>Информация о преподавателях</h2>
      <div v-for="instructor in instructors" :key="instructor.id">
        <h3>{{ instructor.name }}</h3>
        <p>{{ instructor.bio }}</p>
      </div>
    </section>

    <section class="success-stories-section">
      <h2>Истории успеха учеников</h2>
      <div v-for="successStory in successStories" :key="successStory.id">
        <h3>{{ successStory.title }}</h3>
        <p>{{ successStory.content }}</p>
      </div>
    </section>

    <section class="contact-form-section">
      <h2>Обратная связь и контактная форма</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="form.name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />

        <label for="message">Сообщение:</label>
        <textarea id="message" v-model="form.message" required></textarea>

        <button type="submit">Отправить</button>
      </form>
    </section>

    <section class="schedule-section">
      <h2>График занятий</h2>
      <p>{{ schedule }}</p>
    </section>

    <section class="materials-section">
      <h2>Учебные материалы и пособия</h2>
      <div v-for="material in materials" :key="material.id">
        <h3>{{ material.title }}</h3>
        <p>{{ material.description }}</p>
      </div>
    </section>

    <section class="licenses-section">
      <h2>Лицензии и сертификаты</h2>
      <div v-for="license in licenses" :key="license.id">
        <p>{{ license.description }}</p>
      </div>
    </section>

    <section class="partners-section">
      <h2>Партнеры и спонсоры</h2>
      <div v-for="partner in partners" :key="partner.id">
        <p>{{ partner.name }}</p>
      </div>
    </section>

    <section class="privacy-policy-section">
      <h2>Политика конфиденциальности</h2>
      <p>{{ privacyPolicy }}</p>
    </section>

    <section class="refund-policy-section">
      <h2>Условия возврата и отмены</h2>
      <p>{{ refundPolicy }}</p>
    </section>

    <section class="safety-policy-section">
      <h2>Политика безопасности</h2>
      <p>{{ safetyPolicy }}</p>
    </section>

    <section class="vehicles-section">
      <h2>Информация о транспортных средствах</h2>
      <div v-for="vehicle in vehicles" :key="vehicle.id">
        <h3>{{ vehicle.name }}</h3>
        <p>{{ vehicle.description }}</p>
      </div>
    </section>

    <section class="exam-statistics-section">
      <h2>Статистика успешной сдачи экзаменов</h2>
      <p>{{ examStatistics }}</p>
    </section>

    <section class="location-map-section">
      <h2>Карта проезда и информация о местоположении</h2>
      <div id="map"></div>
    </section>

    <section class="post-course-support-section">
      <h2>Поддержка учеников после окончания курсов</h2>
      <p>{{ postCourseSupport }}</p>
    </section>

    <section class="driving-tips-section">
      <h2>Советы для начинающих водителей</h2>
      <div v-for="tip in drivingTips" :key="tip.id">
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.content }}</p>
      </div>
    </section>

    <section class="mobile-app-section">
      <h2>Мобильное приложение автошколы</h2>
      <p>{{ mobileAppInfo }}</p>
    </section>

    <section class="careers-section">
      <h2>Вакансии и работа у нас</h2>
      <div v-for="job in jobs" :key="job.id">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
      </div>
    </section>

    <section class="blog-section">
      <h2>Блог автошколы</h2>
      <div v-for="post in blogPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a :href="post.link">Читать далее</a>
      </div>
    </section>

    <section class="news-updates-section">
      <h2>Новости и обновления</h2>
      <div v-for="news in newsUpdates" :key="news.id">
        <h3>{{ news.title }}</h3>
        <p>{{ news.content }}</p>
      </div>
    </section>

    <section class="social-media-section">
      <h2>Мы в социальных сетях</h2>
      <div class="social-media">
        <a v-for="social in socialMedia" :key="social.platform" :href="social.link">{{ social.platform }}</a>
      </div>
    </section>
  </div>
</template>

<script>
import Intro from '~/components/UI/Intro.vue';
import category from '~/components/Category.vue';
export default {
  components: {
    Intro, category
  },
  data() {
    return {
      categories: [
        {
          id: 'A',
          title: 'Категория A',
          description: 'Описание категории A...',
          advantages: ['Преимущество 1', 'Преимущество 2'],
          program: 'Программа обучения для категории A...',
          requirements: 'Требования для категории A...'
        },
        {
          id: 'A1',
          title: 'Категория A1',
          description: 'Описание категории A1...',
          advantages: ['Преимущество 1', 'Преимущество 2'],
          program: 'Программа обучения для категории A1...',
          requirements: 'Требования для категории A1...'
        },
        {
          id: 'A2',
          title: 'Категория A2',
          description: 'Описание категории A2...',
          advantages: ['Преимущество 1', 'Преимущество 2'],
          program: 'Программа обучения для категории A2...',
          requirements: 'Требования для категории A2...'
        },
        {
          id: 'AM',
          title: 'Категория AM',
          description: 'Описание категории AM...',
          advantages: ['Преимущество 1', 'Преимущество 2'],
          program: 'Программа обучения для категории AM...',
          requirements: 'Требования для категории AM...'
        },
        {
          id: 'B',
          title: 'Категория B',
          description: 'Описание категории B...',
          advantages: ['Преимущество 1', 'Преимущество 2'],
          program: 'Программа обучения для категории B...',
          requirements: 'Требования для категории B...'
        }
      ],
      faqs: [
        { id: 1, question: 'Вопрос 1', answer: 'Ответ 1' },
        { id: 2, question: 'Вопрос 2', answer: 'Ответ 2' }
      ],
      reviews: [
        { id: 1, text: 'Отзыв 1', author: 'Автор 1' },
        { id: 2, text: 'Отзыв 2', author: 'Автор 2' }
      ],
      signupProcess: 'Процесс записи на курсы...',
      pricing: 'Стоимость обучения...',
      discounts: [
        { id: 1, title: 'Скидка 1', description: 'Описание скидки 1' },
        { id: 2, title: 'Скидка 2', description: 'Описание скидки 2' }
      ],
      gallery: [
        { id: 1, src: 'path/to/photo1.jpg', alt: 'Фото 1' },
        { id: 2, src: 'path/to/photo2.jpg', alt: 'Фото 2' }
      ],
      videos: [
        { id: 1, src: 'path/to/video1.mp4' },
        { id: 2, src: 'path/to/video2.mp4' }
      ],
      instructors: [
        { id: 1, name: 'Инструктор 1', bio: 'Биография инструктора 1' },
        { id: 2, name: 'Инструктор 2', bio: 'Биография инструктора 2' }
      ],
      successStories: [
        { id: 1, title: 'История успеха 1', content: 'Содержание истории успеха 1' },
        { id: 2, title: 'История успеха 2', content: 'Содержание истории успеха 2' }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      },
      schedule: 'График занятий...',
      materials: [
        { id: 1, title: 'Материал 1', description: 'Описание материала 1' },
        { id: 2, title: 'Материал 2', description: 'Описание материала 2' }
      ],
      licenses: [
        { id: 1, description: 'Описание лицензии 1' },
        { id: 2, description: 'Описание лицензии 2' }
      ],
      partners: [
        { id: 1, name: 'Партнер 1' },
        { id: 2, name: 'Партнер 2' }
      ],
      privacyPolicy: 'Политика конфиденциальности...',
      refundPolicy: 'Условия возврата и отмены...',
      safetyPolicy: 'Политика безопасности...',
      vehicles: [
        { id: 1, name: 'Транспортное средство 1', description: 'Описание транспортного средства 1' },
        { id: 2, name: 'Транспортное средство 2', description: 'Описание транспортного средства 2' }
      ],
      examStatistics: 'Статистика успешной сдачи экзаменов...',
      postCourseSupport: 'Поддержка учеников после окончания курсов...',
      drivingTips: [
        { id: 1, title: 'Совет 1', content: 'Содержание совета 1' },
        { id: 2, title: 'Совет 2', content: 'Содержание совета 2' }
      ],
      mobileAppInfo: 'Информация о мобильном приложении автошколы...',
      jobs: [
        { id: 1, title: 'Вакансия 1', description: 'Описание вакансии 1' },
        { id: 2, title: 'Вакансия 2', description: 'Описание вакансии 2' }
      ],
      blogPosts: [
        { id: 1, title: 'Пост в блоге 1', excerpt: 'Краткое содержание поста 1', link: '/blog/post1' },
        { id: 2, title: 'Пост в блоге 2', excerpt: 'Краткое содержание поста 2', link: '/blog/post2' }
      ],
      newsUpdates: [
        { id: 1, title: 'Новость 1', content: 'Содержание новости 1' },
        { id: 2, title: 'Новость 2', content: 'Содержание новости 2' }
      ],
      socialMedia: [
        { platform: 'Facebook', link: 'https://facebook.com' },
        { platform: 'Instagram', link: 'https://instagram.com' }
      ]
    };
  },
  methods: {
    submitForm() {
      // Обработка отправки формы
      alert('Форма отправлена');
    }
  }
}
</script>

<style>
.services-page {

}

section {
  margin-bottom: 40px;
}

h1, h2, h3 {
  margin: 20px 0;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  max-width: 200px;
  margin: 10px;
}

.videos {
  display: flex;
  flex-wrap: wrap;
}

.videos video {
  width: 100%;
  max-width: 400px;
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

form label {
  margin: 10px 0 5px;
}

form input, form textarea {
  padding: 10px;
  margin-bottom: 20px;
}

form button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

.social-media a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: #007BFF;
}

.social-media a:hover {
  text-decoration: underline;
}

#map {
  height: 300px;
  background: #ccc;
}

.intro-section, .faq-section, .category-section, .reviews-section,
  .signup-process-section, .pricing-section, .discounts-section,
  .materials-section {
  padding: 20px;
  margin: 20px;
}




</style>
