import { Link } from "react-router-dom";
import FavoritesButton from "../FavoritesButton/favorites.button.view.js";
import SearchInputBehavior from "./search.input.behavior.js";

const SearchInput = () => {
  const [searchInput, onInputChange, searchResults, onItemClick] = SearchInputBehavior();

  const renderResults = searchResults.map((result, index) => {
    return (
      <ul key={index} className="bg-white border border-gray-100 w-full mt-1">
        <Link to={"/city/" + result.city}>
          <li
            className="pl-2 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
            onClick={() => {
              onItemClick(index);
            }}
          >
            <div>{result.city}</div>
            <div className="top-right-favorites">
              <FavoritesButton size={4} />
            </div>
          </li>
        </Link>
      </ul>
    );
  });

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="h-1/4"></div>
      <h1 className="text-2xl mb-4">Meteo App</h1>
      <div className="w-3/5">
        <div className="w-full inline-flex flex-col justify-center relative text-gray-500">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pr-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              placeholder="Search"
              value={searchInput}
              onChange={onInputChange}
            />
            <svg
              className="w-4 h-4 absolute right-2.5 top-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchResults && renderResults}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
