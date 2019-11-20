const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0bb127cd265af9cd28fe92a7d0680e13&units=imperial';

fetch(apiWeatherURL)
.then(
    (response) => response.json()
)
.then(
    (currentWeather) => {
        //debug:
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp; 
        let windSpeed = currentWeather.wind.speed;
        let windChill;

        let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed , .16)) + 0.4275 
                * currentTemp * (Math.pow(windSpeed , .16));

        if (currentTemp < 50 && windSpeed > 3){
            windChill = Math.round(windChill);
        }

        if (windChill === 0){
            document.getElementById('windChill').innerHTML = N/A;
        }
        else {
            document.getElementById('windChill').innerHTML = windChill + '&deg';
        }
       
        document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
        document.getElementById("windSpeed").innerHTML = windSpeed + ' mph';
        document.getElementById('windChill').innerHTML = windChill + '&deg';
    }
);



