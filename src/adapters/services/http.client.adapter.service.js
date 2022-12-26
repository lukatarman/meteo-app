export const getParams = (city, options = "") => {
  const fixedLatitude = city.latitude.toString().slice(0, 5);
  const fixedLongitude = city.longitude.toString().slice(0, 5);

  const location = `latitude=${fixedLatitude}&longitude=${fixedLongitude}`;
  const variables =
    options.values.length === 0 ? "" : `&${options.type}=${[...options.values]}`;

  console.log(location + variables);

  return location + variables;
};
