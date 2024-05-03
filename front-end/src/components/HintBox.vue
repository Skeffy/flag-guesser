<template>
    <div id="hint-box">
        <p v-if="guessNumber >= 2">Continent: {{ this.$store.state.flag.continent }}</p>
        <p v-if="guessNumber >= 3">Capital: {{ this.$store.state.flag.capital }}</p>
        <p v-if="guessNumber >=4">Country Code: {{ this.$store.state.flag.code }}</p>
    </div>
</template>

<script>
export default {
    props: ["guessNumber"]
}
</script>

<style>

</style>