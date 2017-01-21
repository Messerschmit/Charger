window.onload = function() {
  var images = new Array (5);
  var idName = '';
  for (var i = 0; i < 5; i++) {
      idName = 'photo' + (i + 1);
      images[i] = document.getElementById(idName);
      images[i].onclick = showAnswer;
  }
  var close = document.getElementById('close');
  close.onclick = closeElement;
};

function showAnswer(eventObj) {
  var image = eventObj.target;
  var name = image.src;
  var modalWindow = document.getElementById('modalWindowPhoto');
  var closeWindow = document.getElementById('close');
  modalWindow.classList.add('show');
  closeWindow.classList.add('show');
  var imgLoad = document.getElementById('imgLoad');
  imgLoad.src = name;
}

function closeElement() {
  var closeWindow = document.getElementById('close');
  closeWindow.classList.remove('show');
  var modalWindow = document.getElementById('modalWindowPhoto');
  modalWindow.classList.remove('show');
}
