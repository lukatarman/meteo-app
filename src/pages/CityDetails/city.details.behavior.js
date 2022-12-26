import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { getLocationDetails } from "../../adapters/http.client.adapter.js";
import { selectedCityState } from "../../contexts/CityDetailsContext/index.js";

const CityDetailsBehavior = () => {
  let { cityName } = useParams();

  const selectedCity = useRecoilValue(selectedCityState);

  useEffect(() => {
    getLocationDetails(cityName);
  });

  const dropdownOptions = {
    defaultValue: "Please Select View Type",
    menuOptions: ["Hourly View", "Daily View"],
  };

  const hourlyVariables = {
    type: "Hourly",
    variables: {
      colOne: [
        { "Temperature (2m)": "temperature_2m" },
        { "Relative Humidity (2m)": "relativehumidity_2m" },
        { "Apparent Temperature": "apparent_temperature" },
      ],
      colTwo: [
        { "Dewpoint (2m)": "dewpoint_2m" },
        { Rain: "rain" },
        { Snowfall: "snowfall" },
      ],
      colThree: [
        { "Sealevel Pressure": "pressure_msl" },
        { "Surface Pressure": "surface_pressure" },
        { Visibility: "visibility" },
      ],
      colFour: [
        { "Wind Speed (10 m)": "windspeed_10m" },
        { "Wind Direction (10 m)": "winddirection_10m" },
        { "Wind Gusts (10 m)": "windgusts_10m" },
      ],
    },
  };

  const dailyVariables = {
    type: "Daily",
    variables: {
      colOne: [
        { Weathercode: "weathercode" },
        { "Maximum Temperature (2m)": "temperature_2m_max" },
        { "Minimum Temperature (2m)": "temperature_2m_min" },
      ],
      colTwo: [
        { Sunrise: "sunrise" },
        { Sunset: "sunset" },
        { "Reference Evapotranspiration": "et0_fao_evapotranspiration" },
      ],
      colThree: [
        { "Rain Sum": "rain_sum" },
        { "Showers Sum": "showers_sum" },
        { "Snowfall Sum": "snowfall_sum" },
      ],
      colFour: [
        { "Maximum Wind Speed (10 m)": "windspeed_10m_max" },
        { "Maximum Wind Gusts (10 m)": "windgusts_10m_max" },
        { "Dominant Wind Direction (10 m)": "winddirection_10m_dominant" },
      ],
    },
  };

  return [dropdownOptions, hourlyVariables, dailyVariables, cityName];
};

export default CityDetailsBehavior;
