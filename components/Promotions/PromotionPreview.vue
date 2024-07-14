<template>

    <nuxt-link :to="/promotions/+promotion.id" class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ promotion.title }}
      </h3>
      <p class="text-gray-600">
        {{ promotion.description }}
      </p>

    </nuxt-link>


</template>

<script>

export default {

  props: {
    promotion: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'PromotionPreview',

};
</script>
