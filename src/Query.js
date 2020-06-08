import React, { useState } from "react";
import { Fetch } from "./Fetch";

export const Query = () => {
  const [query, setQuery] = useState([]);

  const setLocation = () => {
    setQuery(document.getElementById("location").value);
  };

  const showSubmitButton = (e) => {
    const submit = document.querySelector(".submitContainer");
    if (e.target.value) {
      submit.style.opacity = "1";
    } else {
      submit.style.opacity = "0";
    }
  };

  return (
    <div className="mainGroup">
      <div className="group1">
        <h1>Weather App</h1>
        <div className="inputContainer">
          <div className="input">
            <div className="inputContainer2">
              <input
                type="email"
                className="inputField"
                id="location"
                placeholder="Enter a location(state) or comma separated locations"
                onChange={showSubmitButton}
              />
              <div className="inputField-shadow"></div>
            </div>
            <div className="submitContainer">
              <input
                type="submit"
                className="submit-btn"
                onClick={setLocation}
              />
              <div className="submit-btn-shadow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="group2">
        {query
          .toString()
          .split(",")
          .map((locations, index) => (
            <div key={index}>
              <Fetch locations={locations} />
            </div>
          ))}
      </div>
    </div>
  );
};
