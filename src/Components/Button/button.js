const Button = ({ options }) => {
  return (
    <button
      type="button"
      onClick={options.onButtonClick}
      className="w-64 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {options.value}
    </button>
  );
};

export default Button;
