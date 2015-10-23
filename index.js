function div_show() {
	document.getElementById('blackout').style.display = "block";
}

function div_hide(){
	document.getElementById('blackout').style.display = "none";
}
var player = {
	pName: null, // set to null here for testing
	species: null,
	gameStage: null
};
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
		player.species = "elf";
	}
	else if (dwarf >= elf && dwarf >= hobbit) {
		player.species = "dwarf";
	}
	else if (hobbit >= dwarf && hobbit >= elf) {
		player.species = "hobbit";
	}
	if(document.getElementById('playerName').value ===""){
		alert("Please enter a name");
		return;
	}
	player.pName = document.getElementById('playerName').value;
	var storedPlayer = JSON.stringify(player);
	localStorage.setItem("LOTR", storedPlayer);
	window.location='game.html';
}
//start game Button-REH
document.getElementById('startGame').addEventListener('click', startGame);




