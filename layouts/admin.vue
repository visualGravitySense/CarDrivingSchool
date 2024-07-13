<template>
  <div class="wrapper">
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <!-- <Intro title="Admin Page"> -->
        <nuxt-link to="/admin" class="link linkWhite"> Admin </nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite"> New Post </nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite"> Comments </nuxt-link>
        <nuxt-link to="/admin/new-promo" class="link linkWhite"> Promo </nuxt-link>
        <nuxt-link to="/admin/new-instructor" class="link linkWhite"> Instructors </nuxt-link>
        <nuxt-link to="/admin/new-user" class="link linkWhite"> Users </nuxt-link>

      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  components: { Header },
  middleware: ['auth']
}
</script>
