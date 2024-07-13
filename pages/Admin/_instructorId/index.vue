<template>
  <newInstructorForm
    :instructor="instructor"
    @submit="onSubmit" />
</template>

<script>
import newInstructorForm from '@/components/Admin/NewInstructorForm'
export default {
  layout: 'admin',
  data () {
    return {
      instructor:
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
    onSubmit (instructor) {
      console.log('Instructor edited!')
      console.log(instructor)
    }
  },
  components: { newInstructorForm }
}
</script>
