 $(document).ready(function(){
	console.log("Hex Color Palette");

	// var hexColor = document.getElementById("hexColor");
	// console.log(hexColor);

	$('.hexColor').click(function(){ 
		console.log("you clicked " + $(this).attr('id'));
		var hexCode = $(this).attr('id');
		var createNewPalette = document.getElementById("createNewPalette");
		console.log(createNewPalette);

		var input = document.createElement("input");
		input.type="color";
		input.name="palette";
		input.value=hexCode;
		createNewPalette.appendChild(input);
	}); 



	
			
			//console.log(color)
			// console.log(color.innerHTML)
			// console.log(color.colors)
			// var hexCode = document.getElementById("p");
			// console.log(hexCode)
			//get createNewPalette div to append clicked colors to form

}); //ends document.ready