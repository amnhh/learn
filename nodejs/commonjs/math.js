/**
 * Author : anning
 * Date : 2017/6/15
 * Email : amnhhlod@gmail.com
 * Description : Math module test package
 */

module.exports = {
  add : function () {
    var sum = 0,
      // Make arguments to an array.
      args = [].slice.call(arguments, 0);

    // Math loop to reduce add.
    args.map(function (val) {
      // Use +val to make val to a number.
      sum += +val;
    });

    return sum;
  }
};
