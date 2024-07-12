<template>

    <div class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ certificate.name }}
      </h3>
      <p class="text-gray-600">
        {{ certificate.cat }}
      </p>

    </div>


</template>

<script>

export default {

  props: {
    certificate: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

  name: 'certificatePreview',

};
</script>
