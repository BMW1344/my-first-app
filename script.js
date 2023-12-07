

document.getElementById("open-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.remove("open")
})



const data = [
    {
      "id": 1,
      "name": "Biarritz",
      "country": "FR",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 2,
      "name": "Moscow",
      "country": "RU",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 3,
      "name": "London",
      "country": "UK",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    }
  ]



var select = document.querySelector('select')
var precipitation = document.getElementById('precipitation')
var humidity = document.getElementById('humidity')
var wind = document.getElementById('wind')
var locationChoose = document.getElementById('locationChoose') 
var weatherCelsius = document.getElementById('weatherCelsius')
var weatherInfo = document.getElementById('weatherInfo')

select.addEventListener('change', setWeather);

function setWeather(){
  var choice = select.value

  if (choice === "Biarritz") { 
      precipitation.textContent = 
      `${data[0].days[0].precipitation}%`
      humidity.textContent = 
      `${data[0].days[0].humidity}%`
      wind.textContent = 
      `${data[0].days[0].wind} km/h`
      locationChoose.textContent =
      "Biarritz, FR" // ${data[0].name} показывается без country 
      weatherCelsius.textContent =
      `${data[0].days[0].temperature}°C`
      weatherInfo.textContent =
      `${data[0].days[0].weather}`

  } else if (choice === "Moscow") {
      precipitation.textContent =
      `${data[1].days[1].precipitation}%`
      humidity.textContent = 
      `${data[1].days[1].humidity}%`
      wind.textContent = 
      `${data[1].days[1].wind} km/h`
      locationChoose.textContent =
      "Moscow, RU"
      weatherCelsius.textContent =
      `${data[1].days[1].temperature}°C`
      weatherInfo.textContent =
      `${data[1].days[1].weather}`

  } else if (choice === "London") {
      precipitation.textContent =
      `${data[2].days[2].precipitation}%`
      humidity.textContent = 
      `${data[2].days[2].humidity}%`
      wind.textContent = 
      `${data[2].days[2].wind} km/h`
      locationChoose.textContent =
      "London, UK"
      weatherCelsius.textContent =
      `${data[2].days[2].temperature}°C`
      weatherInfo.textContent =
      `${data[2].days[2].weather}`

  } else {

  }
}
