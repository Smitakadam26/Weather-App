const city = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const cityname = document.querySelector(".city");
const temp = document.querySelector(".temp");
const img = document.querySelector(".Weather img");

const apikey ="fa563129ce2491579666513a7a58b5bb";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    cityname.innerHTML= data.name;
    temp.innerHTML=Math.round(data.main.temp) + "°C";
    if(data.weather[0].main === "Clouds"){
        img.src = "clouds.png";
    }
    else if(data.weather[0].main === "Rain"){
        img.src = "rain.png";
    }
    else if(data.weather[0].main === "Snow"){
        img.src = "snow.png";
    }
    else if(data.weather[0].main === "Wind"){
        img.src = "wind.png";
    }
    else if(data.weather[0].main === "Clear"){
        img.src = "clear.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        img.src = "drizzle.png";
    }
    else if(data.weather[0].main === "Humidity"){
        img.src = "humidity.png";
    }
    else if(data.weather[0].main === "Mist"){
        img.src = "mist.png";
    }
}

searchbtn.addEventListener("click",()=>{
    console.log(city.value);
    checkweather(city.value);
})
