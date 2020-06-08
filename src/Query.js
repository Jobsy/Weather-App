import React, { useState, useEffect } from "react";
import { Fetch } from "./Fetch";
import { Segment, Input, Button } from "semantic-ui-react";

export const Query = () => {
  const [query, setQuery] = useState([]);

  const setLocation = () => {
    setQuery(document.getElementById("location").value);
  };

  const showSubmitButton = (e) => {
    const submit = document.querySelector(".submit-container");
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
            <div className="input-container">
              <input
                type="email"
                className="input-field"
                id="location"
                placeholder="Enter a location(state) or comma separated locations"
                onChange={showSubmitButton}
              />
              <div className="input-field-shadow"></div>
            </div>
            <div className="submit-container">
              <input
                type="submit"
                className="submit-btn"
                onClick={setLocation}
              />
              <div className="submit-btn-shadow"></div>
            </div>
          </div>
        </div>
        {/* )} */}
        {/* <div>
        <input type="text" id="location" />
        <button onClick={setLocation}>Enter</button>
      </div> */}
        {/* <Segment>
          <Input id="location" inverted placeholder="Search..." />
          <Button content="Enter" onClick={setLocation} />
        </Segment> */}
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
