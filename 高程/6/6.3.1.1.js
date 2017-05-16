/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
function Person () {
  this.identity = '人';
}

Person.prototype.sayIdentity = function () {
  console.log(this.identity);
};

function Engineer () {}

Engineer.prototype = new Person();

var engineer = new Engineer();

console.log(engineer.identity); // 人

engineer.sayIdentity(); // 人

// 需要注意的是, 这里因为把 Engineer 的 prototype 直接覆盖为了 Person 的实例，相当于是被一个对象覆盖，而且这个对象中还含有 constructor 属性，指向 Person
// 所以这样就会造成继承关系混乱
console.log(engineer.constructor); // Person

/**
 * 上面的有些问题，所以可以这样做：
 *
 * Engineer.prototype = new Person();
 *
 * Object.defineProperty(Engineer.prototype, 'constructor', {
 *   value : Engineer,
 *   enumerable : false,
 *
 *   // 不想让别人再去改它
 *   configurable : false
 * })
 */