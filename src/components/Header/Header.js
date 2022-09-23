import React, { useRef } from "react";

const Header = (props) => {
  const enterdCityRef = useRef("");
  const cityNameInputHandler = (event) => {
    if (event.key === "Enter") {
      const enteredCity = enterdCityRef.current.value;
      props.onSubmitCity(enteredCity);
      enterdCityRef.current.value = "";
    }
  };

  return (
    <div className="flex justify-center py-3 mb-24">
      <input
        type="text"
        name="city"
        placeholder="Enter location..."
        className="text-white w-1/3 p-1 bg-transparent border border-white rounded-lg outline-none"
        onKeyUp={cityNameInputHandler}
        ref={enterdCityRef}
      />
    </div>
  );
};

export default Header;
