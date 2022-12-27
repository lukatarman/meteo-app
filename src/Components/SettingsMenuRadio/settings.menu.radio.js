const SettingsMenuRadio = ({ options }) => {
  console.log(options);
  const renderRadios = options.values.map((value, index) => {
    return (
      <div className="flex items-center" key={index}>
        <input
          className="custom-checkbox"
          id={`${options.type.toLowerCase()}_unit=${value.toLowerCase()}`}
          settingtype={options.type.toLowerCase()}
          settingunit={value.toLowerCase()}
          name="temperature-radio"
          type="radio"
          onClick={options.onRadioClick}
        />
        <label
          className="m-1 mr-10"
          htmlFor={`${options.type.toLowerCase()}_unit=${value.toLowerCase()}`}
        >
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
