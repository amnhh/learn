/**
 * Author : anning
 * Date : 2017/6/18
 * Email : amnhhlod@gmail.com
 * Description : setImmediate
 */

setImmediate(function () {
  console.log('延时执行');
});

console.log('正常执行'); // 优先被打印出来
