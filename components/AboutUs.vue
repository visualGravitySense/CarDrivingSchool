
<template>


  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">


      <aboutIntro title="О нашей автошколе" topic="Ведущая автошкола в Таллине с 18-летним опытом работы" paragraph="Мы гордимся высоким уровнем обучения, который обеспечивается опытными и квалифицированными инструкторами. Наша автошкола предлагает современные методы обучения, включая теоретические занятия и практическое вождение, чтобы подготовить студентов к безопасному и уверенному управлению автомобилем. Присоединяйтесь к нам и получите водительские права!"/><br>
        <!-- <Gift/><br> -->

        <!-- <register @submit="onSubmt" />-->


      </div>




        <h2>Наша команда</h2>
        <div class="instructors">
        <!-- Информация о преподавателях -->

          <instructorsList :instructors="instructors" /><br>

        </div>

        <div class="interviews">
          <h2>Интервью с инструкторами</h2>
          <div v-for="interview in interviews" :key="interview.id">
            <h3>{{ interview.title }}</h3>
            <p>{{ interview.content }}</p>
          </div>
        </div>


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
