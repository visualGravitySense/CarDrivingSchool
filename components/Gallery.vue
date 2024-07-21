<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="container mx-auto p-6">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Фотогалерея
      </h2>
      <div class="gallery grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div
          v-for="photo in gallery"
          :key="photo.id"
          class="gallery-item relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
          @click="openModal(photo)"
        >
          <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover" />
      </div>
    </div>

    <modal name="photo-modal" :draggable="false" :clickToClose="true">
      <div v-if="selectedPhoto" class="flex justify-center items-center p-4">
        <img :src="selectedPhoto.src" :alt="selectedPhoto.alt" class="max-w-full max-h-screen" />
      </div>
    </modal>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        { id: 1, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 1' },
        { id: 2, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 2' },
        { id: 3, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 3' },
        { id: 4, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 4' },
        { id: 5, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 5' },
        { id: 6, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 6' },
        { id: 7, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 7' },
        { id: 8, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 8' },
        { id: 9, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 5' },
        { id: 10, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 6' },
        { id: 11, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 7' },
        { id: 12, src: 'http://localhost:3000/_nuxt/assets/img/car1.jpg', alt: 'Фото 8' },
      ],
      selectedPhoto: null,
    };
  },
  methods: {
    openModal(photo) {
    },
    closeModal() {
      this.selectedPhoto = null;
      this.$modal.hide('photo-modal');
    },
  },
  name: 'NuxtTutorial',
};
</script>

<style>
.container {
  max-width: 1200px;
}


.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  justify-content: start; /* Ensures there is no right margin */
}


.gallery-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 200px; /* Ensures consistent height for images */
}

.gallery-item img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
