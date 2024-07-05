<template>

<!-- Перечень категорий водительских прав -->
<div class="mt-10 cards">
  <div v-for="(card, index) in cards" :key="index" class="card">
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

  </div>
</div>

</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  name: 'Categories',
  data() {
    return {


    };
  }
};
</script>
