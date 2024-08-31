import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <img
                                src={props.data.icon_url}
                                alt={props.data.icon}
                            />
                        </div>

                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} />

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Feels like: {Math.round(props.data.feelslike)}%</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}