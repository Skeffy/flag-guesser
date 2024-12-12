import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            daily: {
                name: "",
                code: "",
                capital: "",
                continent: "",
                flagImage: "",
                timestamp: 0,
            },
            practice: {
                name: "",
                code: "",
                capital: "",
                continent: "",
                flagImage: "",
                timestamp: 0,
            },
            countryNames: [],
            stats: currentStats || {
                trackers: {
                    played: {
                        name: "Games Played",
                        value: 0
                    },
                    won: {
                        name: "Games Won",
                        value: 0
                    },
                    currentStreak: {
                        name: "Current Streak",
                        value: 0
                    },
                    maxStreak: {
                        name: "Max Streak",
                        value: 0
                    },
                },
                guesses: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    Fail: 0
                    //capitalized to prevent weird behavior with chart.js
                },
                hasPlayed: false,
                timestamp: 0
            },
        },

        mutations: {
            SET_DAILY(state, payload) {
                state.daily = payload;
            },
            SET_PRACTICE(state, payload) {
                state.practice = payload;
            },
            POPULATE_LIST(state, payload) {
                state.countryNames = payload;
            },
            UPDATE_STATS(state, payload) {
                state.stats = payload;
                localStorage.setItem("stats", JSON.stringify(state.stats));
            },
            NEW_GAME(state) {
                state.stats.hasPlayed = false;
            },
        }
    });
}