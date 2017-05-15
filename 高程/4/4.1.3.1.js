/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */

function addTen (num) {
  num += 10;
  return num;
}

var count = 20;

var result = addTen(count);

// 这里实参 `count` 和 `num` 实际上一点关系都没有，只是具有相同的值
// 所以他们本身也是独立的
console.log(count); // 20
console.log(result); // 30