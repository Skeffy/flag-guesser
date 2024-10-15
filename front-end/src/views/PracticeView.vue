<template>
    <div id="practice-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer @betweenFlags="updateIsBetween" @isCorrect="updateIsCorrect" :gameMode="gameMode" :flag="this.$store.state.practice" v-if="!isBetween"/>
        <intermission @nextFlag="updateIsBetween" :isCorrect="isCorrect" v-if="isBetween"/>
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
            isCorrect: false,
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
        updateIsBetween(isBetween) {
            this.isBetween = isBetween;
        },

        updateIsCorrect(isCorrect) {
            this.isCorrect = isCorrect;
        }
    }
}
</script>
  
<style>
  
</style>