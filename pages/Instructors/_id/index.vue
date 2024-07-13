<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <instructor :instructor="instructor" />

      

        <newComment />

        <comments :comments="comments" />

      </div>



      <div class="justify-center pt-4 space-x-2">



      </div>
    </div>
  </div>
</template>

<script>
import newComment from '~/components/Comments/NewComment.vue';
import comments from '~/components/Comments/Comments.vue';
import instructor from '~/components/Instructors/Instructor.vue';
export default {
  data () {
    return {
      instructor: {
        id: 1,
        title: 'Instuctor Title 1',
        descr: 'Instructor Description small tekst ',
        content: 'Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
        img: require('@/assets/img/car1.jpg'),

      },
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
  components: {
    newComment, comments, instructor
  },
    name: 'LandingPage'
  }
</script>
