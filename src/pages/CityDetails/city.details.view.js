import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.js";
import CityDetailsBehavior from "./city.details.behavior.js";

// todo
// add api calls based on checkboxes selected
// display data as text
// add alert for no timezone selected on daily view
// add settings component

const CityDetails = () => {
  const [dropdownOptions, hourlyVariables, dailyVariables, selectedCity, variableType] =
    CityDetailsBehavior();

  return (
    <div>
      <div className="flex flex-col items-center h-screen">
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
