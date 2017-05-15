/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
function setName (obj) {
  obj.name = 'Amnhh';

  // 其实在这一行的时候，就已经改变了 obj 的取值
  // 所以只有前面起了作用，后面这些完全没得作用
  obj = new Object();
  obj.name = 'Again';
}

var person = new Object();

setName(person);

console.log(person.name); // Amnhh