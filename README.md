This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Weather App

This is a simple ReactJs App that utilises the free backend API built by [Openweathermap](https://openweathermap.org/).

The App when successfully launched can be used to check weather condition/reports of different states of any known country

## Installing locally

    $ git@github.com:Jobsy/Weather-App.git
    $ cd weather-app
    $ npm install

## Using the Application

    When the user opens application, the following API call is made:

    1) GET https://api.openweathermap.org/data/2.5/weather?q=${props.locations}&appid=fc9f9afc89ac3adf6ea79c6cecd34476&units=metric

    with content type header “application/json” JSON data of the format:

    Where props.locations = to the location passed into the input field

    The returned JSON look like:

            {
        "coord": {
            "lon": -122.08,
            "lat": 37.39
        },
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 282.55,
            "feels_like": 281.86,
            "temp_min": 280.37,
            "temp_max": 284.26,
            "pressure": 1023,
            "humidity": 100
        },
        "visibility": 16093,
        "wind": {
            "speed": 1.5,
            "deg": 350
        },
        "clouds": {
            "all": 1
        },
        "dt": 1560350645,
        "sys": {
            "type": 1,
            "id": 5122,
            "message": 0.0139,
            "country": "US",
            "sunrise": 1560343627,
            "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 420006353,
        "name": "Mountain View",
        "cod": 200
        }

    If the app is opened while the API requests are being made it show a suitable loading screen

## Structure and Naming

```
    weather-app
    |
    ├── cypress
    |
    ├── public
    |
    ├── src
    |
    ├── cypress.json
    |
    ├── package-lock.json
    |
    ├── package.json
    |
    └── README.md

```
