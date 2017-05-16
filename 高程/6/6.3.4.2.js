/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
// 寄生组合式继承

function inheritPrototype (son, father) {
  var prototype = Object.create(father);

  Object.defineProperty(prototype, 'constructor', {
    value : son,
    enumerable : false
  });

  son.prototype = prototype;
}