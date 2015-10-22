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
var b11 = document.getElementById('b11');
var b12 = document.getElementById('b12');
var b13 = document.getElementById('b13');
var b14 = document.getElementById('b14');
var b6b = document.getElementById('b6b');
var b7b = document.getElementById('b7b');
var b8b = document.getElementById('b8b');
var b9b = document.getElementById('b9b');
var b10b = document.getElementById('b10b');
var b11b = document.getElementById('b11b');
var b12b = document.getElementById('b12b');
var b13b = document.getElementById('b13b');
var b14b = document.getElementById('b14b');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');
var q6 = document.getElementById('q6');
var q7 = document.getElementById('q7');
var q4b = document.getElementById('q4b');
var q5b = document.getElementById('q5b');
var q6b = document.getElementById('q6b');
var q7b = document.getElementById('q7b');
var deathbtn1 = document.getElementById('deathbtn1');
var deathbtn2 = document.getElementById('deathbtn2');
var deathbtn3 = document.getElementById('deathbtn3');
var deathbtn4 = document.getElementById('deathbtn4');
var deathbtn5 = document.getElementById('deathbtn5');
var deathbtn6 = document.getElementById('deathbtn6');
var deathbtn7 = document.getElementById('deathbtn7');
var deathbtn4b = document.getElementById('deathbtn4b');
var deathbtn5b = document.getElementById('deathbtn5b');
var deathbtn6b = document.getElementById('deathbtn6b');
var deathbtn7b = document.getElementById('deathbtn7b');
var reply1 = document.getElementById('reply1');
var reply2 = document.getElementById('reply2');

var player = {
    pName: "Guest",
    species: "hobbit",
    gameStage: null
};
var savedChar = localStorage.getItem("LOTR");
function loadGame(){
    var savedChar = localStorage.getItem("LOTR");
    var parseChar = JSON.parse(savedChar);
    // console.log(parseChar);
    player.pName = parseChar.pName;
    player.species = parseChar.species;
    player.gameStage = parseChar.gameStage;

}
if (savedChar != null ){
    loadGame();
};
document.getElementById('intro').innerHTML = 'Congrats ' + player.pName + ', you are a ' + player.species +'!';
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
b3.addEventListener('click', function() {
    death(q3, b3, b4, deathbtn2);
    b6b.hidden = true;
})
b4.addEventListener('click', function() {
    itsAlive(q3, b5, b6);
    parentChild('q2', 'b3', 'b4');
    b6b.hidden = false;
})
b5.addEventListener('click', function() {
    death(q4, b5, b6, deathbtn3);
    b6b.hidden = true;
})
b6.addEventListener('click', function() {
    itsAlive(q4, b7, b8, b5, b6);
    parentChild('q3', 'b5', 'b6')
    b6b.hidden = true;

})
b7.addEventListener('click', function() {
    death(q5, b7, b8, deathbtn4);
})
b8.addEventListener('click', function() {
    itsAlive(q5, b9, b10);
    parentChild('q4', 'b7', 'b8')
})
b9.addEventListener('click', function() {
    death(q6, b9, b10, deathbtn5);
})
b10.addEventListener('click', function() {
    itsAlive(q6, b11, b12);
    parentChild('q5', 'b9', 'b10')
})
b11.addEventListener('click', function() {
    death(q7, b11, b12, deathbtn6);
})
b12.addEventListener('click', function() {
    itsAlive(q7, b13, b14);
    parentChild('q6', 'b11', 'b12')
})
b13.addEventListener('click', function() {
    deathbtn7.hidden = false;
    b13.hidden = true;
    b14.hidden = true;
})
b14.addEventListener('click', function() {
    b13.hidden = true;
    b14.hidden = true;
    reply1.hidden = false;
})


b6b.addEventListener('click', function() {
    b6b.hidden = true;
    itsAlive(q4b, b7b, b8b, b5, b6b);
    parentChild('q3', 'b5', 'b6')
})
b7b.addEventListener('click', function() {
    death(q5b, b7b, b8b, deathbtn4b);
})
b8b.addEventListener('click', function() {
    itsAlive(q5b, b9b, b10b);
    parentChild('q4b', 'b7b', 'b8b')
})
b9b.addEventListener('click', function() {
    death(q6b, b9b, b10b, deathbtn5b);
})
b10b.addEventListener('click', function() {
    itsAlive(q6b, b11b, b12b);
    parentChild('q5b', 'b9b', 'b10b')
})
b11b.addEventListener('click', function() {
    death(q7b, b11b, b12b, deathbtn6b);
})
b12b.addEventListener('click', function() {
    itsAlive(q7b, b13b, b14b);
    parentChild('q6b', 'b11b', 'b12b')
})
b13b.addEventListener('click', function() {
    deathbtn7b.hidden = false;
    b13b.hidden = true;
    b14b.hidden = true;
})
b14b.addEventListener('click', function() {
    b13b.hidden = true;
    b14b.hidden = true;
    reply2.hidden = false;
})


deathbtn1.addEventListener('click', function () {
    diediedie(q1, b1, b2, deathbtn1);
})
deathbtn2.addEventListener('click', function () {
    diediedie(q2, b3, b4, deathbtn2);
})
deathbtn3.addEventListener('click', function() {
    diediedie(q3, b5, b6, deathbtn3);
    b6b.hidden = false;
})
deathbtn4.addEventListener('click', function() {
    diediedie(q4, b7, b8, deathbtn4);
})
deathbtn5.addEventListener('click', function() {
    diediedie(q5, b9, b10, deathbtn5);
})
deathbtn6.addEventListener('click', function() {
    diediedie(q6, b11, b12, deathbtn6);
})
deathbtn7.addEventListener('click', function() {
    diediedie(q7, b13, b14, deathbtn7);
})


deathbtn4b.addEventListener('click', function() {
    diediedie(q4b, b7b, b8b, deathbtn4b);
})

deathbtn5b.addEventListener('click', function() {
    diediedie(q5b, b9b, b10b, deathbtn5b);
})
deathbtn6b.addEventListener('click', function() {
    diediedie(q6b, b11b, b12b, deathbtn6b);
})
deathbtn7b.addEventListener('click', function() {
    diediedie(q7b, b13b, b14b, deathbtn7b);
})




