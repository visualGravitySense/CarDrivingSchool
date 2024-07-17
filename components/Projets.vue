<template>

</template>

<script>
export default {
  data() {
    return {
      projects: [
        { date: '2020-04-08', title: 'Possimus', description: 'Description for Possimus project...' },
        { date: '2020-04-09', title: 'Dolorum Ullam Totam', description: 'Description for Dolorum Ullam Totam project...' },
      ]
    };
  }
};
</script>

<style>
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
