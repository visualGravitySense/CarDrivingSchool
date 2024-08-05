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
        { id: 1, src: require('@/assets/img/gallery/a-kategooria-2.jpg'), alt: 'Фото 1' },
        { id: 2, src: require('@/assets/img/gallery/a-kategooria-22.jpg'), alt: 'Фото 2' },
        { id: 3, src: require('@/assets/img/gallery/kool-1.jpg'), alt: 'Фото 3' },
        { id: 4, src: require('@/assets/img/gallery/kool-2.jpg'), alt: 'Фото 4' },
        { id: 5, src: require('@/assets/img/gallery/kool-3.jpg'), alt: 'Фото 5' },
        { id: 6, src: require('@/assets/img/gallery/kool-4.jpg'), alt: 'Фото 6' },
        { id: 7, src: require('@/assets/img/gallery/kool-5.jpg'), alt: 'Фото 7' },
        { id: 8, src: require('@/assets/img/gallery/libedasoit-3.jpg'), alt: 'Фото 8' },
        { id: 9, src: require('@/assets/img/gallery/libedasoit-3a.jpg'), alt: 'Фото 5' },
        { id: 10, src: require('@/assets/img/advancedCars.jpg'), alt: 'Фото 6' },
        { id: 11, src: require('@/assets/img/profInstructors.jpg'), alt: 'Фото 7' },
        { id: 12, src: require('@/assets/img/default_create.jpg'), alt: 'Фото 8' },
        { id: 13, src: require('@/assets/img/gallery/car-5.jpg'), alt: 'Фото 9' },
        { id: 14, src: require('@/assets/img/gallery/car-4.jpg'), alt: 'Фото 10' },
        { id: 15, src: require('@/assets/img/gallery/car-3.jpg'), alt: 'Фото 11' },
        { id: 16, src: require('@/assets/img/gallery/car-2.jpg'), alt: 'Фото 12' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-4.jpg'), alt: 'Фото 13' },
        // { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-5.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-6.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-7.jpg'), alt: 'Фото 13' },
        // { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-8.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-9.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-10.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-11.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-12.jpg'), alt: 'Фото 13' },
        { id: 17, src: require('@/assets/img/gallery/loppastmekoolitus-libedasoit-13.jpg'), alt: 'Фото 13' },
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
