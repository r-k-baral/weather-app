const apikey = "9d9ea666144fda1a73302287b3fa483a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherhide = document.querySelector(".weather");
const invalid = document.querySelector(".error")

async function checkweather(city) {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);

            if(response.status == 404){
                invalid.style.display ="block"
            }
           else{
             var data = await response.json();
            console.log(data);
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".cond").innerHTML = data.weather[0].main;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
               weatherhide.style.display ="block"; 

                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "img/clouds.png"
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "img/rain.png"
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "img/clear.png"

                }
                else if(data.weather[0].main == "Mist" , "Smoke"){
                    weatherIcon.src = "img/mist.png"

                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "img/drizzle.png"

                }
           }
}
 
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})
