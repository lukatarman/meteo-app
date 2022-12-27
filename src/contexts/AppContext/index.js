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
    units: {
      temperature: "celsius",
      windspeed: "km/h",
      precipitation: "mm",
    },
    dropdowns: {
      timezone: "UTC",
      past_days: "0",
    },
  },
});
