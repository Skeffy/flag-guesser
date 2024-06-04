<template>
    <div id="daily-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer :gameMode="gameMode"/>
        <EndScreen v-if="this.$store.state.stats.hasPlayed"/>
    </div>
</template>

<script>
import FlagService from "@/services/FlagService";
import pageHeader from "../components/PageHeader.vue";
import gameContainer from "../components/GameContainer.vue";
import EndScreen from '../components/EndScreen.vue';

export default {
    data() {
        return {
            gameMode: "Daily",
        }
    },

    components: {
        pageHeader,
        gameContainer,
        EndScreen
    },

    created() {
        FlagService.getDaily().then( (response) => {
            this.$store.commit("SET_FLAG", response.data);
        });

        if (this.$store.state.flag.timestamp < this.$store.state.stats.timestamp) {
            this.$store.commit("HAS_PLAYED");
        }
    },
}
</script>

<style>

</style>