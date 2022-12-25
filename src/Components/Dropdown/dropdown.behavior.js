import { useEffect, useRef } from "react";
import { isVisibleState } from "../../contexts/CityDetailsContext/index.js";
import { useRecoilState } from "recoil";

const DropdownBehavior = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (dropdownRef.current.contains(e.target)) return;
      setIsVisible(false);
    };

    document.body.addEventListener("click", onBodyClick);
  });

  const handleDropdownClick = () => {
    setIsVisible(!isVisible);
  };

  return [handleDropdownClick, dropdownRef];
};

export default DropdownBehavior;
