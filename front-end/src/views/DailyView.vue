<template>
    <div id="daily-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer :gameMode="gameMode" :flag="this.$store.state.daily"/>
        <div v-if="this.$store.state.stats.hasPlayed" id="completed">
            <h2>You've already completed todays challenge.</h2>
            <h2>Today's flag was {{ this.$store.state.daily.name }}</h2>
        </div>
    </div>
</template>

<script>
import pageHeader from "../components/PageHeader.vue";
import gameContainer from "../components/GameContainer.vue";
import FlagService from "../services/FlagService.js";

export default {
    data() {
        return {
            gameMode: "Daily",
        }
    },

    created() {
        FlagService.getDaily().then( (response) => {
            this.$store.commit("SET_DAILY", response.data);
      
            if (this.$store.state.daily.timestamp > this.$store.state.stats.timestamp) {
                this.$store.commit("NEW_GAME");
            }
        });
    },

    components: {
        pageHeader,
        gameContainer,
    },
}
</script>

<style>
#completed {
    display: grid;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
}
</style>