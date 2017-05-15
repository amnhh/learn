/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
var person = {};

Object.defineProperty(person, 'again', {
  writable : false,
  value : 'Amnhh'
});

console.log(person.again);

// Now change the value of again property
person.again = 1;

// Because of the writable of again property,
// false means we can't change the value of again property.
console.log(person.again); // Amnhh
