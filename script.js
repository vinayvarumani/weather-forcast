// script.js

document.addEventListener('DOMContentLoaded', () => {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const weatherIconElement = document.getElementById('weather-icon');
    const weatherDescriptionElement = document.getElementById('weather-description');
    const refreshButton = document.getElementById('refresh-button');

    // Sample weather data
    const weatherData = {
        location: 'New York, NY',
        temperature: '25°C',
        icon: 'images/sunny.png',
        description: 'Sunny',
        forecast: [
            { day: 'Mon', icon: 'cloudy.png', temp: '20°C / 15°C' },
            { day: 'Tue', icon: 'rainy.png', temp: '18°C / 12°C' },
            { day: 'Wed', icon: 'sunny.png', temp: '22°C / 16°C' },
        ]
    };

    function updateWeather() {
        locationElement.textContent = weatherData.location;
        temperatureElement.textContent = weatherData.temperature;
        weatherIconElement.src = weatherData.icon;
        weatherDescriptionElement.textContent = weatherData.description;

        weatherData.forecast.forEach((forecast, index) => {
            document.getElementById(`day${index + 1}`).innerHTML = `
                <div class="date">${forecast.day}</div>
                <img src="${forecast.icon}" alt="${forecast.description}">
                <div class="temp">${forecast.temp}</div>
            `;
        });
    }

    refreshButton.addEventListener('click', updateWeather);

    updateWeather();
});
