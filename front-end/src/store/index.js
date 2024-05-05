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
            countryNames: [],
            stats: {
                gamesPlayed: 0,
                gamesWon: 0,
                guesses: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    fail: 0
                },
                currentStreak: 0,
                maxStreak: 0,
                hasPlayed: false
            },
        },

        mutations: {
            SET_FLAG(state, payload) {
                state.flag = payload;
            },
            POPULATE_LIST(state, payload) {
                state.countryNames = payload;
            },
            SYNC_STATS(state) {
                if (localStorage.getItem("stats") != null) {
                    state.stats = JSON.parse(localStorage.getItem("stats"));
                } else {
                    localStorage.setItem("stats", JSON.stringify(state.stats));
                }
            },
            UPDATE_STATS(state, payload) {
                state.stats = payload;
                localStorage.setItem("stats", JSON.stringify(state.stats));
            },
        }
    });
}