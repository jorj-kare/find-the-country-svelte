<script>
  import { slide } from "svelte/transition";
</script>

<div class="menu" transition:slide={{ duration: 800 }}>
  <slot />
  <div class="btn-wrapper"><slot name="btn-wrapper" /></div>
</div>

<style>
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.322);
    z-index: 2;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 70%;
    margin-bottom: 3rem;
    padding-block: 1.5rem;
    border: 2px solid rgba(var(--color-primary), 0.6);
    border-radius: 60px;
  }
</style>
