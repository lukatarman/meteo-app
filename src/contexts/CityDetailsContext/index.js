import { atom } from "recoil";

export const isVisibleState = atom({
  key: "IsVisible",
  default: false,
});

export const variableTypeState = atom({
  key: "VariableType",
  default: "",
});

export const weatherVariablesState = atom({
  key: "WeatherVariables",
  default: { type: "", values: [] },
});
