<!-- Hero Block for Main Page -->
<template>
  <div class="relativeBg flex items-center justify-center min-h-80vh bg-cover bg-center">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Viktoria',
  data() {
    return {
      welcomeMessage: 'Добро пожаловать в нашу автошколу!',
      mainTitle: 'Научитесь водить с уверенностью',
      subtitle: 'Профессиональные инструктора и гибкий график занятий',
      ctaText: 'Зарегистрируйтесь сегодня и начните свой путь к безопасному вождению',
      ctaButtonText: 'Зарегистрироваться',
      cards: [
        { id: 1, title: 'Категория A', description: 'Описание категории A...', image: require('@/assets/img/category_a.png') },
        { id: 2, title: 'Категория B', description: 'Описание категории B...', image: require('@/assets/img/automat_pic.png') },
        { id: 3, title: 'Категория C', description: 'Описание категории C...', image: require('@/assets/img/category_aa.png') },
      ],
    };
  },
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.relativeBg {
  background-image: url('@/assets/img/default_bg.png'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}

.hero-section {
  padding: 3rem 2rem;
  text-align: left;
  
}

.welcome-text {
  color: #d32f2f;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'Permanent Marker', cursive;
}

.welcome-text code {
  background-color: #ffeb3b;
  color: #000;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ffd700;
}

.hero-title {
  margin-top: 1.5rem;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  color: #1976d2;
  font-family: 'Lobster', cursive;
}

.hero-title .confidence {
  text-decoration: underline;
  color: #d32f2f;
}

.description {
  margin-top: 2rem;
  color: #4caf50;
  font-size: 1.25rem;
  font-family: 'Lobster', cursive;
}

.register-link {
  color: #ff5722;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Lobster', cursive;
  transition: color 0.3s ease;
}

.register-link:hover {
  text-decoration: underline;
  color: #e64a19;
}
</style>
