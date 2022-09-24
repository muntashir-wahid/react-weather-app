import React from "react";

const BasicWeatherInfo = ({ cityName, temp, feelsLike }) => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateStr = currentDate.toLocaleDateString("en-US", options);

  console.log(dateStr);
  return (
    <article className="col-span-full row-start-1 row-end-2">
      <h1 className="text-4xl">{cityName}</h1>
      <p className="text-2xl">{dateStr}</p>
      <h2 className="text-4xl font-semibold">{temp}&deg;C</h2>
      <p className="text-2xl">Feels like {feelsLike}&deg;C</p>
    </article>
  );
};

export default BasicWeatherInfo;
