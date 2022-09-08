let weather = {
    "apiKey": "15d596f5221bbde8c76bd885700a366a",
    fetchWeather: function(lat , lon) {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="
        + lat + "&lon=" 
        + lon
        + "&units=imperial&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data){
        console.log(data)
    }
};