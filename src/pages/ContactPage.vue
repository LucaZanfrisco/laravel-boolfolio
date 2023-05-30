<template>
    <div class="container d-flex justify-content-center">
        <form action="" method="POST" class="my-5 form-control p-4 w-50">
            <div class="mb-3">
                <label for="nome" class="form-label fw-bold">Nome e cognome</label>
                <input type="text" id="nome" class="form-control" required>
            </div>
            <div class="my-3">
                <label for="email" class="form-label fw-bold">Email</label>
                <input type="email" id="email" class="form-control" required>
            </div>
            <div>
                <label for="messaggio" class="form-label fw-bold">Messaggio</label>
                <textarea id="" cols="30" rows="5" class="form-control"></textarea>
            </div>
            <hr>
            <button class="btn btn-success my-3">Invia</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    
</style>