/**
 * Created by anning on 2017/6/6.
 */

foo(); // I'm in function => 在编译阶段函数声明就已经提升了

var foo = 'I\'m in variable';

function foo () {
  console.log('I\'m in function.')
}

var foo = 'I\'m after function declare.'