<template>
  <div>

  <header class="header reviewsBg">
    <h1>Ответы на часто <br>задаваемые вопросы </h1>
    <p>Тут собраны ответы которые часто<br> 
      спрашивают при выборе автошколы</p>
    <AppButton class="project transform transition hover:scale-105 hover:shadow-xl">Задать вопрос</AppButton>
  </header>


  <faqBlock/>

  <!-- <links/> -->

  <!-- <projects/> -->




  </div>
</template>

<script>

import links from '~/components/Links.vue';
import faqBlock from '~/components/FaqBlock.vue';

export default {
  components: { links, faqBlock },
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
  background: #4165de;
  color: #fff;
  border: none;
  cursor: pointer;
}
.header a {
  color: #000;
}

.reviewsBg {

  background-image: url('@/assets/img/anti-hero.jpg'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.5); /* Белый цвет с прозрачностью 20% */
  background-blend-mode: overlay; /* Смешивание изображения с фоном */
}
</style>
