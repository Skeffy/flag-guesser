<template>
    <div id="page-header">
        <h1>{{ gameMode.toUpperCase() }}</h1>
        <helpOffcanvas :gameMode="gameMode"/>
    </div>
</template>

<script>
import helpOffcanvas from "./HelpOffcanvas.vue";

export default {
    props: ["gameMode"],

    components: {
        helpOffcanvas
    }
}

</script>

<style>
    #page-header {
        width: 500px;
        height: 75px;
        display: flex;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        justify-content: center;
        margin-bottom: 75px;
        margin-left: auto;
        margin-right: auto;
    }

    #page-header>a {
        align-content: center;
        color: #ebebeb;
    }

    h1 {
        margin: 0px;
        align-content: center;
    }
</style>