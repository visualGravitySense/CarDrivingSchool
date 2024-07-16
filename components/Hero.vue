<!-- Hero Block for Main Page -->
<template>

  <div class="relativeBg flex items-center justify-center min-h-screen bg-cover bg-center">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <Promo/>
      <CategoriesList :admin=true :cards="cards"/>

    </div>
  </div>
</template>

<script>



export default {
  components: {

  },
  computed: {
//    postsLoaded () {
//    return this.$store.getters.getPostsLoaded
//    }
  },
  name: 'Viktoria',
  data() {
    return {
      welcomeMessage: 'Добро пожаловать в нашу автошколу!',
      mainTitle: 'Научитесь водить с уверенностью',
      subtitle: 'Профессиональные инструктора и гибкий график занятий',
      ctaText: 'Зарегистрируйтесь сегодня и начните свой путь к безопасному вождению',
      ctaButtonText: 'Зарегистрироваться',
      cards: [
        { id: 1,
        title: 'Категория A',
        description: 'Описание категории A...',
        image: require('@/assets/img/category_a.png')
        },
        { id: 2,
        title: 'Категория B',
        description: 'Описание категории A...',
        image: require('@/assets/img/automat_pic.png')
        },
        { id: 3,
        title: 'Категория B',
        description: 'Описание категории A...',
        image: require('@/assets/img/category_aa.png')
        }
      ]


    };

  }
}
</script>

<style>

.relativeBg {
  background-image: url('@/assets/img/default_bg.png'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}




.cards {
  display: flex;
  gap: 20px 10px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 250px;
  height: auto;
  overflow: hidden;
}

.card-content {
  flex: 1;
  padding: 20px 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;

}

.card-image {

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
  clip-path: polygon(0px 0%, 100% 0%, 100% 100%, 0px 100%);
}

.card h3 {
  font-size: 19px;
  margin: 0px 0px 0px;
}

.card p {
  font-size: 14px;
  color: #e1e5ec;
  margin-bottom: 20px;
}

.card a {
  font-size: 13px;
  color: #00ff00;
  text-decoration: none;
  font-weight: bold;
}

</style>
