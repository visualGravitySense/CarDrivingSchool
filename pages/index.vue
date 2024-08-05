<template>
  <div class="home-page">

    <Hero/>

    <About/>

    <gift/>

    <!-- Преимущества обучения -->
    <Benefits/>

    <gallery/>
    <br>


    <!-- Отзывы учеников
    <section class="testimonials">

      <h2>Отзывы учеников</h2>
      <div class="testimonial" v-for="review in reviews" :key="review.id">
        <p>{{ review.text }}</p>
        <p><strong>- {{ review.author }}</strong></p>
      </div>
    </section> -->




    <!-- Ссылки на социальные сети -->
    <!-- <section class="social-media">

      <h2>Мы в социальных сетях</h2>
      <div class="social-links">
        <a v-for="social in socialMedia" :key="social.platform" :href="social.link">{{ social.platform }}</a>
      </div>
    </section> -->

    <!-- Форма подписки на новости -->
    <!-- <section class="newsletter">
      <h2>Подпишитесь на новости</h2>
      <form @submit.prevent="subscribeNewsletter">
        <label for="email">Email:</label>
        <input class="bg-gray-100" type="email" id="email" v-model="newsletterEmail" required />
        <button type="submit">Подписаться</button>
      </form>
    </section> -->
  </div>
</template>

<script>
import instructorsList from '~/components/Instructors/InstructorsList.vue';
import gallery from '~/components/Gallery.vue';
import gift from '~/components/Gift.vue';
export default {
  components: { instructorsList, gallery, gift  },

  data() {

    return {
      categories: [
        { id: 'A', title: 'Категория A', description: 'Описание категории A...' },
        { id: 'A1', title: 'Категория A1', description: 'Описание категории A1...' },
        { id: 'A2', title: 'Категория A2', description: 'Описание категории A2...' },
        { id: 'AM', title: 'Категория AM', description: 'Описание категории AM...' },
        { id: 'B', title: 'Категория B', description: 'Описание категории B...' }
      ],
      reviews: [
        { id: 1, text: 'Отзыв 1', author: 'Автор 1' },
        { id: 2, text: 'Отзыв 2', author: 'Автор 2' }
      ],

      videos: [
        { id: 1, src: 'path/to/video1.mp4' },
        { id: 2, src: 'path/to/video2.mp4' }
      ],


      socialMedia: [
        { platform: 'Facebook', link: 'https://facebook.com' },
        { platform: 'Instagram', link: 'https://instagram.com' }
      ],
      newsletterEmail: ''
    };
  },
  methods: {
    subscribeNewsletter() {
      // Обработка подписки на новости
      alert(`Подписка на новости с email: ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    }
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>

.hero-banner h1 {
  font-size: 2.5em;
}

.hero-banner p {
  font-size: 1.2em;
}

.hero-banner button {
  padding: 10px 20px;
  font-size: 1em;
  margin-top: 20px;
}

.main-nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.main-nav ul li {
  margin: 0 15px;
}

.main-nav ul li a {
  text-decoration: none;
  color: #007BFF;
}

.about-us, .advantages, .categories, .testimonials, .certificates, .photo-gallery, .video-lessons, .instructors, .news-updates, .social-media, .newsletter {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.gallery, .videos, .social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers the block horizontally */
}

.gallery img, .videos video {
  width: 100%;
  max-width: 200px;
/*  margin: 10px; */
}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #007BFF;
}

form {
  display: flex;
  flex-direction: column;
}

form label {
  margin: 10px 0 5px;
}

form input, form button {
  padding: 10px;
  margin-bottom: 20px;
}

form button {
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}


</style>
