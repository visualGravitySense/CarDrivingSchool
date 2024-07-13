<template>
  <newUserForm
    :userEdit="user"
    @submit="onSubmit" />
</template>

<script>
import newUserForm from '@/components/Admin/NewUserForm'
export default {
  layout: 'admin',
  data () {
    return { 
      user:
        {
            id: 1,
            title: 'Категория A',
            description: 'Описание категории A...',
            image: require('@/assets/img/car1.jpg'), // Adjust this path as necessary
            intro: 'This is the test intro ...',
            content: 'We recommend you take a look at the ...',
        }
    }
  },
  methods: {
    onSubmit (user) {
      console.log('User editing!')
      console.log(user)
    }
  },
  components: { newUserForm }
}
</script>
