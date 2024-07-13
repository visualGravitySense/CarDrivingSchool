<template>

  <section class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

    <img :src="promotion.img" :alt="promotion.title" />

    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

      <h2 class="text-2xl leading-7 font-semibold">
        {{ promotion.title }}
      </h2>

      <p class="mt-3 text-gray-600">
        {{ promotion.descr }} <br>
      </p></br>

      <p class="mt-3 text-gray-600">
        {{ promotion.content }} <br>
      </p></br>

      <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        Copyright link <code class="bg-gray-100 text-sm p-1 rounded border"> {{ promotion.copylink }}</code> Reeglid ja tingimused link <code class="bg-gray-100 text-sm p-1 rounded border">Reeglid ja tingimused</code>. Have fun!
      </p>
    </div>

        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
        </p>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: {
    promotion: {
      type: Object,
      required: true
    }
  }
}
</script>
