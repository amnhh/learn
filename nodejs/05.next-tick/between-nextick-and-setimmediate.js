/**
 * Author : anning
 * Date : 2017/6/18
 * Email : amnhhlod@gmail.com
 * Description :
 */
process.nextTick(function () {
  console.log('nextTick 延时执行');
});

setImmediate(function () {
  console.log('setImmediate 延时执行');
});

// nextTick 会优先于 setImmediate 执行
console.log('正常执行');
