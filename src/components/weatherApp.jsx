import React from "react";
import "./weatherApp.css";
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";

import SearchBar from "./searchBar";
import WeatherDetails from "./weatherDetails";
import WeatherStats from "./weatherStats";
import Loading from "./loader";
import NotFound from "./notFound";

const WeatherApp = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  React.useEffect(() => {
    const fetchDefaultData = async () => {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Ranchi&units=Metric&appid=${apiKey}`;
      const response = await fetch(url);
      const defaultData = await response.json();
      setData(defaultData);
      setLoading(false);
    };
    fetchDefaultData();
  }, []);

  const search = async () => {
    if (location.trim() !== "") {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`;
      const response = await fetch(url);
      const searchData = await response.json();
      if (searchData.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(searchData);
        setLocation("");
      }
      setLoading(false);
    }
  };

  const handleInput = (e) => setLocation(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") search();
  };

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const backgroundImages = {
    Clear: "linear-gradient(to right,#f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;
  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : backgroundImages["Clear"];

  const currentDate = new Date();
  const formattedDate = `${
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][currentDate.getDay()]
  }, ${currentDate.getDate()} ${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][currentDate.getMonth()]
  }`;

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage: backgroundImage.replace("to right", "to top"),
        }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{data.name}</div>
          </div>
          <SearchBar
            location={location}
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
            onSearch={search}
          />
        </div>

        {loading ? (
          <Loading />
        ) : data.notFound ? (
          <NotFound />
        ) : (
          <>
            <WeatherDetails
              data={data}
              weatherImage={weatherImage}
              formattedDate={formattedDate}
            />
            <WeatherStats
              humidity={data.main ? `${data.main.humidity}%` : "--%"}
              wind={data.wind ? `${data.wind.speed} km/h` : "-- km/h"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
