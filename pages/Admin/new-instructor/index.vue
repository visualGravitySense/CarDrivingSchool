<template>
  <newInstructorForm @submit="onSubmit" />
</template>

<script>
import newInstructorForm from '@/components/Admin/NewInstructorForm'
export default {
  layout: 'admin',
  methods: {
    onSubmit (instructor) {
      console.log('instructor added!')
      console.log(instructor)
    }
  },
  components: { newInstructorForm }
}
</script>
