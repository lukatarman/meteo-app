import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCityGraph } from "../../adapters/http.client.adapter.js";
import { weatherVariablesState } from "../../contexts/CityDetailsContext";
import { selectedCityState, settingsState } from "../../contexts/AppContext";

const WeatherVariablesBehavior = (options) => {
  const [weatherVariables, setWeatherVariables] = useRecoilState(weatherVariablesState);
  const settings = useRecoilValue(settingsState);
  const selectedCity = useRecoilValue(selectedCityState);

  const handleCheckboxClick = (e) => {
    if (weatherVariables.values.includes(e.target.id)) removeClickedValue(e);
    if (!weatherVariables.values.includes(e.target.id)) addClickedValue(e);
  };

  const addClickedValue = (e) => {
    setWeatherVariables({
      type: options.type.toLowerCase(),
      values: [...weatherVariables.values, e.target.id],
    });
  };

  const removeClickedValue = (e) => {
    const arrCopy = [...weatherVariables.values];
    arrCopy.splice(arrCopy.indexOf(e.target.id), 1);
    setWeatherVariables({
      type: options.type.toLowerCase(),
      values: arrCopy,
    });
  };

  useEffect(() => {
    const fetchGraphData = () => {
      getCityGraph(selectedCity, weatherVariables, settings);
    };

    fetchGraphData();
  }, [weatherVariables]);

  return handleCheckboxClick;
};

export default WeatherVariablesBehavior;
