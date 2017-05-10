/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/10
 */

/**
 * Polyfill of Object.create
 * @param proto
 * @private
 */
function _create (proto) {
  var nativeCreate = Object.create;
  // If nativeCreate is a native function.
  if (typeof nativeCreate === 'function' && /\[native code\]/.test(nativeCreate.toString())) {
    return nativeCreate(proto);
  }

  // Declare a constructor.
  function F () {}
  // Prototype bind.
  F.prototype = proto;

  // return an new F
  return new F();
};