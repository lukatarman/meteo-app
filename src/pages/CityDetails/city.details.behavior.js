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
        { value: "Temperature (2m)", apiValue: "temperature_2m" },
        { value: "Relative Humidity (2m)", apiValue: "relativehumidity_2m" },
        { value: "Apparent Temperature", apiValue: "apparent_temperature" },
      ],
      colTwo: [
        { value: "Dewpoint (2m)", apiValue: "dewpoint_2m" },
        { value: "Rain", apiValue: "rain" },
        { value: "Snowfall", apiValue: "snowfall" },
      ],
      colThree: [
        { value: "Sealevel Pressure", apiValue: "pressure_msl" },
        { value: "Surface Pressure", apiValue: "surface_pressure" },
        { value: "Visibility", apiValue: "visibility" },
      ],
      colFour: [
        { value: "Wind Speed (10 m)", apiValue: "windspeed_10m" },
        { value: "Wind Direction (10 m)", apiValue: "winddirection_10m" },
        { value: "Wind Gusts (10 m)", apiValue: "windgusts_10m" },
      ],
    },
  };

  const dailyVariables = {
    type: "Daily",
    variables: {
      colOne: [
        { value: "Weathercode", apiValue: "weathercode" },
        { value: "Maximum Temperature (2m)", apiValue: "temperature_2m_max" },
        { value: "Minimum Temperature (2m)", apiValue: "temperature_2m_min" },
      ],
      colTwo: [
        { value: "Sunrise", apiValue: "sunrise" },
        { value: "Sunset", apiValue: "sunset" },
        { value: "Reference Evapotranspiration", apiValue: "et0_fao_evapotranspiration" },
      ],
      colThree: [
        { value: "Rain Sum", apiValue: "rain_sum" },
        { value: "Showers Sum", apiValue: "showers_sum" },
        { value: "Snowfall Sum", apiValue: "snowfall_sum" },
      ],
      colFour: [
        { value: "Maximum Wind Speed (10 m)", apiValue: "windspeed_10m_max" },
        { value: "Maximum Wind Gusts (10 m)", apiValue: "windgusts_10m_max" },
        {
          value: "Dominant Wind Direction (10 m)",
          apiValue: "winddirection_10m_dominant",
        },
      ],
    },
  };

  return [dropdownOptions, hourlyVariables, dailyVariables, cityName];
};

export default CityDetailsBehavior;
