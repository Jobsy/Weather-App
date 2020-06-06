// import React from "react";
// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { AppBody } from "./AppBody";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState([""]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=fc9f9afc89ac3adf6ea79c6cecd34476&units=metric"
        )
        .then((res) => {
          setData(res);

          // data = res;
        });
    };
    fetchData();
  }, [query]);

  return (
    <>
      {/* <input value={query} onChange={(e) => setQuery(e.target.value)} /> */}
      <input
        // value={query}
        // onChange={(e) => setQuery({ arr: e.target.value })}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* {query
        .toString()
        .split(",")
        .map((x, i) =>
          // <ObjectRow key={i} />
          console.log(x + " joba", i)
        )} */}

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
  );
}

export default App;
