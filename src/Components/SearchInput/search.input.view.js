const SearchInput = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="custom-height"></div>
      <h1>Meteo Weather App</h1>

      <div class="inline-flex flex-col justify-center relative text-gray-500">
        <div class="relative">
          <input
            type="text"
            class="p-2 pr-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
            placeholder="Search"
          />
          <svg
            class="w-4 h-4 absolute right-2.5 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
