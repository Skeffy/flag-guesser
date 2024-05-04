<template>
    <img :src="this.$store.state.flag.flagImage" alt="">
    <form v-on:submit.prevent="onSubmit" id="country-guess">
        <input type="text" list="country-names" id="country" v-model="playerGuess">
        <datalist id="country-names">
            <option v-for="name in this.$store.state.countryNames" :value="name">{{ name }}</option>
        </datalist>
        <button @click="guess">Guess</button>
    </form>
    <HintBox :guessNumber="guessNumber"/>
</template>

<script>
import FlagService from '@/services/FlagService';
import HintBox from './HintBox.vue';

export default {
    data() {
        return {
            playerGuess: "",
            guessNumber: 1,
            gameOver: false,
        }
    },

    components: {
        HintBox
    },

    methods: {
        guess() {
            if (this.playerGuess.toLowerCase() === this.$store.state.flag.name.toLowerCase()) {
                //CORRECT
                this.gameOver = true;
            } else {
                this.guessNumber++;
                if (this.guessNumber == 5) {
                    //LOSE
                    this.reset();
                }
            }
            this.playerGuess = "";
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
    display: flex;
    justify-content: center;
}
</style>