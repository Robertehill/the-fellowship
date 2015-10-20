var intro = document.getElementById('intro');
var event1 = document.getElementById('event1');
var event2 = document.getElementById('event2');
var event3 = document.getElementById('event3');
var event4 = document.getElementById('event4');
var event5 = document.getElementById('event5');
var finale = document.getElementById('finale');

function Event(img, head, para, button1, button2, buttonId) {
	this.img = img;
	this.head = head;
	this.para = para;
	this.button1 = button1;
	this.button2 = button2;
	this.buttonId = buttonId 

	this.loadEvent = function(loc) {
		// var butt1 = document.createElement('button')		
		loc.innerHTML = '<img src="' + this.img + '" /><h2>' + this.head + '</h2><p>' + this.para + '</p> <button id="' + this.buttonId + 'button1" type="click">' + this.button1 + '</button><button id="' + this.buttonId + 'button2" type="click">' + this.button2 + '</button>';
	};
}

var death = new Event('img/game/death.jpg', 'death title', 'death text here. you\'re dead.', 'go back', 'end game');

var startDwarf = new Event('img/game/start.jpg', 'Congrats username are a dwarf!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startDwarf Button 1', 'startDwarf Button2', 'start');
// var startElf = new Event('intro', 'img/game/start.jpg', 'Congrats username are a elf!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startElf Button 1', 'startElf Button2');
// var startHobbit = new Event('intro', 'img/game/start.jpg', 'Congrats username are a hobbit!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'startHobbit Button 1', 'startHobbit Button2');

var event1Dwarf = new Event('img/game/event1.jpg', 'Event 1 headline!', 'Lorem ipsum dolor sit amet, sonet elitr usu cu. Voluptaria mediocritatem nam at, nam probo dolorum debitis ex. Ne vide aeque duo, qui enim invenire mnesarchum et.', 'event1Dwarf Button 1', 'eventDwarf Button2', 'event1Dwarf');

startDwarf.loadEvent(intro);
event1Dwarf.loadEvent(event1);

