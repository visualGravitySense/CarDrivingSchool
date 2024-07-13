<template>

<!-- Перечень Users -->
<div class="mt-10 cards">
  <userPreview v-for="user in users" :key="user.id" :user="user" />
</div>

</template>

<script>
import userPreview from '~/components/Users/UserPreview.vue';
export default {
components: {
  userPreview
  },

  props: {
    users: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }, 

  name: 'UsersLists',
  data() {
    return {


    };
  }
};
</script>
