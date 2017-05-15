/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */

console.log(typeof '1');

console.log(typeof 1);

console.log(typeof true);

// 需要注意，这里 typeof null 返回的是 object => 所以 null 也可以理解为一个空对象的指针
console.log(typeof null);

console.log(typeof undefined);

console.log(typeof {});

// 这里 typeof [] 也返回的是 object => 因为数组是特殊的对象
console.log(typeof []);

// `function`
console.log(typeof function () {});