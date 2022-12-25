import { atom } from "recoil";

export const selectedCityState = atom({
  key: "CityDetails",
  default: [],
});

export const isVisibleState = atom({
  key: "IsVisible",
  default: false,
});
