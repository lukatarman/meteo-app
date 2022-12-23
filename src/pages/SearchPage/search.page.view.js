import SearchInput from "../../Components/SearchInput/search.input.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";

const SearchPage = () => {
  return (
    <div>
      <div className="top-left-favorites">
        <FavoritesButton size={6} />
      </div>

      <SettingsButton />
      <SearchInput />
    </div>
  );
};

export default SearchPage;
