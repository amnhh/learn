/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/17
 */

// 一种 getter 和 setting 保护变量的方式
var getter, setter;

(function () {
  var count = 0;

  // 定义特权方法

  // 获取 count
  getter = function () {
    return count;
  };

  // 设置 count
  setter = function (val) {
    count = val;
  };
})();