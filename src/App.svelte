<script>
  import Menu from "./lib/Menu.svelte";
  import MenuButton from "./lib/MenuButton.svelte";
  import EndGameButton from "./lib/EndGameButton.svelte";
  import InfoWrapper from "./lib/InfoWrapper.svelte";
  import CongratulationMsg from "./lib/CongratulationMsg.svelte";
  import Map from "./lib/Map.svelte";
  import Timer from "./lib/Timer.svelte";
  import Spinner from "./lib/Spinner.svelte";
  import {
    renderPolygons,
    fetchContinentData,
    generateRandomColor,
    waitFor,
  } from "./lib/utilities";
  import mapStore from "./lib/stores/map-store";
  import continents from "./lib/stores/continents-store";
  import gameStore from "./lib/stores/game-store";
  import timer from "./lib/stores/timer-store";
  import RadioButton from "./lib/RadioButton.svelte";
  let disabled = false;
  let page = "menu";
  let gameStarts = false;
  let isCorrectCountry = null;
  let map;

  mapStore.subscribe((m) => (map = m));
  async function countryOnClick() {
    if ($gameStore.countryToFind) {
      $gameStore.layers.forEach((l) => {
        map.on("click", l.id, async (e) => {
          if (
            // @ts-ignore
            e.features[0].properties.ISO_A3 === $gameStore.countryToFind.ISO_A3
          ) {
            isCorrectCountry = true;
            const randomColor = generateRandomColor("light");
            map.setPaintProperty(
              e.features[0].properties.ISO_A3,
              "fill-color",
              randomColor
            );
            timer.reset();
            timer.start(30);
            disabled = true;
            await waitFor(1);
            gameStore.removeCountry($gameStore.countryToFind.ISO_A3);
            gameStore.setRandomCountry();
            disabled = false;
          } else {
            isCorrectCountry = false;
            timer.reset();
            timer.start(30);
            disabled = true;
            await waitFor(1);
            gameStore.setRandomCountry();
            disabled = false;
          }
        });
      });
    }
  }

  function resetGame() {
    $gameStore.layers.forEach((l) => {
      map.removeLayer(l.id);
    });
    gameStore.reset();
    gameStarts = false;
  }

  function endGame() {
    page = "menu";
    resetGame();
  }

  async function startGame(e) {
    gameStarts = true;
    timer.start(30);
    const data = await fetchContinentData(e.detail);

    // // <TEST
    // data.data.continent.countries.features.splice(
    //   1,
    //   data.data.continent.countries.features.length - 2
    // );
    // // TEST>
    gameStore.setCountries(data);
    gameStore.setRandomCountry();

    renderPolygons(map, data.data.continent.countries.features);
    gameStore.setLayers(map);

    page = "game";
    countryOnClick();
  }
  $: if ($timer === 0) {
    timer.reset();
    gameStore.setRandomCountry();
    timer.start(30);
  }
  $: if (isCorrectCountry !== null)
    setTimeout(() => {
      isCorrectCountry = null;
    }, 1000);

  $: if (page === "game" && $gameStore.countries.length === 0) {
    page = "congratulations";
  }
</script>

<main>
  <div class:disabled>
    <Map />
  </div>

  {#if page !== "menu"}
    <EndGameButton on:click={endGame} />
  {/if}
  {#if page === "menu"}
    <Menu>
      <RadioButton />
      <svelte:fragment slot="btn-wrapper">
        {#each $continents as c}
          <MenuButton
            on:start-game={startGame}
            zoom={c.zoom}
            coords={c.coords}
            value={c.name}>{c.name}</MenuButton
          >
        {/each}
      </svelte:fragment>
    </Menu>
    {#if gameStarts}
      <Spinner />{/if}
  {:else if page === "game"}
    <InfoWrapper
      {isCorrectCountry}
      countryName={$gameStore.countryToFind.ADMIN}
    >
      <Timer /></InfoWrapper
    >
  {:else if page === "congratulations"}
    <CongratulationMsg />
  {/if}
</main>

<style>
  .disabled {
    pointer-events: none;
  }
</style>
