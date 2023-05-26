<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data(){
        return{
            project: [],
            error: null,
            apiProject : 'projects/',
            apiUrl: 'http://127.0.0.1:8000/api/',
        }
    },
    methods: {
        getProject(){
            axios.get(this.apiUrl + this.apiProject + this.$route.params.slug).then((response) => {
                console.log(response);
            })
        }
    },
    created(){
        this.getProject();
    }

}
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>