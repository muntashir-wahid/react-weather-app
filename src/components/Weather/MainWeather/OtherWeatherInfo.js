import React from "react";

const OtherWeatherInfo = ({ minTemp, maxTemp, humidity, windSpeed }) => {
  return (
    <article className="col-start-1 col-end-3 row-start-2 row-end-3 self-center text-xl">
      <div className="mb-2 ">
        <span className="mr-2">Humidity</span>
        <span>{humidity}%</span>
      </div>

      <div>
        <span className="mr-2">Wind Speed</span>
        <span>{windSpeed}MPH</span>
      </div>
    </article>
  );
};

export default OtherWeatherInfo;
