import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { weatherVariablesState } from "../../contexts/CityDetailsContext/index.js";

const WeatherVariablesBehavior = (options) => {
  const [weatherVariables, setWeatherVariables] = useRecoilState(weatherVariablesState);

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
    console.log(weatherVariables.values);
  }, [weatherVariables]);

  return handleCheckboxClick;
};

export default WeatherVariablesBehavior;
