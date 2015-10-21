var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var b7 = document.getElementById('b7');
var b8 = document.getElementById('b8');
var b9 = document.getElementById('b9');
var b10 = document.getElementById('b10');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');
var deathbtn1 = document.getElementById('deathbtn1');
var deathbtn2 = document.getElementById('deathbtn2');
var deathbtn3 = document.getElementById('deathbtn3');
var deathbtn4 = document.getElementById('deathbtn4');
var deathbtn5 = document.getElementById('deathbtn5');
var reply1 = document.getElementById('reply1');

var player = {
 pName: null,
 species: null,
 gameStage: null
};

function loadGame() {
  var savedChar = localStorage.getItem("LOTR");
    var parseChar = JSON.parse(savedChar);
    // console.log(parseChar);
    if (parseChar != null || parseChar != ""){
        player.pName = parseChar.pName;
        player.species = parseChar.species;
        player.gameStage = parseChar.gameStage;
    }
}
loadGame();
// innerhtml = intro text.
function death (q, btn1, btn2, deathbtn) {
	q.hidden = true;
	btn1.hidden = true;
	btn2.hidden = true;
	deathbtn.hidden = false;
}

function diediedie (q, btn1, btn2, deathbtn) {
	q.hidden = false;
	btn1.hidden = false;
	btn2.hidden = false;
	deathbtn.hidden = true;
}

function itsAlive (q, btn1, btn2) {
	q.hidden = false;
	btn1.hidden = false;
	btn2.hidden = false;
}

function parentChild (q, btn1, btn2) {
	var parent = document.getElementById(q);
		var child1 = document.getElementById(btn1);
		var child2 = document.getElementById(btn2);
		parent.removeChild(child1);
		parent.removeChild(child2);
}

b1.addEventListener('click', function() {
	death(q2, b1, b2, deathbtn1);
})
b2.addEventListener('click', function() {
	itsAlive(q2, b3, b4);
	parentChild('q1', 'b1', 'b2');
})
deathbtn1.addEventListener('click', function () {
	diediedie(q1, b1, b2, deathbtn1);
})
b3.addEventListener('click', function() {
	death(q3, b3, b4, deathbtn2);
})
b4.addEventListener('click', function() {
	itsAlive(q3, b5, b6);
    parentChild('q2', 'b3', 'b4')
})
deathbtn2.addEventListener('click', function () {
	diediedie(q2, b3, b4, deathbtn2);
})
b5.addEventListener('click', function() {
	death(q4, b5, b6, deathbtn3);
})
b6.addEventListener('click', function() {
	itsAlive(q4, b7, b8, b5, b6);
    parentChild('q3', 'b5', 'b6')
})
deathbtn3.addEventListener('click', function() {
	diediedie(q3, b5, b6, deathbtn3);
})
b7.addEventListener('click', function() {
	death(q5, b7, b8, deathbtn4);
})
b8.addEventListener('click', function() {
	itsAlive(q5, b9, b10);
    parentChild('q4', 'b7', 'b8')
})
deathbtn4.addEventListener('click', function() {
	diediedie(q4, b7, b8, deathbtn4);
})
b9.addEventListener('click', function() {
	deathbtn5.hidden = false;
	b9.hidden = true;
	b10.hidden = true;
})
b10.addEventListener('click', function() {
	b9.hidden = true;
	b10.hidden = true;
	reply1.hidden = false;
})
deathbtn5.addEventListener('click', function() {
	diediedie(q5, b9, b10, deathbtn5);
})



