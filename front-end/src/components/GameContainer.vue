<template>
    <div id="flag">
        <img :src="flag.flagImage" alt="">
    </div>
    <form v-on:submit.prevent="onSubmit" id="country-guess" v-if="!this.$store.state.stats.hasPlayed || this.gameMode != 'Daily'">
        <input type="text" list="country-names" id="country" v-model="this.playerGuess" placeholder="Select One">
        <datalist id="country-names">
            <option v-for="name in this.$store.state.countryNames" :value="name">{{ name }}</option>
        </datalist>
        <button @click="guess" class="gamebtn">Guess</button>
    </form>
    <HintBox :guessNumber="guessNumber" :flag="this.flag"/>
</template>

<script>
import HintBox from './HintBox.vue';

export default {
    components: {
        HintBox,
    },

    props: ["gameMode", "flag"],

    data() {
        return {
            gameOver: false,
            hasWon: false,
            guessNumber: 1,
            playerGuess: "",
        }
    },

    created() {
        if (this.gameMode === "Daily") {
            this.guessNumber = this.$store.state.stats.currentGuessNumber;
        }
    },

    methods: {
        guess() {
            if (this.playerGuess.toLowerCase() === this.flag.name.toLowerCase()) {
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
            if (this.gameMode == "Daily"){
                this.$store.commit("STORE_CURRENT_PROGRESS", this.guessNumber);
            }
            if (this.gameOver == true && this.gameMode == "Practice") {
                this.guessNumber = 1;
                this.gameOver = false;
                this.$emit('betweenFlags', true);
                this.$emit('isCorrect', this.hasWon);
                this.hasWon = false;
            } else if (this.gameOver == true && this.gameMode === "Daily") {
                this.$emit('updateStats');
            }
            this.playerGuess = "";
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
</style>