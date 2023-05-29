<template>
    <div class="container">
        <span class="badge bg-primary my-5 mx-2 fs-5 p-2" v-for="technology in technologies"
            @click="getProjectTech(technology.slug)">{{ technology.nome }}</span>
        <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4" v-if="projectTech.length > 0">
            <li class="col col-md-4" v-for="project in projectTech">
                <ProjectCard :projects="project"></ProjectCard>
            </li>
        </ul>
        <div v-else-if="enter" class="alert alert-success">Cliccare su di una tecnologia</div>
        <div v-else class="alert alert-danger">Nessun progetto presente</div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'TechsPage',
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
            enter : true,
            technologies: [],
            error: null,
            projectTech: [],
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.apiURL}technologies`)
                .then((response) => {
                    this.technologies = response.data.results;
                })
                .catch((error) => {
                    this.error = error;
                })
        },
        getProjectTech(slug) {
            this.enter = false;
            this.projectTech = [];
            axios.get(`${this.store.apiURL}technologies/${slug}`)
                .then((response) => {
                    this.projectTech = response.data.result[0].projects;
                })
        }
    },
    created() {
        this.getTechnologies();
    }
}
</script>

<style lang="scss" scoped>
span {
    &:hover {
        color: coral;
        cursor: pointer;
    }
}
</style>