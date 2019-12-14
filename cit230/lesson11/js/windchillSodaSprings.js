const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=0bb127cd265af9cd28fe92a7d0680e13&units=imperial';

fetch(apiWeatherURL)
.then(
    (response) => response.json()
)
.then(
    (currentWeather) => {
        //debug:
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp; 
        let currently = currentWeather.weather[0].main;
        let windSpeed = currentWeather.wind.speed;
        let high = currentWeather.main.temp_max;
        let humidity = currentWeather.main.humidity;

        let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed , .16)) + 0.4275 
                * currentTemp * (Math.pow(windSpeed , .16));
    
                windChill = windChill.toFixed(1);

        if (currentTemp < 50 && windSpeed > 3){
            windChill = Math.round(windChill);
        }

        if (windChill === 0){
            document.getElementById('windChill').innerHTML = N/A;
        }
        else {
            document.getElementById('windChill').innerHTML = windChill + '&deg';
        }

    
       
        document.getElementById("currently").innerHTML = currently;
        document.getElementById("windSpeed").innerHTML = windSpeed + ' mph';
        document.getElementById('windChill').innerHTML = windChill + '&degf';
        document.getElementById("high").innerHTML = high + '&degf';
        document.getElementById("humidity").innerHTML = humidity + '%';


    }
);



