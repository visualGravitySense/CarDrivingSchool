<template>

    <!-- <nuxt-link :to="getLink" class="in-li bg-white overflow-hidden shadow p-4"> -->
      <div class="in-li bg-white overflow-hidden shadow p-4">
        <img :src="instructor.image" alt="Instructor Image" class="instructor-image">

      <h3 class="in-title leading-7 font-semibold">
        {{ instructor.name }}
      </h3>
      <p class="in-p text-gray-600">
        {{ instructor.bio }}
      </p>
      </div>
      

    <!-- </nuxt-link> -->






</template>

<script>

export default {

  props: {
    instructor: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.instructor.id}` : `/instructors/${this.instructor.id}`
    }
  },

  name: 'InstructorPreview',

};
</script>

<style>

.container {
  display: flex;
  gap: 10px; /* расстояние между картотеками */
  flex-wrap: wrap; /* если не хватает места, переносить на следующую строку */
}

.in-li {

  border: 2px dashed #fee8d8;
  padding: 10px; /* Уменьшены внутренние отступы */
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  flex: 1 1 calc(33.333% - 20px); /* Каждая картотека занимает примерно 1/3 ширины контейнера минус отступы */

  display: flex;
  flex-direction: column; /* Чтобы содержимое располагалось вертикально */

  max-width: calc(33.333% - 20px); /* Гарантирует, что ширина не превышает 1/3 контейнера */
  /*max-height: 400px;  Уменьшенная фиксированная высота */



}

.in-li:hover {
  background-color: #f3f9ff;
  transform: scale(1.02);
}

.instructor-image {
  width: 100%;
  height: auto;
  border-radius: 50%; /* Make image circular */
  object-fit: cover; /* Ensure the image is cropped to fit a square area */
  aspect-ratio: 1 / 1; /* Maintain a square aspect ratio */
  margin-bottom: 15px;
}

.in-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.in-p {
  font-size: 1.2rem;
  color: #666;
}
</style>
