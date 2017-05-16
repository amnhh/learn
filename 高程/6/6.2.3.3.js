/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
function Person () {}


// 更加非侵入式的赶脚
Object.assign(Person.prototype, {
  name : 'anning',
  age : 22
});

var person = new Person();

// true
console.log(person.constructor === Person);