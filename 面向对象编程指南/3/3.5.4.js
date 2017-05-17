/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/17
 */
// 闭包实现简易迭代器

function setup (x) {
  var i = 0;

  return function () {
    return x[i ++];
  }
}

// 还可以这样玩...可以的
var next = setup([1, 2, 3, 4, 5, 6]);

console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
console.log(next()); // 4
console.log(next()); // 5
console.log(next()); // 6
console.log(next()); // undefined