<script>
  import mapboxgl from "mapbox-gl";
  import { onMount } from "svelte";
  import mapStore from "./stores/map-store";

  onMount(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoiam9yai1rYXJlIiwiYSI6ImNrcXNiOG10bDFvMGwydXN0cHh1ZHRzdGMifQ.bu0r3TdOtm7oMEYfK1JzhQ";
    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/jorj-kare/ckwcmd6j52li015qo50pcvr9u",
      zoom: 1,
      center: [0, 0],
      renderWorldCopies: false,
      pitch: 0,
    });
    map.touchZoomRotate.disableRotation();
    mapStore.setMap(map);
  });
</script>

<svelte:head>
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-glq.css"
    rel="stylesheet"
  />
</svelte:head>

<div id="map" />

<style>
  #map {
    height: 100vh;
    width: 100vw;
  }
</style>
