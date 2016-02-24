 $(document).ready(function(){
	console.log("Hex Color Palette");

	// var hexColor = document.getElementById("hexColor");
	// console.log(hexColor);
	var createPaletteForm = document.getElementById("createPaletteForm");
	var lineBreak = document.createElement("br");
	// var savePaletteButton = document.getElementById("savePaletteButton");


	// CREATE PALETTE NAME INPUT
	var paletteNameInput = document.createElement("input");
	paletteNameInput.setAttribute("id", "paletteNameInput");
	paletteNameInput.type="name";
	paletteNameInput.name="name";
	paletteNameInput.placeholder="Palette name";

	// APPEND paletteNameInput TO createPaletteForm
	createPaletteForm.appendChild(paletteNameInput);

	createPaletteForm.appendChild(lineBreak);







	$('.hexColor').click(function(){ 
		console.log("you clicked " + $(this).attr('id'));
		
		//HEX CODE OF CLICKED COLOR
		var hexCode = $(this).attr('id');

		//getting form 

		var lineBreak = document.createElement("br");

		console.log(lineBreak)
		console.log(createPaletteForm);

		//ADD COLOR TO NEW PALETTE INPUT
		var colorInput = document.createElement("input")
		colorInput.setAttribute("id", "createPaletteInput");
		colorInput.type="color";
		colorInput.name="palette";
		colorInput.value=hexCode;

		//DELETE COLOR FROM NEW PALETTE INPUT
		//TO DELETE BEFORE SAVING PALETTE
		var deleteInput = document.createElement("input");
		deleteInput.setAttribute("id", "deleteColorInput");
		deleteInput.type="hidden";
		deleteInput.value=hexCode;

		//insert color input as first child in createPaletteForm
		createPaletteForm.insertBefore(colorInput, createPaletteForm.firstChild);
		// input.appendChild(lineBreak)
		createPaletteForm.insertBefore(lineBreak, createPaletteForm.firstChild)
	
	}); 



	
			
			//console.log(color)
			// console.log(color.innerHTML)
			// console.log(color.colors)
			// var hexCode = document.getElementById("p");
			// console.log(hexCode)
			//get createNewPalette div to append clicked colors to form

}); //ends document.ready