const SearchInput = () => {
  const autocompleteResults = () => {
    return (
      <ul class="bg-white border border-gray-100 w-full mt-2">
        <li class="pl-2 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
          <b>Gar</b>dameer - Italië
        </li>
      </ul>
    );
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="h-1/4"></div>
      <h1 className="text-2xl mb-4">Meteo App</h1>
      <div className="w-3/5">
        <div class="w-full inline-flex flex-col justify-center relative text-gray-500">
          <div class="relative">
            <input
              type="text"
              class="w-full p-2 pr-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
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
          {autocompleteResults()}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
