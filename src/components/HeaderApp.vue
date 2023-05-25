<template>
    <header>
        <div class="container">
            <div class="row row-cols-2 align-items-center">
                <h1>BoolFolio</h1>
                <nav>
                    <ul class="list-unstyled d-flex gap-5 m-0">
                        <li>Home</li>
                        <li>Progetto</li>
                        <li>Contatti</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderApp',
}
</script>

<style lang="scss" scoped>

header{
    background-color: #333;
    padding: 32px;
    color: white;
    
}
.container{
    nav{
        ul{
            li:hover{
                color: red;
                cursor: pointer;
                text-decoration: underline 2px;
            }
        }
    }
}
</style>