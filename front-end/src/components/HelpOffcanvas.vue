<template>
    <div class="offcanvas offcanvas-start" id="help-offcanvas">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    <h1 class="offcanvas-title">How to play</h1>
  </div>
  <div class="offcanvas-body">
    <p id="daily-rules" v-if="gameMode == `Daily`">In daily mode, there is only one flag per day. You will have 4 attempts to guess today's flag, and you will recieve a hint after each incorrect guess.
        <br><br> 
        The results of playing this game mode are what will be recorded to your "stats" page.</p>
    <p id="practice-rules" v-if="gameMode == `Practice`">In practice mode, you can play as much as you like, and the same rules apply as daily mode. You will have 4 attempts to guess the flag, and you will recieve a hint after each incorrect guess.
        <br><br>
        The results of this game mode will not be recorded to your "stats" page.</p>
    <p>Good luck!</p>
  </div>
</div>

<a class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#help-offcanvas">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
    </svg>
</a>
</template>

<script>
export default {
    props: ["gameMode"]
}

</script>

<style>
    #help-offcanvas{
        background-color: #ebebeb;
        color: black;
    }

    .offcanvas-header {
        display:grid;
        grid-template-columns: 1fr;
    }

    .offcanvas-title {
        justify-self: center;
    }

    .btn-close {
        justify-self: right;
    }

    a {
        padding: 0px;
        margin-left: 25px;
    }
</style>