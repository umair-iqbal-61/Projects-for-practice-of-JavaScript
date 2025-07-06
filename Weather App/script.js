const apiKey = "e90376ce61eb40d5a38143117250507"
const apiUrl = "https://api.weatherapi.com/v1/current.json?q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&key=${apiKey}`)
    var data = await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    if (data.current.condition.text === "Light rain") {
        weatherIcon.src = "images/light-rain.png"
    } else if (data.current.condition.text === "Moderate rain") {
        weatherIcon.src = "images/light-rain.png"
    } else if (data.current.condition.text === "Heavy rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.current.condition.text === "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.current.condition.text === "Cloudy") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.current.condition.text === "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if (data.current.condition.text === "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.current.condition.text.toLowerCase().includes("drizzle")) {
        weatherIcon.src = "images/drizzle.png"
    }

    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})