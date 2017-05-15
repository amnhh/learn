/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
function outer () {
  inner();
}

function inner () {
  // inner => callee 实际上指向的是当前的函数语句所在的函数的名字
  console.log(arguments.callee);
  // outer => caller 指向当前正在被调用的函数是
  console.log(arguments.callee.caller);
}

outer();