var chooseCharButton = document.getElementById('chooseChar');

var startCharCreation = function(e) {
  e.preventDefault();
  var form = document.getElementById('charCreationForm');
   form.style.visibility = 'visible'
}
chooseCharButton.addEventListener('click', startCharCreation);
