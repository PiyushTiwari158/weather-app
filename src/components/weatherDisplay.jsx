import React from "react";
import WeatherDataItem from "./weatherDetails";

const WeatherDisplay = ({ weatherImage, weather, temp, humidity, wind, date }) => (
  <div className="weather">
    <img src={weatherImage} alt="weather" />
    <div className="weather-type">{weather}</div>
    <div className="temp">{temp}</div>
    <div className="weather-date">
      <p>{date}</p>
    </div>
    <div className="weather-data">
      <WeatherDataItem label="Humidity" iconClass="fa-solid fa-droplet" value={humidity} />
      <WeatherDataItem label="Wind" iconClass="fa-solid fa-wind" value={wind} />
    </div>
  </div>
);

WeatherDisplay.defaultProps = {
  weatherImage: "",
  weather: "",
  temp: "--",
  humidity: "--",
  wind: "--",
  date: "--",
};

export default WeatherDisplay;
