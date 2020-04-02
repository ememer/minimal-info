import React, { useState, useEffect } from "react";
import useCoords from "./Geoloc";

const Weather = () => {
  const [weather, setWeather] = useState(false);
  const [lng, lat] = useCoords();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&uk&APPID=326c20ad89edda252ce2407ea84a8e32`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWeather(data);
      });
  }, [lng, lat]);

  if (weather === false)
    return (
      <div className={"weather_box"}>
        <h1>Pobieranie danych pogodowych</h1>
      </div>
    );
  return (
    <div className={"weather_box"}>
      <section className={"weather_section"}>
        <h1>Dzisiaj:</h1>
        <div className={"weather_temp"}>
          {Math.floor(weather?.main?.temp)}°C
        </div>
      </section>
      <div className={"weather_tempDifference"}>
        <div className={"min_temp"}>
          min: {Math.floor(weather?.main?.temp_min)}°C
        </div>
        <div className={"temp_separ"}></div>
        <div className={"max_temp"}>
          max: {Math.floor(weather?.main?.temp_max)}°C
        </div>
      </div>
      <div className={"weather_location"}>{weather?.name}</div>
    </div>
  );
};

export default Weather;
