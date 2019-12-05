var daysOfWeek= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var weekDayNumber = currentDate.getDay();

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString = currentDateString + currentDate.getDate();

//five day forecast

let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    // add one day to current day
    currentDay++;

    // if current day is greater than 6 (Saturday), reset it to 0 (Sunday)
    if (currentDay > 6) {
        currentDay = 0;
    }

  // assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);
    // const element = document.getElementById('day' + i);

    element.innerHTML = daysOfWeek[currentDay];
}

if(weekDayNumber === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0bb127cd265af9cd28fe92a7d0680e13&units=imperial';

fetch(apiForecastURL)
.then(
    (response) => response.json()
)
.then(
    (forecasts) => {
        //debug:
        console.log(forecasts);


            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);

        //loop through results:
        forecasts => {
            let dateString = 
            //get full year
            dateString.getFullYear() + '-' +

            //get month

            (dateString.getMonth() + 1) + '-' +

            //get day
            dateString.getDate();

            let hourString = '18:00:00'

            let counter  = 1;

            //loop through results
            forecasts.list.forEach();
            (forecast) => {
                if (forecast.dt_text.incldues(dateString) &&
                forecast.dt_text.includes(hourString)) {
                console.log(forecast.main.temp);

                  const element = document.getElementById(`temp${counter}`);
                  element.textContent = forecast.main.temp;

                  counter += 1;
                }
            }
        }
    }
);

