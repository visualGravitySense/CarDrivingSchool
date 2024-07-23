<!-- Services projects page -->
<template>

  <div class="container">

    <category :category="category"/>







  </div>

</template>

<script>
import axios from 'axios'

import newComment from '@/components/Comments/NewComment.vue';
import comments from '@/components/Comments/Comments.vue';
import category from '@/components/Categories/Category.vue';

export default {

  components: {
    category, newComment, comments
},

  data () {
    return {
      category:
      { id: 1,
        title: 'Категория B',
        description: 'Описание категории B',
        image: require('@/assets/img/car1.jpg'), // Adjust this path as necessary
        intro: 'Испытайте радость вождения на курсах категории B!',
        content: 'Стоимость базового курса составляет 840 €, включая теорию и 28 обязательных часов вождения на учебном автомобиле с механической коробкой передач. Первоначальный взнос составляет 140 € (160 € за теоретический курс и 700 € за практическое обучение в рамках онлайн-обучения). Курс на автомобиле с автоматической коробкой передач стоит 840 €. Возможна гибкая система оплаты в рассрочку.' },
      comments: [
        {
          name: 'Commentor Name 1',
          content: 'Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
          img: 'https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US'
          },
        {
          name: 'Commentor Name 2',
          content: 'Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
          img: 'https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US'
        }

      ]

    }
  },


// async asyncData (context) {
//  let [category, comments] = await Promise.all([
//    axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/categories/${context.params.id}.json`),
//    axios.get(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
//  ])

//  return {
//    category: category.data,
//    comments: comments.data
//  }
//},

  name: 'CategoryIndex'
}
</script>
