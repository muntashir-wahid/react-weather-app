import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import bgImage from "./assets/bg-image.jpg";
import MainWeather from "./components/Weather/MainWeather/MainWeather";

// Background Image
const backgroundImage = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const API_KEY = "2d99c77549ccb530397fc2298987df29";

const App = () => {
  // State slices
  const [weatherData, setWeatherData] = useState({});

  const submitedCityHandler = async (city) => {
    // Fetching Weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
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

  return (
    <div style={backgroundImage} className="h-screen">
      <Header onSubmitCity={submitedCityHandler} />
      <MainWeather temp={weatherData.main?.temp} city={weatherData?.name} />
    </div>
  );
};

export default App;
