<template>
  <section class="projects">
    <h2>Отзывы</h2>
    <div class="project transform transition hover:scale-105 hover:shadow-xl" v-for="project in projects" :key="project.title">
      <div class="project-header">
        <span>{{ project.date }}</span>
      </div>
      <div class="project-body">
        <h3 class="text-2xl font-semibold text-black">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <AppButton class="project transform transition hover:scale-105 hover:shadow-xl">Комментировать</AppButton>
      </div>
    </div>
  </section>
</template>
 
<script> 
export default {
  data() {
    return {
      projects: [
        { date: '18.11.2020', title: 'Сергей', description: 'Хорошо и понятно все объясняют. Хорошо преподают вождение. Многие мои знакомые рады этой школе.' },
        { date: '13.11.2020', title: 'Aisel Agajeva', description: 'Очень счастлива что именно в этой автошколе я училась, так как все экзамены что у них что и в эрка сдала с первого раза! И сдавала в Таллинне, где говорили что тяжело сдать с первого раза, но благодаря чудесным учителям, я это сделала! Спасибо большое!' },
        { date: '13.11.2020', title: 'Ульяна Зыкова', description: 'Шикарная автошкола, отличные преподаватели. Все доступно объясняют. Хорошее отношение к ученикам)) советую всем 100%.' },
        { date: '13.11.2020', title: 'Leonid', description: 'Väga hea autokool.' },
        { date: '05.11.2020', title: 'Taavi.T', description: 'Meeldis väga, kõik väga sõbralikud!' },
        { date: '31.10.2020', title: 'Erik', description: '3 дня назад получил права благодаря автошколе Viktorija Autokool. Преподаватели в школе-настоящие профессионалы, это чувствуется. Мой преподаватель теории и по вождению Игорь Колесник, объяснял всё очень подробно и доступно, поэтому на экзамене проблем не возникло, всё без ошибок. На теории Игорь объяснял нам все возможные ситуации, которые могут возникнуть во время вождения на машине, теоретические вопросы, разбирали ошибки и ситуации. Всё было по доброму, от этого человека исходила уверенность в нас, приятно видеть когда в нас «неуверенных чайников « верят. Вот и началось вождение, сначала Кадриорг, а потом город. Для меня каждый раз вождение это был праздник! Игорь был уверен, что мы все сможем, верил в меня и подбадривал, некоторые моменты не получались, а он настраивал, что всё получится, всё сможем!!! Это самый лучший инструктор! Мастер своего дела! Строгость и доброта в одном человеке! С ним легко осваиваются все трудности, которые были при вождении в машине. Игорь Колесник смог настроить меня в момент мандража, перед экзаменом. Я с этим инструктором сдал все экзамены с первого раза!!!))) И благодаря о таком учении!) От души, спасибо, за такое обучение и подход к своим ученикам!!!' },
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
  background: #fc3d93;
  padding: 10px;
}
.project-body h3 {
  margin: 0 0 10px;
}
.project-body p {
  margin: 0 0 10px;
}
.project-body button {
  padding: 10px 20px;
  background: #9dff00;
  color: #141313;
  border: none;
  cursor: pointer;
}
</style>
