import React, { useState } from "react";
import "./WeatherApp.css";
import search_photo from "../Assets/search.png";
import cloud_photo from "../Assets/cloud.png";
import clear_photo from "../Assets/clear.png";
import drizzle_photo from "../Assets/drizzle.png";
import humidity_photo from "../Assets/humidity.png";
import rain_photo from "../Assets/rain.png";
import snow_photo from "../Assets/snow.png";
import wind_photo from "../Assets/wind.png";

const WeatherApp = () => {
  let api_key = "8c76aabef859dad297b8a9c506a8ba68";
  const [wicon, setWicon] = useState(cloud_photo);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let Url = `https://api.openweathermap.org/data/2.5/weather?zip=21532,eg&appid=${api_key}&q=${element[0].value}&units=Metric`;
    let response = await fetch(Url);
    let Data = await response.json();
    const humidity = document.getElementsByClassName("percent");
    const wind = document.getElementsByClassName("rate");
    const Temp = document.getElementsByClassName("Weather-temp");
    const location = document.getElementsByClassName("Weather-location");

    humidity[0].innerHTML = Data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(Data.wind.speed) + "km/h";
    Temp[0].innerHTML = Math.floor(Data.main.temp) + "°C";
    location[0].innerHTML = Data.name;

    if (Data.weather[0].icon === "01d" || Data.weather[0].icon === "01n") {
      setWicon(clear_photo);
    } else if (
      Data.weather[0].icon === "02d" ||
      Data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_photo);
    } else if (
      Data.weather[0].icon === "03d" ||
      Data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_photo);
    } else if (
      Data.weather[0].icon === "04d" ||
      Data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_photo);
    } else if (
      Data.weather[0].icon === "09d" ||
      Data.weather[0].icon === "09n"
    ) {
      setWicon(rain_photo);
    } else if (
      Data.weather[0].icon === "10d" ||
      Data.weather[0].icon === "10n"
    ) {
      setWicon(rain_photo);
    } else if (
      Data.weather[0].icon === "13d" ||
      Data.weather[0].icon === "13n"
    ) {
      setWicon(snow_photo);
    } else {
      setWicon(clear_photo);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div
            className="search_photo"
            onClick={() => {
              search();
            }}
          >
            <img src={search_photo} alt="" />
          </div>
        </div>
        <div className="Weather-image">
          <img src={wicon} alt="" className="icon" />
        </div>
        <div className="Weather-temp">24°C</div>
        <div className="Weather-location">Alexandria</div>
        <div className="Data-box">
          <div className="info">
            <img src={wind_photo} alt="" className="icon" />
            <div className="text-area">
              <div className="rate">15 km/h</div>
              <div className="title">Wind Speed</div>
            </div>
          </div>
          <div className="info">
            <img src={humidity_photo} alt="" />
            <div className="text-area">
              <div className="percent">64%</div>
              <div className="title">Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
