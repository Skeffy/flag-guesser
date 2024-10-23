import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from './store'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import FlagService from './services/FlagService'

library.add(faSpinner);

axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

let currentStats = JSON.parse(localStorage.getItem("stats"));
let countryData = FlagService.getList();
let daily = FlagService.getDaily();

const store = createStore(currentStats, countryData, daily);
const app = createApp(App)

app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
