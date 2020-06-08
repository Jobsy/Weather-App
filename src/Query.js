import React, { useState } from "react";
import { Fetch } from "./Fetch";
import { Card, Icon, Image, Label, Reveal } from "semantic-ui-react";

export const Query = () => {
  const [query, setQuery] = useState([]);

  const setLocation = () => {
    setQuery(document.getElementById("location").value);
  };

  return (
    <>
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
    </>
  );
};
