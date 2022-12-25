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
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl my-5">Metorologic data for {name}</h1>
        <Dropdown options={dropdownOptions} />
      </div>
    </div>
  );
};

export default CityDetails;
