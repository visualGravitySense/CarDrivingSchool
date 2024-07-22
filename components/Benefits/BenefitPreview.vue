<template>
  <div class="bg-white-100 rounded-lg overflow-hidden shadow-lg flex transform transition hover:scale-105 hover:shadow-xl">
    <div class="p-4 flex-1">
      <h3 class="text-lg font-semibold text-black">{{ benefit.title }}</h3>
      <p class="bg-teal-500 text-white px-2 py-1 rounded mt-2 inline-block">{{ benefit.offer }}</p>
      <p class="text-gray-400 mt-2 text-sm">{{ benefit.description }}</p>
    </div>
    <img :src="benefit.image" alt="Promotion Image" class="w-48 h-auto object-cover">
  </div>
</template>

<style>
.nuxt-link {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.nuxt-link img {
  width: 200px; /* Adjust the width as needed */
  height: auto;
  object-cover: cover;
}
.nuxt-link .p-4 {
  flex: 1;
}
</style>



<script>

export default {

  props: {
    benefit: {
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
