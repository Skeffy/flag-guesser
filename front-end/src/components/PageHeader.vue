<template>
    <div id="page-header">
        <h1>FLAG GUESSER</h1>
        <helpOffcanvas />
    </div>
</template>

<script>
import helpOffcanvas from "./HelpOffcanvas.vue";

export default {
    components: {
        helpOffcanvas
    }
}

</script>

<style>
    #page-header {
        width: 400px;
        height: 50px;
        display: flex;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        justify-content: center;
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