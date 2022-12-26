import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.js";
import CityDetailsBehavior from "./city.details.behavior.js";

// todo
// Make hourly variables reusable as daily variables also
// Variables options should be expansive object in the form:

const CityDetails = () => {
  const [dropdownOptions, hourlyVariables, dailyVariables, cityName] =
    CityDetailsBehavior();

  return (
    <div>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl my-5">Metorologic data for {cityName}</h1>
        <Dropdown options={dropdownOptions} />
        <WeatherVariables options={hourlyVariables} />
        <WeatherVariables options={dailyVariables} />
      </div>
    </div>
  );
};

export default CityDetails;
