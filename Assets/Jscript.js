const rootUrl= "https://api.openweathermap.org";
const apiKey =  "f885ddf92553a57f02915d86bcafe031"
let cityName = "London";
let limit = 5;
let lat;
let lon;

const cityForm=document.querySelector("#search-city")
cityForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(event)
    console.log(event.target)

    


   function getcity() {
    let cityUrl = `${rootUrl}/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;
    fetch(cityUrl)
    .then(function (res) {
        return res.json();
    })
.then(function (data) {
        console.log(data, "City");
     lat = data[0].lat
     lon = data[0].lon
    console.log(lat, lon)
   // getForecast();
});
   }

function getForecast(lat,lon) {
    let forecastURL = `${rootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(forecastURL)
    .then(function (res) {
        return res.json();

    })
.then(function (data) {
    console.log(data, "FORECAST");
    getcity()
});
}
getcity()


