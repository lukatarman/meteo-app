const CloseButton = ({ setIsVisible }) => {
  const handleButtonClick = () => {
    console.log("clicked");
    console.log(setIsVisible);
    setIsVisible(false);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 absolute top-0 right-0 cursor-pointer"
      onClick={handleButtonClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default CloseButton;
