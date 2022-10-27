<script>
  import { scale } from "svelte/transition";
  import { Circle3 } from "svelte-loading-spinners";
</script>

<div class="spinner" transition:scale={{ duration: 200 }}>
  <Circle3
    size="100"
    ballBottomRight="#5DA7DB"
    ballBottomLeft="#FF8787"
    ballTopLeft="#8758FF"
  />
</div>

<style>
  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 4rem;
  }
</style>
