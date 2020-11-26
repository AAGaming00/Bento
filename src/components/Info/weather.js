import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import conf from '../../config';
const { weather: config } = conf

function getWeather(setData) {
    let latitude = config.latitude;
    let longitude = config.longitude;
    const weather = {};
    weather.temperature = {};

    // Change to 'F' for Fahrenheit
    let tempUnit = config.tempUnit;

    const KELVIN = 273.15;
    // Use your own key for the Weather, Get it here: https://openweathermap.org/
    const key = config.key;

    // Get the Weather data
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);

    fetch(api)
        .then(r => r.json())
        .then(data => {
            let celsius = Math.floor(data.main.temp - KELVIN);
            weather.temperature.value = (tempUnit == 'C') ? celsius : (celsius * 9/5) + 32;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            setData(weather)
        })
}

const Weather = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        const interval = setInterval(getWeather, 5 * 60 * 1000, setData)
        getWeather(setData)
        return () => clearInterval(interval)
    }, [])
    console.log(data)
    return (
    <>
        <div className="sblock__weather">
            <div className="weather-icon">
                <img src={`./assets/icons/${config.iconPack}/${data.iconId || 'unknown'}.png`} />
            </div>
            <div className="temperature-value">
                <p>{data.temperature?.value.toString() || '-'}°<span className="g">{config.tempUnit.toUpperCase()}</span></p>
            </div>
            <div className="temperature-description">
                <p>{data.description}</p>
            </div>
        </div>
        {config.preloadIcons && ['01', '02', '03', '04', '09', '10', '11', '13', '50'].map(e => (
            ['d', 'n'].map(t => (
            <img className = 'displayNone' src={`/icons/${config.iconPack}/${e}${t}.png`} />
        ))
        ))}
    </>
    )
}

export default Weather;