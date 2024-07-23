<template>
  <!-- Перечень категорий водительских прав -->
  <div class="mt-10 flex justify-between items-start">
    <div class="cards">
      <CategoryPreview
        v-for="card in cards" :key="card.id"
        :admin="admin"
        :card="card"
      />
    </div>
    <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank" class="social-icon" alt="Facebook">
        <svg
          class="w-6 h-6 text-gray-600 hover:text-gray-800 button--facebook"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          >
          <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.588l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" fill="currentColor" />
          </svg>

      </a>
      <a href="https://www.instagram.com" target="_blank" class="social-icon">
      <svg
        class="w-6 h-6 text-gray-600 hover:text-gray-800 button--instagram"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.432.403a4.92 4.92 0 0 1 1.78 1.06 4.92 4.92 0 0 1 1.06 1.78c.163.463.349 1.263.403 2.432.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.432a4.92 4.92 0 0 1-1.06 1.78 4.92 4.92 0 0 1-1.78 1.06c-.463.163-1.263.349-2.432.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.432-.403a4.92 4.92 0 0 1-1.78-1.06 4.92 4.92 0 0 1-1.06-1.78c-.163-.463-.349-1.263-.403-2.432C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.432a4.92 4.92 0 0 1 1.06-1.78 4.92 4.92 0 0 1 1.78-1.06c.463-.163 1.263-.349 2.432-.403 1.266-.058 1.646-.07 4.85-.07M12 0C8.735 0 8.332.015 7.052.072 5.771.13 4.865.278 4.04.56 3.215.841 2.523 1.229 1.79 1.96 1.06 2.692.672 3.385.39 4.21.108 5.035-.04 5.94-.098 7.22c-.058 1.28-.072 1.683-.072 4.948s.015 3.668.072 4.948c.058 1.28.207 2.185.49 3.01.282.825.67 1.518 1.4 2.25s1.424 1.118 2.25 1.4c.825.282 1.73.43 3.01.49 1.28.058 1.683.072 4.948.072s3.668-.015 4.948-.072c1.28-.058 2.185-.207 3.01-.49.825-.282 1.518-.67 2.25-1.4s1.118-1.424 1.4-2.25c.282-.825.43-1.73.49-3.01.058-1.28.072-1.683.072-4.948s-.015-3.668-.072-4.948c-.058-1.28-.207-2.185-.49-3.01a5.904 5.904 0 0 0-1.4-2.25 5.904 5.904 0 0 0-2.25-1.4c-.825-.282-1.73-.43-3.01-.49C15.668.015 15.265 0 12 0zm0 5.838a6.163 6.163 0 1 0 6.163 6.163A6.163 6.163 0 0 0 12 5.838zm0 10.163a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44a1.44 1.44 0 0 0-1.44-1.44z" fill="currentColor" />
        </svg>

      </a>
      <a href="https://www.youtube.com" target="_blank" class="social-icon">
      <svg
        class="w-6 h-6 text-gray-600 hover:text-gray-800 button--youtube"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a2.951 2.951 0 0 0-2.083-2.083C19.872 3.451 12 3.451 12 3.451s-7.872 0-9.415.652a2.951 2.951 0 0 0-2.083 2.083C.851 7.73.851 12 .851 12s0 4.27.652 5.814a2.951 2.951 0 0 0 2.083 2.083C4.128 20.549 12 20.549 12 20.549s7.872 0 9.415-.652a2.951 2.951 0 0 0 2.083-2.083C23.149 16.27 23.149 12 23.149 12s0-4.27-.652-5.814zM9.751 15.019V8.98l6.26 3.019l-6.26 3.019z" fill="currentColor" />
      </svg>

      </a>
    </div>
  </div>
</template>


<script>
import CategoryPreview from '~/components/Categories/CategoryPreview.vue';
export default {
  props: {
    cards: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CategoryPreview
  },
  name: 'Categories',
  data() {
    return {


    };
  }
};
</script>

<style >
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.social-icons {
  margin-top: 16px;
  margin-left: 20px; /* Adjust this value as needed */
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.social-icon img {
  width: 40px;
  height: 40px;
}
</style>
