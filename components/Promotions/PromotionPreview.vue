<template>
  <nuxt-link :to="'/promotions/' + promotion.id" class="bg-white-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-xl">
    <img :src="promotion.image" alt="Promotion Image" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold text-black">{{ promotion.title }}</h3>
      <p class="bg-teal-500 text-white px-2 py-1 rounded mt-2 inline-block">{{ promotion.offer }}</p>
      <p class="text-gray-400 mt-2">{{ promotion.description }}</p>
    </div>
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
