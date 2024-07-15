<template>
  <!-- Promotions List -->
  <div class="mt-10 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Boonused ja Kampaaniad</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <promotion-preview v-for="promotion in promotions" :key="promotion.id" :promotion="promotion" /><br>
    </div>
  </div>
</template>

<script>
import promotionPreview from '~/components/Promotions/PromotionPreview.vue';
export default {
components: {
  promotionPreview
  },

  props: {
    promotions: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'PromotionsLists',
  data() {
    return {


    };
  }
};
</script>
