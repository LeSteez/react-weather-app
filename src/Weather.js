import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

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

    function search() {
        const apiKey = "otb198570afbd1823c32f524f4467bab";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // search for a city
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        // hold city input change data
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>

                        <div className="col-3">
                            <input type="submit"
                                   value="Search"
                                   className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
        );

    } else {
        search();
        return "Loading..."
    }
}
