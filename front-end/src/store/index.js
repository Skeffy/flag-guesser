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
            }
        },

        mutations: {
            SET_FLAG(state, payload) {
                state.flag = payload;
            },
        }
    });
}