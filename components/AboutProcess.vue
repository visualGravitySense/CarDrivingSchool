
<template>


  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

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


    </div>
  </div>
</template>

<script>
import Gift from '~/components/Gift.vue';
import register from '~/components/Register.vue';
import aboutIntro from '~/components/UI/AboutIntro.vue';
import promotionsList from '~/components/Promotions/PromotionsList.vue';
export default {
  data () {
    return {
      instructors: [
        { id: 1, name: 'Инструктор 1', bio: 'Краткая биография...' },
        { id: 2, name: 'Инструктор 2', bio: 'Краткая биография...' }
      ],
      interviews: [
        { id: 1, title: 'Интервью с Инструктором 1', content: 'Текст интервью...' },
        { id: 2, title: 'Интервью с Инструктором 2', content: 'Текст интервью...' }
      ],
    }
  },
  components: {
    Gift, aboutIntro, register, promotionsList
  },
  methods: {
    onSubmit (user) {
      console.log('User added!')

    }
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    },

  },

    name: 'About'
  }
</script>


<style>





hstack {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


</style>
