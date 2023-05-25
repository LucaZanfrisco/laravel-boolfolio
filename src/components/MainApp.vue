<template>
    <main>
        <div class="container">
            <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4">
                <li class="col col-md-4" v-for=" project in data">
                    <div class="card">
                        <img v-if="project.immagine" :src="project.immagine" class="card-img-top" :alt="project.nome">
                        <div class="card-body">
                            <h2 class="card-title">{{ project.nome }}</h2>
                            <p v-if="project.descrizione" class="card-text">{{ project.descrizione.substring(0,200) + '...' }}</p>
                            <div class="my-3">Data: {{ project.data_di_creazione }}</div>
                            <div class="fs-6 fw-bold">Completato</div>
                            <div :class="[project.completato ? 'completato' : 'lavoro']"></div>
                            <h6 v-if="project.type"><span class="badge bg-primary p-2">{{ project.type.nome }}</span></h6>
                            <div class="d-flex gap-2" v-if=" project.technologies != 0">
                                <h6 v-for="technologies in project.technologies"><span class="badge bg-dark p-2">{{ technologies.nome}}</span></h6>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainApp',
    props: {
        data: Object,
    }
}
</script>
<style lang="scss" scoped>
main {
    background-color: #efefef;
    padding: 30px 0;
}
.completato{
    width: 15px;
    height: 15px;
    margin: 10px 0;
    border-radius: 50%;
    background-color: green;
}
.lavoro{
    width: 15px;
    height: 15px;
    margin: 10px 0;
    border-radius: 50%;
    background-color: red;
}
</style>