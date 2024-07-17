<template>
  <nav class="quick-links">
    <ul>
      <li v-for="link in links" :key="link.text">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Projects', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' },
      ]
    };
  }
};
</script>

<style scoped>
.quick-links {
  background: #fff;
  border-bottom: 2px solid #000;
  padding: 10px 0;
  text-align: center;
}
.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.quick-links li {
  display: inline;
  margin: 0 10px;
}
.quick-links a {
  text-decoration: none;
  color: #000;
  font-size: 1.2em;
}
</style>
