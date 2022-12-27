import { useEffect, useState, useRef } from "react";

const DropdownBehavior = (options) => {
  const [buttonValue, setButtonValue] = useState(options.defaultValue);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (dropdownRef.current.contains(e.target)) return;
      setIsVisible(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsVisible(!isVisible);
  };

  return [
    handleDropdownClick,
    buttonValue,
    setButtonValue,
    isVisible,
    setIsVisible,
    dropdownRef,
  ];
};

export default DropdownBehavior;
