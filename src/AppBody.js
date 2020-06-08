import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// export const AppBody = (props) => {
//   return (
//     <>
//       <div className="App">
//         <h1>Weather App</h1>
//         {console.log("props: ", props.data)}
//         Location: {`${props.data.data.name}, ${props.data.data.sys.country}`}{" "}
//         <br />
//         Coordinates:{" "}
//         {`{lon: ${props.data.data.coord.lon}, lat: ${props.data.data.coord.lat}}`}{" "}
//         <br />
//         Timezone: {`GMT ${props.data.data.timezone / 3600}`} <br />
//         Weather main: {`${props.data.data.weather[0].main}`} <br />
//         Weather discription: {`${props.data.data.weather[0].description}`}{" "}
//         <br />
//         Visibility: {`${props.data.data.visibility} mm`} <br />
//         Sunrise:{" "}
//         {` ${new Date(
//           props.data.data.sys.sunrise * 1000
//         ).toLocaleTimeString()} `}{" "}
//         <br />
//         Sunset:{" "}
//         {` ${new Date(
//           props.data.data.sys.sunset * 1000
//         ).toLocaleTimeString()} `}{" "}
//         <br />
//         Temperature: {`${props.data.data.main.temp} \xB0C`} <br />
//         Min-Temp: {`${props.data.data.main.temp_min} \xB0C`} <br />
//         Max-Temp: {`${props.data.data.main.temp_max} \xB0C`} <br />
//         Feels Like: {`${props.data.data.main.feels_like} \xB0C`} <br />
//         Pressure: {`${props.data.data.main.pressure} hPa`} <br />
//         Humidity: {`${props.data.data.main.humidity} %`} <br />
//         Wind Speed: {`${props.data.data.wind.speed} m/s`} <br />
//         Wind Degree: {`${props.data.data.wind.deg} \xB0`} <br />
//         <img
//           src={`http://openweathermap.org/img/w/${props.data.data.weather[0].icon}.png`}
//           alt="weather icon"
//         />
//       </div>
//     </>
//   );
// };
export const AppBody = (props) => (
  <>
    <Card>
      <Image
        src={`http://openweathermap.org/img/w/${props.data.data.weather[0].icon}.png`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{`${props.data.data.name}, ${props.data.data.sys.country}`}</Card.Header>
        <Card.Meta>
          <span className="date">
            <Icon name="compass outline" color="grey" />
            {` {lon: ${props.data.data.coord.lon}, lat: ${props.data.data.coord.lat}}`}{" "}
          </span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">{`GMT ${
            props.data.data.timezone / 3600
          }`}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">
            {`Visibility: ${props.data.data.visibility} mm`} <br />
          </span>
        </Card.Meta>

        <Card.Description>
          {`Main Weather:  ${props.data.data.weather[0].main}`}
        </Card.Description>
        <Card.Description>
          {`Weather Description: ${props.data.data.weather[0].description}`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="sun outline" color="yellow" />
          {` ${new Date(
            props.data.data.sys.sunrise * 1000
          ).toLocaleTimeString()} `}
        </a>
        <a>
          {` ${new Date(
            props.data.data.sys.sunset * 1000
          ).toLocaleTimeString()} `}
          <Icon name="sun" color="orange" />
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="thermometer empty" color="yellow" />
          {`Min-Temp: ${props.data.data.main.temp_min} \xB0C`}
        </a>
        <a>
          <Icon name="thermometer half" color="green" />
          {`Normal: ${props.data.data.main.temp} \xB0C`}
        </a>
        <a>
          <Icon name="thermometer full" color="red" />
          {`Max-Temp: ${props.data.data.main.temp_max} \xB0C`}
          {/* <i className="fa fa-list" style={{ color: "red" }}></i> */}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="weight" color="violet" />
          {`Pressure: ${props.data.data.main.pressure} hPa`}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="tint" color="brown" />
          {`Humidity: ${props.data.data.main.humidity} %`} <br />
        </a>
      </Card.Content>
      <Card.Meta>
        <span className="date">
          {`Wind Speed: ${props.data.data.wind.speed} m/s`}
        </span>
        <span className="date">
          {`Wind Degree: ${props.data.data.wind.deg} m/s`}
        </span>
      </Card.Meta>
    </Card>
  </>
);

//////////////
import React from "react";
import { Card, Icon, Image, Label, Reveal } from "semantic-ui-react";

export const AppBody = (props) => (
  <div className="appBody">
    <Reveal animated="move" instant>
      <Reveal.Content visible>
        <Card>
          <Image
            src={`http://openweathermap.org/img/w/${props.data.data.weather[0].icon}.png`}
            wrapped
            ui={false}
          />

          <Card.Content>
            <Card.Header>
              {`${props.data.data.name}, ${props.data.data.sys.country}`}
            </Card.Header>
            <div className="header1">
              <Card.Meta>
                <span className="date">
                  <Icon name="compass outline" color="grey" />
                  {` {lon: ${props.data.data.coord.lon}, lat: ${props.data.data.coord.lat}}`}{" "}
                </span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">{`GMT ${
                  props.data.data.timezone / 3600
                }`}</span>
              </Card.Meta>
            </div>
          </Card.Content>

          <Card.Content>
            <Label>Weather</Label>
            <br />
            <Card.Description>
              {`Main:  ${props.data.data.weather[0].main}`}
              <br />
            </Card.Description>
            <Card.Description>
              {`Description: ${props.data.data.weather[0].description}`}
              <br />
            </Card.Description>
            <Card.Description>
              {`Visibility: ${props.data.data.visibility} mm`} <br />
            </Card.Description>
          </Card.Content>

          <Card.Content>
            <Label>Wind</Label>
            <Card.Description>
              <div className="header1">
                <span className="date">
                  {`Speed: ${props.data.data.wind.speed} m/s`}
                </span>

                <span className="date">
                  {`Degree: ${props.data.data.wind.deg} \xB0C`}
                </span>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </Reveal.Content>
      <Reveal.Content hidden>
        <Card>
          <Card.Content extra>
            <div className="header1">
              <span>
                <Icon name="sun outline" color="yellow" />
                {` ${new Date(
                  props.data.data.sys.sunrise * 1000
                ).toLocaleTimeString()} `}
              </span>
              <span>
                {` ${new Date(
                  props.data.data.sys.sunset * 1000
                ).toLocaleTimeString()} `}
                <Icon name="sun" color="orange" />
              </span>
            </div>
          </Card.Content>

          <Card.Content extra>
            <Card.Meta>
              <Icon name="thermometer empty" color="yellow" />
              {`Min-Temp: ${props.data.data.main.temp_min} \xB0C`}
            </Card.Meta>
            <Card.Meta>
              <Icon name="thermometer half" color="green" />
              {`Normal: ${props.data.data.main.temp} \xB0C`}
            </Card.Meta>
            <Card.Meta>
              <Icon name="thermometer full" color="red" />
              {`Max-Temp: ${props.data.data.main.temp_max} \xB0C`}
            </Card.Meta>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="weight" color="violet" />
              {`Pressure: ${props.data.data.main.pressure} hPa`}
            </a>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="tint" color="brown" />
              {`Humidity: ${props.data.data.main.humidity} %`} <br />
            </a>
          </Card.Content>
        </Card>
      </Reveal.Content>
    </Reveal>
  </div>
);
