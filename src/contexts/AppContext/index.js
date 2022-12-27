import { atom } from "recoil";

export const favoriteCitiesState = atom({
  key: "FavoriteCities",
  default: [],
});

export const selectedCityState = atom({
  key: "CityDetails",
  default: {},
});

export const settingsState = atom({
  key: "Settings",
  default: {
    temperature: "celsius",
    windspeed: "km/h",
    precipitation: "mm",
    timezone: "UTC",
    pastDays: "0",
  },
});
