var geo = 0;
function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        geo++;
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        if (count == 0) {
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts&appid=${api_key}`;
            fetchWeather(url);
        }
        if (count == 1) {
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=alerts&appid=${api_key}`;
            fetchWeather(url);
        }

        let locationcity = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en";
        fetch(locationcity)
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.findcity(data));


    },
        function (error) {
            if (error.code == error.PERMISSION_DENIED)
                geo++;
            defaultlocation();
        });
}

function findcity(data) {
    document.getElementById("city-name").innerHTML = data.city;
}