<template>
    <main>
        <div class="container">
            <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4">
                <li class="col col-md-4" v-for=" project in data">
                    <ProjectCard 
                    :nome="project.nome"
                    :immagine="project.immagine"
                    :descrizione="project.descrizione"
                    :data="project.data_di_creazione"
                    :completato="project.completato"
                    :type="project.type"
                    :technologies="project.technologies"
                    >
                    </ProjectCard>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'MainApp',
    components: {
        ProjectCard,
    },
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