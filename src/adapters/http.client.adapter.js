import axios from "axios";
import searchResults from "../assets/gradovi.json";

const getSearchResults = (term) => {
  const response = JSON.parse(searchResults);
  return response.filter(({ city }) => {
    city.toLowerCase().includes(term.toLowerCase());
  });
};
