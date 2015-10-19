//unhides the char creation form-REH
var startCharCreation = function(e) {
  e.preventDefault();
  document.getElementById('charCreationForm').style.visibility = 'visible';
}
//Choose char button-REH
document.getElementById('chooseChar').addEventListener('click', startCharCreation);

//processes char Creation form data and saves to local storage-REH
var startGame = function(e) {
  e.preventDefault();
  var q1 = document.getElementsByName('q1');
}
//start game Button-REH
document.getElementById('startGame').addEventListener('click', startGame);

