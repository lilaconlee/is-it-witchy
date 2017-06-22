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

  result.textContent = isWitchy(input.value) ? 'witchy' : 'not witchy';
}

function isWitchy(it) {
  return contains(items, it) || contains(pluralItems, it) || testSubstrings(it);
}

function testSubstrings(it) {
  return items.some(function(item) {
    var re = new RegExp(item, 'g');
    return re.test(it);
  });
}

function contains(array, value) {
  var result = array.indexOf(value.toLowerCase()) !== -1;
  return result;
}
