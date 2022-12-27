import { atom } from "recoil";

export const selectedCityState = atom({
  key: "CityDetails",
  default: {},
});

export const settingsState = atom({
  key: "Settings",
  default: {
    temperatureUnit: "celsius",
    windSpeedUnit: "km/h",
    precipitationUnit: "mm",
    timezone: "UTC",
    pastDays: "0",
  },
});
