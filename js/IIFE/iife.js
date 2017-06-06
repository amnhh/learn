/**
 * Author : anning
 * Date : 2017/6/7
 * Email : amnhhlod@gmail.com
 * Description : IIFE 的几种不同的写法
 */

// function iife1 () { /* xxx */ }
(function iife1 () {
  console.log(arguments.callee.toString());
} ());

// function iife2 () { /* xxx */ }
(function iife2() {
  console.log(arguments.callee.toString());
})();

// function iife3 () { /* xxx */ }
~function iife3 () {
  console.log(arguments.callee.toString());
} ();

// function iife4 () { /* xxx */ }
+function iife4 () {
  console.log(arguments.callee.toString());
} ()
