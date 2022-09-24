import React from "react";
import BasicWeatherInfo from "./BasicWeatherInfo";
import OtherWeatherInfo from "./OtherWeatherInfo";
import SunInfo from "./SunInfo";
import WeatherCondition from "./WeatherCondition";

const MainWeather = ({ weatherData }) => {
  const { name, main, sys, weather, wind } = weatherData;

  return (
    <section className="max-w-lg  bg-gray-700 px-4 py-6  mx-auto text-white rounded-2xl grid grid-cols-3 grid-rows-3 gap-3">
      <BasicWeatherInfo
        cityName={name}
        temp={main.temp}
        feelsLike={main.feels_like}
      />
      <OtherWeatherInfo
        minTemp={main.temp_min}
        maxTemp={main.temp_max}
        humidity={main.humidity}
        windSpeed={wind.speed}
      />
      <WeatherCondition icon={weather[0].icon} condition={weather[0].main} />
      {/* <SunInfo sunRise={sys.sunrise} sunSet={sys.sunset} /> */}
    </section>
  );
};

export default MainWeather;
