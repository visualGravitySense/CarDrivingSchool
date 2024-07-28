
<template>


  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 overflow-hidden  sm:rounded-lg p-6">

        <Intro title="Ваша дорога к успеху начинается здесь в автошколе " 
        topic="Почему выбирают нас" 
        paragraph="Мы предлагаем обучение с профессиональными инструкторами, которые используют персонализированные методы для эффективного освоения вождения. Учитесь на современных автомобилях с передовыми системами безопасности, получая максимум комфорта и уверенности. Наши пакетные предложения и скидки делают обучение доступным и выгодным. Отличные отзывы наших выпускников подтверждают высокое качество нашего сервиса."/><br>

        <!-- <Gift/><br> -->

        <!-- <register @submit="onSubmt" />-->


      </div>

      <benefitsList :promotions="postsLoaded" />

    </div>
  </div>
</template>

<script>
import Gift from '~/components/Gift.vue';
import register from '~/components/Register.vue';
import Intro from '~/components/UI/Intro.vue';
import benefitsList from '~/components/Benefits/BenefitsList.vue';
export default {
  components: {
    Gift, Intro, register, benefitsList
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

.relativeBgAbout {
  background-image: url('@/assets/img/about-1.jpg'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}

.bg-glass {

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

hstack {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


</style>
