<template>
  <div class="about-page">
    <!-- Главная секция -->


        <div class="hero-section">
          <div class="hero-text">
            <p class="welcome-text">
              <code>Добро пожаловать в автошколу Виктория</code>
            </p>
            <h1 class="hero-title">
              Научитесь водить с
              <span class="confidence">уверенностью</span>
            </h1>
            <p class="description">
              Профессиональные инструктора и гибкий график занятий.
              <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
            </p>
          </div>

          <div class="hero-image">
            <img src="@/assets/img/about-hero.jpg" alt="Hero Image">
          </div>
      </div>


    <!-- Секция "О нашей автошколе" -->
    <section>
      <div>
        <h2 class="about-title mt-10 text-2xl leading-7 font-semibold">
          {{ title }} <span class="confidence">Viktorija</span>
        </h2>
        <p class="pt-4 text-gray-800 border-t border-dashed">
          <code class="bg-yellow-100 text-xl p-1 rounded border">{{ topic }}</code>
        </p>
        <p class="mt-3 text-gray-600">
          {{ paragraph }}
        </p>
      </div>
    </section>

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

      title: "О нашей автошколе",
      topic: "Ведущая автошкола в Таллине с 18-летним опытом работы",
      paragraph: "Мы гордимся высоким уровнем обучения, который обеспечивается опытными и квалифицированными инструкторами. Наша автошкола предлагает современные методы обучения, включая теоретические занятия и практическое вождение, чтобы подготовить студентов к безопасному и уверенному управлению автомобилем. Присоединяйтесь к нам и получите водительские права!",

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

@import url('https://fonts.googleapis.com/css2?family=Rochester&family=Roboto+Slab:wght@400;700&display=swap');

.hero-section {

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 40px; */
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
  color: #222; /* Темный цвет заголовка */
  margin-bottom: 16px;
}

.confidence {
  color: #007bff; /* Яркий цвет для выделения */
}

.description {
  font-size: 1.1rem;
  color: #555; /* Более светлый цвет для описания */
}

.register-link {
  color: #007bff; /* Цвет ссылки */
  font-weight: 600; /* Жирное начертание ссылки */
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline; /* Подчеркивание при наведении */
}



.about-page {
  /* background-color: #faf3e0;  Легкий кремовый фон */
  font-family: 'Roboto Slab', serif;
  padding: 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
}

section {
  margin-bottom: 40px;
  background-color: #ffffff;
  border: 2px solid #e0b14f;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

h2, h3 {
  font-family: 'Rochester', cursive;
  color: #d32f2f;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #ffebcd;
  border: 2px dashed #d32f2f;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

li:hover {
  background-color: #f5deb3;
  transform: scale(1.02);
}

p, li {
  font-size: 1.2rem;
  color: #333;
}

.social-media a {
  display: inline-block;
  margin-right: 15px;
  color: #3182ce;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #fff;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-media a:hover {
  color: #d32f2f;
  transform: scale(1.1);
}

#map {
  height: 300px;
  background: #ccc;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
