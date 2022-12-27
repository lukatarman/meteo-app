import axios from "axios";
import searchResults from "../assets/gradovi.json";
import { getParams } from "./services/http.client.adapter.service.js";

export const getSearchResults = (term) => {
  const response = searchResults;

  return response
    .filter(({ city }) => city.toLowerCase().includes(term.toLowerCase()))
    .filter((result, index) => index <= 5);
};

export const getCityGraph = async (selectedCity, weatherVariables, appSettings) => {
  const params = getParams(selectedCity, weatherVariables, appSettings);
  return await axios.get(`https://api.open-meteo.com/v1/forecast?${params}`);
};
