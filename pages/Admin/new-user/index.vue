<template> 
  <newUserForm @submit="onSubmit" />
</template>

<script>
import newUserForm from '@/components/Admin/NewUserForm'
export default {
  layout: 'admin',
  methods: {
    onSubmit (user) {
      console.log('user added!')
      console.log(user)
    }
  },
  components: { newUserForm }
}
</script>
