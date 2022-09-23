import React from "react";

const Header = () => {
  const cityNameInputHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };

  return (
    <div className="flex justify-center py-3">
      <input
        type="text"
        name="city"
        placeholder="Some city..."
        className="text-white w-1/3 p-1 bg-transparent border border-white rounded-lg outline-none"
        onKeyUp={cityNameInputHandler}
      />
    </div>
  );
};

export default Header;
