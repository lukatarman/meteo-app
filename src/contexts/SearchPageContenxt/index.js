import { atom } from "recoil";

export const searchResultsState = atom({
  key: "SearchResults",
  default: [],
});

export const searchInputState = atom({
  key: "SearchInput",
  default: "",
});
