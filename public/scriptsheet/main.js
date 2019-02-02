
let numColor = 6
var color = [];
var colorPicked;
var colorDisplay = document.querySelector('#RGB')
var gameMode = document.querySelectorAll('.gameMode')
let msg = document.querySelector('#msg')
var h1 = document.querySelector('h1')
var reset = document.querySelector("#reset")
var square = document.querySelectorAll(".square")


init()

function init(){
	//mode buttons
	for (var i = 0; i < gameMode.length; i++) {
	gameMode[i].addEventListener("click", function(){
	gameMode[0].classList.remove("selected")
	gameMode[1].classList.remove("selected")
	this.classList.add("selected")

	this.textContent === "Easy" ? numColor = 3:numColor = 6;
	main()
})
}

for (var i = 0; i < square.length; i++) {
	

	square[i].addEventListener("click", function() {
	//get color of clicked square
	var clickedColor = this.style.backgroundColor
		if (clickedColor === colorPicked) {

			msg.textContent = "Correct"
			changeColour(clickedColor)
			h1.style.backgroundColor = colorPicked;
			reset.textContent = "Play Again?"

		} else {
			this.style.backgroundColor = "#232323"
			msg.textContent = "Try again!"
		}



	})
	main()


}
}

function generateColor(num)
{
// make array, add random color to array and return array
var arr = []

for (var i = 0 ; i < num; i++) {

	//get randpm color and push into array
	arr.unshift(randomColor())


                                 }
	
return arr
}

function randomColor(){
	//pick red from 0 to 255
	var r = Math.floor(Math.random() * 256) 
	//pick green from 0 to 255
	var g = Math.floor(Math.random() * 256) 
	//pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256) 
	return "rgb(" + r + ", " + g + ", " + b + ")"
}





// var color =[
// "rgb(255, 123, 111)",
// "rgb(255, 0, 0)",
// "rgb(0, 255, 0)",
// "rgb(100, 150, 150)",
// "rgb(0, 123, 111)",
// "rgb(222, 123, 0)"

// ]
function main(){
	color = generateColor(numColor)
	colorPicked = pickedColor();
	colorDisplay.textContent = colorPicked;
	reset.textContent = "New Color"
	msg.textContent = ''
	for (var i = 0 ; i < square.length  ; i++) {
	//add color to squares

	if (color[i]) {
		square[i].style.display = "block"

		square[i].style.backgroundColor = color[i] 
	}else{
		square[i].style.display = "none"}
	
	


	}

h1.style.backgroundColor = '#232323'



}
















// easyButton.addEventListener('click', function(){
// 	easyButton.classList.add("selected")
// 	hardButton.classList.remove("selected")
// 	 numColor = 3
// 	color = generateColor(numColor)
// 	colorPicked = pickedColor();
// 	for (var i = 0; i < square.length; i++) {
// 		if (color[i]) {
// 		square[i].style.backgroundColor = color[i]
// 		colorDisplay.textContent = colorPicked; 
// 		}
// 		else {square[i].style.display = 'none'}

// 	}

// })

// hardButton.addEventListener('click', function(){
// 	 numColor = 6
// 	color = generateColor(numColor)
// 	colorPicked = pickedColor();
// 	for (var i = 0; i < square.length; i++) {
		
// 		square[i].style.backgroundColor = color[i]
// 		colorDisplay.textContent = colorPicked;
// 		square[i].style.display = 'block' 
// 		}
// 	easyButton.classList.remove("selected")
// 	hardButton.classList.add("selected")
// })




	colorDisplay.textContent = colorPicked;
	for (var i = 0 ; i < color.length  ; i++) {
	//add color to squares
	square[i].style.backgroundColor = color[i] 
	//add event listener to squares
	


	}



	function changeColour(test){

		for (var i = 0 ; i < square.length  ; i++) {
				//add color to squares
				square[i].style.backgroundColor = test} 

	}



	function pickedColor(){
		let random = Math.floor(Math.random() * color.length)
		return color[random]
	}




	reset.addEventListener("click", function(){
		main()
		
		
	})