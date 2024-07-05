<!-- Краткое описание автошколы -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <Intro title="О нашей автошколе" topic="Intro for paragraph" paragraph="Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text"/><br>

        <Gift/><br>

      </div>

    </div>
  </div>
</template>

<script>
import Gift from '~/components/Gift.vue';
import Intro from '~/components/UI/Intro.vue';
export default {
components: {
  Gift, Intro
},
  name: 'About'
}
</script>
