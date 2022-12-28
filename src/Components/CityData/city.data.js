import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { graphDataState } from "../../contexts/CityDetailsContext/index.js";
import { weatherVariablesState } from "../../contexts/CityDetailsContext/index.js";

Exporting(Highcharts);

const CityData = () => {
  const graphData = useRecoilValue(graphDataState);
  const weatherVariables = useRecoilValue(weatherVariablesState);

  const graphs = [];
  let allGraphs = [];

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
    const currentVariable = graphData.data[weatherVariables.type][value];

    currentVariable.forEach((entry, index) => {
      graphs[outerIndex][index] = [];
      if (weatherVariables.type) {
        const timeEntry = graphData.data[weatherVariables.type].time;
        graphs[outerIndex][index].push(Date.parse(new Date(timeEntry[index])));
      }
      graphs[outerIndex][index].push(entry);
    });
  };

  const fixGraphs = () => {
    let allGraphs = [];

    graphs.forEach((graphData) => {
      allGraphs.push({ data: graphData });
    });

    return allGraphs;
  };

  return <div id="highchart"></div>;
};

export default CityData;
