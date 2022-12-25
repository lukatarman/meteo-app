import { useRecoilState } from "recoil";
import { isVisibleState } from "../../contexts/CityDetailsContext/index.js";

const DropdownMenu = ({ options, setButtonValue }) => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  const handleItemClick = (option) => {
    setButtonValue(option);
    setIsVisible(!isVisible);
  };

  const renderOptions = options.menuOptions.map((option, index) => {
    return (
      <a
        key={index}
        href="#"
        className="text-gray-700 block px-4 py-2 text-sm  hover:bg-gray-100 text-gray-900"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
        onClick={() => {
          handleItemClick(option);
        }}
      >
        {option}
      </a>
    );
  });

  return (
    <div className="absolute">
      <div
        className="z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700"  */}
          {renderOptions}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
