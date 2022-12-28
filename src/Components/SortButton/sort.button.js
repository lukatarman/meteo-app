import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { favoriteCitiesState } from "../../contexts/AppContext/index.js";

const SortButton = () => {
  const [favoriteCities, setFavoriteCities] = useRecoilState(favoriteCitiesState);
  const [isAscending, setIsAscending] = useState("");

  const handleSortClick = () => {
    const arrCopy = [...favoriteCities];

    setIsAscending(isAscending === "" ? true : !isAscending);

    const ascending = (a, b) => {
      if (a.city < b.city) return 1;
      if (a.city > b.city) return -1;
    };
    const descending = (a, b) => {
      if (a.city < b.city) return -1;
      if (a.city > b.city) return 1;
    };

    if (isAscending) arrCopy.sort(ascending);
    if (!isAscending) arrCopy.sort(descending);

    setFavoriteCities(arrCopy);
  };

  return (
    <div
      className="flex absolute top-0 left-0 m-3 cursor-pointer"
      onClick={handleSortClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
        />
      </svg>
      {/* <div className="px-2">Sort</div> */}
    </div>
  );
};

export default SortButton;
