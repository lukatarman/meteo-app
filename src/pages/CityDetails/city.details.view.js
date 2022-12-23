import { useParams } from "react-router-dom";

const CityDetails = () => {
  let { name } = useParams();

  return <div>City details #{name}</div>;
};

export default CityDetails;
