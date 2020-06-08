import React from "react";
import { Card, Icon, Image, Label, Reveal } from "semantic-ui-react";

export const AppBody = (props) => (
  <>
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
            <div cl>
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
  </>
);
