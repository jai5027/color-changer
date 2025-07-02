let randomBtn = document.querySelector('.randomBtn');
let colorInput = document.querySelector('.colorInput');
let applyBtn = document.querySelector('.applyBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let container = document.querySelector('.container');

const colorArray = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green',
	                 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aquaaliceblue', 'antiquewhite',
	                'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue']

const generateColor = () =>{
	const randomNumber = Math.floor(Math.random()*colorArray.length);
	return (colorArray[randomNumber]);

}

const changeColor = (color) =>{
	container.style.backgroundColor = color;
	currentColorValue.innerText = color;
}


const handleRandomBtnClick = () => {
	let color = generateColor();
	changeColor(color);

}

const handleApplyBtnClick = () => {
      const color = colorInput.value;
      changeColor(color);

}

randomBtn.addEventListener('click', handleRandomBtnClick);
applyBtn.addEventListener('click', handleApplyBtnClick);

