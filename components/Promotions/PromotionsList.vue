<template>

<!-- Перечень Promotions -->
<div class="mt-10 cards">

    
    <promotionPreview v-for="promotion in promotions" :key="promotion.id" :promotion="promotion" />
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
