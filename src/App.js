import React, { useState } from "react";
import Fetch from "./Fetch";

import "./App.css";

function App() {
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
  );
}

export default App;
