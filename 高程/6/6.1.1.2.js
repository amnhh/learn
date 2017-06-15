/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/15
 */
var booker = {
  _year : 20
};


Object.defineProperty(booker, 'again', {
  get : function () {
    console.log('I\'m in getter.');
    return this._year;
  },
  set : function (year) {
    console.log('I\'m in setter.');
    this._year = year;
  }
});

console.log(booker.again); // 20

booker.again = 30;
console.log(booker.again);
