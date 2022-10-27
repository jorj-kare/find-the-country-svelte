import { writable } from "svelte/store";

function mapStore() {
  const { subscribe, set } = writable({});

  return {
    subscribe,
    setMap: (map) => set(map),
  };
}
export default mapStore();
