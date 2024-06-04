import './assets/main.css'

import { createApp } from '../node_modules/vue'
import { createStore } from '../node_modules/vuex'

import App from './App.vue'
import router from '../node_modules/vue-router'
import axios from '../node_modules/axios'

axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

let currentStats = JSON.parse(localStorage.getItem("stats"));

const store = createStore(currentStats);
const app = createApp(App)

app.use(store);
app.use(router);
app.mount('#app');
