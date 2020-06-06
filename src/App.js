import React, { useState } from "react";
import Fetch from "./Fetch";

import "./App.css";

function App() {
<<<<<<< HEAD
  const [query, setQuery] = useState([""]);
  query
    .toString()
    .split(",")
    .map((x, i) => console.log(x + " joba", i));

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
=======
  const [query, setQuery] = useState([]);

  const myChangeHandler = () => {
    setQuery(document.getElementById("myText").value);
  };

  return (
    <>
      <div>
        <input type="text" id="myText" />
        <button onClick={myChangeHandler}>Enter</button>
      </div>
      {query
        .toString()
        .split(",")
        .map((x, i) => (
          <Fetch ok={x} key={i} />
        ))}
    </>
>>>>>>> parent of 5fb3b37... Move query to a new component / App.js
  );
}

export default App;
