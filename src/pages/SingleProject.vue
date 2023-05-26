<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleProject',
    components: {
        ProjectCard,
    },
    data() {
        return {
            project: [],
            error: null,
            apiProject: 'projects/',
            apiUrl: 'http://127.0.0.1:8000/api/',
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl + this.apiProject + this.$route.params.slug).then((response) => {
                if (response.data.success) {
                    this.project = response.data.result;
                } else {
                    this.$router.push({ name: 'Project-not-found' });
                }
            })
        }
    },
    created() {
        this.getProject();
    }

}
</script>

<template>
    <div v-if="project" class="container my-5">
        <router-link :to="{ name: 'projects' }" class="btn btn-sm btn-danger mb-5">&leftarrow; Progetti</router-link>
        <div class="row">
            <div v-if="project.immagine" class="col-4">
                <img :src="project.immagine" :alt="project.nome" class="img-fluid">
            </div>
            <div class="col-8">
                <h2>{{ project.nome }}</h2>
                <div>{{ project.data_di_creazione }}</div>
                <div :class="[project.completato ? 'completato' : 'lavoro']"></div>
            </div>
        </div>
        <p class="my-4">{{ project.descrizione }}</p>
        <div v-if="project.type">
            <div class="fs-5 fw-bold">Tipologia</div>
            <div class="badge bg-primary fs-6 p-2">{{ project.type.nome }}</div>
        </div>
        <div v-if="project.technologies != 0">
            <div class="fs-5 fw-bold mt-4">Tecnologie</div>
            <div class="d-flex gap-2">
                <div v-for="technologies in project.technologies">
                    <div class="badge bg-dark fs-6 p-2">{{ technologies.nome }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.completato {
    width: 15px;
    height: 15px;
    margin: 10px 0;
    border-radius: 50%;
    background-color: green;
}

.lavoro {
    width: 15px;
    height: 15px;
    margin: 10px 0;
    border-radius: 50%;
    background-color: red;
}
</style>