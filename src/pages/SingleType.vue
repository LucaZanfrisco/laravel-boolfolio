<template>
    <div class="container my-5">
        <div class="d-flex gap-3 align-items-center my-4">
            <router-link :to="{ name: 'types' }" class="btn btn-sm btn-danger">&leftarrow; Tipologie</router-link>
            <h2>{{ projectTypo.nome }}</h2>
        </div>
        <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4" v-if="projectTypo.projects.length > 0">
            <li class="col col-md-4 d-flex" v-for="project in projectTypo.projects">
                <ProjectCard :projects="project"></ProjectCard>
            </li>
        </ul>
        <div v-else class="alert alert-danger">Nessun Proggetto con la tipologia {{ projectTypo.nome }}</div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleType',
    components: {
        ProjectCard,
    },
    data(){
        return{
            store,
            projectTypo: null,
            error: null,
        }
    },
    methods: {
        getProjectsType(){
            axios.get(`${this.store.apiURL}types/${this.$route.params.slug}`)
            .then((response) => {
                console.log(response);
                this.projectTypo = response.data.result;
            })
            .catch((error) => {
                this.error = error;
            })
        }
    },
    created(){
        this.getProjectsType();
    }
}
</script>

<style lang="scss" scoped>
    
</style>