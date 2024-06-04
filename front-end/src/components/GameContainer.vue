<template>
    <div id="flag">
        <img :src="this.$store.state.flag.flagImage" alt="">
    </div>
    <form v-on:submit.prevent="onSubmit" id="country-guess">
        <input type="text" list="country-names" id="country" v-model="this.playerGuess" placeholder="Select One">
        <datalist id="country-names">
            <option v-for="name in this.$store.state.countryNames" :value="name">{{ name }}</option>
        </datalist>
        <button @click="guess" class="btn">Guess</button>
    </form>
    <HintBox :guessNumber="guessNumber"/>
</template>

<script>
import HintBox from './HintBox.vue';
import FlagService from '../services/FlagService.js';

export default {
    components: {
        HintBox,
    },

    props: ["gameMode"],

    data() {
        return {
            gameOver: false,
            hasWon: false,
            guessNumber: 1,
            playerGuess: "",
        }
    },

    methods: {
        guess() {
            if (this.playerGuess.toLowerCase() === this.$store.state.flag.name.toLowerCase()) {
                //WIN
                this.gameOver = true;
                this.hasWon = true;
            } else {
                this.guessNumber++;
                if (this.guessNumber >= 5) {
                    //LOSE
                    this.gameOver = true;
                }
            }
            if (this.gameOver == true && this.gameMode == "Practice") {
                this.guessNumber = 1;
                this.hasWon = false;
                this.gameOver = false;
                FlagService.getPractice().then( (response) => {
                    this.$store.commit("SET_FLAG", response.data);
                });
            }
            this.playerGuess = "";
        },

        updateStats() {
            var stats = this.$store.state.stats;
            stats.gamesPlayed++;
            if (this.hasWon) {
                stats.gamesWon++;
                stats.currentStreak++;
                if (stats.currentStreak > stats.maxStreak) {
                    stats.maxStreak = stats.currentStreak;
                }
                for (var key in stats.guesses) {
                    if (key == this.guessNumber) {
                        stats.guesses[key]++;
                    }
                }
            } else {
                stats.guesses.fail++;
            }
            stats.timestamp = Math.floor(Date.now() / 1000);
            this.$store.commit("UPDATE_STATS", stats);
        },
    },
}
</script>

<style>
#flag {
    display: flex;
    justify-content: center;
}

img {
    width: 400px;
    height: 250px;
}

#country-guess {
    padding-top: 40px;
    display: grid;
    justify-content: center;
}

#country-guess>input {
    width: 350px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 15px;
}

#country-guess>button {
    width: 200px;
    justify-self: center;
    background-color: #d7263d;
    border-radius: 15px;
    color: #ebebeb;
    font-weight: bold;
}
</style>