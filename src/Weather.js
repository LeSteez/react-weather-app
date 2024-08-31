import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            feelslike: response.data.temperature.feels_like,
            icon: response.data.condition.icon,
            icon_url: response.data.condition.icon_url
        })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
                            />
                        </div>

                        <div className="col-3">
                            <input type="submit"
                                   value="Search"
                                   className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>

                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>

                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="float-left">
                            <img
                                src={weatherData.icon_url}
                                alt={weatherData.icon}
                            />
                            </div>
                            <div className="float-right">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°F</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Feels like: {Math.round(weatherData.feelslike)}%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {

    const apiKey = "otb198570afbd1823c32f524f4467bab";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    }
}
