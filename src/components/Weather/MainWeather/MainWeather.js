import React from "react";

const MainWeather = ({ temp, city }) => {
  return (
    <section className="w-4/6 text-white mx-auto ">
      <div className="mb-4">
        <h2 className="text-4xl">{city}</h2>
      </div>
      <div>
        <h2 className="text-8xl font-semibold">{temp}&deg;C</h2>
      </div>
    </section>
  );
};

export default MainWeather;
