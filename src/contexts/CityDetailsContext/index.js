import { atom } from "recoil";

export const dropdownViewTypeState = atom({
  key: "DropdownViewType",
  default: "",
});

export const weatherVariablesState = atom({
  key: "WeatherVariables",
  default: { type: "", values: [] },
});

export const graphDataState = atom({
  key: "GraphData",
  default: {},
});
