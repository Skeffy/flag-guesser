<template>
  <div id="flag-guesser-app">
    <router-view />
  </div>
</template>

<script >
import FlagService from './services/FlagService';

export default {
  created() {
    FlagService.getList().then( (response) => {
      this.$store.commit("POPULATE_LIST", response.data);
    })
  }
}
</script>

<style>
#flag-guesser-app {
  display: grid;
  justify-content: center;
}
</style>