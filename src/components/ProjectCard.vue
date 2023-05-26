<template>
    <div class="card">
        <img v-if="projects.immagine" :src="projects.immagine" class="card-img-top" :alt="projects.nome">
        <div class="card-body">
            <h2 class="card-title">{{ projects.nome }}</h2>
            <p v-if="projects.descrizione" class="card-text">{{ projects.descrizione.substring(0, 200) + '...' }}</p>
            <div class="my-3">Data: {{ projects.data_di_creazione }}</div>
            <div class="fs-6 fw-bold">Completato</div>
            <div :class="[projects.completato ? 'completato' : 'lavoro']"></div>
            <h6 v-if="projects.type"><span class="badge bg-primary p-2">{{ projects.type.nome }}</span></h6>
            <div class="d-flex gap-2" v-if="projects.technologies != 0">
                <h6 v-for="technology in projects.technologies"><span class="badge bg-dark p-2">{{
                    technology.nome }}</span></h6>
            </div>
            <router-link :to="{ name: 'project', params: { slug: projects.slug }}" class="btn btn-success">Dettaglio</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        projects: Object,
    },
}
</script>
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