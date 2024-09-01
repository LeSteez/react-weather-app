import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [daily, setDaily] = useState(null);
    function handleResponse(response) {
        setDaily(response.data.daily);
        setLoaded(true);
    }

    if(loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {daily.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiKey = "otb198570afbd1823c32f524f4467bab"
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}