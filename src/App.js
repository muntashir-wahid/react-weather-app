import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import MainWeather from "./components/Weather/MainWeather/MainWeather";
import WeatherDetails from "./components/Weather/WeatherDetails/WeatherDetails";

// Background Image
const backgroundImage = {
  backgroundImage: `url(${"./assets/bg-image.jpg"})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const API_KEY = "2d99c77549ccb530397fc2298987df29";

const App = () => {
  // State slices
  const [weatherData, setWeatherData] = useState({});
  const [isValidLocation, setIsValidLocation] = useState("");

  const submitedCityHandler = async (city) => {
    try {
      setIsValidLocation("");
      // Fetching Weather data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Please Enter a valid location");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setIsValidLocation(error.message);
    }
  };

  useEffect(() => {
    // Get users current coords
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const lat = coords.latitude;
      const lon = coords.longitude;

      // Fetch user current location weather data

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    });
  }, []);

  // console.log(weatherData);
  return (
    <div style={backgroundImage} className="">
      <Header onSubmitCity={submitedCityHandler} />
      {weatherData.id && !isValidLocation && (
        <MainWeather weatherData={weatherData} />
      )}
      {/* {weatherData.id && !isValidLocation && (
        <WeatherDetails weatherDetails={weatherData} />
      )} */}
      {isValidLocation && (
        <p className="text-center text-4xl text-white">{isValidLocation}</p>
      )}
    </div>
  );
};

export default App;
