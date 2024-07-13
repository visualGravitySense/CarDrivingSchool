<template>

  <section class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

    <img :src="instructor.img" :alt="instructor.title" />

    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

      <h2 class="text-2xl leading-7 font-semibold">
        {{ instructor.title }}
      </h2>

      <p class="mt-3 text-gray-600">
        {{ instructor.descr }} <br>
      </p></br>

      <p class="mt-3 text-gray-600">
        {{ instructor.content }} <br>
      </p></br>

      <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        Copyright link <code class="bg-gray-100 text-sm p-1 rounded border"> {{  }}</code> Reeglid ja tingimused link <code class="bg-gray-100 text-sm p-1 rounded border">Reeglid ja tingimused</code>. Have fun!
      </p>


    </div>


      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: {
    instructor: {
      type: Object,
      required: true
    }
  }
}
</script>
