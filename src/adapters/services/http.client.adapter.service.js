export const getParams = (selectedCity, weatherVariables = "", appSettings = "") => {
  const fixedLatitude = selectedCity.latitude.toString().slice(0, 5);
  const fixedLongitude = selectedCity.longitude.toString().slice(0, 5);

  const locationParams = `latitude=${fixedLatitude}&longitude=${fixedLongitude}`;
  const variablesParams =
    weatherVariables.values.length === 0
      ? ""
      : `&${weatherVariables.type}=${[...weatherVariables.values]}`;

  const settingsParams = addSettingsParams(appSettings);

  return locationParams + variablesParams + settingsParams;
};

const addSettingsParams = (appSettings) => {
  if (appSettings === "") return;

  let settingsParams = "";
  for (const property in appSettings.units) {
    if (includesDefaultValue(appSettings.units[property])) continue;

    settingsParams = settingsParams.concat(
      `&${property}_unit=${appSettings.units[property]}`
    );
  }

  for (const property in appSettings.dropdowns) {
    if (includesDefaultValue(appSettings.dropdowns[property])) continue;

    settingsParams = settingsParams.concat(
      `&${property}=${appSettings.dropdowns[property].replace("/", "%2F")}`
    );
  }

  return settingsParams;
};

const includesDefaultValue = (value) => {
  if (value === "celsius") return true;
  if (value === "km/h") return true;
  if (value === "mm") return true;
  if (value === "UTC") return true;
  if (value === "0") return true;
  return false;
};
