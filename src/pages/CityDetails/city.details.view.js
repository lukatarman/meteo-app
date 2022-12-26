import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import WeatherVariables from "../../Components/WeatherVariables/weather.variables.js";
import CityDetailsBehavior from "./city.details.behavior.js";
import { variableTypeState } from "../../contexts/CityDetailsContext/index.js";
import { useRecoilValue } from "recoil";

// todo
// Make hourly variables reusable as daily variables also
// Variables options should be expansive object in the form:

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
