<script>
  import { onMount } from "svelte";
  import mapStore from "../lib/stores/map-store";
  let map;

  mapStore.subscribe((m) => (map = m));

  let globe = false;
  function toggleMapType(e) {
    if (e.target.value === "globe") {
      map.setProjection("globe");

      globe = true;
    } else {
      map.setProjection("mercator");
      globe = false;
    }
  }
  onMount(() => map.setProjection("mercator"));
</script>

<div class="wrapper">
  <label class:globe for="globe"
    >Globe

    <input
      type="radio"
      id="globe "
      name="map-type"
      value="globe"
      on:change={toggleMapType}
    />
  </label>
  <label class:globe for="mercator">
    <input
      type="radio"
      id="mercator"
      name="map-type"
      value="mercator"
      checked
      on:change={toggleMapType}
    />
    Mercator
  </label>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    margin-top: 3rem;
    border: 0.5px solid rgba(var(--color-primary), 0.8);
    border-radius: 20px;
  }
  label {
    position: relative;
    padding: 1.5rem 2.5rem;
    font-size: 2.3rem;
  }

  input {
    appearance: none;
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }
  .wrapper :nth-child(2) input {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .wrapper :nth-child(1) input {
    border-radius: 0;
    border: none;
    border-right: 0.5px solid rgba(var(--color-primary), 0.8);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  input:checked {
    background-color: rgba(5, 250, 250, 0.184);
  }

  .globe {
    color: rgba(var(--color-primary), 1);
  }
  @media (max-width: 480px) {
    label {
      font-size: 1.8rem;
    }
  }
</style>
