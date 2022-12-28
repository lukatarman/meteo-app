const LeftArrow = ({ setFavoritesVisible }) => {
  const handleIconClick = () => {
    setFavoritesVisible(false);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-3 absolute top-0 right-0 cursor-pointer"
        onClick={handleIconClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
};

export default LeftArrow;
