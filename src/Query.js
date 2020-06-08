import React, { useState } from "react";
import { Fetch } from "./Fetch";
import { Segment, Input, Button } from "semantic-ui-react";

export const Query = () => {
  const [query, setQuery] = useState([]);

  const setLocation = () => {
    setQuery(document.getElementById("location").value);
  };

  return (
    <div class="mainGroup">
      <div class="group1">
        <h1>Weather App</h1>
        {/* <div>
        <input type="text" id="location" />
        <button onClick={setLocation}>Enter</button>
      </div> */}
        <Segment>
          <Input id="location" inverted placeholder="Search..." />
          <Button content="Enter" onClick={setLocation} />
        </Segment>
      </div>
      <div class="group2">
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
