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

			var hexColorCode = document.createTextNode(hexCode)
			colorInput.appendChild(hexColorCode)

			// console.log(colorInput);

			//append color input to addColorRemoveColorDiv
			addColorRemoveColorDiv.appendChild(colorInput);
			

			// n = document.createElement("div");
			// n.text("Hey");
			// addColorRemoveColorDiv.appendChild(n);


			//add text node with hex code
			// insertHexCodeIntoInput();
			// var inputHexCode = document.getElementById("createPaletteInput");
			// console.log(inputHexCode)
			// var hexCodeColorInput = document.createTextNode()
			
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


var deleteButtons = document.getElementsByClassName('deleteColorButton');
// console.log(deleteButtons);

//DELETE addColorRemoveColorDiv 
// $(".deleteColorButton").click(function(){
// 	console.log("you clicked");
// });
var deleteButtonInit = function () {
	for (var i = 0; i < deleteButtons.length; i++){
		deleteButtons[i].addEventListener("click", function (){
			$(this).closest("div").remove();
		});
	}
}

function insertHexCodeIntoInput(){
	var inputHexCode = document.getElementById("createPaletteInput").value;
	console.log(inputHexCode)
}







