import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            flag: {
                name: "",
                code: "",
                capital: "",
                continent: "",
                flagImage: ""
            },
            countryNames: []
        },

        mutations: {
            SET_FLAG(state, payload) {
                state.flag = payload;
            },
            POPULATE_LIST(state, payload) {
                state.countryNames = payload;
            }
        }
    });
}