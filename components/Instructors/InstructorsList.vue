<template>

<!-- Перечень Instructors -->
<div class="mt-10 cards">

  <instructorPreview v-for="instructor in instructors" :key="instructor.id"
    :admin="admin"
    :instructor="instructor" />
</div>

</template>

<script>
import instructorPreview from '~/components/Instructors/InstructorPreview.vue';
export default {
components: {
  instructorPreview
  },

  props: {
    instructors: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'InstructorsLists',
  data() {
    return {


    };
  }
};
</script>

<style >




</style>
