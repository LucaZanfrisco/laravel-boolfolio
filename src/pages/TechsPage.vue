<template>
    <div class="container">
        <span class="badge bg-primary my-5 mx-2 fs-5 p-2" v-for="technology in technologies">{{ technology.nome }}</span>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'TechsPage',
    data(){
        return {
            store,
            technologies: [],
            error: null,
        }
    },
    methods: {
        getTechnologies(){
            axios.get(`${this.store.apiURL}technologies`)
            .then((response) => {
                this.technologies = response.data.results;
            })
            .catch((error) => {
                this.error = error;
            })
        }
    },
    created(){
        this.getTechnologies();
    }
}
</script>

<style lang="scss" scoped>
    span{
        &:hover{
            color: coral;
            cursor: pointer;
        }
    }
</style>