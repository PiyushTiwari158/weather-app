import React from "react";

const WeatherStats = ({ humidity, wind }) => (
  <div className="weather-data">
    <div className="humidity">
      <div className="data-name">Humidity</div>
      <i className="fa-solid fa-droplet"></i>
      <div className="data">{humidity}</div>
    </div>
    <div className="wind">
      <div className="data-name">Wind</div>
      <i className="fa-solid fa-wind"></i>
      <div className="data">{wind}</div>
    </div>
  </div>
);

WeatherStats.defaultProps = {
  humidity: "--%",
  wind: "-- km/h",
};

export default WeatherStats;
