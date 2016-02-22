// $(document).ready(function(){
	console.log("Hex Color Palette");

	// var hexColor = document.getElementById("hexColor");
	// console.log(hexColor);

	function addToPalette(color){
			console.log("you clicked");
			console.log(color)
			console.log(color.innerHTML)
			var hexCode = document.getElementById("p");
			console.log(hexCode)
			//get createNewPalette div to append clicked colors to form
			var createNewPalette = document.getElementById("createNewPalette");
			console.log(createNewPalette);

			//create input to push info into database
			var input = document.createElement("input");
			input.type="color";
			input.name="palette";
			input.value="#cccccc";
			createNewPalette.appendChild(input);

	}

// }); //ends document.ready