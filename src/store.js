import { reactive } from "vue";

const store = reactive({
    apiURL: import.meta.env.VITE_API_BASE_URL,
});

export default store;