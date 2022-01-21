// navigator.geolocation.getCurrentPosition()
const API_KEY = "0f5f4d4f05db73a5cf68b83471635aee";

function writeData(cityData, weatherData) {
    const weather = document.querySelector("#weather span:last-child");
    const city = document.querySelector("#weather span:first-child");
    weather.innerText = weatherData;
    city.innerText = cityData;
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json())
    .then(data => {
        writeData(data.name, `- ${data.main.temp}°C ${data.weather[0].main}`);
    });
    // fetch: calling url --> network에서 확인 
    // Func().then(get => func): 
    // function Func and then function func
    // .json(): get that json
}

function onGeoError() {
    writeData("Can't find you.", "No data for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// get geolocationPosition Object(input parameter)