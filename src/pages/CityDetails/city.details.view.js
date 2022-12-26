import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.js";
import { variableTypeState } from "../../contexts/CityDetailsContext/";
import { useRecoilValue } from "recoil";

import CityDetailsBehavior from "./city.details.behavior.js";

// todo
// add api calls based on checkboxes selected
// display data as text
// add alert for no timezone selected on daily view
// add settings component

const CityDetails = () => {
  const variableType = useRecoilValue(variableTypeState);

  const [dropdownOptions, hourlyVariables, dailyVariables, cityName] =
    CityDetailsBehavior();

  return (
    <div>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl my-5">Metorologic data for {cityName}</h1>
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
