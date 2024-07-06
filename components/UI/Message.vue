<template>
  <div class="message" :class="mesClass">
    <p> {{ message }} </p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.message {
  font-size: 22px;
  &.success {
    color: #26de81;
  }
  &.error {
    color: #fc5c65;
  }
}

</style>
