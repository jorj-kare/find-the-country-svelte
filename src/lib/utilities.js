export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min));

export function waitFor(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
export function generateRandomColor(brightness = "all") {
  let additional = brightness === "light" ? 1 : 0;
  const divisor = brightness !== "all" ? 2 : 1;
  const red = Math.floor(((additional + Math.random()) * 256) / divisor);
  const green = Math.floor(((additional + Math.random()) * 256) / divisor);
  const blue = Math.floor(((additional + Math.random()) * 256) / divisor);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

export async function fetchContinentData(continent) {
  try {
    const continentName = continent.replace(" ", "_");
    const url = `https://find-the-country-api.herokuapp.com/api/v1/continent/${continentName}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message, data.status);
    return data;
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}
export function renderPolygons(map, polygons) {
  polygons.forEach((country) => {
    if (
      !Object.keys(map.getStyle().sources).includes(country.properties.ISO_A3)
    ) {
      map.addSource(country.properties.ISO_A3, {
        type: "geojson",
        data: country,
      });
    }
    map.addLayer({
      id: country.properties.ISO_A3,
      type: "fill",
      source: country.properties.ISO_A3,
      paint: {
        "fill-color": "rgb(250, 250 ,250)",
        "fill-outline-color": "rgb(3, 55, 95)",
      },
    });
  });
}
export const getRandomCountry = (countriesData) => {
  const i = generateRandomNumber(0, countriesData.length - 1);
  const randomCountry = countriesData[i];
  return randomCountry;
};
