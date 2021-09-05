const textContainers = [...document.querySelectorAll(".text-container")];
const colorArray = ["#FFF", "#FFF", "#FFF"];
//const colorArray = ["#FD96B3", "#05B9CA", "#FEE050"];

textContainers.forEach(container => {
	let i = 0, j = 0;
	const textData = container.getAttribute("data-text");
	const textLength = textData.length;
	let textEl = document.createElement("span");
	textEl.classList.add("text");
	for (let index = 0; index < textLength; index++) {
		let charContainerEl = document.createElement("span");
		charContainerEl.classList.add("char-container");
		let charEl = document.createElement("span");
		charEl.classList.add("char");
		charEl.innerHTML = textData[index];
		charContainerEl.setAttribute(
			"style",
			`--animation-delay: ${j == textLength ? (j = 0) : j * 100}ms`
		);
		if (!textEl.classList.contains("shadow")) {
			charContainerEl.style.color = colorArray[i == colorArray.length ? (i = 0) : i];
		}
		charContainerEl.appendChild(charEl);
		textEl.appendChild(charContainerEl);
		i++, j++;
	}
	container.appendChild(textEl);
});