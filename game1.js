var event1 = document.getElementById('event1');
var event2 = document.getElementById('event2');
var event3 = document.getElementById('event3');
var event4 = document.getElementById('event4');
var event5 = document.getElementById('event5');
var event6 = document.getElementById('event6');
var event7 = document.getElementById('event7');
var event8 = document.getElementById('event8');

function get_nextSibling(n) {
	x = n.nextSibling;
	while (x.nodeType != 1) {
		x = x.nextSibling;
	}
	return x;
}
function get_previousSibling(n) {
	x = n.previousSibling;
	while (x.nodeType != 1) {
		x = x.previousSibling;
	}
	return x;
}
function Event(img, head, para, button1, button2, button3, buttonId, deathImg, deathHead, deathPara) {
	this.img = img;
	this.head = head;
	this.para = para;
	this.button1 = button1;
	this.button2 = button2;
	this.button2 = button3;
	this.buttonId = buttonId;
	this.deathImg = deathImg;
	this.deathHead = deathHead;
	this.deathPara = deathPara;

//I know this is a H.A.M. (huge ass method) but not sure how to fix that
	this.loadEvent = function(loc) {
		loc.innerHTML = '<img src="' + img + '" /><h2>' + head + '</h2><p>' + para + '</p> <button id="' + buttonId + 'button1" type="click">' + button1 + '</button><button id="' + buttonId + 'button2" type="click">' + button2 + '</button><button id="' + buttonId + 'button3" type="click">' + button3 + '</button>';
		var option1 = this.buttonId + 'button1';
		var option2 = this.buttonId + 'button2';
		var option3 = this.buttonId + 'button3';

		//player died.
		document.getElementById(option1).addEventListener('click', function(){
			var but1 = document.getElementById(option1);
			var but2 = document.getElementById(option2);
			var but3 = document.getElementById(option3);
			loc.removeChild(but1);
			loc.removeChild(but2);
			loc.removeChild(but3);

			get_nextSibling(loc).innerHTML = '<img src="' + deathImg + '" /><h2>' + deathHead + '</h2><p>' + deathPara + '</p><button id="endGame" type="click">End game</button><button id="goBack"type="click">"Go back 1 step"</button>';

			document.getElementById('goBack').addEventListener('click', function(){
				var endBut = document.getElementById('endGame');
				var goBackBut = document.getElementById('goBack');
				//console.log(get_nextSibling(loc));

				if (loc === event1){
					get_nextSibling(loc).innerHTML ="";
					event1a.loadEvent(loc);
				}
				else if (loc === event2){
					get_nextSibling(loc).innerHTML ="";
					event2a.loadEvent(loc);
				}
				else if (loc === event3){
					get_nextSibling(loc).innerHTML ="";
					event3a.loadEvent(loc);
				}
				else if (loc === event4){
					get_nextSibling(loc).innerHTML ="";
					event4a.loadEvent(loc);
				}
				else if (loc === event5){
					get_nextSibling(loc).innerHTML ="";
					event5a.loadEvent(loc);
				}
				else if (loc === event6){
					get_nextSibling(loc).innerHTML ="";
					event6a.loadEvent(loc);
				}
				else if (loc === event7){
					get_nextSibling(loc).innerHTML ="";
					event7a.loadEvent(loc);
				}
				else if (loc === event8){
					event8a.loadEvent(loc);
				}


			});
			// end game option
			document.getElementById('endGame').addEventListener('click', function(){
				window.location='game.html';//this reloads the page and allows a restart
				  // maybe change to a link to new page with "game over" content.
			});


		});

    //player passes
		document.getElementById(option2).addEventListener('click', function(){
			var but1 = document.getElementById(option1);
				var but2 = document.getElementById(option2);
				var but3 = document.getElementById(option3);
			if (option2 === 'event1button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				event2a.loadEvent(event2);

			}
			else if (option2 === 'event2button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event3a.loadEvent(event3);
			}
			else if (option2 === 'event3button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event4a.loadEvent(event4);
			}
			else if (option2 === 'event4button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event5a.loadEvent(event5);
			}
			else if (option2 === 'event5button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event6a.loadEvent(event6);
			}
			else if (option2 === 'event5button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event6a.loadEvent(event6);
			}
			else if (option2 === 'event6button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				 event7a.loadEvent(event7);
			}
			else if (option2 === 'event7button2'){
				loc.removeChild(but1);
				loc.removeChild(but2);
				loc.removeChild(but3);
				event8a.loadEvent(event8);
			}
		});
//button 3 here
document.getElementById(option3).addEventListener('click', function(){
			var but1 = document.getElementById(option1);
				var but2 = document.getElementById(option2);
				var but3 = document.getElementById(option3);
			if (option3 === 'event1button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				// event2a.loadEvent(event2);

			}
			else if (option3 === 'event2button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				//  event3a.loadEvent(event3);
			}
			else if (option3 === 'event3button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				//  event4a.loadEvent(event4);
			}
			else if (option3 === 'event4button3'){
			// 	loc.removeChild(but1);
			// 	loc.removeChild(but2);
			// 	loc.removeChild(but3);
			// 	 event5a.loadEvent(event5);
			}
			else if (option3 === 'event5button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				//  event6a.loadEvent(event6);
			}
			else if (option3 === 'event5button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				//  event6a.loadEvent(event6);
			}
			else if (option3 === 'event6button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				//  event7a.loadEvent(event7);
			}
			else if (option3 === 'event7button3'){
				// loc.removeChild(but1);
				// loc.removeChild(but2);
				// loc.removeChild(but3);
				// event8a.loadEvent(event8);
			}
		});

	};
}


var deathEvent = function(e, loc, deathPara) {
	e.preventDefault();
}
//I don't think this should be in the gobal space but not sure what to do with it
for (var key in localStorage){
	console.log(key);
}

var event1a = new Event('img/game/event1Dwarf.jpg', 'Congrats ' + key + ', you are a ' + localStorage.getItem(key) +'!' , 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event1button1', 'event1button2', 'event1button3', 'event1', 'img/game/death.jpg', 'event1 death headline', 'death text here. you\'re dead.');
// var startElf = new Event('intro', 'img/game/start.jpg', 'Congrats username are a elf!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startElf Button 1', 'startElf Button2');
// var startHobbit = new Event('intro', 'img/game/start.jpg', 'Congrats username are a hobbit!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startHobbit Button 1', 'startHobbit Button2');

var event2a = new Event('img/game/event2.jpg', 'Event 2 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event2button1', 'event2button2','event2button3', 'event2', 'img/game/death.jpg', 'event2 death headline', 'death text here. you\'re dead.');
var event3a = new Event('img/game/event2.jpg', 'Event 3 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event3button1', 'event3button2', 'event3button3','event3', 'img/game/death.jpg', 'event3 death headline', 'death text here. you\'re dead.');
var event4a = new Event('img/game/event2.jpg', 'Event 4 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event4button1', 'event4button2', 'event4button3','event4', 'img/game/death.jpg', 'event4 death headline', 'death text here. you\'re dead.');
var event5a = new Event('img/game/event2.jpg', 'Event 5 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event5button1', 'event5button2', 'event5button3','event5', 'img/game/death.jpg', 'event5 death headline', 'death text here. you\'re dead.');
var event6a = new Event('img/game/event2.jpg', 'Event 6 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event6button1', 'event6button2', 'event6button3','event6', 'img/game/death.jpg', 'event6 death headline', 'death text here. you\'re dead.');
var event7a = new Event('img/game/event2.jpg', 'Event 7 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event7button1', 'event7button2', 'event7button3','event7', 'img/game/death.jpg', 'event7 death headline', 'death text here. you\'re dead.');
var event8a = new Event('img/game/event2.jpg', 'Event 8 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event8button1', 'event8button2', 'event8button3','event8', 'img/game/death.jpg', 'event8 death headline', 'death text here. you\'re dead.');

event1a.loadEvent(event1);



