import DropdownMenu from "../DropdownMenu/dropdown.menu.js";
import DropdownBehavior from "./dropdown.behavior.js";

const Dropdown = ({ options }) => {
  const [
    handleDropdownClick,
    buttonValue,
    setButtonValue,
    isVisible,
    setIsVisible,
    dropdownRef,
  ] = DropdownBehavior(options);

  return (
    <div className="mb-5">
      <div>
        <button
          ref={dropdownRef}
          type="button"
          className="inline-flex w-96 justify-between rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropdownClick}
        >
          {buttonValue}
          <svg
            className="ml-2 h-5 w-5"
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
        <DropdownMenu
          options={options}
          setButtonValue={setButtonValue}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ) : null}
    </div>
  );
};

export default Dropdown;
