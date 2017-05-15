/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
var color = 'red';

function getColor () {
  // 这里受到了 hoisting 机制的影响, color 的声明被提前了
  return color;
  // 这里根本就不会被执行..
  var color = 'blue';
}

console.log(getColor()); // undefeined