import Dropdown from "../Dropdown/dropdown.view.js";
import Button from "../Button/button.js";
import CloseButton from "../CloseButton/close.button.js";
import SettingsMenuRadio from "../SettingsMenuRadio/settings.menu.radio.js";
import SettingsMenuBehavior from "./settings.menu.behavior.js";

const SettingsMenu = ({ setIsVisible }) => {
  const [
    timezoneDropdownOptions,
    pastDaysDropdownOptions,
    revertButtonOptions,
    deleteFavoritesButtonOptions,
    temperatureRadioOptions,
    windSpeedRadioOptions,
    precipitationRadioOptions,
  ] = SettingsMenuBehavior();

  return (
    <div className="absolute top-0 w-full h-full bg-white flex flex-col items-center z-10">
      <CloseButton setIsVisible={setIsVisible} />
      <h1 className=" text-4xl my-5">Application Settings</h1>
      <div className="mb-5">
        <SettingsMenuRadio options={temperatureRadioOptions} />
      </div>
      <div className="mb-5">
        <SettingsMenuRadio options={windSpeedRadioOptions} />
      </div>
      <div className="mb-5">
        <SettingsMenuRadio options={precipitationRadioOptions} />
      </div>
      <div>
        <div className="text-center mb-3">Timezone</div>
        <Dropdown options={timezoneDropdownOptions} />
      </div>
      <div className="mb-5">
        <div className="text-center mb-3">Past Days</div>
        <Dropdown options={pastDaysDropdownOptions} />
      </div>
      <div className="flex justify-center">
        <Button options={revertButtonOptions} />
        <Button options={deleteFavoritesButtonOptions} />
      </div>
    </div>
  );
};

export default SettingsMenu;
