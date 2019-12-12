const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0bb127cd265af9cd28fe92a7d0680e13&units=imperial';

fetch(apiURL)
.then(
    (response) => response.json()
)
.then(
    (currentWeather) => {
        //debug:
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp;
        let currentImageIcon = currentWeather.weather[0].icon;
        let currentImage = 'https://openweathermap.org/img/w/'
         + currentImageIcon 
         + '.png';

        document.querySelector('#current-temp')
            .textContent = currentTemp;
            
        document.querySelector('#imagesrc')
            .textContent = currentImage;

        document.querySelector('#weather-icno')
            .setAttribute('src', currentImage);
    }
)

