//unhides the char creation form-REH
var startCharCreation = function(e) {
  e.preventDefault();
  document.getElementById('charCreationForm').style.visibility = 'visible';
}
//Choose char button-REH
document.getElementById('chooseChar').addEventListener('click', startCharCreation);

var species;
//processes char Creation form data and saves to local storage-REH/GLG
var startGame = function(e) {
  e.preventDefault();
	var elf = 0;
	var dwarf = 0;
	var hobbit = 0;
	var q1 = document.getElementsByName('q1');
	for (var i=0; i < q1.length; i++) {
		if (q1[i].checked) {
			if (q1[i].value === "elf") {
				elf += 1;
			}
			else if (q1[i].value === "dwarf") {
				dwarf += 1;

			}
			else if (q1[i].value === "hobbit") {
				hobbit += 1;

			}
		}
	}
	var q2 = document.getElementsByName('q2');
	for (var i=0; i < q2.length; i++) {
		if (q2[i].checked) {
			if (q2[i].value === "elf") {
				elf += 1;
			}
			else if (q2[i].value === "dwarf") {
				dwarf += 1;
			}
			else if (q2[i].value === "hobbit") {
				hobbit += 1;
			}
		}
	}
	var q3 = document.getElementsByName('q3');
	for (var i=0; i < q3.length; i++) {
		if (q3[i].checked) {
			if (q3[i].value === "elf") {
				elf += 1;
			}
			else if (q3[i].value === "dwarf") {
				dwarf += 1;
			}
			else if (q3[i].value === "hobbit") {
				hobbit += 1;
			}
		}
	}
	var q4 = document.getElementsByName('q4');
	for (var i=0; i < q3.length; i++) {
		if (q4[i].checked) {
			if (q4[i].value === "elf") {
				elf += 1;
			}
			else if (q4[i].value === "dwarf") {
				dwarf += 1;
			}
			else if (q4[i].value === "hobbit") {
				hobbit += 1;
			}
		}
	}
	if (elf >= hobbit && elf >= dwarf) {
		species = "elf";
	}
	else if (dwarf >= elf && dwarf >= hobbit) {
		species = "dwarf";
	}
	else if (hobbit >= dwarf && hobbit >= elf) {
		species = "hobbit";
	}
	//maybe an "else" statement here for ties
	//logs name from input
	var inputName = document.getElementById('playerName').value;
	var storedName = JSON.stringify(species);
	localStorage.setItem(inputName, storedName);
	localStorage.getItem("playerName");
	window.location='game.html';
}
//start game Button-REH
document.getElementById('startGame').addEventListener('click', startGame);




