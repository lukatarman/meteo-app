import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchResultsState, searchInputState } from "../../contexts/SearchPageContenxt";
import { selectedCityState } from "../../contexts/AppContext/index.js";
import { getSearchResults } from "../../adapters/http.client.adapter.js";

const SearchInputBehavior = () => {
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedCityState);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onItemClick = (index) => {
    setSelectedItem(searchResults[index]);
  };

  useEffect(() => {
    const fetchData = () => {
      const response = getSearchResults(searchInput);
      console.log(response);
      setSearchResults(response);
      console.log(searchResults);
    };

    if (searchInput === "") setSearchResults([]);
    if (searchInput !== "") fetchData();
  }, [searchInput]);

  return [searchInput, onInputChange, searchResults, onItemClick];
};

export default SearchInputBehavior;
