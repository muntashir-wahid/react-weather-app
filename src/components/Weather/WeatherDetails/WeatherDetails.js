import React from "react";
import FeelsLikeInfo from "./FeelsLikeInfo";
import HumidityInfo from "./HumidityInfo";
import WindSpeedInfo from "./WindSpeedInfo";

const WeatherDetails = (props) => {
  return (
    <section className="w-4/6 text-white text-2xl font-medium mx-auto bg-slate-100/40 rounded-md px-4 py-4 flex flex-col align-middle justify-center gap-2 sm:flex-row sm:justify-evenly ">
      <FeelsLikeInfo feelsLike={props?.weatherDetails.main.feels_like} />
      <HumidityInfo humidity={props?.weatherDetails?.main.humidity} />
      <WindSpeedInfo windSpeed={props?.weatherDetails?.wind.speed} />
    </section>
  );
};

export default WeatherDetails;
