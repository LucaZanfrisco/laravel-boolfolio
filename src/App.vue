<script>
  import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
  import MainApp from './components/MainApp.vue';
  export default {
    name: 'App',
    components:{
      HeaderApp,
      MainApp,
    },
    data(){
      return {
        projects: [],
        error: '',
        apiProject : 'projects',
        apiUrl: 'http://127.0.0.1:8000/api/',
      }
    },
    methods: {
      getProjects(){
        axios.get(this.apiUrl + this.apiProject)
        .then((response) => {
          this.projects = response.data.results;
        })
        .catch((errors) => {
          this.error = errors;
        })
      }
    },
    created(){
      this.getProjects();
    }
  }
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp :data="projects"></MainApp>
</template>

<style lang="scss" scoped>

</style>
