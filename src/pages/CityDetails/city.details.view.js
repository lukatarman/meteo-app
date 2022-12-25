import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getLocationDetails } from "../../adapters/http.client.adapter.js";
import { selectedCityState } from "../../contexts/CityDetailsContext/index.js";
import Dropdown from "../../Components/Dropdown/dropdown.view.js";

// todo
// Add/style JSX
// Modify ViewDropdown compoent, add dropdown
// Add Variables Component, add JSX

const CityDetails = () => {
  let { name } = useParams();

  const selectedCity = useRecoilValue(selectedCityState);

  useEffect(() => {
    getLocationDetails(name);
  });

  const dropdownOptions = {
    defaultValue: "Please Select View Type",
    menuOptions: ["Hourly View", "Daily View"],
  };

  return (
    <div>
      <div>Metorologic data for {name}</div>
      <Dropdown options={dropdownOptions} />
    </div>
  );
};

export default CityDetails;
