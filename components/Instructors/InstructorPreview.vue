<template>

    <div class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ instructor.name }}
      </h3>
      <p class="text-gray-600">
        {{ instructor.bio }}
      </p>

    </div>


</template>

<script>

export default {

  props: {
    instructor: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'InstructorPreview',

};
</script>
