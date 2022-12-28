import SearchInput from "../../Components/SearchInput/search.input.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";
import FavoritesBar from "../../Components/FavoritesBar/favorites.bar.view.js";
import { useState } from "react";
import SettingsMenu from "../../Components/SettingsMenu/settings.menu.view.js";

const SearchPage = () => {
  const [favoritesVisible, setFavoritesVisible] = useState(false);
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);

  const favoritesButtonOptions = {
    size: "8",
    margin: "m-2",
    position: ["absolute", "top", "left"],
    handleButtonClick() {
      setFavoritesVisible(true);
    },
  };

  return (
    <div className="flex">
      {favoritesVisible ? (
        <FavoritesBar setFavoritesVisible={setFavoritesVisible} />
      ) : null}

      {favoritesVisible ? null : <FavoritesButton options={favoritesButtonOptions} />}

      {settingsIsVisible ? null : (
        <SettingsButton setSettingsIsVisible={setSettingsIsVisible} />
      )}

      {settingsIsVisible ? <SettingsMenu setIsVisible={setSettingsIsVisible} /> : null}

      <SearchInput />
    </div>
  );
};

export default SearchPage;
