var city = 0;

function getcityname() {
  let citydata = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("search-bar").value}&units=metric&appid=${api_key}`;
  fetchcity(citydata);
}

function fetchcity(citydata) {
  city++;
  fetch(citydata)
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => this.cityWeather(data));
}
function cityWeather(data) {
  if (count == 0) {
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=alerts&appid=${api_key}`;
    document.getElementById("city-name").innerHTML = data.name;
    fetchWeather(url);
  }
  if (count == 1) {
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=alerts&appid=${api_key}`;
    document.getElementById("city-name").innerHTML = data.name;
    fetchWeather(url);
  }
}
