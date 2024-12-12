<template>
    <div class="stat">
        <h3>{{ this.stat.name }}</h3>
        <h3>{{ this.stat.value }}</h3>
    </div>
</template>

<script>
    export default {
        props: ["stat"],
    }
</script>

<style>
    .stat {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 100px;
        color: black;
        background-color: #f3f4f7;
        justify-content: center;
        border-radius: 10px;
        border: 3px solid #d7263d;
    }
</style>