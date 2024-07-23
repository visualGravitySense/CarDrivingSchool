<template>

  <section class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

    <header class="header reviewsBg ">
    <!--  <p class="welcome-text">
        <code>Специальное предложение: Стань профессионалом за рулем уже сегодня!</code>
      </p>
      <h1 class="hero-title">
        Запишись на курс прямо сейчас и получи <br>
        <span class="confidence">бесплатное занятие!</span>
      </h1>
      <p class="description">
        Профессиональные инструктора и гибкий график занятий.<br>
        <a href="" target="_blank" class="register-link">Зарегистрируйтесь</a> сегодня и начните свой путь к безопасному вождению.<br>
      </p>-->
    </header>



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

      <img :src="instructor.img" :alt="instructor.title" />

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


<style scoped>

.header {
  padding: 9rem 2rem;
  text-align: center;
  margin-bottom: 36px;

  background: #f1f1f1;
  border-bottom: 2px solid #000;
}
.header h1 {
  font-size: 3em;
  margin: 0;
}
.header p {
  margin: 10px 0;
}
.button {
  padding: 10px 20px;
  background: #4165de;
  color: #fff;
  border: none;
  cursor: pointer;
}
.header a {
  color: #41de73;
}

.headre a:hover {
  text-decoration: underline;
  color: #ff5200;
}

.reviewsBg {

  background-image: url('@/assets/img/instructors/instructor_1.jpg'); /* Укажите путь к вашему изображению */
  background-size: cover;
  background-position: center;
}

</style>
