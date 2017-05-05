/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/5
 */
function delegate (father, son, events, foo) {

  // 四个参数都是必须参数，缺少就不继续进行
  if (!(father || son || events || foo)) {
    throw new Error('Delegate needs four arguments.');
    return;
  }

  var doc = window.document;

  // 取到 father
  father = doc.querySelector(father);

  // 这里没有去做 DOM 2 级事件的兼容..
  father.addEventListener(event, function (e) {
    var _target = e.target || e.srcElement;

    if (_target.nodeName.toLowerCase() === son) {
      foo.call(_target);
    }
  });
}
