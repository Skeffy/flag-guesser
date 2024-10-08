<template>
    <div id="intermission">
        <div id="correct" v-if="isCorrect">
            <h1>CORRECT!</h1>
        </div>
        <div id="incorrect" v-if="!isCorrect">
            <h1>SORRY!</h1>
        </div>
        <button @click="nextFlag">Next Flag</button>
    </div>
</template>

<script>
export default {
    props: ["isCorrect"],

    methods: {
        nextFlag() {
            this.$emit('nextFlag', false);
        }
    }
}
</script>

<style>

</style>