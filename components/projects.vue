<template>
  <section class="projects">
    <h2>Отзывы</h2>
    <div class="project" v-for="project in projects" :key="project.title">
      <div class="project-header">
        <span>{{ project.date }}</span>
      </div>
      <div class="project-body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <button>View project</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { date: '2020-04-08', title: 'DriverLux', description: '"Инструкторы очень профессиональны и терпеливы. Благодаря их обучению, я сдал экзамен с первого раза!"' },
        { date: '2020-04-09', title: 'Totem', description: 'Отличная автошкола с удобным расписанием и современными автомобилями.' },
        { date: '2020-04-08', title: 'Possimus', description: 'Положительные отзывы в социальных сетях и форумах показывают высокий уровень удовлетворенности наших учеников.' },
        { date: '2020-04-09', title: 'Dolorum Ullam Totam', description: 'Description for Dolorum Ullam Totam project...' },
        { date: '2020-04-08', title: 'Possimus', description: 'Description for Possimus project...' },
        { date: '2020-04-09', title: 'Dolorum Ullam Totam', description: 'Description for Dolorum Ullam Totam project...' },
      ]
    };
  }
};
</script>

<style scoped>
.projects {
  background: #e1e1e1;
  padding: 20px;
}
.project {
  background: #fff;
  border: 2px solid #000;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 5px 5px 0 #000;
}
.project-header {
  background: #ccc;
  padding: 5px;
}
.project-body h3 {
  margin: 0 0 10px;
}
.project-body p {
  margin: 0 0 10px;
}
.project-body button {
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
