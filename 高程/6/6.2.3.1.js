/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
function Person () {}

Person.prototype = {
  name : 'anning',
  age : 29,
  job : 'FE'
};

var person = new Person();

// 我们重新定义的 Person.prototype，覆盖掉了之前随着 Person 定义时候出现的 prototype
console.log(person.constructor === Person); // false