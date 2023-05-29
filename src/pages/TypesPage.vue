<template>
    <div class="container">
        <span class="badge bg-success fs-5 my-5 mx-2 p-2" v-for="typo in types">{{ typo.nome  }} </span>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'TypesPage',
    data(){
        return{
            store,
            types: [],
            error: null,
        }
    },
    methods: {
        getTypes(){
            axios.get(`${this.store.apiURL}types`)
            .then((response) => {
                this.types = response.data.results;
            })
            .catch((error) => {
                this.error = error;
            })
        } 
    },
    created(){
        this.getTypes();
    }
}
</script>

<style lang="scss" scoped>
    span{
        &:hover{
            color: black;
            cursor: pointer;
        }
    }
</style>