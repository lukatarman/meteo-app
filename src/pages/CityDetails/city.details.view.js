import { useState } from "react";
import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.view.js";
import SettingsMenu from "../../Components/SettingsMenu/settings.menu.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import CityDetailsBehavior from "./city.details.behavior.js";
import Button from "../../Components/Button/button.js";
import FavoritesBar from "../../Components/FavoritesBar/favorites.bar.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";

// todo
// add graph
// make page mobile friendly
// animate?

const CityDetails = () => {
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);

  const [
    dropdownOptions,
    hourlyVariables,
    dailyVariables,
    selectedCity,
    variableType,
    buttonOptions,
    favoritesVisible,
    setFavoritesVisible,
    favoriteButtonOptions,
  ] = CityDetailsBehavior();

  return (
    <div>
      <div className="flex">
        {favoritesVisible ? (
          <FavoritesBar setFavoritesVisible={setFavoritesVisible} />
        ) : null}

        {favoritesVisible ? null : <FavoritesButton options={favoriteButtonOptions} />}
        <div className="flex flex-col items-center mx-auto p-5 w-3/4">
          {settingsIsVisible ? (
            <SettingsMenu setIsVisible={setSettingsIsVisible} />
          ) : null}
          {settingsIsVisible ? null : (
            <SettingsButton setSettingsIsVisible={setSettingsIsVisible} />
          )}
          <h1 className="text-4xl my-5">Metorologic data for {selectedCity.city}</h1>
          <Dropdown options={dropdownOptions} />
          {variableType === "Hourly View" ? (
            <WeatherVariables options={hourlyVariables} />
          ) : null}
          {variableType === "Daily View" ? (
            <WeatherVariables options={dailyVariables} />
          ) : null}
          <div className="my-5 mr-auto">
            {variableType !== "" && <Button options={buttonOptions} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
