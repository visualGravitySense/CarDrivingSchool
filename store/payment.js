import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

export const state = () => ({
  clientSecret: null,
  message: null,
});

export const mutations = {
  setClientSecret(state, clientSecret) {
    state.clientSecret = clientSecret;
  },
  setMessage(state, message) {
    state.message = message;
  },
};

export const actions = {
  async createPaymentIntent({ commit }, amount) {
    try {
      const response = await this.$axios.post('/create-payment-intent', {
        amount: amount * 100, // Конвертация в копейки
      });
      commit('setClientSecret', response.data.clientSecret);
    } catch (error) {
      commit('setMessage', 'Ошибка при создании платежного намерения.');
    }
  },
  async handlePayment({ state, commit }) {
    const stripe = await stripePromise;
    const result = await stripe.confirmCardPayment(state.clientSecret);

    if (result.error) {
      commit('setMessage', result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      commit('setMessage', 'Оплата прошла успешно!');
    }
  },
};
