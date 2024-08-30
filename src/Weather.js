import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <h1>Dallas</h1>
      <ul>
        <li>Thursday 7:00</li>
        <li>Sunny</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
            className="float-left"
          />
                <div className="float-left">
            <span className="temperature">88</span>
            <span className="unit">°F</span>
                </div>
        </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 54%</li>
            <li>Wind: 10 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
