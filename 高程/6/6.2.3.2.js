/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
function Person () {}

Person.prototype.name = 'anning';

Person.prototype.age = 22;

var person = new Person();

// 相比直接以一个新的对象覆盖 Person.prototype, 这种非侵入式的做法还是不错的...
console.log(person.constructor === Person); // true