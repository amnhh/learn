/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */

var Person;

(function () {
  var name = 'anning';

  Person = function (value) {
    if (value) {
      name = value;
    }
  }

  Person.prototype.getName = function () {
    return name;
  }

  Person.prototype.setName = function (value) {
    name = value;
  }
})();

var person1 = new Person(5);
var person2 = new Person();

// 此时刚刚的 IIFE 闭包里面第一行的 name 一直存在于内存中
console.log(person1.getName());

// 所以这里就算是变成了 pserson2, 也还是取得内存中的 name
console.log(person2.getName());

// 在手动改一下内存中的那个 name 的值
var person3 = new Person(10);

console.log(person1.getName()); // 10
console.log(person2.getName()); // 10
console.log(person3.getName()); // 10