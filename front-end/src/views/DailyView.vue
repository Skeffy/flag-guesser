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

export default {
    data() {
        return {
            gameMode: "Daily",
        }
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