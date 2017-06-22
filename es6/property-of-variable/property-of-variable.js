/**
 * Author       :    Amnhh
 * Date         :    2017/6/22
 * Email        :    amnhhlod@gmail.com
 * Description  :    计算属性名
 */
var amnhh = 'test';

var myObject = {
  [amnhh + 'hello'] : 'hello',
  [amnhh + 'world'] : 'world'
};

console.log(myObject.testhello);
