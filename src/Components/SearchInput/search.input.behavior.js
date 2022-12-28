import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchResultsState, searchInputState } from "../../contexts/SearchPageContenxt";
import { getSearchResults } from "../../adapters/http.client.adapter.js";
import { favoriteCitiesState } from "../../contexts/AppContext/index.js";

const SearchInputBehavior = () => {
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const [favoriteCities, setFavoriteCities] = useRecoilState(favoriteCitiesState);

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

  const favoriteButtonOptions = {
    size: 6,
    margin: "",
    position: ["", "top", "right"],
    handleButtonClick() {
      console.log("clicked");
    },
  };

  return [
    searchInput,
    onInputChange,
    searchResults,
    favoriteButtonOptions,
    favoriteCities,
    setFavoriteCities,
  ];
};

export default SearchInputBehavior;
