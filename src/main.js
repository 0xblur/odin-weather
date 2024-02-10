const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "59850b33857f4989ac2210258240602";

// DOM Stuff
const searchBox = document.querySelector("#searchbox");
searchBox.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		const location = searchBox.value;
		renderWeather(location);
	}
});

function renderWeather(location) {
	getCurrentLocation(location).then(renderLocation);
	getCurrentTemp(location).then(renderTemp);
	getCurrentHumidity(location).then(renderHumidity);
}
function renderLocation(location) {
	const city = document.querySelector("#city");
	const country = document.querySelector("#country");
	city.innerHTML = location.name;
	country.innerHTML = location.country;
}
function renderTemp(temp) {
	const currentTemp = document.querySelector("#current-temp");
	currentTemp.innerHTML = temp;
}

function renderHumidity(humidity) {
	const currentHumidity = document.querySelector("#current-humidity");
	currentHumidity.innerHTML = humidity;
}

// API Stuff
async function getCurrentData(location) {
	const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

async function getCurrentLocation(location) {
	const data = await getCurrentData(location);
	return data.location;
}

async function getCurrentTemp(location) {
	const data = await getCurrentData(location);
	return data.current.temp_c;
}

async function getCurrentHumidity(location) {
	const data = await getCurrentData(location);
	return data.current.humidity;
}
