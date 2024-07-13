<template>
  <newPromoForm
    :promotion="promotion"
    @submit="onSubmit" />
</template>

<script>
import newPromoForm from '@/components/Admin/NewPromoForm'
export default {
  layout: 'admin',
  data () {
    return {
      promotion:
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
    onSubmit (category) {
      console.log('Promo edited!')
      console.log(category)
    }
  },
  components: { newPromoForm }
}
</script>
