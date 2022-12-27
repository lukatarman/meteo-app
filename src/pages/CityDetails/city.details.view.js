import { useState } from "react";
import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.js";
import SettingsMenu from "../../Components/SettingsMenu/settings.menu.view.js";
import CityDetailsBehavior from "./city.details.behavior.js";

// todo
// add api calls based on checkboxes selected
// display data as text
// add alert for no timezone selected on daily view
// add settings component

const CityDetails = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [dropdownOptions, hourlyVariables, dailyVariables, selectedCity, variableType] =
    CityDetailsBehavior();

  return (
    <div>
      <div className="flex flex-col items-center h-screen">
        {isVisible ? <SettingsMenu setIsVisible={setIsVisible} /> : null}
        <h1 className="text-4xl my-5">Metorologic data for {selectedCity.city}</h1>
        <Dropdown options={dropdownOptions} />
        {variableType === "Hourly View" ? (
          <WeatherVariables options={hourlyVariables} />
        ) : null}
        {variableType === "Daily View" ? (
          <WeatherVariables options={dailyVariables} />
        ) : null}
      </div>
    </div>
  );
};

export default CityDetails;
