import React from "react";
import BasicWeatherInfo from "./BasicWeatherInfo";
import OtherWeatherInfo from "./OtherWeatherInfo";
import SunInfo from "./SunInfo";
import WeatherCondition from "./WeatherCondition";

const MainWeather = ({ temp, city }) => {
  return (
    <section className="max-w-lg  bg-gray-700 px-4 py-6 mb-24  mx-auto text-white rounded-2xl grid grid-cols-3 grid-rows-3">
      <BasicWeatherInfo />
      <OtherWeatherInfo />
      <WeatherCondition />
      <SunInfo />
    </section>
  );
};

export default MainWeather;
