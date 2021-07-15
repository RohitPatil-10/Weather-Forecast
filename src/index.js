// const API_KEY=config.API_KEY;
var count = 0;
function myfunction() {
     let a = document.getElementById("check-signal").checked;

     if (a == true) {
          count = 1;

     }
     if (a == false) {
          count = 0;
     }
     if (city >= 1) {
          getcityname();
     }
     if (geo >= 1 && city < 1) {
          getLocation();
     }
}




          //This will feach the weather information through API
function defaultlocation() {
     let lat = -45.65;
     let lon = 15.23;
     if (count == 0) {
          url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts&appid=${API_KEY}`;
     }
     if (count == 1) {
          url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=alerts&appid=${API_KEY}`;
     }
     document.getElementById("city-name").innerHTML = "London";
     fetchWeather(url);
}


function fetchWeather(url) {
     fetch(url)
          .then((response) => {
               if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
               }
               return response.json();
          })
          .then((data) => this.manipulation(data));
}

function manipulation(data) {
     console.log(data);
     
     /*--------------Manipulayion Current Information--------------*/
     if (count == 0) {
          document.getElementById("temperature").innerHTML = Math.round(data.current.temp) + "°C";
     }
     if (count == 1) {
          document.getElementById("temperature").innerHTML = Math.round(data.current.temp) + "°F";
     }
     document.getElementById("weather-description").innerHTML = data.hourly[0].weather[0].description;
     let ch = data.hourly[0].weather[0].icon;

     if (ch == "01d") {
          document.getElementById("current-icon").src = "../public/img/day.png";
     }
     else if (ch == "01n") {
          document.getElementById("current-icon").src = "../public/img/night.png";
     }
     else if (ch == "02d") {
          document.getElementById("current-icon").src = "../public/img/day-cloud.png";
     }
     else if (ch == "02n") {
          document.getElementById("current-icon").src = "../public/img/night-cloud.png";
     }
     else if (ch == "03d" || ch == "03n") {
          document.getElementById("current-icon").src = "../public/img/cloud.png";
     }
     else if (ch == "04d" || ch == "04n") {
          document.getElementById("current-icon").src = "../public/img/broken-cloud.png";
     }
     else if (ch == "09d" || ch == "09n") {
          document.getElementById("current-icon").src = "../public/img/rain.png";
     }
     else if (ch == "10d") {
          document.getElementById("current-icon").src = "../public/img/day-rain.png";
     }
     else if (ch == "10n") {
          document.getElementById("current-icon").src = "../public/img/night-rain.png";
     }
     else if (ch == "11d" || ch == "11n") {
          document.getElementById("current-icon").src = "../public/img/thunder-cloud.png";
     }
     else if (ch == "13d" || ch == "13n") {
          document.getElementById("current-icon").src = "../public/img/snow.png";
     }
     else if (ch == "50d" || ch == "50n") {
          document.getElementById("current-icon").src = "../public/img/mist.png";
     }
     else {
          console.log("Icons Error");
     }




     /*For Responsive Design */
     if (ch == "01d") {
          document.getElementById("left-icon").src = "./public/img/day.png";
     }
     else if (ch == "01n") {
          document.getElementById("left-icon").src = "./public/img/night.png";
     }
     else if (ch == "02d") {
          document.getElementById("left-icon").src = "./public/img/day-cloud.png";
     }
     else if (ch == "02n") {
          document.getElementById("left-icon").src = "./public/img/night-cloud.png";
     }
     else if (ch == "03d" || ch == "03n") {
          document.getElementById("left-icon").src = "./public/img/cloud.png";
     }
     else if (ch == "04d" || ch == "04n") {
          document.getElementById("left-icon").src = "./public/img/broken-cloud.png";
     }
     else if (ch == "09d" || ch == "09n") {
          document.getElementById("left-icon").src = "./public/img/rain.png";
     }
     else if (ch == "10d") {
          document.getElementById("left-icon").src = "./public/img/day-rain.png";
     }
     else if (ch == "10n") {
          document.getElementById("left-icon").src = "./public/img/night-rain.png";
     }
     else if (ch == "11d" || ch == "11n") {
          document.getElementById("left-icon").src = "./public/img/thunder-cloud.png";
     }
     else if (ch == "13d" || ch == "13n") {
          document.getElementById("left-icon").src = "./public/img/snow.png";
     }
     else if (ch == "50d" || ch == "50n") {
          document.getElementById("left-icon").src = "./public/img/mist.png";
     }
     else {
          console.log("Icons Error");
     }



     document.getElementById("info-value-1").innerHTML = data.current.pressure + " hPa";
     document.getElementById("info-value-2").innerHTML = data.current.humidity + "%";
     document.getElementById("info-value-3").innerHTML = data.current.wind_speed + " m/s";
     document.getElementById("info-value-4").innerHTML = Math.round((data.hourly[0].pop) * 100) + "%";
     document.getElementById("info-value-5").innerHTML = unixTime(data.current.sunset, 9);



     /*---------------Manipulation of Hour section-----------------*/
     var imgid = ["condition-icon-1", "condition-icon-2", "condition-icon-3", "condition-icon-4", "condition-icon-5",
          "condition-icon-6", "condition-icon-7", "condition-icon-8", "condition-icon-9", "condition-icon-10",
          "condition-icon-11", "condition-icon-12", "condition-icon-13", "condition-icon-14", "condition-icon-15",
          "condition-icon-16", "condition-icon-17", "condition-icon-18", "condition-icon-19", "condition-icon-20",
          "condition-icon-21", "condition-icon-22", "condition-icon-23", "condition-icon-24"];

     var hourid = ["hour-time-1", "hour-time-2", "hour-time-3", "hour-time-4", "hour-time-5",
          "hour-time-6", "hour-time-7", "hour-time-8", "hour-time-9", "hour-time-10",
          "hour-time-11", "hour-time-12", "hour-time-13", "hour-time-14", "hour-time-15",
          "hour-time-16", "hour-time-17", "hour-time-18", "hour-time-19", "hour-time-20",
          "hour-time-21", "hour-time-22", "hour-time-23", "hour-time-24"];

     var hourtempid = ["hour-temp-1", "hour-temp-2", "hour-temp-3", "hour-temp-4", "hour-temp-5",
          "hour-temp-6", "hour-temp-7", "hour-temp-8", "hour-temp-9", "hour-temp-10",
          "hour-temp-11", "hour-temp-12", "hour-temp-13", "hour-temp-14", "hour-temp-15",
          "hour-temp-16", "hour-temp-17", "hour-temp-18", "hour-temp-19", "hour-temp-20",
          "hour-temp-21", "hour-temp-22", "hour-temp-23", "hour-temp-24"];

     let i = 0;
     hourid.forEach(function (id) {
          document.getElementById(id).innerHTML = unixTime(data.hourly[i].dt, 5);
          i++;
     });
     let j = 0;
     imgid.forEach(function (id) {
          document.getElementById(id).src = "http://openweathermap.org/img/wn/" + data.hourly[j].weather[0].icon + "@2x.png";
          j++
     });
     let k = 0;
     hourtempid.forEach(function (id) {
          if (count == 0) {
               document.getElementById(id).innerHTML = Math.round(data.hourly[k].temp) + "°C";
          }
          if (count == 1) {
               document.getElementById(id).innerHTML = Math.round(data.hourly[k].temp) + "°F";
          }

          k++;
     });



     /*---------------Manipulation of Daily section-----------------*/
     let boxobj = {
          sec1: ["box-data-0-1",
               "box-data-0-2",
               "box-data-0-3",
               "box-data-0-4", 
               "box-data-0-5"],
          sec2: ["box-data-1-1",
               "box-data-1-2",
               "box-data-1-3",
               "box-data-1-4",
               "box-data-1-5"],
          sec3: ["box-data-2-1",
               "box-data-2-2",
               "box-data-2-3",
               "box-data-2-4",
               "box-data-2-5"],
          sec4: ["box-data-3-1",
               "box-data-3-2",
               "box-data-3-3",
               "box-data-3-4",
               "box-data-3-5"],
          sec5: ["box-data-4-1",
               "box-data-4-2",
               "box-data-4-3",
               "box-data-4-4",
               "box-data-4-5"],
          sec6: ["box-data-5-1",
               "box-data-5-2",
               "box-data-5-3",
               "box-data-5-4",
               "box-data-5-5"],
          sec7: ["box-data-6-1",
               "box-data-6-2",
               "box-data-6-3",
               "box-data-6-4",
               "box-data-6-5"]
     }


     document.getElementById("box-data-0-1").innerHTML = unixTime(data.daily[1].dt, 1);
     document.getElementById("box-data-0-2").innerHTML = Math.round((data.daily[1].pop) * 100) + " %";
     document.getElementById("box-data-0-3").innerHTML = data.daily[1].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-0-4").innerHTML = data.daily[1].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-0-4").innerHTML = data.daily[1].temp.day + " °F";
     }
     document.getElementById("box-data-0-5").src = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png";


     document.getElementById("box-data-1-1").innerHTML = unixTime(data.daily[2].dt, 1);
     document.getElementById("box-data-1-2").innerHTML = Math.round((data.daily[2].pop) * 100) + " %";
     document.getElementById("box-data-1-3").innerHTML = data.daily[2].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-1-4").innerHTML = data.daily[2].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-1-4").innerHTML = data.daily[2].temp.day + " °F";
     }

     document.getElementById("box-data-1-5").src = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png";


     document.getElementById("box-data-2-1").innerHTML = unixTime(data.daily[3].dt, 1);
     document.getElementById("box-data-2-2").innerHTML = Math.round((data.daily[3].pop) * 100) + " %";
     document.getElementById("box-data-2-3").innerHTML = data.daily[3].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-2-4").innerHTML = data.daily[3].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-2-4").innerHTML = data.daily[3].temp.day + " °F";
     }
     document.getElementById("box-data-2-5").src = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png";


     document.getElementById("box-data-3-1").innerHTML = unixTime(data.daily[4].dt, 1);
     document.getElementById("box-data-3-2").innerHTML = Math.round((data.daily[4].pop) * 100) + " %";
     document.getElementById("box-data-3-3").innerHTML = data.daily[4].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-3-4").innerHTML = data.daily[4].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-3-4").innerHTML = data.daily[4].temp.day + " °F";
     }
     document.getElementById("box-data-3-5").src = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png";


     document.getElementById("box-data-4-1").innerHTML = unixTime(data.daily[5].dt, 1);
     document.getElementById("box-data-4-2").innerHTML = Math.round((data.daily[5].pop) * 100) + " %";
     document.getElementById("box-data-4-3").innerHTML = data.daily[5].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-4-4").innerHTML = data.daily[5].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-4-4").innerHTML = data.daily[5].temp.day + " °F";
     }
     document.getElementById("box-data-4-5").src = "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png";


     document.getElementById("box-data-5-1").innerHTML = unixTime(data.daily[6].dt, 1);
     document.getElementById("box-data-5-2").innerHTML = Math.round((data.daily[6].pop) * 100) + " %";
     document.getElementById("box-data-5-3").innerHTML = data.daily[6].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-5-4").innerHTML = data.daily[6].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-5-4").innerHTML = data.daily[6].temp.day + " °F";
     }
     document.getElementById("box-data-5-5").src = "http://openweathermap.org/img/wn/" + data.daily[6].weather[0].icon + "@2x.png";


     document.getElementById("box-data-6-1").innerHTML = unixTime(data.daily[7].dt, 1);
     document.getElementById("box-data-6-2").innerHTML = Math.round((data.daily[7].pop) * 100) + " %";
     document.getElementById("box-data-6-3").innerHTML = data.daily[7].humidity + " %";
     if (count == 0) {
          document.getElementById("box-data-6-4").innerHTML = data.daily[7].temp.day + " °C";
     }
     if (count == 1) {
          document.getElementById("box-data-6-4").innerHTML = data.daily[7].temp.day + " °F";
     }
     document.getElementById("box-data-6-5").src = "http://openweathermap.org/img/wn/" + data.daily[7].weather[0].icon + "@2x.png";

}




                             //Function to convert date and time from Unix to standard 


function unixTime(unixtime, a) {

     const milliseconds = unixtime * 1000;

     const dateObject = new Date(milliseconds);

     const humanDateFormat = dateObject.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric" }); //2019-12-9 10:30:15

     switch (a) {
          case 1:
               return dateObject.toLocaleString("en-US", { weekday: "long" }) // Monday

          case 2:
               return dateObject.toLocaleString("en-US", { month: "long" }) // December

          case 3:
               return dateObject.toLocaleString("en-US", { day: "numeric" }) // 9

          case 4:
               return dateObject.toLocaleString("en-US", { year: "numeric" }) // 2019

          case 5:
               return dateObject.toLocaleString("en-US", { hour: "numeric" }) // 10 AM

          case 6:
               return dateObject.toLocaleString("en-US", { minute: "numeric" }) // 30

          case 7:
               return dateObject.toLocaleString("en-US", { second: "numeric" }) // 15

          case 8:
               return dateObject.toLocaleString("en-US", { timeZoneName: "short" }) // 12/9/2019, 10:30:15 AM CST

          default: return humanDateFormat;
     }
}
