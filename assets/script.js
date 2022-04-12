const moment = require("moment");

var selCity = document.querySelector("#selCity");
var baseUrl = "http://api.openweathermap.org"
const apikey = "103bb6101110fbb5a22cbbc804eea90b";
// var prevCityLoc = document.querySelector("");
// var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=${"lat"}&lon=${"lon"}&exclude={part}&appid={API key}";
// let geoCode = https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}appid=);
var dropDown = document.getElementById("dropdown-menu");
var prevCityLoc = "";
var setHome = "Atlanta,ga";
var prevCityLocEl = document.queryselector("#previouslySearched`");
var citySearchEl = document.querySelector("#city-search");
var geo = '${baseUrl}/geo,${"selCity"},US&1,${"apikey"}';
var day = document.querySelector("#weather-day-date");
var temp = document.queryselector("#weather-day-temp")
var humidity = document.queryselector("#weather-day-humidity")
var wind = document.querySelector("#")
let geoCode = (geo) => {
    fetch(geo),
    console.log


    
}


function getCity(){
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=atlanta,ga,US&limit=1&appid=103bb6101110fbb5a22cbbc804eea90b");

     
    then (console.log)
}
