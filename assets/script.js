var selCityEl = document.querySelector("#selCity");
var baseUrl = "http://api.openweathermap.org/";
var apikey = "103bb6101110fbb5a22cbbc804eea90b";
// var prevCityLoc = document.querySelector("");
//var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=${"lat"}&lon=${"lon"}&exclude={part}&appid={API key}";
// let geoCode = https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}appid=);
//var dropDownEl = document.getElementById("dropdown-menu");
var setHomeEl = "Atlanta,ga";
var prevCityLocEl = document.queryselector("#previouslySearched");
var citySearchEl = document.querySelector("#city-search");
var geo = '${"baseUrl"}/geo/${"selCity"},US&1,$appid=${"apikey"}';
var day = document.querySelector("#weather-day-date");
var temp = document.queryselector("#weather-day-temp");
var humidity = document.queryselector("#weather-day-humidity");
var wind = document.querySelector("#weather-day-wind");
let searchValue = "";
let searchBtn = document.queryselector();
var forecast5day = document.querySelector("#forecast5day");
searchBtn.addEventListener("click",search);

// get the input Seach City
function search(searchValue){
  searchValue = searchInput.value;
  console.log(searchValue);
  name(searchValue);
  lat(searchValue);
  lon(searchValue);

}
function get5day(data){
  forecast5day
  f
}
function getLoc(){
  var obj = {};
  fetch(baseUrl + "/geo/1.0/direct?q=" + setHomeEl + ",US&1&" + apikey)
  .then((response) => response.json())
  console.log
}

// getting the lat/lon from the geocode api call

// function geoCode(data) {
//   //dropDownEl.innerHTML = "";
//   fetch(https://api.openweathermap.org/geo/1.0/direct?q=atlanta,ga,US&1103bb6101110fbb5a22cbbc804eea90b)
//     .then((response) => response.json())
//   console.log
// }
// // passing in the value from the lat/lon geocode call to the OneCall
;

  
