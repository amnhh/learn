/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
// 原型式继承
// 基于已有的对象创建新对象

// 必须由一个对象可以作为另一个对象的基础
function _object (o) {
  function F () {}
  F.prototype = o;

  return new F();
}

// 规范化的原型式继承
Object.create(o);