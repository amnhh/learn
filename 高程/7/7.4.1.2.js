/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/16
 */
// 使用闭包实现一个单例模式

// 就是把一个变量保存在内存中
var init = (function () {
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


// 不管调用多少次，都一定会保证只实例化一次
// 可以有效的节约程序开支，提高性能
init.getInit();