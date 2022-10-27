import { writable } from "svelte/store";

const continents = writable([
  {
    name: "Africa",
    coords: ["26.17", "5.65"],
    zoom: 3,
  },
  {
    name: "Europe",
    coords: ["6.542983", "46.4598674"],
    zoom: 3,
  },
  {
    name: "Asia",
    coords: ["85.0720229", "27.0837562"],
    zoom: 3,
  },
  {
    name: "Oceania",
    coords: ["174.8335298", "-15.2716208"],
    zoom: 3,
  },
  {
    name: "South America",
    coords: ["-57.383586", "-18.024358"],
    zoom: 3,
  },
  {
    name: "North America",
    coords: ["-106.8691266", "46.3128821"],
    zoom: 3,
  },
]);

const customStore = {
  subscribe: continents.subscribe,
};

export default customStore;
