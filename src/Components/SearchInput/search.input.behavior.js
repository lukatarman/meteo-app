import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchResultsState, searchInputState } from "../../contexts/SearchPageContenxt";
import { getSearchResults } from "../../adapters/http.client.adapter.js";

const SearchInputBehavior = () => {
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = () => {
      const response = getSearchResults(searchInput);

      setSearchResults(response);
    };

    if (searchInput === "") setSearchResults([]);
    if (searchInput !== "") fetchData();
  }, [searchInput]);

  return [searchInput, onInputChange, searchResults];
};

export default SearchInputBehavior;
