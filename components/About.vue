
<template>


  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">


      <Intro title="О нашей автошколе" topic="Ведущая автошкола в Таллине с 18-летним опытом работы" paragraph="Мы гордимся высоким уровнем обучения, который обеспечивается опытными и квалифицированными инструкторами. Наша автошкола предлагает современные методы обучения, включая теоретические занятия и практическое вождение, чтобы подготовить студентов к безопасному и уверенному управлению автомобилем. Присоединяйтесь к нам и получите водительские права!"/><br>
        <!-- <Gift/><br> -->

        <!-- <register @submit="onSubmt" />-->


      </div>

      <promotionsList :promotions="postsLoaded" />

    </div>
  </div>
</template>

<script>
import Gift from '~/components/Gift.vue';
import register from '~/components/Register.vue';
import Intro from '~/components/UI/Intro.vue';
import promotionsList from '~/components/Promotions/PromotionsList.vue';
export default {
  components: {
    Gift, Intro, register, promotionsList
  },
  methods: {
    onSubmit (user) {
      console.log('User added!')

    }
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
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
