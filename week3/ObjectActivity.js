// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};
console.log(`The current weather is ${currentWeather.temp}, the sky is ${currentWeather.sky} with some ${currentWeather.weather}`
);

// Object Activity 2
// Accessing the details key, Print another string that references each of the properties contained within details
let weatherDetails = "These are the weather details: ";
for(let detail of currentWeather.details) {
  weatherDetails += `${detail} `;
}
console.log(weatherDetails);
