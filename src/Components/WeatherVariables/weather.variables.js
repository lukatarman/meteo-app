import { useRecoilState } from "recoil";
import { weatherVariablesState } from "../../contexts/CityDetailsContext/index.js";

const WeatherVariables = ({ options }) => {
  const renderColumn = (col) => {
    return col.map((value) => {
      for (const property in value) {
        return (
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              id={value[property]}
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 custom-checkbox"
            />
            <label for={value[property]} class="ml-2 text-sm font-medium text-gray-900 ">
              {property}
            </label>
          </div>
        );
      }
    });
  };

  const renderAllColumns = (col) => {
    return <div className="basis-1/4">{renderColumn(col)}</div>;
  };

  let renderVariables = [];
  for (const col in options.variables) {
    renderVariables.push(renderAllColumns(options.variables[col]));
  }

  return (
    <div className="py-3 px-0 w-10/12">
      <h2>{options.type} Weather Variables</h2>

      <div className="flex justify-center py-3 px-0 w-full m-auto">{renderVariables}</div>
    </div>
  );
};

export default WeatherVariables;
