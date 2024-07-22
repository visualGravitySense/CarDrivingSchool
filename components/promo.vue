<template>
  <div class="hero-section">

      <p class="welcome-text">
        <code>Добро пожаловать в автошколу Виктория</code>
      </p>

      <h1 class="hero-title">
        Научитесь водить с
        <span class="confidence">уверенностью</span>
      </h1>
      <p class="description">
        Профессиональные инструктора и гибкий график занятий.
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>

    </div>

</template>

<script>
export default {
components: {

},
data () {
  return {

  }
},
  name: 'Promo'
}
</script>

<style>
.hero-section {

  padding: 3rem 2rem;
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
  color: #3182ce;
}

.description {
  margin-top: 2rem;
  color: #d4d4d4;
  font-size: 1.125rem;
}

.register-link {
  color: #ffff00;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-link:hover {
  text-decoration: underline;
  color: #2f855a;
}
</style>
