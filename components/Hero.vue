<!-- Hero Block for Main Page -->
<template>

<div class="bg-gray-100">
<promo welcomeMessage="Добро пожаловать в нашу автошколу!"
   mainTitle='Научитесь водить с '
  mainTitleAccent='уверенностью'
  subtitle='Профессиональные инструктора и гибкий график занятий.'
  ctaText=' сегодня и начните свой путь к безопасному вождению.'
  ctaButtonText='Зарегистрируйтесь'  />



  <div class="relative flex items-center justify-center bg-cover bg-center">



    <div class="mx-auto sm:px-6 lg:px-8">

      <CategoriesList :admin=true :cards="cards"/>
      <br>

    </div>
  </div>
</div>
</template>

<script>
import promo from "~/components/Promo.vue";
import categoriesList from "~/components/Categories/CategoriesList.vue";

export default {
  components: {
    promo, categoriesList
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
      mainTitle: 'Научитесь водить с ',
      mainTitleAccent: 'уверенностью',
      subtitle: 'Профессиональные инструктора и гибкий график занятий.',
      ctaText: ' сегодня и начните свой путь к безопасному вождению.',
      ctaButtonText: 'Зарегистрируйтесь',




      cards: [
        { id: 'B',
        title: 'Категория B (мануал)',
        description: '',
        image: require('@/assets/img/category_a1.png'),
        },
        { id: 'Au',
        title: 'Категория B (автомат)',
        description: '',
        image: require('@/assets/img/automat_pic.png')
        },
        { id: 'A',
        title: 'Категория A Мотоцикл',
        description: '',
        image: require('@/assets/img/category_aa.png')
        }
      ]


    };

  }
}
</script>

<style>








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

  margin-bottom: 20px;
}

.card a {
  font-size: 13px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

</style>
