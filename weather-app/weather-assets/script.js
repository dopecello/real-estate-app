var theApi = "58e71a710a7324e282388fb23677dc25";
// var theApi2 = "04c2d9338307fab8303705523902071a";

var fetchgetWeather = function (city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      theApi
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};
var displayWeather = function (data) {
  console.log(data);
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Weather in: " + name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind: " + speed + " mph";
};
var findcity = function () {
  var city = document.querySelector(".search-input").value;
  console.log(city);
  fetchgetWeather(city);
  fetchGet5Day(city);
  
};

// var fetchGet5Day = function(city){
// fetch(
//     "https://api.openweathermap.org/data/2.5/forecast?q="
//     + city 
//     + "&units=imperial&appid="
//     + theApi2    
// )
// .then((response) => response.json())
// .then((data) => display5Day(data));
// }

// var display5Day = function (data){
// console.log(data)
// }


document.querySelector(".searchBtn").addEventListener("click", function () {
  findcity();
});
