<template>
    <div id="daily-view">
        <pageHeader :gameMode="gameMode" />
        <gameContainer :gameMode="gameMode"/>
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

</style>