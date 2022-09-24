import React from "react";

const WeatherCondition = ({ icon, condition }) => {
  const iconLink = `./assets/icons/${icon}.png`;

  return (
    <article className="col-start-3 col-end-4 row-start-2 row-end-3 flex flex-col ">
      <img src={iconLink} alt="Weather condition icon" />
      <h3 className="text-center text-2xl">{condition}</h3>
    </article>
  );
};

export default WeatherCondition;
