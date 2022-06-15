//challange 01

function currentDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[now.getDay()];
  let today = document.querySelector(".weekDay");
  let hours = now.getHours();
  let minutes = now.getMinutes();

  today.innerHTML = `${weekDay}, ${hours}:${minutes}`;
  let dateMonth = document.querySelector(".dateMonth");
  let dayMonth = now.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  dateMonth.innerHTML = `${month}, ${dayMonth}`;
}
currentDate();

//challange 02

function currentPosition(position) {
  let apiKey = "df0c7cf829e270572999fe0fa2793ff1";
  let unitTemp = "metric";
  let apiEndPoint = "https://api.openweathermap.org/";
  let apiUrl = `${apiEndPoint}data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unitTemp}`;

  axios.get(apiUrl).then(wichCity);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
getCurrentLocation();

function wichCity(response) {
  document.querySelector("h1").innerHTML = `${Math.round(
    response.data.main.temp
  )}º`;
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function changeCity(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#city-search").value;

  let apiKey = "df0c7cf829e270572999fe0fa2793ff1";
  let unitTemp = "metric";
  let apiEndPoint = "https://api.openweathermap.org/";
  let apiUrlcity = `${apiEndPoint}data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=${unitTemp}`;

  axios.get(apiUrlcity).then(wichCity);
}

let inputSearchCity = document.querySelector("#search-form");
inputSearchCity.addEventListener("submit", changeCity);
console.log(inputSearchCity);
//challange 3
function temperatureConversionC(event) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "25º";
}

function temperatureConversionF(event) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "45º";
}

let temperatureC = document.querySelector("#celcius");
temperatureC.addEventListener("click", temperatureConversionC);
let temperatureF = document.querySelector("#fahrenheit");
temperatureF.addEventListener("click", temperatureConversionF);
