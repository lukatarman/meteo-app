import { useRecoilValue } from "recoil";
import { favoriteCitiesState } from "../../contexts/AppContext/index.js";
import LeftArrow from "../LeftArrow/left.arrow.js";

const FavoritesBar = ({ setFavoritesVisible }) => {
  const favoriteCities = useRecoilValue(favoriteCitiesState);

  const favoriteCitiesRender = favoriteCities.map((city) => {
    return <div className="text-2xl m-2">{city}</div>;
  });

  return (
    <div className="h-screen">
      <div className="w-72 xs:w-1/4 favorites-bar relative h-full bg-blue-200">
        <LeftArrow setFavoritesVisible={setFavoritesVisible} />
        <div className="flex flex-col pt-8">{favoriteCitiesRender}</div>
      </div>
    </div>
  );
};

export default FavoritesBar;
