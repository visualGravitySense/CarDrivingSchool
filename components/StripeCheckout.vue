<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <AppInput v-model="amount" type="number" required label="Сумма:" />
      <AppButton2 type="submit">Оплатить</AppButton2>
    </form>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppButton2 from '@/components/UI/Controls/Button2.vue';
import AppInput from '@/components/UI/Controls/Input.vue';

export default {
  components: { AppButton2, AppInput },
  data() {
    return {
      amount: null,
    };
  },
  computed: {
    ...mapState('payment', ['message']),
  },
  methods: {
    ...mapActions('payment', ['createPaymentIntent', 'handlePayment']),
    async handleSubmit() {
      await this.createPaymentIntent(this.amount);
      await this.handlePayment();
    },
  },
};
</script>

<style scoped>
/* Добавьте свои стили здесь */
</style>
