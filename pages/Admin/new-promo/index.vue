<template>
  <newPromoForm @submit="onSubmit" />
</template> 

<script>
import newPromoForm from '@/components/Admin/NewPromoForm'
export default {
  layout: 'admin',
  methods: {
    onSubmit (promotion) {
      console.log('Promotion added!')
      console.log(promotion)
    }
  },
  components: { newPromoForm }
}
</script>
