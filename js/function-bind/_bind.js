/**
 * Created by anning on 2017/6/5.
 */
Function.prototype.bind = function _bind (context) {
  if (Object.prototype.toString.call(context) !== '[object Object]') {
    throw new TypeError('First arg needs input an Object');
    return;
  }

  var _self = this;
  return function () {
    _self.useOurBind = true;
    _self.apply(context, arguments);
  };
}

function again () {
  console.log(this === amnhh);
}

var amnhh = {
  mod1 : 1,
  mod2 : 2
}

// undefined
console.log(again.useOurBind);

// true
again.bind(amnhh)();

// true
console.log(again.useOurBind);