<template>


    <nuxt-link :to="/certificates/+certificate.id" class="bg-white overflow-hidden shadow p-4">
      <h3 class="leading-7 font-semibold">
        {{ certificate.isTrusted }}
      </h3>
      <p class="text-gray-600">
        {{ certificate.cat }}
      </p>

    </nuxt-link>


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
