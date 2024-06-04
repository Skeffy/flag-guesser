<template>
  <div class="modal fade show d-block" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <router-link to="practice"><button type="button" class="btn btn-primary">Practice</button></router-link>
          <router-link to="stats"><button type="button" class="btn btn-primary">Stats</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style>


</style>