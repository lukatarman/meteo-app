import Dropdown from "../Dropdown/dropdown.view.js";
import SettingsMenuBehavior from "./settings.menu.behavior.js";

const SettingsMenu = () => {
  const [test] = SettingsMenuBehavior();

  return (
    <div className="absolute w-full h-full bg-white flex flex-col items-center">
      <h1 className=" text-4xl my-5">Application Settings</h1>
      <div className="mb-5">
        <div className="flex flex-col items-center">
          <label>Temperature Unit</label>
          <div className="flex">
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="temperature_unit=celsius"
                name="temperature-radio"
                type="radio"
              />
              <label className="m-1 mr-10" htmlFor="temperature_unit=celsius">
                Celsius
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="temperature_unit=fahrenheit"
                name="temperature-radio"
                type="radio"
              />
              <label className="m-1" htmlFor="temperature_unit=fahrenheit">
                Fahrenheit
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex flex-col items-center">
          <label>Wind Speed Unit</label>
          <div className="flex">
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="windspeed_unit=kmh"
                name="windspeed-radio"
                type="radio"
              />
              <label className="m-1 mr-10" htmlFor="windspeed_unit=kmh">
                km/h
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="windspeed_unit=ms"
                name="windspeed-radio"
                type="radio"
              />
              <label className="m-1 mr-10" htmlFor="windspeed_unit=ms">
                m/s
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="windspeed_unit=mph"
                name="windspeed-radio"
                type="radio"
              />
              <label className="m-1 mr-10" htmlFor="windspeed_unit=mph">
                mph
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="windspeed_unit=kn"
                name="windspeed-radio"
                type="radio"
              />
              <label className="m-1" htmlFor="windspeed_unit=kn">
                kn
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex flex-col items-center">
          <label>Precipitation Unit</label>
          <div className="flex">
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="precipitation_unit=mm"
                name="precipitation-radio"
                type="radio"
              />
              <label className="m-1 mr-10" htmlFor="precipitation_unit=mm">
                Milimeter
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="custom-checkbox"
                id="precipitation_unit=inch"
                name="precipitation-radio"
                type="radio"
              />
              <label className="m-1" htmlFor="precipitation_unit=inch">
                Inch
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">Timezone</div>
        <Dropdown
          options={{
            defaultValue: "UTC",
            menuOptions: ["UTC", "Australia/Sydney", "America/New_York"],
          }}
        />
      </div>
      <div>
        <div className="text-center">Past Days</div>
        <Dropdown
          options={{
            defaultValue: "0",
            menuOptions: ["0", "2", "5"],
          }}
        />
      </div>
      <div>Buttons</div>

      <input
        type="checkbox"
        // id={item.apiValue}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 custom-checkbox"
      />
      {/* <label htmlhtmlFor={item.apiValue} className="ml-2 text-sm font-medium text-gray-900 ">
        {item.value}
      </label> */}
    </div>
  );
};

export default SettingsMenu;
