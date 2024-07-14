<template>

<!-- Перечень gifts -->
<div class="mt-10 cards">
  <giftPreview v-for="certificate in certificates" :key="certificate.id" :certificate="certificate" />
   <br>

</div>

</template>

<script>
import giftPreview from '~/components/Gifts/GiftPreview.vue';
export default {
components: {
  giftPreview
  },

  props: {
    certificates: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'CertificatesLists',
  data() {
    return {


    };
  }
};
</script>
