<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">




        <user :user="user" />



      <div class="flex justify-center pt-4 space-x-2">

        <newComment />

        <comments :comments="comments" />

      </div>
    </div>
  </div>
</template>

<script>
import newComment from '~/components/Comments/NewComment.vue';
import comments from '~/components/Comments/Comments.vue';
import user from '~/components/Users/User.vue';
export default {
  data () {
    return {
      user: {
        id: 1,
        title: 'User Title 1',
        descr: 'user Description small tekst ',
        content: 'user CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML',
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
    newComment, comments, user
  },
    name: 'UserProfile'
  }
</script>
