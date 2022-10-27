import { writable } from "svelte/store";
import { getRandomCountry } from "../utilities";

function game() {
  const { subscribe, set, update } = writable({
    layers: [],
    countries: [],
    countryToFind: "",
  });
  return {
    subscribe,
    setRandomCountry: () => {
      update((items) => {
        if (items.countries.length === 0) return items;
        let updatedItems = { ...items };
        updatedItems.countryToFind = getRandomCountry(updatedItems.countries);
        return updatedItems;
      });
    },
    removeCountry: (country) => {
      update((items) => {
        let updatedItems = { ...items };
        updatedItems.countries = items.countries.filter(
          (c) => c.ISO_A3 !== country
        );
        return updatedItems;
      });
    },
    setCountries: (countries) => {
      update((items) => {
        const updatedItems = { ...items };
        updatedItems.countries =
          countries.data.continent.countries.features.map((c) => c.properties);
        return updatedItems;
      });
    },
    setLayers: (map) => {
      update((items) => {
        const updatedItems = { ...items };
        updatedItems.layers = map
          .getStyle()
          .layers.filter((l) => l.source !== "composite" && l.type === "fill");
        return updatedItems;
      });
    },
    reset: () =>
      set({
        layers: [],
        countries: [],
        countryToFind: "",
      }),
  };
}
export default game();
