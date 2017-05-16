/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
function Person () {}

// 这里继承到的实际上是当前的 Person.prototype
var person = new Person();

// 这里重写了一道 Person.prototype, 就会造成之后创建的实例都继承自新的 prototype, 而旧的还是指向员阿里的那个内存对象
Person.prototype = {
  name : 'anning',
  age : 22
};

// 旧的 prototype 里面是没有 age 属性的，而新的里面才有，这里 person 是继承自旧的，所以这里会有 undefined
console.log(person.age); // undefined