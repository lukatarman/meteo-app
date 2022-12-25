import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getLocationDetails } from "../../adapters/http.client.adapter.js";
import { selectedCityState } from "../../contexts/CityDetailsContext/index.js";
import Dropdown from "../../Components/Dropdown/dropdown.view.js";
import HourlyVariables from "../../Components/HourlyVariables/hourly.variables.js";

// todo
// Make hourly variables reusable as daily variables also
// Variables options should be expansive object in the form:

// const myObj = {
//   type: "hourly",
//   variables: {
//     colOne: [
//       { "Temperature (2m)": "temperature_2m" },
//       { "Relative Humidity (2m)": "relativehumidity_2m" },
//     ],
//     colTwo: [
//       { "Dewpoint (2m)": "dewpoint_2m" },
//       { "Clouncover Total": "cloudcover" },
//     ],
//     colThree: [
//       { "Temperature (2m)": "temperature_2m" },
//       { "Relative Humidity (2m)": "relativehumidity_2m" },
//     ],
//     colFour: [
//       { "Temperature (2m)": "temperature_2m" },
//       { "Relative Humidity (2m)": "relativehumidity_2m" },
//     ],
//   },
// };

const CityDetails = () => {
  let { name } = useParams();

  const selectedCity = useRecoilValue(selectedCityState);

  useEffect(() => {
    getLocationDetails(name);
  });

  const dropdownOptions = {
    defaultValue: "Please Select View Type",
    menuOptions: ["Hourly View", "Daily View"],
  };

  return (
    <div>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl my-5">Metorologic data for {name}</h1>
        <Dropdown options={dropdownOptions} />
        <HourlyVariables />
      </div>
    </div>
  );
};

export default CityDetails;
