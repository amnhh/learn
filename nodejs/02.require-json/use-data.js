/**
 * Author : anning
 * Date : 2017/6/15
 * Email : amnhhlod@gmail.com
 * Description : 使用 json
 */

// We always use that to get some config of this node project.
//   require('./package.json')

// import data.json
// Here we add `.json` to make node's search more faster
// Because node will add `.js`, `.node` and `.json` to match the file package you required
var _data = require('./data.json');

// { name: 'Amnhh', job: 'Front-End Developer', age: 23 }
console.log(_data);
// object
// Because node do with package with json type.
// Will use `fs` system to get the value.
// Then use `JSON.parse` to make it be a object.
console.log(typeof _data);


