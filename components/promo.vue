<template>

  <div class="relativeBg flex items-center justify-center min-h-80vh bg-cover bg-center">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">



      <div class="hero-section">

          <p class="welcome-text">
            <code> {{ welcomeMessage }} </code>
          </p>

          <h1 class="hero-title">
            {{ mainTitle }}
            <span class="confidence">{{ mainTitleAccent }}</span>
          </h1>
          <p class="description">
            {{ subtitle }} <a href="" target="_blank" class="register-link">{{ ctaButtonText }}</a> {{ ctaText }}<br>
          </p>



        </div>


    </div>
  </div>
</template>

<script>



export default {
  props: {

    welcomeMessage: {
      type: String,
      requried: true },
    mainTitle: ' ',
    mainTitleAccent: ' ',
    subtitle: ' ',
    ctaText: ' ',
    ctaButtonText: ' ',


  },
  components: {

  },
  computed: {
//    postsLoaded () {
//    return this.$store.getters.getPostsLoaded
//    }
  },
  name: 'Viktoria',

}
</script>

<style>

.relativeBg {
  background-image: url('@/assets/img/default_bg.png'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}



.hero-section {

  padding: 9rem 2rem;
  text-align: center;

}


.welcome-text {
  color: #2d3748;
  margin-bottom: 1rem;
}

.welcome-text code {
  background-color: #fff3cd;
  color: #856404;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ffeeba;
}

.hero-title {
  margin-top: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  color: #e1e5ec;
}

.hero-title .confidence {
  text-decoration: underline;
  color: #007bff;
}

.description {
  margin-top: 2rem;
  color: #d4d4d4;
  font-size: 1.125rem;
}

.register-link {
  color: #00ff00;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-link:hover {
  text-decoration: underline;
  color: #ff5200;
}

</style>
