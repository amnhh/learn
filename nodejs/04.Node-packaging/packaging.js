/**
 * Author : anning
 * Date : 2017/6/15
 * Email : amnhhlod@gmail.com
 * Description : Node packaging.
 */

// Why we can use these vars?

/**
 * When node was compiling, every js file will be packaging.
 * Formation after the packaging looks like that :
 *
 * ( function ( exports, require, module, __filename, __dirname ) {
 *    // the code you edit.
 * } )();
 *
 * So the context of every module will be isolate.
 * Because every module will be an IIFE package.
 * These private vars are in a function.
 */
console.log(module);
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(exports);