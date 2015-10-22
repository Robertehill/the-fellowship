var ident = {
    b1: document.getElementById('b1'),
    b2: document.getElementById('b2'),
    b3: document.getElementById('b3'),
    b4: document.getElementById('b4'),
    b5: document.getElementById('b5'),
    b6: document.getElementById('b6'),
    b7: document.getElementById('b7'),
    b8: document.getElementById('b8'),
    b9: document.getElementById('b9'),
    b10: document.getElementById('b10'),
    b11: document.getElementById('b11'),
    b12: document.getElementById('b12'),
    b13: document.getElementById('b13'),
    b14: document.getElementById('b14'),
    b6b: document.getElementById('b6b'),
    b7b: document.getElementById('b7b'),
    b8b: document.getElementById('b8b'),
    b9b: document.getElementById('b9b'),
    b10b: document.getElementById('b10b'),
    b11b: document.getElementById('b11b'),
    b12b: document.getElementById('b12b'),
    b13b: document.getElementById('b13b'),
    b14b: document.getElementById('b14b'),
    q1: document.getElementById('q1'),
    q2: document.getElementById('q2'),
    q3: document.getElementById('q3'),
    q4: document.getElementById('q4'),
    q5: document.getElementById('q5'),
    q6: document.getElementById('q6'),
    q7: document.getElementById('q7'),
    q4b: document.getElementById('q4b'),
    q5b: document.getElementById('q5b'),
    q6b: document.getElementById('q6b'),
    q7b: document.getElementById('q7b'),
    deathbtn1: document.getElementById('deathbtn1'),
    deathbtn2: document.getElementById('deathbtn2'),
    deathbtn3: document.getElementById('deathbtn3'),
    deathbtn4: document.getElementById('deathbtn4'),
    deathbtn5: document.getElementById('deathbtn5'),
    deathbtn6: document.getElementById('deathbtn6'),
    deathbtn7: document.getElementById('deathbtn7'),
    deathbtn4b: document.getElementById('deathbtn4b'),
    deathbtn5b: document.getElementById('deathbtn5b'),
    deathbtn6b: document.getElementById('deathbtn6b'),
    deathbtn7b: document.getElementById('deathbtn7b'),
    reply1: document.getElementById('reply1'),
    reply2: document.getElementById('reply2')
};

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
if (savedChar != null){
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

ident.b1.addEventListener('click', function() {
	death(ident.q2, ident.b1, ident.b2, ident.deathbtn1);
})
ident.b2.addEventListener('click', function() {
	itsAlive(ident.q2, ident.b3, ident.b4);
	parentChild('q1', 'b1', 'b2');
})
ident.b3.addEventListener('click', function() {
    death(ident.q3, ident.b3, ident.b4, ident.deathbtn2);
    ident.b6b.hidden = true;
})
ident.b4.addEventListener('click', function() {
    itsAlive(ident.q3, ident.b5, ident.b6);
    parentChild('q2', 'b3', 'b4');
    ident.b6b.hidden = false;
})
ident.b5.addEventListener('click', function() {
    death(ident.q4, ident.b5, ident.b6, ident.deathbtn3);
    b6b.hidden = true;
})
ident.b6.addEventListener('click', function() {
    itsAlive(ident.q4, ident.b7, ident.b8, ident.b5, ident.b6);
    parentChild('q3', 'b5', 'b6')
    ident.b6b.hidden = true;

})
ident.b7.addEventListener('click', function() {
    death(ident.q5, ident.b7, ident.b8, ident.deathbtn4);
})
ident.b8.addEventListener('click', function() {
    itsAlive(ident.q5, ident.b9, ident.b10);
    parentChild('q4', 'b7', 'b8')
})
ident.b9.addEventListener('click', function() {
    death(ident.q6, ident.b9, ident.b10, ident.deathbtn5);
})
ident.b10.addEventListener('click', function() {
    itsAlive(ident.q6, ident.b11, ident.b12);
    parentChild('q5', 'b9', 'b10')
})
ident.b11.addEventListener('click', function() {
    death(ident.q7, ident.b11, ident.b12, ident.deathbtn6);
})
ident.b12.addEventListener('click', function() {
    itsAlive(ident.q7, ident.b13, ident.b14);
    parentChild('q6', 'b11', 'b12')
})
ident.b13.addEventListener('click', function() {
    ident.deathbtn7.hidden = false;
    ident.b13.hidden = true;
    ident.b14.hidden = true;
})
ident.b14.addEventListener('click', function() {
    ident.b13.hidden = true;
    ident.b14.hidden = true;
    ident.reply1.hidden = false;
})


ident.b6b.addEventListener('click', function() {
    ident.b6b.hidden = true;
    itsAlive(ident.q4b, ident.b7b, ident.b8b, ident.b5, ident.b6b);
    parentChild('q3', 'b5', 'b6')
})
ident.b7b.addEventListener('click', function() {
    death(ident.q5b, ident.b7b, ident.b8b, ident.deathbtn4b);
})
ident.b8b.addEventListener('click', function() {
    itsAlive(ident.q5b, ident.b9b, ident.b10b);
    parentChild('q4b', 'b7b', 'b8b')
})
ident.b9b.addEventListener('click', function() {
    death(ident.q6b, ident.b9b, ident.b10b, ident.deathbtn5b);
})
ident.b10b.addEventListener('click', function() {
    itsAlive(ident.q6b, ident.b11b, ident.b12b);
    parentChild('q5b', 'b9b', 'b10b')
})
ident.b11b.addEventListener('click', function() {
    death(ident.q7b, ident.b11b, ident.b12b, ident.deathbtn6b);
})
ident.b12b.addEventListener('click', function() {
    itsAlive(ident.q7b, ident.b13b, ident.b14b);
    parentChild('q6b', 'b11b', 'b12b')
})
ident.b13b.addEventListener('click', function() {
    ident.deathbtn7b.hidden = false;
    ident.b13b.hidden = true;
    ident.b14b.hidden = true;
})
ident.b14b.addEventListener('click', function() {
    ident.b13b.hidden = true;
    ident.b14b.hidden = true;
    ident.reply2.hidden = false;
})


ident.deathbtn1.addEventListener('click', function () {
    diediedie(ident.q1, ident.b1, ident.b2, ident.deathbtn1);
})
ident.deathbtn2.addEventListener('click', function () {
    diediedie(ident.q2, ident.b3, ident.b4, ident.deathbtn2);
})
ident.deathbtn3.addEventListener('click', function() {
    diediedie(ident.q3, ident.b5, ident.b6, ident.deathbtn3);
    ident.b6b.hidden = false;
})
ident.deathbtn4.addEventListener('click', function() {
    diediedie(ident.q4, ident.b7, ident.b8, ident.deathbtn4);
})
ident.deathbtn5.addEventListener('click', function() {
    diediedie(ident.q5, ident.b9, ident.b10, ident.deathbtn5);
})
ident.deathbtn6.addEventListener('click', function() {
    diediedie(ident.q6, ident.b11, ident.b12, ident.deathbtn6);
})
ident.deathbtn7.addEventListener('click', function() {
    diediedie(ident.q7, ident.b13, ident.b14, ident.deathbtn7);
})


ident.deathbtn4b.addEventListener('click', function() {
    diediedie(ident.q4b, ident.b7b, ident.b8b, ident.deathbtn4b);
})

ident.deathbtn5b.addEventListener('click', function() {
    diediedie(ident.q5b, ident.b9b, ident.b10b, ident.deathbtn5b);
})
ident.deathbtn6b.addEventListener('click', function() {
    diediedie(ident.q6b, ident.b11b, ident.b12b, ident.deathbtn6b);
})
ident.deathbtn7b.addEventListener('click', function() {
    diediedie(ident.q7b, ident.b13b, ident.b14b, ident.deathbtn7b);
})




