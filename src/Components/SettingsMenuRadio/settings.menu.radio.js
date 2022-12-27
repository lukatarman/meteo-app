import { useRecoilValue } from "recoil";
import { settingsState } from "../../contexts/AppContext/index.js";

const SettingsMenuRadio = ({ options }) => {
  const settings = useRecoilValue(settingsState);

  const lowerCaseType = options.type.toLowerCase();

  const renderRadios = options.values.map((value, index) => {
    const lowerCaseValue = value.toLowerCase();

    return (
      <div className="flex items-center" key={index}>
        <input
          className="custom-checkbox"
          id={`${lowerCaseType}_unit=${lowerCaseValue}`}
          settingtype={lowerCaseType}
          settingunit={lowerCaseValue}
          name={`${lowerCaseType}-radio`}
          type="radio"
          onClick={options.onRadioClick}
          defaultChecked={settings[lowerCaseType] === lowerCaseValue}
        />
        <label className="m-1 mr-10" htmlFor={`${lowerCaseType}_unit=${lowerCaseValue}`}>
          {value}
        </label>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-col items-center">
        <label>{options.type} Unit</label>
        <div className="flex">{renderRadios}</div>
      </div>
    </div>
  );
};

export default SettingsMenuRadio;
