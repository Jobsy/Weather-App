import React, { useState } from "react";
import Fetch from "./Fetch";

import "./App.css";

function App() {
  const [query, setQuery] = useState([""]);
  query
    .toString()
    .split(",")
    .map((x, i) => console.log(x + " joba", i));

  return (
    <>
      <input onChange={(e) => setQuery(e.target.value)} />
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
