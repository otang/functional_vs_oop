const assert = require('assert')
const R = require('ramda')
const _ = require('lodash')

// balance ramda's split every
String.prototype.splitEvery = function(n) { return R.splitEvery(n, this) }

// balance string's substring
const limitTo = (maxLength) => {
  return (val) => { return val.substr(0, maxLength); }
}















/**
 * Functional
 */

const numbersOnly = R.replace(/\D/gi, '')
const functionalFormat = R.pipe(numbersOnly, limitTo(16), R.splitEvery(4), R.join(' '));





/**
 * OOP
 */

const pureOopFormat = function(card) {
  return card.replace(/\D/gi, '').substring(0, 16).splitEvery(4).join(' ');
}






















// Tests
assert(pureOopFormat('123213h 21321') === '1232 1321 321')
assert(functionalFormat('123213h 21321') === '1232 1321 321')

assert(pureOopFormat('1111222233334444') === '1111 2222 3333 4444')
assert(functionalFormat('1111222233334444') === '1111 2222 3333 4444')

assert(pureOopFormat('') === '')
assert(functionalFormat('') === '')

assert(pureOopFormat('12345678901234567890') === '1234 5678 9012 3456')
assert(functionalFormat('12345678901234567890') === '1234 5678 9012 3456')




