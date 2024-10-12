<template>
    <div id="daily-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer :gameMode="gameMode"/>
    </div>
</template>

<script>
import FlagService from "@/services/FlagService";
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

    created() {
        FlagService.getDaily().then( (response) => {
            this.$store.commit("SET_FLAG", response.data);
        });

        if (this.$store.state.flag.timestamp <= this.$store.state.stats.timestamp) {
            this.$store.commit("HAS_PLAYED");
        }
    },
}
</script>

<style>

</style>