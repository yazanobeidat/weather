
function onChangeLocation() {

  const selectedCity = document.getElementById("locations").value;

  getWeatherForCity(selectedCity)

  document.getElementById("city").innerHTML= ${selectedCity}

}



window.onload = function () {

    getWeatherForCity("Amman")
    document.getElementById("city").innerHTML= 'Amman'
}


function getWeatherForCity(name){
    var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Async
//HTTP -> Request - > Response - [status code 200, contentType application-json', ]
fetch(`http://api.openweathermap.org/data/2.5//weather?q=${name}&lang=en&Mode=json&appid=3560a04ff4f4afcc64ab25a7ca101ce1&units=metric`, requestOptions)
  .then(response => response.text())
  .then(result => updateUIForecast(result))
  .catch(error => console.log('error', error));
}

function updateUIForecast(jsonString) {
   const data = JSON.parse(jsonString)
   const temp = data.main.temp
   const humidity = data.main.humidity
   const windSpeed = data.wind.speed
   const pressure= data.main.pressure
   const monthTime = formattedDate
   const dayTime = getDayName()


   document.getElementById("temp").innerText = ${temp}
   document.getElementById("humidity").innerText = ${humidity}
   document.getElementById("windspeed").innerText = ${windSpeed}
   document.getElementById("pressure").innerText = ${pressure}
   document.getElementById("monthTime").innerHTML = ${monthTime}
   document.getElementById("dayTaim").innerHTML = ${dayTime}
 
}


const date = new Date();
const formattedDate = date.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
}).replace(/ /g, '-');
console.log(formattedDate);


function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
}
console.log(getDayName());