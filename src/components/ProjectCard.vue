<template>
    <div class="card">
        <img v-if="immagine" :src="immagine" class="card-img-top" :alt="nome">
        <div class="card-body">
            <h2 class="card-title">{{nome }}</h2>
            <p v-if="descrizione" class="card-text">{{ descrizione.substring(0, 200) + '...' }}</p>
            <div class="my-3">Data: {{ data }}</div>
            <div class="fs-6 fw-bold">Completato</div>
            <div :class="[completato ? 'completato' : 'lavoro']"></div>
            <h6 v-if="type"><span class="badge bg-primary p-2">{{ type.nome }}</span></h6>
            <div class="d-flex gap-2" v-if="technologies != 0">
                <h6 v-for="data in technologies"><span class="badge bg-dark p-2">{{
                    data.nome }}</span></h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        nome: String,
        immagine: String,
        descrizione: String,
        data: String,
        completato: Number,
        type: Object,
        technologies: Array,
    }
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