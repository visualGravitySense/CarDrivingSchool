<template>

    <nuxt-link :to="getLink" class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ instructor.name }}
      </h3>
      <p class="text-gray-600">
        {{ instructor.bio }}
      </p>

    </nuxt-link>


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
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.instructor.id}` : `/instructors/${this.instructor.id}`
    }
  },

  name: 'InstructorPreview',

};
</script>
