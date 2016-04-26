 $(document).ready(function(){
	console.log("Hex Color Palette");

	// var hexColor = document.getElementById("hexColor");
	// console.log(hexColor);
	var createPaletteForm = document.getElementById("createPaletteForm");
	var lineBreak = document.createElement("br");

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

			var hexColorCode = document.createTextNode(hexCode)
			colorInput.appendChild(hexColorCode)

			// console.log(colorInput);

			//append color input to addColorRemoveColorDiv
			addColorRemoveColorDiv.appendChild(colorInput);

			
			var hexColorInfo = document.createElement("p");
			hexColorInfo.setAttribute("id", "inputHexColorCode");
			var createdHexCode = document.createTextNode(hexCode);
			hexColorInfo.appendChild(createdHexCode);
			// console.log(hexColorInfo)
			addColorRemoveColorDiv.appendChild(hexColorInfo)




			//DELETE COLOR BEFORE SAVING
			var deleteColorButton = document.createElement("span");
			deleteColorButton.setAttribute("class", "deleteColorButton");
			deleteColorButton.innerHTML += "Delete";

			addColorRemoveColorDiv.appendChild(deleteColorButton);

			//add line break between color divs
			addColorRemoveColorDiv.appendChild(lineBreak);

		createPaletteForm.appendChild(addColorRemoveColorDiv);

		createPaletteForm.appendChild(lineBreak);
		deleteButtonInit();
		
	}); //end ADD COLOR ON CLICK TO COLLECTION

 	//CREATE SAVE PALETTE BUTTON
 	var savePaletteButton = document.createElement("button");
 	savePaletteButton.setAttribute("id", "savePaletteButton");
 	savePaletteButton.innerHTML = "Save palette";

 	createPaletteForm.appendChild(savePaletteButton);

	$(".indexHexColor").click(function(){
		console.log("you clicked "); //+ $(this).attr('id')
	});


}); //ends document.ready


var deleteButtons = document.getElementsByClassName('deleteColorButton');
// console.log(deleteButtons);

var deleteButtonInit = function () {
	for (var i = 0; i < deleteButtons.length; i++){
		deleteButtons[i].addEventListener("click", function (){
			$(this).closest("div").remove();
		});
	}
}







