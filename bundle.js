(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [
  'erlenmeyer flasks',
  'fleetwood mac',
  'idaho',
  'japanese spider crabs',
  'oracles',
  'ursula',
  'vcrs',
  'acupuncture',
  'americano',
  'anything broken',
  'anything pointy',
  'anything warty',
  'anything with lots of legs',
  'aromatherapy',
  'bat houses',
  'bats',
  'beetles',
  'bogs',
  'brews',
  'buckwheat',
  'cardamom',
  'cats',
  'cauldrons',
  'chocolate bell peppers',
  'claws',
  'climbing plants',
  'cloves',
  'coconut la croix',
  'consignment',
  'crows',
  'crushed velvet',
  'crystal',
  'dead leaves',
  'dried fruit',
  'experiments',
  'farrow',
  'fava beans',
  'ferrets',
  'hard bound books',
  'incense',
  'ivy',
  'just hairy warts',
  'ladders',
  'mauve',
  'mead',
  'mismatched tiles',
  'mold',
  'needles',
  'orbs',
  'peppercorns',
  'purple kale',
  'rats',
  'ravens',
  'robes',
  'sage',
  'shark eggs',
  'spider eggs',
  'spider webs',
  'spiders',
  'squid ink pasta',
  'stranger things',
  'swamps',
  'talons',
  'tarot cards',
  'tea',
  'teeth',
  'the number 13',
  'the moon',
  'thorns',
  'thorny plants',
  'thyme',
  'trellis',
  'tumbleweeds',
  'turrets',
  'vats',
  'venus fly traps',
  'vials',
  'vultures',
  'whiskers',
  'willows',
  'wraught iron',
];

},{}],2:[function(require,module,exports){
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

},{"./items.js":1}]},{},[2]);
