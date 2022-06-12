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
function wichWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temp}º`;
}
function currentCity(resp) {
  let cityName = resp.data[0].name;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityName}`;
}

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "df0c7cf829e270572999fe0fa2793ff1";
  let unitTemp = "metric";
  let apiEndPoint = "https://api.openweathermap.org/";
  let apiUrltemp = `${apiEndPoint}data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unitTemp}`;
  let apiUrlcity = `${apiEndPoint}geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unitTemp}`;

  axios.get(apiUrltemp).then(wichWeather);
  axios.get(apiUrlcity).then(currentCity);
}
navigator.geolocation.getCurrentPosition(currentPosition);
function wichCity(response) {
  let temp = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temp}º`;
}
function changeCity(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#city-search");

  console.log(inputCity.value);

  let apiKey = "df0c7cf829e270572999fe0fa2793ff1";
  let unitTemp = "metric";
  let apiEndPoint = "https://api.openweathermap.org/";
  let apiUrlcity = `${apiEndPoint}data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=${unitTemp}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = inputCity.value;
  axios.get(apiUrlcity).then(wichCity);
  console.log(apiUrlcity);
}

let inputSearchCity = document.querySelector("#button-addon2");
inputSearchCity.addEventListener("click", changeCity);
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
