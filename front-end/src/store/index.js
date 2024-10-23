import { createStore as _createStore } from 'vuex';

export function createStore(currentStats, countryData) {
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
            countryNames: countryData,
            stats: currentStats || {
                gamesPlayed: 0,
                gamesWon: 0,
                guesses: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    Fail: 0
                    //capitalized to prevent weird behavior with chart.js
                },
                currentStreak: 0,
                maxStreak: 0,
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