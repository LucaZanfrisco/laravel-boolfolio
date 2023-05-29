<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import store from '../store';

export default {
  name: 'ProjectsList',
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      projectsForPage: [],
      error: null,
      currentPage: 1,
    }
  },
  methods: {
    getProjects() {
      axios.get(`${this.store.apiURL}projects`, {
        params:{
          page: this.currentPage,
        }
      })
        .then((response) => {
          this.projectsForPage = response.data.results
        })
        .catch((errors) => {
          this.error = errors;
        })
    },
    prevPage(){
        this.currentPage--; 
        this.getProjects();
    },
    nextPage(){
      this.currentPage++;
      this.getProjects();
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <div class="container my-5">
    <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4">
      <li class="col col-md-4" v-for="project in projectsForPage.data">
        <ProjectCard :projects="project"></ProjectCard>
      </li>
    </ul>

    <nav aria-label="..." class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" >
          <a class="page-link" :class="currentPage <= 1 ? 'disabled' : ''" @click="prevPage()">Previous</a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link">{{ currentPage }}</a>
        </li>
        <li class="page-item" >
          <a class="page-link" :class="currentPage === projectsForPage.last_page ? 'disabled' : ''" @click="nextPage()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

a:hover{
  cursor: pointer;
}
</style>