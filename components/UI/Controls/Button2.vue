<template>

  <button
    class="sp-btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot/>
  </button>

</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    }
  }
}
</script>

.sp-btn {
  background-color: #41de73;
  margin-left: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;

  transition: background-color 0.3s;
}
