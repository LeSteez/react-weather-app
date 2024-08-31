import './App.css';
import Weather from './Weather';

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Weather App</h1>
                <Weather defaultCity="Dallas" />
                <footer>
                    Coded by <a href="https://carreauxcreativ.com"
                                target="_blank" rel="noreferrer">Julicia</a> | Open-sourced on
                    <a
                    href="https://github.com/LeSteez/react-weather-app"
                    target="_blank" rel="noreferrer">Github</a>
                </footer>
            </div>
        </div>
    );
}
