import React from "react";
import Header from "./components/Header/Header";
import bgImage from "./assets/bg-image.jpg";

// Background Image
const backgroundImage = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const API_KEY = "2d99c77549ccb530397fc2298987df29";

const App = () => {
  const submitedCityHandler = async (city) => {
    console.log(city);

    // Fetching Weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div style={backgroundImage} className="h-screen">
      <Header onSubmitCity={submitedCityHandler} />
    </div>
  );
};

export default App;
