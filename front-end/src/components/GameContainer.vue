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
    props: ["gameMode", "flag"],
    emits: ["betweenFlags", "isCorrect", "gameOver"],
    components: {
        HintBox,
    },

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
            if (this.playerGuess.toLowerCase() === this.flag.name.toLowerCase()) {
                //WIN
                this.gameOver = true;
                this.hasWon = true;
                this.$emit('gameOver', this.hasWon, this.guessNumber);
            } else {
                this.guessNumber++;
                if (this.guessNumber >= 5) {
                    //LOSE
                    this.gameOver = true;
                    this.$emit('gameOver', this.hasWon);
                }
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