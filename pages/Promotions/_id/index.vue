<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <img :src="promotion.img" :alt="promotion.title" />

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <h2 class="text-2xl leading-7 font-semibold">
          {{ promotion.title }}
        </h2>

        <p class="mt-3 text-gray-600">
          {{ promotion.descr }} <br>
        </p></br>

        <p class="mt-3 text-gray-600">
          {{ promotion.content }} <br>
        </p></br>

        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Copyright link <code class="bg-gray-100 text-sm p-1 rounded border"> {{ promotion.copylink }}</code> Reeglid ja tingimused link <code class="bg-gray-100 text-sm p-1 rounded border">Reeglid ja tingimused</code>. Have fun!
        </p>
      </div>
      <div class="flex justify-center pt-4 space-x-2">

      </div>
    </div>
  </div>
</template>

<script>
import Gift from '~/components/Gift.vue';
import Register from '~/components/Register.vue';
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

  },
    name: 'LandingPage'
  }
</script>
