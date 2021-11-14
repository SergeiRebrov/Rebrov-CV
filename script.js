function f1(a, b) {
	a = Math.ceil(a);
  b = Math.floor(b);
	return Math.random() * (a - b) + b;
}

function changeColor() {
	return `rgb(${f1(0,255)},${f1(0,255)},${f1(0,255)})`;  
}

document.querySelector('.b-7').onclick = function () {
	document.querySelector('.wrapper').style.background = changeColor();
}