import React, { useState, useEffect } from "react";
import { AppBody } from "./AppBody";

import axios from "axios";

export const Fetch = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      console.log("inside: ", props);
      if (!props.locations) {
        return;
      } else {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.locations}&appid=fc9f9afc89ac3adf6ea79c6cecd34476&units=metric`
          )
          .then((res) => {
            setData(res);
          });
      }
    };
    fetchData();
  }, [props]);

  return (
    <>
      {!data.data ? (
        "Add a valid location(s) and hit enter"
      ) : (
        <>
          <AppBody data={data} />
        </>
      )}
    </>
  );
};
