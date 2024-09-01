import React from 'react';
import axios from "axios";

export default function WeatherIcon(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    console.log(props);

    let city = props.city;
    let apiKey = "otb198570afbd1823c32f524f4467bab"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`

    axios.get(apiUrl).then(handleResponse);


    if (!props.icon_url) {
        return <div>No icon available</div>;
    }

    return (
        <div className="weatherIcon">
            <img
                src={props.icon_url}
                alt={props.icon}
            />
        </div>
    );
}
