import axios from "axios";

const http = axios.create({
    baseURL: "http://3.18.104.145:8080"
});

export default {

    get() {
        return http.get("/flag");
    },
}