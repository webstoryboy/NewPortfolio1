const clock = document.querySelector("h2#clock");


function getClock(){
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	const hourText = document.querySelector("#clock .hour");
	const MinText = document.querySelector("#clock .minute");
	const SecText = document.querySelector("#clock .seconds");
	hourText.innerText = `${hours}:`;
	MinText.innerText = `${minutes}`;
	SecText.innerText = `${seconds}`;
	const timeText = document.querySelector("#clock .text");
	let text = "AM";
	if(hours < 12){
		text = "AM";
	}else{
		text = "PM";
	}
	timeText.innerText = `${text}`;
}

getClock(); //website가 load되자마자 호출
setInterval(getClock,1000)

