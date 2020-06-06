// import React from "react";
// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Fetch from "./Fetch";

import axios from "axios";
import "./App.css";

function App() {
<<<<<<< HEAD
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
=======
  const [query, setQuery] = useState([""]);
  // query
  //   .toString()
  //   .split(",")
  //   .map((x, i) => console.log(x + " joba", i));
>>>>>>> parent of 0611d91... delete unsued commented codes / App.js

  const myChangeHandler = (e) => {
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
        .map(
          (x, i) => (
            // <ObjectRow key={i} />
            console.log(x + " joba", i), (<Fetch ok={x} key={i} />)
          )
        )}
      {/* <Fetch ok={"london"} /> */}
    </>
>>>>>>> parent of 5fb3b37... Move query to a new component / App.js
  );
}

export default App;
