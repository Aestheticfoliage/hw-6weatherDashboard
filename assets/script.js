var selCityEl = document.querySelector("#selCity");
var baseUrl = "http://api.openweathermap.org/";
var apikey = "103bb6101110fbb5a22cbbc804eea90b";
// var prevCityLoc = document.querySelector("");
//var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=${"lat"}&lon=${"lon"}&exclude={part}&appid={API key}";
// let geoCode = https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}appid=);
//var dropDownEl = document.getElementById("dropdown-menu");
var setHomeCityEl = "Atlanta";
console.log(setHomeCityEl); 
var setHomeStateEl = "ga";
//var prevCityLocEl = document.querySelector("#previouslySearched");
var citySearchEl = document.querySelector("#city-search");
var geo = '${"baseUrl"}/geo/${"selCity"},US&1,$appid=${"apikey"}';
var day = document.querySelector("#weather-day-date");
//var temp = document.queryselector("#weather-day-temp");
//var humidity = document.queryselector("#weather-day-humidity");
//var wind = document.querySelector("#weather-day-wind");
let searchValue = "";
let searchBtn = document.querySelector("#btn-search-weather");
var forecast5day = document.querySelector("#forecast5day");

//dropDownBtn.addEventListener("click", search);

// get the input Seach City
function search(searchValue) {
  searchValue = searchInput.value;
  console.log(searchValue);
  name(searchValue);
  lat(searchValue);
  lon(searchValue);
}
function get5day(data) {
  fetch(
    baseUrl +
      "/data/2.5/onecall?lat=" +
      data.lat +
      "&lon=" +
      data.lon +
      "&exclude=hourly,minutely,alerts&appid=" +
      apikey + "&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (apiData) {
      console.log("One Call APi Response is ", apiData);
      console.log("Current weather", apiData.current); 
      //current date 
      var date = new Date(apiData.current.date * 1000);
      console.log(date.toLocaleDateString("en-US")); 
      
; 
      // data.forEach(function(day, index){
      //   if (index === 0 || index > 5){
      //   return;
      // }
      // var dt = day.dt;
      // var date = moment(dt * 1000).format("L");
      // var temp  = day.temp.day;
      // var wind = day.humidity;
      // var icon = day.weather[0].icon;
      // var div = document.createElement("div")
      // var offsetClass = "";
      // if (index === 1){
      // offsetClass = "col-lg-offset-1";

      // }
      // div.classList = 'container';
      // div.innerHTML =
      // let cityEl = document.createElement("<h2>weather-day-city"</h2>);
    })
    .catch(function (error) {
      console.log("APi Error", error);
    });

  // <h2 id ="weather-day-city">City</h2>
  // <h2 id = "weather-day-date">Date</h2>
  // <img id ="weather-day-icon" src="" alt="">
  // </div>
  // <div>
  // <dl>
  //   <dt>Temp:</dt>
  //   <dd id ="weather-day-temp">Temp</dd>
  //   <dt>Wind:</dt>
  //   <dd id = "weather-day-wind">Wind</dd>
  //   <dt>Humidity:</dt>
  //   <dd id = "weather-day-humidity">Humidity</dd>
  //   <dt>UV Index:</dt>
  //   <dd id = "weather-day-uv">UV index</dd>
  // </div>
}
function getLoc(city) {
 
  console.log("Api url is ", baseUrl + "/geo/1.0/direct?q=" + city + ",US&limit=1&appid=" + apikey);
  fetch(baseUrl + "/geo/1.0/direct?q=" + city + ",US&limit=1&appid=" + apikey)
    .then((response) => response.json())
    .then((data) => {
      console.log("Geo location response", data[0]);
      document.getElementById("cityName").textContent =data[0].name; 
get5day(data[0]); 
    });
}

getLoc(setHomeCityEl); 

// getting the lat/lon from the geocode api call

// function geoCode(data) {
//   //dropDownEl.innerHTML = "";
//   fetch(https://api.openweathermap.org/geo/1.0/direct?q=atlanta,ga,US&1103bb6101110fbb5a22cbbc804eea90b)
//     .then((response) => response.json())
//   console.log
// }
// // passing in the value from the lat/lon geocode call to the OneCall

//Event listeners gohere 
searchBtn.addEventListener("click", function(){
  //get the user input
  console.log(citySearchEl.value);  
  //then call the geo location func 
  getLoc(citySearchEl.value); 
  // lastly , inside the geolo call the get5day function 
});