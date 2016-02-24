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

	// APPEND A LINE BREAK
	createPaletteForm.appendChild(lineBreak);


	// ONCLICK ADD COLOR TO NEW COLLECTION
	$(".hexColor").click(function(){
		console.log("you clicked " + $(this).attr('id'));

		// HEX CODE OF CLICKED COLOR
		var hexCode = $(this).attr('id');

		//CREATE addColor/deleteColor DIV
		var addColorRemoveColorDiv = document.createElement("div");
		addColorRemoveColorDiv.setAttribute("id", "addColorRemoveColorDiv");

			//ADD COLOR TO NEW PALETTE INPUT
			var colorInput = document.createElement("input")
			colorInput.setAttribute("id", "createPaletteInput");
			colorInput.type="color";
			colorInput.name="palette";
			colorInput.value=hexCode;

			console.log(colorInput);

			//insert color input as first child in createPaletteForm
			addColorRemoveColorDiv.appendChild(colorInput);

			//DELETE COLOR BEFORE SAVING
			//CREATE DELETE FORM
			var deleteColorForm = document.createElement("form");
			deleteColorForm.setAttribute("id", "deleteColorForm");
			deleteColorForm.action="/users/userID/deletecolor?_method=DELETE";
			deleteColorForm.method="POST";

				//DELETE INPUT
				var deleteColorInput = document.createElement("input");
				deleteColorInput.setAttribute("id", "deleteColorInput");
				deleteColorInput.type="hidden";
				deleteColorInput.value=hexCode;

				deleteColorForm.appendChild(deleteColorInput);
					
				//DELETE COLOR BUTTON
				var deleteColorButton = document.createElement("button");
				deleteColorButton.setAttribute("id", "deleteColorButton");
				deleteColorButton.innerHTML += "Delete";

				deleteColorForm.appendChild(deleteColorButton);

			console.log(deleteColorForm);

			//add line break between color divs
			addColorRemoveColorDiv.appendChild(lineBreak);

		createPaletteForm.appendChild(addColorRemoveColorDiv);

		createPaletteForm.appendChild(lineBreak);
		
	});

 	//CREATE SAVE PALETTE BUTTON
 	var savePaletteButton = document.createElement("button");
 	savePaletteButton.setAttribute("id", "savePaletteButton");
 	savePaletteButton.innerHTML = "Save palette";

 	createPaletteForm.appendChild(savePaletteButton);










	// $('.hexColor').click(function(){ 
	// 	console.log("you clicked " + $(this).attr('id'));
		
	// 	//HEX CODE OF CLICKED COLOR
	// 	var hexCode = $(this).attr('id');

	// 	//getting form 

	// 	var lineBreak = document.createElement("br");

	// 	console.log(lineBreak)
	// 	console.log(createPaletteForm);

	// 	//ADD COLOR TO NEW PALETTE INPUT
	// 	var colorInput = document.createElement("input")
	// 	colorInput.setAttribute("id", "createPaletteInput");
	// 	colorInput.type="color";
	// 	colorInput.name="palette";
	// 	colorInput.value=hexCode;

	// 	//DELETE COLOR FROM NEW PALETTE INPUT
	// 	//TO DELETE BEFORE SAVING PALETTE
	// 	var deleteInput = document.createElement("input");
	// 	deleteInput.setAttribute("id", "deleteColorInput");
	// 	deleteInput.type="hidden";
	// 	deleteInput.value=hexCode;

	// 	//insert color input as first child in createPaletteForm
	// 	createPaletteForm.insertBefore(colorInput, createPaletteForm.firstChild);
	// 	// input.appendChild(lineBreak)
	// 	createPaletteForm.insertBefore(lineBreak, createPaletteForm.firstChild)
	
	// }); 



	
			
			//console.log(color)
			// console.log(color.innerHTML)
			// console.log(color.colors)
			// var hexCode = document.getElementById("p");
			// console.log(hexCode)
			//get createNewPalette div to append clicked colors to form

}); //ends document.ready