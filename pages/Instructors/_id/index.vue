<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <img :src="instructor.img" :alt="instructor.title" />

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <h2 class="text-2xl leading-7 font-semibold">
          {{ instructor.title }}
        </h2>

        <p class="mt-3 text-gray-600">
          {{ instructor.descr }} <br>
        </p></br>

        <p class="mt-3 text-gray-600">
          {{ instructor.content }} <br>
        </p></br>

        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Copyright link <code class="bg-gray-100 text-sm p-1 rounded border"> {{ instructor.copylink }}</code> Reeglid ja tingimused link <code class="bg-gray-100 text-sm p-1 rounded border">Reeglid ja tingimused</code>. Have fun!
        </p>
      </div>

      <div class="justify-center pt-4 space-x-2">

        <newComment />

        <comments :comments="comments" />

      </div>
    </div>
  </div>
</template>

<script>
import newComment from '~/components/Comments/NewComment.vue';
import comments from '~/components/Comments/Comments.vue';
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
    newComment, comments
  },
    name: 'LandingPage'
  }
</script>
