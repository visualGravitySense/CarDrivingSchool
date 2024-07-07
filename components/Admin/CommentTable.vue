<template>
  <section>
    <div class="container">
      <table>

        <!-- thead -->
        <thead>
          <tr><th v-for="(th, index) in thead" :key="index">{{ th }}</th></tr>
        </thead>
        <!-- tbody -->
        <slot name="tbody"> </slot>

      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

table {
  width: 100%;
  line-height: 1.5em;

  border-collapse: separate;
  border-spacing: 0 14px;
  thead th {
    padding: 20px 22px;
    white-space: nowrap;
    font-size: 20px;
  }
  td {
    padding: 20px;
  }
  tbody tr {
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 16px 16px rgba(0,0,0,.01);
    &:hover {
      box-shadow: 0 16px 16px rgba(0,0,0,.02);
      transform: translate(0,-3px);
      transition-delay: 0s !important;
    }
  }
}
</style>
