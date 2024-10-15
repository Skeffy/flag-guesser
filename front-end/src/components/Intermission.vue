<template>
    <div id="intermission">
        <div id="flag">
            <img :src="this.$store.state.practice.flagImage" alt="">
        </div>
        <div id="correct" v-if="isCorrect">
            <h2>{{ this.$store.state.practice.name }} is correct!</h2>
        </div>
        <div id="incorrect" v-if="!isCorrect">
            <h2>Sorry! The correct answer was {{ this.$store.state.practice.name }}</h2>
        </div>
        <button @click="nextFlag" class="gamebtn">Next Flag</button>
    </div>
</template>

<script>
import FlagService from '../services/FlagService.js';

export default {
    props: ["isCorrect"],

    methods: {
        nextFlag() {
            FlagService.getPractice().then( (response) => {
                    this.$store.commit("SET_PRACTICE", response.data);
                });
            this.$emit('nextFlag', false);
        }
    }
}
</script>

<style scoped>
#intermission {
    display: grid;
    justify-content: center;
}

#flag {
    padding-bottom: 40px;
}

.gamebtn {
    margin-top: 10px;
    justify-self: center;
}

#correct, #incorrect {
    justify-self: center;
}
</style>