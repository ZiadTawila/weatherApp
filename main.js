 const apikey="c01b53ca93534c8caa8230247263010";
        
        const searchBox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weather_Icon=document.querySelector(".weather-icon");
        async function checkWeather(city){
            const apiurl=`https://api.weatherapi.com/v1/current.json?key=c01b53ca93534c8caa8230247263010&q=${city}`;
            const response = await fetch ( apiurl);

            if(!response.ok){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none"
            }
            else{
            var data= await response.json();
            

            document.querySelector(".city").innerHTML=data.location.name;
            document.querySelector(".temp").innerHTML= Math.round(data.current.temp_c)  + "°c";
            document.querySelector(".humidity").innerHTML=data.current.humidity + "%";
            document.querySelector(".wind").innerHTML=data.current.wind_kph + "km/h";

            if(data.current.condition.text.toLowerCase().includes("cloud") ||
             data.current.condition.text.toLowerCase().includes("partly cloudy") || 
             data.current.condition.text.toLowerCase().includes("cloudy")){
                weather_Icon.src="images/clouds.png";
            }
            else if(data.current.condition.text.toLowerCase().includes("clear")){
                weather_Icon.src="images/clear.png";
            }
            else if(data.current.condition.text.toLowerCase().includes("rain")){
                weather_Icon.src="images/rain.png";
            }
            else if(data.current.condition.text.toLowerCase().includes("drizzle")){
                weather_Icon.src="images/drizzle.png";
            }
            else if(data.current.condition.text.toLowerCase().includes("mist")){
                weather_Icon.src="images/mist.png";
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
    }

        searchbtn.addEventListener('click', ()=>{
            checkWeather(searchBox.value);
        })
        searchBox.addEventListener("keydown", (event) => {
             if (event.key === "Enter") {
            checkWeather(searchBox.value);
            }
        });
