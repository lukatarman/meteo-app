import SearchInput from "../../Components/SearchInput/search.input.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";
import FavoritesBar from "../../Components/FavoritesBar/favorites.bar.view.js";

const SearchPage = () => {
  return (
    <div className="flex">
      <div className="w-72 xs:w-1/4 favorites-bar">
        <FavoritesBar></FavoritesBar>
      </div>
      <div className="top-left-favorites">
        <FavoritesButton size={6} />
      </div>

      <SettingsButton />
      <div className="w-full">
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchPage;
