var square = 6;
var color = generateRandomColor(square);
var colorPicked = pickColor();
var sqr = document.querySelectorAll(".square");
var message = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");

easyButton.addEventListener("click" , function(){
	square = 3;
	h1.style,backgroundColor = "steelblue";
   hardButton.classList.remove("selected");
   easyButton.classList.add("selected");
   color = generateRandomColor(square);
   colorPicked = pickColor();
   colorDisplay.textContent = colorPicked;
   for(i=0 ; i<sqr.length ; i++){
   	if(color[i]){
   		sqr[i].style.backgroundColor = color[i];
   	}
   	else{
   		sqr[i].style.display = "none";

   	}
   }
})

hardButton.addEventListener("click" , function(){
	h1.style.backgroundColor = "steelblue";
	square = 6;
	easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    color = generateRandomColor(square);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for(i = 0 ; i < sqr.length ;i++)
    {
    	sqr[i].style.display = "block";
    	sqr[i].style.backgroundColor = color[i];
    }
})


resetButton.addEventListener("click" ,function(){
	reset.textContent ="New Colors";
	message.textContent ="";
	h1.style.backgroundColor = "steelblue";
		color = generateRandomColor(square);
		colorPicked = pickColor();
		colorDisplay.textContent = colorPicked;
		colorSquare();
})

colorDisplay.textContent = colorPicked;
colorSquare();
function colorSquare(){
for(var i=0;i<sqr.length ; i++){
	sqr[i].style.backgroundColor = color[i];

	sqr[i].addEventListener("click" , function(){
	var clickedColor =	this.style.backgroundColor;
		if( clickedColor === colorPicked){
				message.textContent = " Correct";
				reset.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
				message.textContent = " Try again";
		}
	})
}
}
function changeColor(color){
	for(var i =0 ; i<sqr.length ; i++){
		sqr[i].style.backgroundColor = color;
	}
}

function pickColor(){
		var random = Math.floor(Math.random() * square);
		return color[random]; 	
}

function generateRandomColor(num){
	var arr = [];
		for(var i = 0 ; i<num ; i++){
		arr.push(randomColor());
		}
		return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g + ", " + b +")";
}




