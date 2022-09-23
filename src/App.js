import React from "react";
import Header from "./components/Header/Header";
import bgImage from "./assets/bg-image.jpg";

const App = () => {
  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundImage} className="h-screen">
      <Header />
    </div>
  );
};

export default App;
