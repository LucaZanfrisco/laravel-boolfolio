<script>
export default {
    name: 'AppHome',
}
</script>

<template>
    <div class="container">
        <div class="row align-items-center io">
            <div class="benvenuto col-8">
                Ciao, <br>
                sono Luca <br>
                Full Stack Web Developer
            </div>
            <div class="col-4 info">
                Sono sempre stato appassionato dall'informatica, ho scoperto la programmazione durante un corso
                universitario.
                Pronto a mettermi in gioco per nuove sfide, apprendere nuovi metodi e tecnologie nel mondo della
                programmazione.
            </div>
        </div>
        <div class="progetto row align-items-center">
            <div class="col-4 progetto-info">
                Progetto con l'obiettivo di ricreare la pagina web spotify, tale pagina implementa l'utilizzo di un design responsivo Mobile First utilizzando HTML e CSS.
            </div>
            <div class="col-8">
                <img src="../assets/img/spotifyweb.png" alt="spotifyweb" class="img-fluid">
            </div>
        </div>
        <div class="progetto row align-items-center">
            <div class="col-8">
                <img src="../assets/img/campominato.png" alt="spotifyweb" class="img-fluid">
            </div>
            <div class="col-4 progetto-info">
                Progetto che replica in modo parziale il funzionamento del gioco "Campo Minato/Prato Fiorito" ricreato con l'utilizzo di HTML,CSS e JavaScript Plain. 
            </div>
        </div>
        <div class="progetto row align-items-center">
            <div class="col-4 progetto-info">
                
            </div>
            <div class="col-8">
                <img src="../assets/img/boolzapp.png" alt="spotifyweb" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.col-8:nth-of-type(even) .img-fluid{
    border-radius: 10px;
    box-shadow: -5px -5px 10px 1px rgb(135, 135, 135);
}
.col-8:nth-of-type(odd) .img-fluid{
    border-radius: 10px;
    box-shadow: 5px 5px 10px 1px rgb(135,135,135);
}
.io {
    padding: 50px 0;
    border-bottom: 1px solid whitesmoke;
    .info {
        font-size: 1.5rem;
        color: rgb(105, 104, 104);
    }

    .benvenuto {
        font-size: 4.375rem;
    }
}

.progetto{
    padding: 100px 0;
    text-align: center;
    .progetto-info{
        font-size: 1.5rem;
        color: rgb(105,104,104);
    }
}
</style>