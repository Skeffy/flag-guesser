import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            flag: {
                name: "",
                code: "",
                capital: "",
                continent: "",
                flagImage: "",
                timestamp: 0,
            },
            countryNames: [],
            stats: currentStats || {
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
                hasPlayed: false,
                currentGuessNumber: 1,
                timestamp: 0
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
            NEW_GAME(state) {
                state.stats.hasPlayed = false;
                state.stats.currentGuessNumber = 1;
            },
            STORE_CURRENT_PROGRESS(state, payload) {
                state.stats.currentGuessNumber = payload;
                localStorage.setItem("stats", JSON.stringify(state.stats));
            }
        }
    });
}