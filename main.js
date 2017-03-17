var form = document.getElementById('witchy-form');
var result = document.getElementById('witchy-result');
var items = require('./items.js');
var input = document.getElementById('witchy-item');

form.addEventListener('submit', witchCheck);

function witchCheck(event) {
  event.preventDefault();

  if (isWitchy(input.value)) {
    result.textContent = 'witchy';
  } else {
    result.textContent = 'not witchy';
  }
}

function isWitchy(inputValue) {
  return items.indexOf(inputValue.toLowerCase()) !== -1;
}
