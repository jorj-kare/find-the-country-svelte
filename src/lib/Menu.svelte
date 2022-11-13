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
    justify-content: space-between;
    align-items: center;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.322);
    z-index: 2;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-bottom: 3rem;
    padding: 1.5rem 6rem;
    border: 2px solid rgba(var(--color-primary), 0.6);
    border-radius: 60px;
  }

  @media (max-width: 991px) {
    .btn-wrapper {
      width: 95%;
      gap: 2rem;
      padding: 1.5rem;
    }
  }
  @media (max-width: 822px) {
    .btn-wrapper {
      padding: 0 10rem;
      border: none;
      flex-wrap: wrap-reverse;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    .btn-wrapper {
      padding: 0 2.2rem;
      flex-wrap: wrap;
    }
    @media (max-width: 480px) {
      .btn-wrapper {
        margin-bottom: 1.5rem;
      }
    }
  }
</style>
