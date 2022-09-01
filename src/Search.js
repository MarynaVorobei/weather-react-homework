import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e5ea83abd51b392f1217843d2e96ea3e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setMessage(
      <ul className="forecast shadow rounded">
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Feels like: {Math.round(response.data.main.feels_like)}°C</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>
          <img src={icon} alt="Weather description icon" />
        </li>
      </ul>
    );
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <input
                type="search"
                placeholder="Enter a city.."
                onChange={updateCity}
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <input type="submit" value="Search" className="btn btn-info" />
            </div>
          </div>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}
