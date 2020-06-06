import React from "react";

export const AppBody = function (props) {
  return (
    <>
      {console.log("props: ", props)}
      {/* <img src={props.imgSrc} alt = "photoOfTheDay"/>
            <p>{props.paragrarph}</p> */}
      {/* {console.log("queryTypeof: ", typeof query)}
          {console.log("query ", query)}
          {console.log("query: ", query.arr.split(",")[1])}
          {console.log("query: ", query.toString().split(","))}
          {console.log("query: ", [...query.toString().split(",")])}
          {console.log("res: ", data)}
          {console.log("res2: ", data.data)} */}
      {/* Query: {query.toString().split(",")} <br />
      Query2: {[...query.toString().split(",")]} <br /> */}
      Location: {`${props.data.data.name}, ${props.data.data.sys.country}`}{" "}
      <br />
      Coordinates:{" "}
      {`{lon: ${props.data.data.coord.lon}, lat: ${props.data.data.coord.lat}}`}{" "}
      <br />
      Timezone: {`GMT ${props.data.data.timezone / 3600}`} <br />
      Weather main: {`${props.data.data.weather[0].main}`} <br />
      Weather discription: {`${props.data.data.weather[0].description}`} <br />
      Visibility: {`${props.data.data.visibility} mm`} <br />
      Sunrise:{" "}
      {` ${new Date(
        props.data.data.sys.sunrise * 1000
      ).toLocaleTimeString()} `}{" "}
      <br />
      Sunset:{" "}
      {` ${new Date(
        props.data.data.sys.sunset * 1000
      ).toLocaleTimeString()} `}{" "}
      <br />
      Temperature: {`${props.data.data.main.temp} \xB0C`} <br />
      Min-Temp: {`${props.data.data.main.temp_min} \xB0C`} <br />
      Max-Temp: {`${props.data.data.main.temp_max} \xB0C`} <br />
      Feels Like: {`${props.data.data.main.feels_like} \xB0C`} <br />
      Pressure: {`${props.data.data.main.pressure} hPa`} <br />
      Humidity: {`${props.data.data.main.humidity} %`} <br />
      Wind Speed: {`${props.data.data.wind.speed} m/s`} <br />
      Wind Degree: {`${props.data.data.wind.deg} \xB0`} <br />
      <img
        src={`http://openweathermap.org/img/w/${props.data.data.weather[0].icon}.png`}
      />
    </>
  );
};
