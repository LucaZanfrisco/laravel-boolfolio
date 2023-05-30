<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'ContactPage',
    data() {
        return {
            store,
            formData: {
                name: '',
                email: '',
                messagge: '',
            }

        }
    },
    methods: {
        sendContact() {
            axios.post(`${this.store.apiURL}contact`, this.formData )
            .then((response) => {
                console.log(response);
            })
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <form class="my-5 form-control p-4 w-50" @submit.prevent="sendContact()">
            <div class="mb-3">
                <label for="nome" class="form-label fw-bold">Nome e cognome</label>
                <input type="text" id="nome" class="form-control" required v-model="formData.name">
            </div>
            <div class="my-3">
                <label for="email" class="form-label fw-bold">Email</label>
                <input type="email" id="email" class="form-control" required v-model="formData.email">
            </div>
            <div>
                <label for="messaggio" class="form-label fw-bold">Messaggio</label>
                <textarea id="messaggio" cols="30" rows="5" class="form-control" v-model="formData.messagge"></textarea>
            </div>
            <hr>
            <button class="btn btn-success my-3">Invia</button>
        </form>
    </div>
</template>



<style lang="scss" scoped></style>