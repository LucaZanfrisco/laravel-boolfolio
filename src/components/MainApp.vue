<template>
    <main>
        <div class="container">
            <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4">
                <li class="col col-md-4" v-for=" project in data">
                    <div class="card">
                        <img v-if="project.immagine" src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.nome }}</h5>
                            <p v-if="project.descrizione" class="card-text">{{ project.descrizione.substring(0,200) + '...' }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
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
</style>