<script>
  import { slide } from "svelte/transition";
  export let countryName;
  export let isCorrectCountry;
</script>

<div
  class:wrong={isCorrectCountry === false}
  class:correct={isCorrectCountry}
  transition:slide={{ duration: 300 }}
  class="wrapper"
>
  <slot />
  {countryName}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    padding: 2rem 4rem;
    min-width: 30rem;
    transform: translateX(-50%);
    border-radius: 25px;
    background-color: rgba(var(--color-primary), 0.9);
    color: var(--color-secondary);
    font-family: "Inconsolata";
    font-weight: 400;
    font-size: 2.2rem;
    z-index: 2;
  }
  .wrong {
    background-color: #e94560ca;
  }
  .correct {
    background-color: #3fa796c7;
  }
  @media (max-width: 480px) {
    .wrapper {
      min-width: fit-content;
      gap: 2rem;
      font-size: 2rem;
      padding: 1.5rem 3rem;
    }
  }
</style>
