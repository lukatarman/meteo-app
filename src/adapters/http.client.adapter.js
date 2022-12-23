import axios from "axios";
import searchResults from "../assets/gradovi.json";

export const getSearchResults = (term) => {
  const response = searchResults;

  return response
    .filter(({ city }) => city.toLowerCase().includes(term.toLowerCase()))
    .filter((result, index) => index <= 5);
};

export const getLocationDetails = async (name) => {
  const searchResponse = searchResults.filter(
    ({ city }) => city.toLowerCase() === name.toLowerCase()
  );
  const fixedLatitude = searchResponse[0].lat.slice(0, 5);
  const fixedLongitude = searchResponse[0].lng.slice(0, 5);

  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${fixedLatitude}&longitude=${fixedLongitude}`
  );

  console.log(response.data);
};
