import React from "react";

const SunInfo = ({ sunRise, sunSet }) => {
  const getTime = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const date2 = now - date;
    console.log(date2);
    // const timeStr = date2.toLocaleTimeString("en-US");
    // return timeStr;
  };

  console.log(getTime(sunRise), getTime(sunSet));
  // console.log(new Date());
  return (
    <article className="col-span-full row-start-3 row-end-4 self-center flex justify-between ">
      <div>
        <p>Sunrise</p>
        <p>5: 52</p>
      </div>
      <div>
        <p>Sunset</p>
        <p>5: 58</p>
      </div>
    </article>
  );
};

export default SunInfo;
