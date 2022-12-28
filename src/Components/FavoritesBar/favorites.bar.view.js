import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { favoriteCitiesState } from "../../contexts/AppContext/index.js";
import SortButton from "../SortButton/sort.button.js";
import LeftArrow from "../LeftArrow/left.arrow.js";

const FavoritesBar = ({ setFavoritesVisible }) => {
  const favoriteCities = useRecoilValue(favoriteCitiesState);

  const favoriteCitiesRender = favoriteCities.map((city, index) => {
    return (
      <div className="hover:bg-gray-200" key={index}>
        <div>
          <Link to={`/city=${city.city}&latitude=${city.lat}&longitude=${city.lng}`}>
            <div className="text-2xl m-2">{city.city}</div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="h-screen">
      <div className="w-72 xs:w-1/4 favorites-bar relative h-full bg-gray-100">
        <SortButton />
        <LeftArrow setFavoritesVisible={setFavoritesVisible} />
        <div className="flex flex-col pt-12">{favoriteCitiesRender}</div>
      </div>
    </div>
  );
};

export default FavoritesBar;
