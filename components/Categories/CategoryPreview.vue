<template>

  <nuxt-link :to="getLink" class="card">
    <div class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ card.title }}
      </h3>
      <p class="text-gray-600">
        {{ card.description }}
      </p>
      <a href="/courses">Узнать больше</a>
    </div>

    <div class="card-image">
      <img :src="card.image" :alt="card.title">
    </div>

  </nuxt-link :to="/categories/+card.id">

</template>

<script>
// import CategoryPreview from '~/components/Categories/CategoryPreview.vue';
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getLink() {
      return this.admin ? `/admin/${this.card.id}` : `/services/${this.card.id}`;
    }
  },



  name: 'CategoriesPreview',

};
</script>
