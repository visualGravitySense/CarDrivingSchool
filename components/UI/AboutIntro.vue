<template>
  <div>


    <h2 class="about-title mt-10 text-2xl leading-7 font-semibold">
      {{ title }} <span class="confidence">Виктория</span>
    </h2>

    <p class="pt-4 text-gray-800 border-t border-dashed">
      <code class="bg-yellow-100 text-xl p-1 rounded border">{{ topic }}</code>
    </p>

    <p class="mt-3 text-gray-600">
      {{ paragraph }}
    </p><br>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    title: {
      type: String,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

.about-title {
  margin-top: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;

}

.about-title .confidence {
  text-decoration: underline;
  color: #3182ce;
}

</style>
