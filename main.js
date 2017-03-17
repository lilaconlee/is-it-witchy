var form = document.getElementById('witchy-form');
var input = document.getElementById('witchy-item');
var items = require('./items.js');
var pluralize = require('pluralize');
var result = document.getElementById('witchy-result');

var pluralItems = items.map(function (item) {
  return pluralize.plural(item);
});

form.addEventListener('submit', witchCheck);

function witchCheck(event) {
  event.preventDefault();

  if (isWitchy(input.value)) {
    result.textContent = 'witchy';
  } else {
    result.textContent = 'not witchy';
  }
}

function isWitchy(value) {
  return items.indexOf(value.toLowerCase()) !== -1 || pluralItems.indexOf(value.toLowerCase()) !== -1
}
