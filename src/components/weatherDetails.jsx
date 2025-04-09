import React from "react";

const WeatherDetails = ({ data, weatherImage, formattedDate }) => (
  <div className="weather">
    <img src={weatherImage} alt="weather-icon" />
    <div className="weather-type">
      {data.weather ? data.weather[0].main : null}
    </div>
    <div className="temp">
      {data.main ? `${Math.floor(data.main.temp)}°` : null}
    </div>
    <div className="weather-date">
      <p>{formattedDate}</p>
    </div>
  </div>
);

export default WeatherDetails;
