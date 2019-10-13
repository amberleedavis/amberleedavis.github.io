var currentDate = new Date();
var currentDateString;

// get day of week

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

// get month

var months= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString = currentDateString + ' ' + month;

currentDateString = currentDateString + ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;

// DEBUG:
console.log(currentDateString);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
