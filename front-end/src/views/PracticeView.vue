<template>
    <div id="practice-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer @gameOver="gameOver" :gameMode="gameMode" :flag="this.$store.state.practice" v-if="!isBetween"/>
        <intermission @nextFlag="resetIsBetween" :hasWon="hasWon" v-if="isBetween"/>
    </div>
</template>
  
<script>
import FlagService from "@/services/FlagService";
import pageHeader from "../components/PageHeader.vue";
import gameContainer from "../components/GameContainer.vue";
import intermission from "../components/Intermission.vue";
  
export default {
    data() {
        return {
            gameMode: "Practice",
            hasWon: false,
            isBetween: false
        }
    },

    components: {
        pageHeader,
        gameContainer,
        intermission
    },
  
    created() {
        FlagService.getPractice().then( (response) => {
            this.$store.commit("SET_PRACTICE", response.data);
        });
    },

    methods: {
        resetIsBetween(isBetween) {
            this.isBetween = isBetween;
        },

        gameOver(hasWon) {
            this.isBetween = true;
            this.hasWon = hasWon;
        },
    }
}
</script>
  
<style>
  
</style>