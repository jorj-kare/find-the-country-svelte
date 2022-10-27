<script>
  import { fly } from "svelte/transition";
</script>

<button transition:fly={{ x: 50, duration: 700 }} class="btn-end" on:click />

<style>
  .btn-end {
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 3;
    width: 4rem;
    height: 3rem;
    background-color: var(--color-secondary);
    border: transparent;
    color: rgba(var(--color-primary), 1);
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );
    transition: all 0.6s;
  }
  .btn-end:hover,
  .btn-end:active {
    transform: translateX(1rem);
  }
</style>
