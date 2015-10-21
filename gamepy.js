var event1 = document.getElementById('event1');
var event2 = document.getElementById('event2');
var event3 = document.getElementById('event3');
var event4 = document.getElementById('event4');
var event5 = document.getElementById('event5');
var event6 = document.getElementById('event6');
var event7 = document.getElementById('event7');
var event8 = document.getElementById('event8');

function get_nextsibling(n) {
	x = n.nextSibling;
	while (x.nodeType != 1) {
		x = x.nextSibling;
	}
	return x;
}

function Event(img, head, para, button1, button2, buttonId, deathImg, deathHead, deathPara) {
	this.img = img;
	this.head = head;
	this.para = para;
	this.button1 = button1;
	this.button2 = button2;
	this.buttonId = buttonId;
	// this.deathImg = deathImg;
	// this.deathHead = deathHead;
	// this.deathPara = deathPara;
}


var deathEvent = function(e, Event, deathPara) {
	e.preventDefault();
}
for (var key in localStorage){
	console.log(key);
}

var event1 = new Event('img/game/event1Dwarf.jpg', 'Congrats ' + key + ', you are a ' + localStorage.getItem(key) +'!' , 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event1 Button1', 'event1 Button2', 'start', 'img/game/death.jpg', 'event1 death headline', 'death text here. you\'re dead.');
var event2 = new Event('img/game/event2.jpg', 'Event 2 headline' , 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event1Dwarf Button1', 'event1Dwarf Button2', 'start', 'img/game/death.jpg', 'event1Dwarf death headline', 'death text here. you\'re dead.');


var eventId;
var loadEvent = function(eventId) {
	// var butt1 = document.createElement('button')
	// Event.innerHTML = '<img src="' + this.img + '" /><h2>' + this.head + '</h2><p>' + this.para + '</p> <button id="' + this.buttonId + 'button1" type="click">' + this.button1 + '</button><button id="' + this.buttonId + 'button2" type="click">' + this.button2 + '</button>';

	eventId.innerHTML = '<img src="' + eventId.img + '" /><h2>' + eventId.head + '</h2><p>' + eventId.para + '</p> <button id="' + eventId.buttonId + 'button1" type="click">' + eventId.button1 + '</button><button id="' + eventId.buttonId + 'button2" type="click">' + eventId.button2 + '</button>';

	var option1 = eventId.buttonId + 'button1';
	document.getElementById(option1).addEventListener('click', function(){
		// var x = document.getElementById(Event).nextSibling;
		// deathEvent(event, get_nextsibling(Event), this.deathPara);
		get_nextsibling(eventId).innerHTML = '<img src="' + eventId.eventId.deathImg + '" /><h2>' + eventId.deathHead + '</h2><p>' + eventId.deathPara + '</p>';
	});

	var option2 = eventId.buttonId + 'button2';
	document.getElementById(option2).addEventListener('click', function(){
		// var x = document.getElementById(Event).nextSibling;
		// deathEvent(event, get_nextsibling(Event), this.deathPara);
		// get_nextsibling(Event).innerHTML = '<img src="' + event2Dwarf.img + '" /><h2>' + event2Dwarf.head + '</h2><p>' + event2Dwarf.para + '</p>';
		if (option2 === 'startbutton2'){
			loadEvent(event2);
		}
	});

	// 	get_nextsibling(Event).innerHTML = deathPara;
	// });

	// this.buttonId + 'button2'.addEventListener('click', passEvent);

};


loadEvent(Event1);
// event1Dwarf.loadEvent(event1);



