<template>

  <div class="services-page">

    <header class="header servicesBg">
      <p class="welcome-text">
        <code>Добро пожаловать в автошколу Viktorija</code>
      </p>
      <h3 class="hero-title text-white-600">
        Мы готовим<br> 
        <span class="confidence">лидеров</span> на дороге !
      </h3>
      <!--<p class="description">
        Профессиональные инструктора и гибкий график занятий.<br>
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>-->
    </header>

    <!-- Заголовок и введение -->

    <div class="relativeB flex flex-col items-top justify-center bg-gray-100 sm:items-center sm:pt-0">

      <!--<Promo welcomeMessage="Добро пожаловать в нашу автошколу!"
         mainTitle='Научитесь водить с '
         mainTitleAccent='уверенностью'
         subtitle='Профессиональные инструктора и гибкий график занятий.'
         ctaText=' сегодня и начните свой путь к безопасному вождению.'
         ctaButtonText='Зарегистрируйтесь'  />-->


    <!-- Блоки по категориям водительских прав -->

      <!-- <Intro class="intro-section mt-8  p-6"
        title="Наши услуги"
        topic="Мы предлагаем обучение вождению по следующим категориям:"
        paragraph="Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text. Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text"/><br> -->

      <div class="categories-wrapper ">
        <section v-for="category in categories" :key="category.id" class="category-section ">

          <div class="hero-section">
            <!-- {{  category.image  }}
              <img :src="category.image" :alt="category.title"> -->
            <div class="hero-text">
              <!-- <p class="welcome-text">
                <code>Добро пожаловать в автошколу Viktorija</code>
              </p> -->
              <h1 class="service-title">
                {{ category.title }}

              </h1>
              <p class="">
                {{ category.description }}
 
              </p><br>
              <p>{{ category.program }}</p><br>

              <h3><b>Для записи на курсы необходимо предоставить следующие документы:</b></h3>
              <!-- <p>{{ category.requirements }}</p> -->
              <ul class="requirements-list">
                <li v-for="requirement in category.requirements" 
                    :key="requirement" 
                    class="">
                    {{ requirement }}</li>
                </ul>
              <br><br>

              <!-- <ul>
                <li v-for="advantage in category.advantages" :key="advantage">{{ advantage }}</li>
              </ul> -->

              <div class="banner">
                <h2>Расписание следующих уроков</h2>
                <ul class="advantages-list ">
                  <li v-for="advantage in category.advantages" :key="advantage" class="transform transition hover:scale-105 hover:shadow-xl">{{ advantage }}</li>
                </ul>
                <!-- <div class="schedule">
                  <h3>Расписание следующих уроков</h3>
                  <ul class="schedule-list">
                    <li>Теоретическое занятие: Понедельник, 18:00 - 20:00</li>
                    <li>Практическое занятие: Вторник, 10:00 - 12:00</li>
                    <li>Теоретическое занятие: Среда, 18:00 - 20:00</li>
                    <li>Практическое занятие: Четверг, 14:00 - 16:00</li>
                    <li>Теоретическое занятие: Пятница, 18:00 - 20:00</li>
                  </ul>
                </div> -->
              </div>
              <br>
              <AppButton class="btnInfo transform transition hover:scale-105 hover:shadow-xl">Узнать больше</AppButton>

            </div>

            <div class="hero-image transform transition hover:scale-105 hover:shadow-xl">
              <!-- {{  category.image  }} -->
              <img :src="category.image" :alt="category.title">
            </div>

            
            
        </div>



      </section>

    </div>




  </div>

    <!-- Дополнительные информационные блоки -->

    <!-- <section class="faq-section">
      <h2>Часто задаваемые вопросы (FAQ)</h2>
      <div v-for="faq in faqs" :key="faq.id">
        <h3>{{ faq.question }}</h3>
        <p>{{ faq.answer }}</p>
      </div>
    </section> -->

    <!-- <section class="reviews-section">
      <h2>Отзывы учеников</h2>
      <div v-for="review in reviews" :key="review.id">
        <p>{{ review.text }}</p>
        <p><strong>- {{ review.author }}</strong></p>
      </div>
    </section> -->

    <!-- <section class="signup-process-section">
      <h2>Процесс записи на курсы</h2>
      <p>{{ signupProcess }}</p>
    </section> -->

    <!-- <section class="pricing-section">
      <h2>Стоимость обучения</h2>
      <p>{{ pricing }}</p>
    </section> -->

    <!-- <section class="discounts-section">
      <h2>Акции и скидки</h2>
      <div v-for="discount in discounts" :key="discount.id">
        <h3>{{ discount.title }}</h3>
        <p>{{ discount.description }}</p>
      </div>
    </section> -->

    <!-- <section class="gallery-section">
      <h2>Фото галерея учебного процесса</h2>
      <div class="gallery">
        <img v-for="photo in gallery" :src="photo.src" :alt="photo.alt" :key="photo.id" />
      </div>
    </section> -->

    <!-- <section class="video-lessons-section">
      <h2>Видео уроки и примеры занятий</h2>
      <div class="videos">
        <video v-for="video in videos" :src="video.src" controls :key="video.id"></video>
      </div>
    </section> -->

    <!-- <section class="instructors-section">
      <h2>Информация о преподавателях</h2>
      <div v-for="instructor in instructors" :key="instructor.id">
        <h3>{{ instructor.name }}</h3>
        <p>{{ instructor.bio }}</p>
      </div>
    </section> -->

    <!-- <section class="success-stories-section">
      <h2>Истории успеха учеников</h2>
      <div v-for="successStory in successStories" :key="successStory.id">
        <h3>{{ successStory.title }}</h3>
        <p>{{ successStory.content }}</p>
      </div>
    </section> -->

    <!-- <section class="contact-form-section">
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
    </section> -->

    <!-- <section class="schedule-section">
      <h2>График занятий</h2>
      <p>{{ schedule }}</p>
    </section> -->

    <!-- <section class="materials-section">
      <h2>Учебные материалы и пособия</h2>
      <div v-for="material in materials" :key="material.id">
        <h3>{{ material.title }}</h3>
        <p>{{ material.description }}</p>
      </div>
    </section> -->

    <!-- <section class="licenses-section">
      <h2>Лицензии и сертификаты</h2>
      <div v-for="license in licenses" :key="license.id">
        <p>{{ license.description }}</p>
      </div>
    </section> -->

    <!-- <section class="partners-section">
      <h2>Партнеры и спонсоры</h2>
      <div v-for="partner in partners" :key="partner.id">
        <p>{{ partner.name }}</p>
      </div>
    </section> -->

    <!-- <section class="privacy-policy-section">
      <h2>Политика конфиденциальности</h2>
      <p>{{ privacyPolicy }}</p>
    </section> -->

    <!-- <section class="refund-policy-section">
      <h2>Условия возврата и отмены</h2>
      <p>{{ refundPolicy }}</p>
    </section> -->

    <!-- <section class="safety-policy-section">
      <h2>Политика безопасности</h2>
      <p>{{ safetyPolicy }}</p>
    </section> -->

    <!-- <section class="vehicles-section">
      <h2>Информация о транспортных средствах</h2>
      <div v-for="vehicle in vehicles" :key="vehicle.id">
        <h3>{{ vehicle.name }}</h3>
        <p>{{ vehicle.description }}</p>
      </div>
    </section> -->

    <!-- <section class="exam-statistics-section">
      <h2>Статистика успешной сдачи экзаменов</h2>
      <p>{{ examStatistics }}</p>
    </section> -->

    <!-- <section class="location-map-section">
      <h2>Карта проезда и информация о местоположении</h2>
      <div id="map"></div>
    </section> -->

    <!-- <section class="post-course-support-section">
      <h2>Поддержка учеников после окончания курсов</h2>
      <p>{{ postCourseSupport }}</p>
    </section> -->

    <!-- <section class="driving-tips-section">
      <h2>Советы для начинающих водителей</h2>
      <div v-for="tip in drivingTips" :key="tip.id">
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.content }}</p>
      </div>
    </section> -->

    <!-- <section class="mobile-app-section">
      <h2>Мобильное приложение автошколы</h2>
      <p>{{ mobileAppInfo }}</p>
    </section> -->

    <!-- <section class="careers-section">
      <h2>Вакансии и работа у нас</h2>
      <div v-for="job in jobs" :key="job.id">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
      </div>
    </section> -->

    <!-- <section class="blog-section">
      <h2>Блог автошколы</h2>
      <div v-for="post in blogPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a :href="post.link">Читать далее</a>
      </div>
    </section> -->

    <!-- <section class="news-updates-section">
      <h2>Новости и обновления</h2>
      <div v-for="news in newsUpdates" :key="news.id">
        <h3>{{ news.title }}</h3>
        <p>{{ news.content }}</p>
      </div>
    </section> -->

    <!-- <section class="social-media-section">
      <h2>Мы в социальных сетях</h2>
      <div class="social-media">
        <a v-for="social in socialMedia" :key="social.platform" :href="social.link">{{ social.platform }}</a>
      </div>
    </section> -->
  </div>
</template>

<script>
import Intro from '~/components/UI/Intro.vue';
import category from '~/components/Category.vue';
import promo from '~/components/Promo.vue';
import CategoryHolder from '~/components/CategoryHolder.vue';
export default {
  components: {
    Intro, category, CategoryHolder, promo
  },
  data() {
    return {
      categories: [
        {
          id: 'B',
          title: 'Категория B',
          description: 'Категория B — это одна из самых популярных категорий водительских прав, позволяющая управлять легковыми автомобилями. Она предназначена для тех, кто хочет управлять личным или арендованным транспортом, предназначенным для перевозки пассажиров и грузов в пределах допустимых норм.',
          advantages: ['29.07.24', '05.08.24', '12.08.24', '26.08.24', '18.07.24 (На русском)'],
          program: 'Наша программа включает теоретическую подготовку с обучением в классах и на онлайн-платформе, практические занятия с опытными инструкторами на современных автомобилях, гибкий график уроков, индивидуальный подход и всестороннюю поддержку на всех этапах обучения и подготовки к экзаменам.',
          requirements: ['Документ, удостоверяющий личность (паспорт или ID-карта)' ,'Медицинская справка, на категорию «В».'],
          image: require('@/assets/img/category-b.jpg')
        },
        {
          id: 'A',
          title: 'Категория A',
          description: 'Категория A - это обучение на управление мотоциклами. В нашей автошколе мы предлагаем полный курс подготовки для получения водительского удостоверения категории A.',
          advantages: ['19.07.24 kell 08:00', '26.07.24 kell 07:45'],
          program: 'Программа обучения для категории A включает теоретические занятия в классах и на онлайн-платформе, а также индивидуальные практические уроки с опытными инструкторами на современных мотоциклах. Мы предлагаем гибкий график, персонализированное обучение и всестороннюю поддержку на всех этапах подготовки и сдачи экзаменов.',
          requirements: ['Документ, удостоверяющий личность (паспорт или ID-карта)' ,'Медицинская справка, на категорию «A».'],
          image: require('@/assets/img/category-a.jpg')
        },
        // {
        //   id: 'A1',
        //   title: 'Категория A1',
        //   description: 'Описание категории A1...',
        //   advantages: ['Преимущество 1', 'Преимущество 2'],
        //   program: 'Программа обучения для категории A1...',
        //   requirements: 'Требования для категории A1...'
        // },
        // {
        //   id: 'A2',
        //   title: 'Категория A2',
        //   description: 'Описание категории A2...',
        //   advantages: ['Преимущество 1', 'Преимущество 2'],
        //   program: 'Программа обучения для категории A2...',
        //   requirements: 'Требования для категории A2...'
        // },
       
        {
          id: 'AM',
          title: 'Категория AM',
          description: 'Категория AM предназначена для обучения управлению мопедами и легкими квадроциклами. Наша программа включает теоретические занятия в классах и на онлайн-платформе, а также практические уроки с опытными инструкторами на современных транспортных средствах. Мы предлагаем гибкий график, персонализированное обучение и поддержку на всех этапах подготовки и сдачи экзаменов, чтобы вы уверенно и безопасно управляли мопедом или легким квадроциклом.',
          advantages: ['', ''],
          program: 'Программа обучения для категории AM включает теоретические занятия в классах и на онлайн-платформе, индивидуальные практические уроки с опытными инструкторами на современных мопедах и легких квадроциклах. Мы предлагаем гибкий график, персонализированное обучение и поддержку на всех этапах подготовки и сдачи экзаменов.',
          requirements: ['Документ, удостоверяющий личность (паспорт или ID-карта)' ,'Медицинская справка, на категорию «AM».'],
          image: require('@/assets/img/category-am.jpg')
        },
        
        {
          id: 'winter',
          title: 'Зимнее вождение, вождение в темное время суток',
          description: 'Зимнее вождение и вождение в темное время суток — это курс, который обучает безопасным техникам управления автомобилем в сложных условиях.',
          advantages: ['19.07.24 kell 08:00', '26.07.24 kell 07:45'],
          program: 'Зимнее вождение: Основы управления на скользких и заснеженных дорогах, использование антиблокировочной системы и правильное поведение при заносах. Вождение в темное время суток: Подходы к вождению в темноте, использование фар, корректировка скорости и внимание к дорожной обстановке.',
          requirements: ' ',
          image: require('@/assets/img/category-w.jpg')
        },
        {
          id: 'medic',
          title: 'Курсы первой медицинской помощи',
          description: 'Курсы первой медицинской помощи предоставляют важные навыки для оказания экстренной помощи в критических ситуациях.',
          advantages: ['19.07.24 kell 08:00', '26.07.24 kell 07:45'],
          program: 'В рамках курса вы изучите: Основы первой помощи, Профилактика и уход, Практические навыки',
          requirements: ' ',
          image: require('@/assets/img/category-x.jpg')
        },
        {
          id: 'final',
          title: 'Курс завершения подготовки',
          description: 'Курс завершения подготовки — это интенсивный тренинг для подготовки к экзаменам по категориям A или B.',
          advantages: ['19.07.24 kell 08:00', '26.07.24 kell 07:45'],
          program: 'Программа включает углубленное изучение теории и практики, освещение всех важных дорожных правил, навыков управления и требований экзаменов. Курс включает индивидуальные занятия с инструкторами, чтобы учитывать ваши потребности и уровень подготовки. Мы также предоставляем поддержку в подготовке и сдаче экзаменов.',
          requirements: ['Документ, удостоверяющий личность (паспорт или ID-карта)' ,'Медицинская справка, на категорию'],
          image: '',
          image: require('@/assets/img/category-f.jpg')
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

<style scoped>


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

.intro-section, .faq-section, .reviews-section,
  .signup-process-section, .pricing-section, .discounts-section,
  .materials-section {
  padding: 20px;
  margin: 20px;
}



.categories-wrapper {
  /* display: flex;
  flex-wrap: wrap; */
  gap: 16px;
}


.about-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
}

.about-image {
  flex: 1; /* Занимает 50% ширины */
  max-width: 50%;
  text-align: left;
}

.about-content {
  flex: 1; /* Занимает 50% ширины */
  max-width: 50%;
  text-align: left;
}

.about-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333; /* Цвет заголовка */
  margin-bottom: 16px;
}

.about-paragraph {
  font-size: 1rem;
  font-weight: 100;
  color: #333; /* Цвет заголовка */
  /* margin-top: 16px; */
}

.hero-section {

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #f8f9fa; /* Светлый фон для контраста */
  gap: 20px; /* Расстояние между текстом и изображением */
}

.hero-text {
  flex: 1;
  max-width: 75%;
  text-align: left;
}

.hero-image {
  flex: 1;
  max-width: 25%;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 12px; /* Округление углов изображения */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Легкая тень для добавления глубины */
}

.welcome-text {
  font-size: 1.2rem;
  color: #333; /* Темный цвет для контраста */
  margin-bottom: 16px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700; /* Более жирный шрифт для выделения */
  /* color: #222;  Темный цвет заголовка */
  margin-bottom: 16px;
}

.service-title {
  font-size: 2.5rem;
  font-weight: 700; /* Более жирный шрифт для выделения */
  color: #222; /* Темный цвет заголовка */
  margin-bottom: 16px;
}

.header {

  text-align: center;
  padding: 20px;
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
  color: #000;
}

.header {
  padding: 9rem 2rem;
  text-align: center;

  /* background: #f1f1f1; */
  border-bottom: 2px solid #8f8f8f;
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
  color: #000;
}

.servicesBg {
  position: relative; /* Ensure the container is positioned relatively */
  background-image: url('@/assets/img/car-3.jpg'); /* Specify the path to your image */
  background-size: cover;
  background-position: center;
}

.servicesBg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Black with 50% opacity */
  z-index: 1; /* Ensure the overlay is on top */
}

/* Ensure any content within .contactBg is above the overlay */
.servicesBg > * {
  position: relative;
  z-index: 2;
}



.intro-services {
  position: relative; /* Это необходимо для псевдоэлемента */
  /* background: rgba(0, 0, 0, 0.7);  Темный фон с 70% непрозрачностью */
  color: #fff; /* Белый текст для контраста с темным фоном */
  /*padding: 2rem;  Отступы вокруг содержимого */
  /*border-radius: 8px;  Скругленные углы */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  Легкая тень для придания объема */
}

.intro-services h1,
.intro-services h2,
.intro-services h3,
.intro-services h4,
.intro-services h5,
.intro-services h6 {
  color: #fff; /* Белый цвет заголовков */
  margin-top: 0; /* Удаление верхнего отступа у заголовков */
  margin-bottom: 1rem; /* Нижний отступ для заголовков */
}

.intro-services p {
  color: #ffffff; /* Светло-серый цвет для основного текста */
  line-height: 1.6; /* Увеличение интерлиньяж для лучшей читаемости */
  margin-bottom: 1rem; /* Нижний отступ для абзацев */
}

.intro-services a {
  color: #1e90ff; /* Синий цвет для ссылок */
  text-decoration: underline; /* Подчеркивание ссылок */
}

.intro-services a:hover {
  color: #ff4500; /* Цвет ссылок при наведении */
  text-decoration: none; /* Убирает подчеркивание при наведении */
}

.banner {
  background-color: #cbd1df; /* Темно-синий фон */
  color: #121212; /* Белый цвет текста */
  padding: 1rem; /* Уменьшенный отступ */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px; /* Уменьшенная максимальная ширина */
  /* margin: 0 auto; */
  text-align: center;
}

.banner h2 {
  font-size: 1.5rem; /* Уменьшенный размер шрифта */
  margin-bottom: 0.5rem; /* Уменьшенный нижний отступ */
}

.requirements-list li {
  gap: 0.5rem; /* Расстояние между элементами */
  font-size: 1.5rem;
  /* box-sizing: border-box; */
}

.advantages-list, .schedule-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* Расстояние между элементами */
}

.advantages-list li, .schedule-list li {
  background: #8fb1fb; /* Синий фон для пунктов списка */
  color: #0a0a0a;
  margin: 0.25rem 0; /* Уменьшенный отступ между строками списка */
  padding: 0.5rem; /* Уменьшенный внутренний отступ */
  border-radius: 5px;
  font-size: 1rem; /* Стандартный размер шрифта */
  flex: 1 1 calc(50% - 0.5rem); /* Ширина элемента списка - половина ширины контейнера с учетом отступа */
  box-sizing: border-box;
}

.schedule {
  margin-top: 1rem; /* Уменьшенный отступ сверху */
}

.schedule h3 {
  font-size: 1.25rem; /* Уменьшенный размер шрифта */
  margin-bottom: 0.5rem; /* Уменьшенный нижний отступ */
}

.schedule-list li {
  background: #3b82f6; /* Светло-синий фон для расписания */
}

@media (min-width: 600px) {
  .banner {
    padding: 1.5rem; /* Немного увеличенный отступ для больших экранов */
  }
  
  .banner h2 {
    font-size: 2rem; /* Увеличенный размер шрифта для больших экранов */
  }

  .schedule h3 {
    font-size: 1.75rem; /* Увеличенный размер шрифта для больших экранов */
  }

  .advantages-list li, .schedule-list li {
    font-size: 1.1rem; /* Немного увеличенный размер шрифта для больших экранов */
  }
}

.btnInfo {
  background-color: #4165de;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;

  transition: background-color 0.3s;
}


</style>
