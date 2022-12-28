import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getCityGraph } from "../../adapters/http.client.adapter.js";
import { graphDataState, weatherVariablesState } from "../../contexts/CityDetailsContext";
import { selectedCityState, settingsState } from "../../contexts/AppContext";

const WeatherVariablesBehavior = (options) => {
  const [weatherVariables, setWeatherVariables] = useRecoilState(weatherVariablesState);
  const setGraphData = useSetRecoilState(graphDataState);
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
    const fetchGraphData = async () => {
      const response = await getCityGraph(selectedCity, weatherVariables, settings);
      setGraphData(response);
    };

    fetchGraphData();
  }, [weatherVariables]);

  return handleCheckboxClick;
};

export default WeatherVariablesBehavior;
