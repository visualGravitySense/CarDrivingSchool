<template>

<!-- Перечень категорий водительских прав -->
<div class="mt-10 cards">
  <CategoryPreview
    v-for="card in cards" :key="card.id"
    :admin="admin"
    :card="card"
      />
</div>

</template>

<script>
import CategoryPreview from '~/components/Categories/CategoryPreview.vue';
export default {
  props: {
    cards: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CategoryPreview
  },
  name: 'Categories',
  data() {
    return {


    };
  }
};
</script>
