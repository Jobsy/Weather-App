import React, { useState } from "react";
import Fetch from "./Fetch";

import "./App.css";

function App() {
  const [query, setQuery] = useState([""]);
  query
    .toString()
    .split(",")
    .map((x, i) => console.log(x + " joba", i));

  return (
<<<<<<< HEAD
    <>
      {!data.data ? (
        "isLoading"
      ) : (
        <div className="App">
          <h1>Weather App</h1>
          {console.log("res: ", data)}
          {console.log("res2: ", data.data)}
          location: {`${data.data.name}, ${data.data.sys.country}`} <br />
          coordinates:{" "}
          {`{lon: ${data.data.coord.lon}, lat: ${data.data.coord.lat}}`} <br />
          Timezone: {`GMT ${data.data.timezone / 3600}`} <br />
          WeatherDiscription: {`${data.data.weather[0].description}`} <br />
          Sunrise:{" "}
          {` ${new Date(
            data.data.sys.sunrise * 1000
          ).toLocaleTimeString()} `}{" "}
          <br />
          Sunset:{" "}
          {` ${new Date(
            data.data.sys.sunset * 1000
          ).toLocaleTimeString()} `}{" "}
          <br />
          Temperature: {`${data.data.main.temp} \xB0C`} <br />
          Min-Temp: {`${data.data.main.temp_min} \xB0C`} <br />
          Max-Temp: {`${data.data.main.temp_max} \xB0C`} <br />
          Feels Like: {`${data.data.main.feels_like} \xB0C`} <br />
          Pressure: {`${data.data.main.pressure} hPa`} <br />
          Humidity: {`${data.data.main.humidity} %`} <br />
          Wind Speed: {`${data.data.wind.speed} m/s`} <br />
          Wind Degree: {`${data.data.wind.deg} \xB0`} <br />
          <img
            src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`}
          />
        </div>
      )}
    </>
=======
    <div className="App">
      <h1>Weather App</h1>
      {console.log("res: ", data)}
      {console.log("res2: ", data.data)}
      location: {`${data.data.name}, ${data.data.sys.country}`} <br />
      coordinates:{" "}
      {`{lon: ${data.data.coord.lon}, lat: ${data.data.coord.lat}}`} <br />
      Timezone: {`${data.data.timezone}`} <br />
      WeatherDiscription: {`${data.data.weather[0].description}`} <br />
      Temperature: {`${data.data.main.temp}`} <br />
      Min-Temp: {`${data.data.main.temp_min}`} <br />
      Max-Temp: {`${data.data.main.temp_max}`} <br />
      Feels Like: {`${data.data.main.feels_like}`} <br />
      Pressure: {`${data.data.main.pressure}`} <br />
      Humidity: {`${data.data.main.humidity}`} <br />
      Wind Speed: {`${data.data.wind.speed}`} <br />
    </div>
>>>>>>> parent of bcca15e... add tenary condition to handle handle undefine before component mounts / App.js
  );
}

export default App;
