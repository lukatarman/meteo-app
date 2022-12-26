import WeatherVariablesBehavior from "./weather.variables.behavior.js";

const WeatherVariables = ({ options }) => {
  const handleCheckboxClick = WeatherVariablesBehavior(options);

  const renderColumn = (col) => {
    return col.map((item, index) => {
      return (
        <div key={index} className="flex items-center mb-4">
          <input
            type="checkbox"
            id={item.apiValue}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 custom-checkbox"
            onClick={handleCheckboxClick}
          />
          <label
            htmlFor={item.apiValue}
            className="ml-2 text-sm font-medium text-gray-900 "
          >
            {item.value}
          </label>
        </div>
      );
    });
  };

  let uniqueKey = 0;
  const renderAllColumns = (col) => {
    return (
      <div key={uniqueKey++} className="basis-1/4">
        {renderColumn(col)}
      </div>
    );
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
