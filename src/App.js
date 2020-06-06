<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> parent of 5fb3b37... Move query to a new component / App.js
  );
}

export default App;
