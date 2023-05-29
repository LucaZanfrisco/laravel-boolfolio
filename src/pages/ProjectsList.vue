<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import store from '../store';

export default {
    name: 'ProjectsList',
    components: {
        ProjectCard,
    },
    data(){
      return {
        store,
        projects: [],
        error: null,
      }
    },
    methods: {
      getProjects(){
        axios.get(`${this.store.apiURL}projects`)
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
    <div class="container my-5">
        <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4">
                <li class="col col-md-4" v-for="project in projects">
                    <ProjectCard :projects="project"></ProjectCard>
                </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>