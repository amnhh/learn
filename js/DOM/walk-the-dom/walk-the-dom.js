/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/11
 */

/**
 * 蝴蝶书上的例子
 * @param node
 * @param func
 */
var walkTheDOM = function walk (node, func) {
  func.call(node);

  node = node.firstChild;

  if (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

/**
 * 自己的想法
 */

var _walkTheDOM = function walk (node, func) {
  // 不是 node 的时候抛错
  // 只在第一次进入的时候检查, 否则不检查 => 也可以手动指定不检查
  if (typeof node.nodeType === 'undefined') {
    throw new TypeError('Need an node');
  }

  var _slice = [].slice, // 取出来 slice

    childNodesList = _slice.call(node.childNodes), // 子元素list

    len = childNodesList.length; // 子元素 list 的长度

  func.call(node);

  childNodesList.map(val => {
    // 过滤掉不是节点的元素
    if (val.nodeType !== 1) {
      return;
    }

    walk(val, func);
  });

}