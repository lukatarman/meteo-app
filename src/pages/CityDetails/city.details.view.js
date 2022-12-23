import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getLocationDetails } from "../../adapters/http.client.adapter.js";
import { selectedCityState } from "../../contexts/CityDetailsContext/index.js";
import ViewDropdown from "../../Components/ViewDropdown/view.dropdown.view.js";

const CityDetails = () => {
  let { name } = useParams();

  const selectedCity = useRecoilValue(selectedCityState);

  useEffect(() => {
    getLocationDetails(name);
  });

  return (
    <div>
      <div>Metorologic data for {name}</div>
      <ViewDropdown />
    </div>
  );
};

export default CityDetails;
