//todo양식 틀 toggle
const todo =document.querySelector("#todo");
const todoA = document.querySelector("#todo .plusBtn");

function moveToDoForm(){
	todo.classList.toggle("move");
	const body = document.querySelector("body");
	body.classList.add("styleAdd");
}

todoA.addEventListener("click",moveToDoForm);


//todoa만들기
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; //newTodo가 추가되는 곳


function saveToDos(){
localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));//string으로 만들어서 저장하기
}

function deleteToDo(e){
	const deleteLi = 	e.target.parentElement;
	deleteLi.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
	//deleteLi.id가 string으로 되어있어서
	saveToDos();
}

function paintToDo(newTodo){
	//li안에 span과 button을 만들고
	//그 span들은 사용자가 입력한 해야할 일들이 들어가고
	//그 li들을 toDoList안에 넣어준다.
	const li = document.createElement("li");
	li.id = newTodo.id;	//id명을 이용해 delete하기 위해 각 li에 id생성
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const btn = document.createElement("button")
	btn.innerText = "";
	btn.addEventListener("click",deleteToDo);
	li.appendChild(span);
	li.appendChild(btn);
	toDoList.appendChild(li);
}


function handleToDoSubmit(e){
	e.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newToDoObj = {	//object를 만들어서 저장. id는 랜덤숫자를 얻기위해
		text : newTodo,
		id : Date.now(),
	}
	toDos.push(newToDoObj); //새로생긴li를 newToDoObj에 추가
	paintToDo(newToDoObj);
	saveToDos();
	
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);//단순하게 만들었던 string을 배열로 저장
	toDos = parsedToDos; /*빈 배열에 새롭게 추가되는 것이 아니라 그전의 것도 넣기*/
	parsedToDos.forEach(paintToDo);
	//배열은 forEach를 가지고 있음!
}

 