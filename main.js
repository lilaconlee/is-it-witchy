var form = document.getElementById('witchy-form');
var result = document.getElementById('witchy-result');
var items = require('./items.js');
var input = document.getElementById('witchy-item');

form.addEventListener('submit', witchCheck);

function witchCheck(event) {
  event.preventDefault();

  if (items.indexOf(input.value) === -1) {
    result.textContent = 'not witchy';
  } else {
    result.textContent = 'witchy';
  }
}
