<script>
  import { fly } from "svelte/transition";
  export let msg = "";
</script>

<div class="msg" transition:fly={{ x: -5 }}>{msg}</div>

<style>
  .msg {
    position: absolute;
    padding: 2rem;
    top: 1rem;
    left: 5rem;
    z-index: 3;
    background-color: red;
    color: #ddd;
  }
</style>
