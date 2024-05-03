import axios from "axios";

const http = axios.create({
    baseURL: "https://flag-guesser-server.onrender.com"
});

export default {

    getDaily() {
        return http.get("/daily");
    },

    getPractice() {
        return http.get("/practice");
    },

    getList() {
        return http.get("/list");
    }
}