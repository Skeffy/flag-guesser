<template>
  <div id="flag-guesser-app">
    <pageHeader />
    <gameContainer />
  </div>
</template>

<script>
import pageHeader from "./components/PageHeader.vue";
import gameContainer from "./components/GameContainer.vue";

export default {
  components: {
    pageHeader,
    gameContainer
  }
}
</script>

<style>

</style>
