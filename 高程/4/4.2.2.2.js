/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
var color = 'red';

function getColor () {
  var color = 'blue';
  // 如果在内层作用域中找到了变量，则不会再去考虑外层的作用域里的同名变量
  return color;
}

console.log(getColor()); // blue