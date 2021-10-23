const API_KEY ="15680f7971a815b5d27c5b41770d11f2";

function onGeoSucces(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
		const weather = document.querySelector("#weather .weather");
		const temp = document.querySelector("#weather .temp")
		const City = document.querySelector("#weather .city");
//		weather.innerText = data.weather[0].main;
		temp.innerText = `${data.main.temp}℃`;
		City.innerText = data.name;
		;
	})
}
function onGeoError(){
	alert("위치를 알 수 없습니다. 날씨를 제공하지 못합니다.");
}
navigator.geolocation.getCurrentPosition(onGeoSucces,onGeoError);