<template>
    <img :src="this.$store.state.flag.flagImage" alt="">
    <form v-on:submit.prevent="onSubmit" id="country-guess">
        <input type="text" list="country-names" id="country" v-model="playerGuess">
        <datalist id="country-names">
            <option v-for="name in this.$store.state.countryNames" :value="name">{{ name }}</option>
        </datalist>
        <button @click="guess" class="btn">Guess</button>
    </form>
    <HintBox :guessNumber="guessNumber"/>
    <EndScreen />
</template>

<script>
import FlagService from '@/services/FlagService';
import HintBox from './HintBox.vue';
import EndScreen from './EndScreen.vue';

export default {
    data() {
        return {
            playerGuess: "",
            guessNumber: 1,
            gameOver: false,
            hasWon: false,
        }
    },

    components: {
        HintBox,
        EndScreen
    },

    methods: {
        guess() {
            if(this.$store.state.stats.hasPlayed == false) {
                this.$store.state.stats.hasPlayed = true;
            }
            if (this.playerGuess.toLowerCase() === this.$store.state.flag.name.toLowerCase()) {
                //CORRECT
                this.gameOver = true;
                this.hasWon = true;
            } else {
                this.guessNumber++;
                if (this.guessNumber >= 5) {
                    //LOSE
                    this.gameOver = true;
                }
            }
            this.playerGuess = "";
            if (this.gameOver) {
                this.updateStats();
            }
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
            this.$store.commit("UPDATE_STATS", stats);
        },

        reset() {
            this.guessNumber = 1;
            this.playerGuess = "";
            this.gameMode = this.$route.name;
            if (this.gameMode == "practice") {
                FlagService.getPractice().then( (response) => {
                    this.$store.commit("SET_FLAG", response.data);
                });
            }
        }
    }
}
</script>

<style>
img {
    width: 500px;
    height: 300px;
}

#country-guess {
    padding-top: 30px;
    display: grid;
    justify-content: center;
}

#country-guess>input {
    width: 350px;
    margin-bottom: 20px;
    border-radius: 20px;
}

#country-guess>button {
    display: flex;
    width: 200px;
    justify-self: center;
    background-color: #d7263d;
    border-radius: 20px;
    color: #ebebeb;
}
</style>