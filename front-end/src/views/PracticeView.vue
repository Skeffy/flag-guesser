<template>
    <div id="practice-view">
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
            gameMode: "Practice"
        }
    },

    components: {
        pageHeader,
        gameContainer
    },
  
    created() {
        FlagService.getPractice().then( (response) => {
            this.$store.commit("SET_FLAG", response.data);
        });
    },
}
</script>
  
<style>
  
</style>