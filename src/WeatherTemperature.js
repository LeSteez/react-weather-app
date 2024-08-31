import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('fahrenheit');

    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    if (unit === 'celsius') {
        let celsius = (props.celsius * 5) / 9 - 32;
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(celsius)}</span>
            <span className="unit">
                    <a href="/" onClick={showFahrenheit}>
                        °F
                    </a> |{" "}
                °C
            </span>
        </div>
    );
} else {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">
                °F |{" "}
                    <a href="/" onClick={showCelsius}>
                    °C
                </a>
            </span>
            </div>
        )
    }
}