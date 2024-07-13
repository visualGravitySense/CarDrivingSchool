<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <promotion :promotion="promotion" />
      <div class="flex justify-center pt-4 space-x-2">

      </div>
    </div>
  </div>
</template>

<script>
import promotion from '~/components/Promotions/Promotion.vue'
export default {
  data () {
    return {
      promotion: {
        id: 1,
        title: 'Promotion Title 1',
        descr: 'Promotion Description small tekst ',
        content: 'Promotion CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
        img: require('@/assets/img/car1.jpg'),

      }
    }
  },
  components: {
    promotion
  },
    name: 'LandingPage'
  }
</script>
