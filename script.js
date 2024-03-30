const apiKey= "d69013352e5b1e73f69602a20db8c3c2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkweather(city){ 
  const response= await fetch(apiUrl + city + `&appid=${apiKey} ` );

  if(response.status == 404){
    document.querySelector(".error").style.display = "block" ;
    document.querySelector(".weather").style.display = "none" ;
  }
  else{


  var data= await response.json() ;

  console.log(data);
  document.querySelector(".city").innerHTML = data.name ;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  document.querySelector(".weather").style.display = "block" ;
  document.querySelector(".error").style.display = "none" ;

  }

}


searchBtn.addEventListener("click", ()=> {
  checkweather(searchBox.value);
});


