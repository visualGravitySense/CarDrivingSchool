<template>
  <section class="relative items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

      <div class="flex justify-center pt-4 space-x-2">
        <promotion :promotion="promotion" />
      </div>

  </section>
</template>

<script>
import axios from 'axios'
import promotion from '~/components/Promotions/Promotion.vue'

export default {
  components: { promotion },
  async asyncData (context) {
    let [ promotion ] = await Promise.all([
      axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/promotions/${context.params.id}.json`),
    ])
    return {
      promotion: promotion.data
    }
  },

    name: 'LandingPage'
  }
</script>

<style scoped>



</style>
