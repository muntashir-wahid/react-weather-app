import React from "react";

const OtherWeatherInfo = () => {
  return (
    <article className="col-start-1 col-end-3 row-start-2 row-end-3">
      <div>
        <span>Humidity</span>
        <span>90%</span>
      </div>
      <div>
        <span>Max Temperature</span>
        <span>32&deg;C</span>
      </div>
      <div>
        <span>Wind Speed</span>
        <span>2MPH</span>
      </div>
    </article>
  );
};

export default OtherWeatherInfo;
