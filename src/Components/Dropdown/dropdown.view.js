import { useState } from "react";
import DropdownMenu from "../DropdownMenu/dropdown.menu.js";
import { isVisibleState } from "../../contexts/CityDetailsContext/index.js";
import { useRecoilValue } from "recoil";
import DropdownBehavior from "./dropdown.behavior.js";

const Dropdown = ({ options }) => {
  const [buttonValue, setButtonValue] = useState(options.defaultValue);
  const isVisible = useRecoilValue(isVisibleState);

  const [handleDropdownClick, dropdownRef] = DropdownBehavior();

  return (
    <div>
      <div className="relative text-left">
        <div>
          <button
            ref={dropdownRef}
            type="button"
            className="inline-flex w-72 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleDropdownClick}
          >
            {buttonValue}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isVisible ? (
          <DropdownMenu options={options} setButtonValue={setButtonValue} />
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
