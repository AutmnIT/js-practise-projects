


async function checkWeather(city) {
    const WEATHER_API="053377386a91e08bd3e7001ade2f8a0f";
    // let url = 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}` +`&appid=${WEATHER_API}`+ `&units=metric`);
    const data = await response.json();
    return data;
    
}

async function putWeatherIcon(weather) {
    let weatherIcon = document.querySelector(".weatherIcon")
    if(weather === "Clouds"){
        weatherIcon.src = "./assets/Clouds.png";
    }
    else if(weather === "Drizzle"){
        weatherIcon.src = "./assets/Drizzle.png";
    }
    else if(weather === "Mist"){
        weatherIcon.src = "./assets/Mist.png";
    }
    else if(weather === "Rain"){
        weatherIcon.src = "./assets/Rain.png";
    }
    else if(weather === "Snow"){
        weatherIcon.src = "./assets/Snow.png";
    }
    else if(weather === "Thunderstrom"){
        weatherIcon.src = "./assets/Thunderstrom.png";
    }
    else{
        weatherIcon.src = "./assets/clear.png";
    }
}




async function showWeather(){
    document.querySelector(".search").addEventListener("click", async() => {
        const inputE1 = document.querySelector("input")
        const city = inputE1.value;
        if (!city) {
            alert("Please enter a city name");
            return;
        }
        const weatherData = await checkWeather(city);
        console.log(weatherData.main.temp);
        putWeatherIcon(weatherData.weather[0].main);
        document.querySelector(".temp").textContent = parseFloat(weatherData.main.temp ).toFixed(2);
        document.querySelector(".city").textContent = city;
        document.querySelector(".humidity").textContent = parseFloat(weatherData.main.humidity).toFixed(1)
        document.querySelector(".wind").textContent = (parseFloat(weatherData.wind.speed)*3.6).toFixed(2);
    })
    
}

showWeather();