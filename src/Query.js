import React, { useState } from "react";
import { Fetch } from "./Fetch";

export const Query = () => {
  const [query, setQuery] = useState([]);

  const setLocation = () => {
    setQuery(document.getElementById("location").value);
  };

  return (
    <div class="mainGroup">
      <h1>Weather App</h1>
      <div>
        <input type="text" id="location" />
        <button onClick={setLocation}>Enter</button>
      </div>
      <div class="group">
        {query
          .toString()
          .split(",")
          .map((locations, index) => (
            <>
              <Fetch locations={locations} key={index} />
            </>
          ))}
      </div>
    </div>
  );
};
