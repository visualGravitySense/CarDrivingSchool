<template>
  <div>

  <header class="header">
    <h1>Hello.<br>I'm Mac.</h1>
    <p>I'm a free retro WebFlow template made by <a href="https://webflow.com">Mackenzie Child</a>.</p>
    <button>Clone me on Webflow</button>
  </header>

  <links/>




  </div>
</template>

<script>

import links from '~/components/Links.vue';
export default {
  components: { links },
  name: 'IndexPage'
}
</script>

<style>
.header {
  text-align: center;
  padding: 20px;
  background: #f1f1f1;
  border-bottom: 2px solid #000;
}
.header h1 {
  font-size: 3em;
  margin: 0;
}
.header p {
  margin: 10px 0;
}
.header button {
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}
.header a {
  color: #000;
}
</style>
