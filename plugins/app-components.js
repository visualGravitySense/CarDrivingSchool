import Vue from 'vue'

// UI
import AppButton from '@/components/UI/Controls/Button.vue';
import AppButton2 from '@/components/UI/Controls/Button2.vue';
import Message from '@/components/UI/Message.vue';
import CategoriesList from '@/components/Categories/CategoriesList.vue';
import Promo from '@/components/Promo.vue';

// Controls
import AppInput from '@/components/UI/Controls/Input.vue';
import AppTextArea from '@/components/UI/Controls/TextArea.vue';

// UI
Vue.component('AppButton', AppButton)
Vue.component('AppButton2', AppButton2)
Vue.component('Message', Message)
Vue.component('CategoriesList', CategoriesList)
Vue.component('Promo', Promo)

// Controls
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
