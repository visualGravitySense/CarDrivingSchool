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
        { id: 'A', title: 'Категория A', image: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', description: 'Описание категории A... Описание категории A... Описание категории A... Описание' },
        { id: 'A1', title: 'Категория A1', image: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', description: 'Описание категории A1... Описание категории A... Описание категории A... Описание' },
        { id: 'A2', title: 'Категория A2', image: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', description: 'Описание категории A2... Описание категории A...Описание категории A... Описание' },
        { id: 'AM', title: 'Категория AM', image: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', description: 'Описание категории AM... Описание категории A...Описание категории A... ' },

      ]


    };
  }
};
</script>
