function getFiveDayForecast(cityId){
    const today = new Date();
    var weekDayDate = today.getDay();
    //get name of the day
    var daysOfWeek = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday",
    "Friday",
    "Saturday"];
    
    var daysOfWeek = daysOfWeek[weekDayDate];

     const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0bb127cd265af9cd28fe92a7d0680e13&units=imperial';
    
    fetch(apiURL)
        .then(
            (response) => response.json()
        )
        .then(
            (forecasts) => {
    
                let hourString = "18:00:00";
                let counter = 1;
    
                //loop through results
                forecasts.list.forEach(
                    (forecast) => {
    
                        if (forecast.dt_txt.includes(hourString)) {
    
                            //Add temp
                            const tempElement = document.getElementById(`temp${counter}`);
                            tempElement.innerHTML = forecast.main.temp_max + '&deg';
                           
                            //date
                            let nextDate = new Date(forecast.dt_txt);

                             const dayElement = document.getElementById(`day${counter}`);
                             dayElement.innerHTML = daysOfWeek[nextDate.getDay()];
                             
                            //add image
                            const imageElement = document.getElementById(`img${counter}`);
                            imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' +
                            forecast.weather[0].icon + '.png');
                            imageElement.setAttribute('alt', forecast.weather[0].main);
    
                            //increment variable
                            counter += 1;
                        }
                    }
                )
            }
        )};