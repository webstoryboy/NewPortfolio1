const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const greetingText = document.querySelector('#greeting h1')
const removeBtn =  document.querySelector('#greeting button')

const date = new Date();
const hour = date.getHours();
let hello = "Hello, ";
if(hour < 12){
	hello = "Good Morning, ";
}else if(hour < 18){
	hello = "Good Afternoon, ";
}else{
	hello = "Good Evening, ";
}


const HIDDEN_CLASSNAME = "hidden";
const ACTIVE_CLASSNAME = "active";
const USERNAME_KEY = "userName";


function onLoginSubmit(e){
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME); //login되면 form display:none;
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY,username);
	paintGreeting(username);
	
}

loginForm.addEventListener("submit",onLoginSubmit);

function paintGreeting(username){
	greetingText.innerText = `${hello} ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
//	greeting.classList.add(ACTIVE_CLASSNAME);
	removeBtn.addEventListener("click",handleRemoveStorage);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
	
} else {
	//show the greeting 
	paintGreeting(saveUsername);
}

function handleRemoveStorage(){
	localStorage.removeItem(USERNAME_KEY);
	window.location.reload()
	
}

removeBtn.addEventListener("click",handleRemoveStorage)