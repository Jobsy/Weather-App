import React, { useState, useEffect } from "react";
import { AppBody } from "./AppBody";

import axios from "axios";

function Fetch() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState([""]);

  useEffect(() => {
    const fetchData = () => {
      {
        query
          .toString()
          .split(",")
          .map(
            (x, i) => (
              console.log(x + " joba", i),
              axios
                .get(
                  `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=fc9f9afc89ac3adf6ea79c6cecd34476&units=metric`
                )
                .then((res) => {
                  setData(res);
                })
            )
          );
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <input onChange={(e) => setQuery(e.target.value)} />

      {!data.data ? (
        "isLoading"
      ) : (
        <>
          <AppBody data={data} />
        </>
      )}
    </>
  );
}

export default Fetch;
