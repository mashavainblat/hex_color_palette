 $(document).ready(function(){
	console.log("Hex Color Palette");

	// var hexColor = document.getElementById("hexColor");
	// console.log(hexColor);

	$('.hexColor').click(function(){ 
		console.log("you clicked " + $(this).attr('id'));
		
		//HEX CODE OF CLICKED COLOR
		var hexCode = $(this).attr('id');
		var createPaletteForm = document.getElementById("createPaletteForm");
		var savePaletteButton = document.getElementById("savePaletteButton");
		var lineBreak = document.createElement("br");
		console.log(lineBreak)
		console.log(createPaletteForm);

		var input = document.createElement("input")
		input.setAttribute("id", "createPaletteInput");
		input.type="color";
		input.name="palette";
		input.value=hexCode;

		

		createPaletteForm.insertBefore(input, createPaletteForm.firstChild);
		// input.appendChild(lineBreak)
	
	}); 



	
			
			//console.log(color)
			// console.log(color.innerHTML)
			// console.log(color.colors)
			// var hexCode = document.getElementById("p");
			// console.log(hexCode)
			//get createNewPalette div to append clicked colors to form

}); //ends document.ready