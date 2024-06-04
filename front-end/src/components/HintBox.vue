<template>
    <div id="hint-box" v-if="guessNumber >= 2">
        <h2>HINTS:</h2>
        <span id="continent-span" v-if="guessNumber >= 2">
            <p id="continent">Continent:</p>
            <p id="continent-name">{{ this.$store.state.flag.continent }}</p>
        </span>
        <span id="capital-span" v-if="guessNumber >= 3">
            <p>Capital:</p> 
            <p>{{ this.$store.state.flag.capital }}</p>
        </span>
        <span id="code-span" v-if="guessNumber >=4">
            <p>Country Code:</p>
            <p>{{ this.$store.state.flag.code }}</p>
        </span>
    </div>
</template>

<script>
export default {
    props: ["guessNumber"]
}
</script>

<style>
#hint-box {
    background-color: #b8b9cc;
    color: #d7263d;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "title"
    "hint1"
    "hint2"
    "hint3";
    border-style: solid;
    border-width: 3px;
    border-color: black;
    border-radius: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 50px;
}

#hint-box>h2 {
    display: flex;
    grid-area: title;
    justify-self: center;
}

#continent-span {
    grid-area: hint1;
    display: flex;
    justify-content: space-between;
}

#capital-span {
    grid-area: hint2;
    display: flex;
    justify-content: space-between;
}

#code-span {
    grid-area: hint3;
    display: flex;
    justify-content: space-between;
}

#hint-box p {
    font-size: x-large;
}
</style>