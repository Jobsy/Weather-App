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
          "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=fc9f9afc89ac3adf6ea79c6cecd34476"
        )
        .then((res) => {
          setData(res);

          // data = res;
        });
    };
    fetchData();
  }, [query]);

  return (
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
  );
}

export default App;
