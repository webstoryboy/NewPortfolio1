function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //키 눌렀을 때 들어가는 효과 주기위해서 
	if(!audio) return;	//stop the function from running all together
	audio.currentTime = 0;	 //키를 누르면 다시 눌리는 시간까지 조금 걸리는데 그것을 바로 나오게 하기위해, 음악의 재생지점으로, 시작부분으로 바로 되감아준다.
	audio.play();	//실행
	key.classList.add('playing');
}


function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>  key.addEventListener("transitionend",removeTransition));
window.addEventListener("keydown",playSound);