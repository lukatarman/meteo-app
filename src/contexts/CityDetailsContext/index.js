import { atom } from "recoil";

export const variableTypeState = atom({
  key: "VariableType",
  default: "",
});

export const weatherVariablesState = atom({
  key: "WeatherVariables",
  default: { type: "", values: [] },
});
