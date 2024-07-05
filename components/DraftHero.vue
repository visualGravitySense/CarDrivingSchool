<template>
  <div class="hero relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="container">
      <!-- Верхняя часть с текстом и кнопкой и карточками продуктов -->

        <div class="hero-content">
          <p class="mt-4 pt-4 text-gray-800"> <code class="bg-gray-100 text-sm p-1 rounded border">{{ welcomeMessage }}</code>
          <h1 class="text-4xl leading-7 font-semibold">{{ mainTitle }}</h1>
          <h2 class="text-2xl leading-7 font-semibold">{{ subtitle }}</h2>
          <p class="cta-text">{{ ctaText }}</p>
          <a href="#registration" class="cta-button">{{ ctaButtonText }}</a>
        </div>

        <div class="cards">
          <!-- Render cards dynamically here -->
          <div v-for="(card, index) in cards" :key="index" class="card">
            <div class="card-content">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <a href="#courses">Узнать больше</a>
            </div>
            <div class="card-image">
              <img :src="card.image" :alt="card.title">
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ViktoriaSchool',
  data() {
    return {
      welcomeMessage: 'Добро пожаловать в нашу автошколу!',
      mainTitle: 'Научитесь водить с уверенностью',
      subtitle: 'Профессиональные инструктора и гибкий график занятий',
      ctaText: 'Зарегистрируйтесь сегодня и начните свой путь к безопасному вождению',
      ctaButtonText: 'Зарегистрироваться',
      cards: [
        {
          title: 'Курсы в автошколе 1',
          description: 'Мы предлагаем лучшие курсы по вождению.',
          image: require('@/assets/img/car1.jpg') // Adjust this path as necessary
        },
        {
          title: 'Курсы в автошколе 2',
          description: 'Мы предлагаем.',
          image: require('@/assets/img/car1.jpg') // Adjust this path as necessary
        },
        {
          title: 'Курсы в автошколе 3',
          description: 'Мы предлагаем лучшие курсы по вождению.',
          image: require('@/assets/img/car1.jpg') // Adjust this path as necessary
        }
      ]
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f0;
  color: #333;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero {
  background: url('@/assets/img/hero-bg.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content {
  max-width: 600px;
  line-height: 1.4;
  margin-bottom: 40px;
}

.cards {
  display: flex;
  gap: 20px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}

.intro {
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
  color: #ffeb3b;
}

h1 {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 15px;
}

h2 {
  font-size: 28px;
  margin-bottom: 25px;
}

.cta-text {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff5722;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e64a19;
}

.card {
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: auto;
  overflow: hidden;
}

.card-content {
  flex: 1;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;
}

.card-image {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%);
}

.card h3 {
  font-size: 19px;
  margin: 20px 0 10px;
}

.card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.card a {
  font-size: 13px;
  color: #ff4500;
  text-decoration: none;
  font-weight: bold;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}
</style>
