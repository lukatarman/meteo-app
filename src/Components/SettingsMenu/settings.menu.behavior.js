import { useRecoilState, useResetRecoilState } from "recoil";
import { settingsState, favoriteCitiesState } from "../../contexts/AppContext/index.js";

const SettingsMenuBehavior = () => {
  const [settings, setSettings] = useRecoilState(settingsState);
  const resetSettingsState = useResetRecoilState(settingsState);
  const resetFavoritesState = useResetRecoilState(favoriteCitiesState);

  const handleRadioClick = (e) => {
    const newObj = {};

    newObj[e.target.attributes.settingtype.textContent] =
      e.target.attributes.settingunit.textContent;

    setSettings(Object.assign({}, settings, newObj));
  };

  const temperatureRadioOptions = {
    type: "Temperature",
    values: ["Celsius", "Fahrenheit"],
    onRadioClick: handleRadioClick,
  };

  const windSpeedRadioOptions = {
    type: "WindSpeed",
    values: ["km/h", "m/s", "mph", "kn"],
    onRadioClick: handleRadioClick,
  };

  const precipitationRadioOptions = {
    type: "Precipitation",
    values: ["mm", "inch"],
    onRadioClick: handleRadioClick,
  };

  const handleTimezoneChange = (value) => {
    setSettings(Object.assign({}, settings, { timezone: value }));
  };

  const handlePastDaysChange = (value) => {
    setSettings(Object.assign({}, settings, { pastDays: value }));
  };

  const timezoneDropdownOptions = {
    defaultValue: "UTC",
    menuOptions: ["UTC", "Australia/Sydney", "America/New_York"],
    onDropdownSelect: handleTimezoneChange,
  };

  const pastDaysDropdownOptions = {
    defaultValue: "0",
    menuOptions: ["0", "2", "5"],
    onDropdownSelect: handlePastDaysChange,
  };

  const revertButtonOptions = {
    value: "Revert settings to default",
    onButtonClick: resetSettingsState,
  };

  const deleteFavoritesButtonOptions = {
    value: "Delete Favorites",
    onButtonClick: resetFavoritesState,
  };

  return [
    timezoneDropdownOptions,
    pastDaysDropdownOptions,
    revertButtonOptions,
    deleteFavoritesButtonOptions,
    temperatureRadioOptions,
    windSpeedRadioOptions,
    precipitationRadioOptions,
  ];
};

export default SettingsMenuBehavior;
