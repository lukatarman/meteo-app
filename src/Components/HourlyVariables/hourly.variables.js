const HourlyVariables = () => {
  return (
    <div className="py-3 px-0 w-10/12">
      <h2>Hourly Weather Variables</h2>

      <div className="flex justify-center py-3 px-0 w-full m-auto">
        <div className="basis-1/4">
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              id="temperature"
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:bg-white"
            />
            <label for="temperature" class="ml-2 text-sm font-medium text-gray-900 ">
              Temperature (2 m)
            </label>
          </div>
        </div>
        <div className="basis-1/4">
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:bg-white"
            />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">
              Rain
            </label>
          </div>
        </div>
        <div className="basis-1/4">
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:bg-white"
            />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">
              Snowfall
            </label>
          </div>
        </div>
        <div className="basis-1/4">
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:bg-white"
            />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">
              Default checkbox
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyVariables;
