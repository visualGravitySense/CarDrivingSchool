<template>
  <!-- Promotions List -->
  <div class="mt-10 px-4 sm:px-6 lg:px-8">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <benefitPreview v-for="benefit in benefits" :key="benefit.id" :benefit="benefit" /><br>
    </div>
  </div>
</template>

<script>
import benefitPreview from '~/components/Benefits/BenefitPreview.vue';
export default {
components: {
  benefitPreview
  },

  props: {

    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'BenefitsLists',
  data() {
    return {
      benefits: [
        { id: 'A', title: 'Профессиональные инструктора', image: require('@/assets/img/benefit-instructor.jpg'), description: 'Индивидуальный подход: Персонализированные методы обучения, учитывающие особенности каждого ученика.' },
        { id: 'A1', title: 'Современные автомобили', image: require('@/assets/img/benefit-car.jpg'), description: 'Автомобили последнего поколения, оснащенные современными системами безопасности.' },
        { id: 'A2', title: 'Доступные цены', image: require('@/assets/img/benefit-price.jpg'), description: 'Пакетные предложения: Специальные предложения и скидки на комплексные курсы обучения.' },
        { id: 'AM', title: 'Отличная репутация', image: require('@/assets/img/perfectReputation.jpg'), description: 'Положительные отзывы: Высокие оценки от выпускников и положительные отзывы в интернете.' },

      ]


    };
  }
};
</script>
