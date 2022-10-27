<script>
  import mapStore from "./stores/map-store";
  import { generateRandomColor } from "./utilities";
  import { createEventDispatcher } from "svelte";
  export let value = null;
  export let zoom = 0;
  export let coords = [];
  let map;
  let dispatch = createEventDispatcher();
  mapStore.subscribe((m) => (map = m));
  let btn;
  function mouseOver() {
    btn.style.background = generateRandomColor("light");
    map.flyTo({
      center: coords,
      zoom: zoom,
      speed: 0.5,
      curve: 1,
      easing(t) {
        return t;
      },
      essential: true,
    });
  }
  function mouseOut() {
    btn.removeAttribute("style");

    map.flyTo({
      center: [0, 0],
      zoom: 2,
      speed: 0.5,
      curve: 1,
      easing(t) {
        return t;
      },
      essential: true,
    });
  }
</script>

<button
  type="button"
  {value}
  {zoom}
  {coords}
  bind:this={btn}
  on:mouseover={mouseOver}
  on:focus={mouseOver}
  on:mouseout={mouseOut}
  on:blur={mouseOut}
  on:click={() => dispatch("start-game", value)}
>
  <slot />
</button>

<style>
  button {
    width: 6em;
    height: 6em;
    margin: 0.8rem;
    border-radius: 50%;
    border: transparent;
    background: rgba(var(--color-primary), 0.6);
    color: var(--color-secondary);
    font-size: 2.3rem;
    font-weight: 300;
    transition: all 0.5s;
    word-spacing: 5rem;
    transition: all 0.3s;
  }
</style>
