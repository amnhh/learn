/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
// 组合式继承

function Person (name) {
  this.name = name;
  this.parent = ['a', 'b'];
}

function Engineer (name, age) {
  Person.apply(this, arguments);

  this.age = age;
}

Engineer.prototype = new Person();
Object.defineProperty(Engineer.prototype, 'constructor', {
  value : Engineer,
  enumerable : false
});

var engineer = new Engineer('anning', 22);

console.log(engineer.name); // anning
console.log(engineer.age); // 22
console.log(engineer.parent); // ['a', 'b']

var engineer_new = new Engineer('amnhh', 23);

console.log(engineer_new.name); // amnhh
console.log(engineer_new.age); // 23
console.log(engineer_new.parent); // ['a', 'b']

engineer.parent.push('c');

console.log(engineer.parent); // ['a', 'b', 'c'] => 独立于 engineer_new
console.log(engineer_new.parent); // ['a', 'b']