const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


canvas.width = 300;
canvas.height = 300 ;

ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = "#2f2f2f";
ctx.fillStyle = "#2f2f2f";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting() {
	painting = false;
}

function startPainting() {
	painting = true;
}



//canvas에서 마우스가 움직이면
function onMouseMove(e) {
	const x = e.offsetX;
	const y = e.offsetY;
	if(!painting){	//경로를 만든다
		ctx.beginPath();	//경로 생성
		ctx.moveTo(x,y);	//선 시작 좌표
	}else {			//그린다
		ctx.lineTo(x,y);	//선 끝 좌표
		ctx.stroke();		//선 그리기
	}
	
}


function handleColorClick(e){
	const color = e.target.style.backgroundColor;
	ctx.strokeStyle = color; //선택한 컬러로 변경
	ctx.fillStyle = color;
}

function handleRangeChange(e){
	const size = e.target.value;
	ctx.lineWidth = size;
}

function handleModeClick()	{
	if(filling === true){
		filling = false;
		mode.innerText = "Fill";
		
	}else{
		filling = true;
		mode.innerText = "Paint"
	}
	
}

function handleCanvasClick() {
	if(filling) {
		ctx.fillRect(0,0,canvas.width,canvas.height);
	}
}

function handleRightClick(e){
	e.preventDefault();
}

function handleSaveImage(){
	const image = canvas.toDataURL("image/jpeg","1.0");
	const a = document.createElement("a");
	a.href = image;
	a.download = "PaintJS[🎨]";
	a.click()
}


if(canvas){
	canvas.addEventListener("mousemove",onMouseMove);
	canvas.addEventListener("mousedown",startPainting);
	canvas.addEventListener("mouseup",stopPainting);
	canvas.addEventListener("mouseleave",stopPainting);
	canvas.addEventListener("click",handleCanvasClick);
	canvas.addEventListener("contextmenu",handleRightClick)
}


//Array.from메소드는 object로부터 array를 만듬
Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));


if(range){
	range.addEventListener("input",handleRangeChange);
}

if(mode){
	mode.addEventListener("click",handleModeClick);
}

if(saveBtn){
	saveBtn.addEventListener("click",handleSaveImage);
}