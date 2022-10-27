import { writable } from "svelte/store";

function timer() {
  let count;
  let interval;
  const { subscribe, set, update } = writable(count);

  return {
    subscribe,
    start: (countFrom) => {
      count = countFrom;
      interval = setInterval(() => {
        set(count);
        count--;
      }, 1000);
      return count;
    },
    reset: () => {
      clearInterval(interval);
    },
  };
}
export default timer();
