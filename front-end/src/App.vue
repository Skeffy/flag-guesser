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

#heading {
  height: 75px;
  background-color: #2d2f4f;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas: 
  "navigation title stats";
  align-items: center;
  margin-bottom: 50px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  padding-left: 20px;
  padding-right: 20px;
}

#navigation {
  grid-area: navigation;
  display: flex;
}

#heading a {
  color: #ebebeb;
  text-decoration: none;
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
</style>