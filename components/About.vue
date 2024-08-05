<template>

  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 flex">
    

      <!-- Left Column: Promotions Section -->
      <div class="w-full lg:w-1/2 mt-10 px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <promotion-preview v-for="promotion in promotions" :key="promotion.id" :promotion="promotion" />
        </div>
      </div>

      <!-- Right Column: Text Content Section -->
      <div class="w-full lg:w-1/2 mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <section>
          <div class="relative">
            <img src="@/assets/img/viktorija-1.png" alt="Top Right Image" class="absolute top-0 right-0 w-36 h-36 object-cover rounded-full" style="transform: rotate(7deg);">


            <!-- <a class="flex pt-8 sm:pt-0" href="" target="">
              logo placeholder
            </a> -->
            <h2 class="about-title mt-10 text-2xl leading-7 font-semibold">
              {{ title }} <span class="confidence">Viktorija</span>
            </h2>
            <p class="pt-4 text-gray-800 border-t border-dashed">
              <code class="bg-yellow-100 text-xl p-1 rounded border">{{ topic }}</code>
            </p>
            <p class="mt-3 text-gray-600">
              {{ paragraph }}
            </p><br>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>



<script>
import promotionPreview from '~/components/Promotions/PromotionPreview.vue';
import Gift from '~/components/Gift.vue';
import register from '~/components/Register.vue';
import Intro from '~/components/UI/Intro.vue';
import promotionsList from '~/components/Promotions/PromotionsList.vue';
export default {
  data () {
    return {
      title : "О нашей автошколе",
      topic : "Ведущая автошкола в Таллине с 18-летним опытом работы",
      paragraph : "Мы гордимся высоким уровнем обучения, который обеспечивается опытными и квалифицированными инструкторами. Наша автошкола предлагает современные методы обучения, включая теоретические занятия и практическое вождение, чтобы подготовить студентов к безопасному и уверенному управлению автомобилем. Присоединяйтесь к нам и получите водительские права!"
    }
  },
  components: {
    Gift, Intro, register, promotionsList, promotionPreview
  },
  methods: {
    onSubmit (user) {
      console.log('User added!')

    }
  },
  computed: {
    promotions () {
      return this.$store.getters.getPostsLoaded
    }
  },
    name: 'About'
  }
</script>


<style>





hstack {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


</style>
