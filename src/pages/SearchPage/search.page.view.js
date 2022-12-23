import SearchInput from "../../Components/SearchInput/search.input.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";

const SearchPage = () => {
  return (
    <div>
      <FavoritesButton />
      <SettingsButton />
      <SearchInput />
    </div>
  );
};

export default SearchPage;
