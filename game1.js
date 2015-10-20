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

	this.loadEvent = function(loc) {
		// var butt1 = document.createElement('button')
		// loc.innerHTML = '<img src="' + this.img + '" /><h2>' + this.head + '</h2><p>' + this.para + '</p> <button id="' + this.buttonId + 'button1" type="click">' + this.button1 + '</button><button id="' + this.buttonId + 'button2" type="click">' + this.button2 + '</button>';

		loc.innerHTML = '<img src="' + img + '" /><h2>' + head + '</h2><p>' + para + '</p> <button id="' + buttonId + 'button1" type="click">' + button1 + '</button><button id="' + buttonId + 'button2" type="click">' + button2 + '</button>';

		var option1 = this.buttonId + 'button1';
		document.getElementById(option1).addEventListener('click', function(){
			// var x = document.getElementById(loc).nextSibling;
			// deathEvent(event, get_nextsibling(loc), this.deathPara);
			get_nextsibling(loc).innerHTML = '<img src="' + deathImg + '" /><h2>' + deathHead + '</h2><p>' + deathPara + '</p>';
		});

		var option2 = this.buttonId + 'button2';
		document.getElementById(option2).addEventListener('click', function(){
			// var x = document.getElementById(loc).nextSibling;
			// deathEvent(event, get_nextsibling(loc), this.deathPara);
			// get_nextsibling(loc).innerHTML = '<img src="' + event2Dwarf.img + '" /><h2>' + event2Dwarf.head + '</h2><p>' + event2Dwarf.para + '</p>';
			if (option2 === 'startbutton2'){
				event2Dwarf.loadEvent(event2);
			}
		});

		// 	get_nextsibling(loc).innerHTML = deathPara;
		// });

		// this.buttonId + 'button2'.addEventListener('click', passEvent);

	};
}

var deathEvent = function(e, loc, deathPara) {
	e.preventDefault();
}
for (var key in localStorage){
	console.log(key);
}

var event1Dwarf = new Event('img/game/event1Dwarf.jpg', 'Congrats ' + key + ', you are a ' + localStorage.getItem(key) +'!' , 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event1Dwarf Button1', 'event1Dwarf Button2', 'start', 'img/game/death.jpg', 'event1Dwarf death headline', 'death text here. you\'re dead.');
// var startElf = new Event('intro', 'img/game/start.jpg', 'Congrats username are a elf!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startElf Button 1', 'startElf Button2');
// var startHobbit = new Event('intro', 'img/game/start.jpg', 'Congrats username are a hobbit!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startHobbit Button 1', 'startHobbit Button2');

var event2Dwarf = new Event('img/game/event2.jpg', 'Event 2 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event2Dwarf Button 1', 'eventDwarf Button2', 'event2Dwarf');

event1Dwarf.loadEvent(event1);
// event1Dwarf.loadEvent(event1);



