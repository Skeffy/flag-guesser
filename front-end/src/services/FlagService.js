import axios from "axios";

export default {

    getDaily() {
        return axios.get("/daily");
    },

    getPractice() {
        return axios.get("/practice");
    },

    getList() {
        return axios.get("/list");
    }
}