/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
// 使用闭包实现一个单例模式

// 就是把一个变量保存在内存中
(function () {
  var again = null;

  function Init () {
    // do sth.
  }

  return {
    getInit : function () {

      if (again === null) {
        again = new Init();
      }

      return again;
    }
  }
})();