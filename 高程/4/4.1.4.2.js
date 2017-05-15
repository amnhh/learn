/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */

var a = {};

var b = function () {}

// true
console.log(a instanceof Object);

// true
console.log(b instanceof Object);
// true
console.log(b instanceof Function);

// false => 因为基本类型的值都不是对象
console.log('1123' instanceof String);