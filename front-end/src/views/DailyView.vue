<template>
    <div id="daily-view">
        <pageHeader :gameMode="gameMode" />
        <font-awesome-icon :icon="['fas', 'spinner']" spin size="10x" id="loading-spinner" v-if="!isLoaded"/>
        <div v-if="isLoaded">
            <gameContainer @gameOver="gameOver" :gameMode="gameMode" :flag="this.$store.state.daily"/>
            <div v-if="this.$store.state.stats.hasPlayed" id="completed">
                <h2>You've already completed todays challenge.</h2>
                <h2>Today's flag was {{ this.$store.state.daily.name }}</h2>
            </div>
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
    
    inject: ["isLoaded"],

    components: {
        pageHeader,
        gameContainer,
    },

    methods: {
        gameOver(hasWon, guessNumber) {
            var stats = this.$store.state.stats;
            stats.gamesPlayed++;
            stats.hasPlayed = true;
            if (hasWon) {
                stats.gamesWon++;
                stats.currentStreak++;
                if (stats.currentStreak > stats.maxStreak) {
                    stats.maxStreak = stats.currentStreak;
                }
                for (var key in stats.guesses) {
                    if (key == guessNumber) {
                        stats.guesses[key]++;
                    }
                }
            } else {
                stats.guesses.fail++;
                stats.currentStreak = 0;
            }
            stats.timestamp = Math.floor(Date.now() / 1000);
            this.$store.commit("UPDATE_STATS", stats);
        },
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

#loading-spinner {
    display: flex;
    justify-self: center;
    margin-top: 125px;
}
</style>