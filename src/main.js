const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "59850b33857f4989ac2210258240602";

async function getCurrentWeather(location) {
	const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data.current;
}
