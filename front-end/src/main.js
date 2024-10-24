import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from './store'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner);

axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

let currentStats = JSON.parse(localStorage.getItem("stats"));

const store = createStore(currentStats);
const app = createApp(App)

app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');