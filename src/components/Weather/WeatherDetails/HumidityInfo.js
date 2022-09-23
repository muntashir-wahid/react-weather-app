import React from "react";

const HumidityInfo = (props) => {
  return (
    <div>
      <p>{props.humidity}%</p>
      <p>Humidity</p>
    </div>
  );
};

export default HumidityInfo;
