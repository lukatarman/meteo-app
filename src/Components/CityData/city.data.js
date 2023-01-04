import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { graphDataState } from "../../contexts/CityDetailsContext/index.js";
import { weatherVariablesState } from "../../contexts/CityDetailsContext/index.js";

Exporting(Highcharts);

const CityData = () => {
  const graphData = useRecoilValue(graphDataState);
  const weatherVariables = useRecoilValue(weatherVariablesState);

  let allGraphs;
  const graphs = [];

  useEffect(() => {
    weatherVariables.values.forEach((value, outerIndex) => {
      graphs[outerIndex] = [];

      getGraphs(value, outerIndex);

      allGraphs = fixGraphs();
    });

    Highcharts.chart("highchart", {
      title: {
        text: "Meteo",
      },
      chart: {
        type: "line",
      },
      xAxis: {
        type: "datetime",
      },
      series: allGraphs,
    });
  }, [graphData]);

  const getGraphs = (value, outerIndex) => {
    if (!weatherVariables.type) return;

    const currentVariableValues = graphData.data[weatherVariables.type][value];
    const timeValues = graphData.data[weatherVariables.type].time;

    currentVariableValues.forEach((variableValue, index) => {
      graphs[outerIndex][index] = [];

      graphs[outerIndex][index].push(Date.parse(new Date(timeValues[index])));
      graphs[outerIndex][index].push(variableValue);
    });
  };

  const fixGraphs = () => {
    return graphs.map((graph) => {
      return { data: graph };
    });
  };

  return <div id="highchart"></div>;
};

export default CityData;
