<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title mt-3 text-4xl leading-7 font-bold">404</p>
        <p class="title mt-1">Page Not Found</p>
        <nuxt-link class="error-link" to="/"> Back to main page </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  .error-link {
    color: #3652b5;
  }
}
</style> 
