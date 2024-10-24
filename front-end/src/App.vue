<template>
  <div id="heading">
    <nav id="navigation">
      <router-link to="/daily">DAILY</router-link>
      <router-link to="/practice">PRACTICE</router-link>
    </nav>
    <h1 id="title">FLAG GUESSER</h1>
    <nav id="stats">
      <router-link to="/stats">STATS</router-link>
    </nav>
  </div>
  <div id="flag-guesser-app">
    <router-view />
  </div>
</template>

<script >
import { computed } from "vue"
import FlagService from './services/FlagService';

export default {
  data() {
    return {
      isLoaded: false
    }
  },

  provide() {
    return {
      isLoaded: computed(() => this.isLoaded)
    }
  },

  created() {
    FlagService.getList().then( (response) => {
      this.$store.commit("POPULATE_LIST", response.data);
    });
    FlagService.getDaily().then( (response) => {
      this.$store.commit("SET_DAILY", response.data);

      if(this.$store.state.daily.timestamp > this.$store.state.stats.timestamp) {
        this.$store.commit("NEW_GAME");
      }
      this.isLoaded = true;
    });
  },
}
</script>

<style>
#flag-guesser-app {
  display: grid;
  justify-content: center;
}

#heading {
  height: 70px;
  background-color: #f3f4f7;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas: 
  "navigation title stats";
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: bold;
  color:#d7263d;
}

#navigation {
  grid-area: navigation;
  display: flex;
}

#heading a {
  color: #d7263d;
  text-decoration: none;
  font-size: 15pt;
}

#title {
  grid-area: title;
  justify-self: center;
}

#stats {
  grid-area: stats;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

.gamebtn {
    width: 200px;
    height: 40px;
    justify-self: center;
    background-color: #d7263d;
    border-radius: 15px;
    color: #ebebeb;
    font-weight: bold;
}
</style>