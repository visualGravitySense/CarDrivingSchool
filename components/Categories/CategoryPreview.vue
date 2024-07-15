<template>

  <nuxt-link :to="/services/+card.id" class="card">
    <div class="overflow-hidden shadow p-4">
      <h3 class="text-white leading-7 font-semibold">
        {{ card.title }}
      </h3>
      <p class="text-white-600">
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
