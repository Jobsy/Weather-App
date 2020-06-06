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
          {console.log("query: ", query.toString().split(","))}
          <AppBody data={data} />
        </div>
      )}
    </>
  );
}

export default App;
