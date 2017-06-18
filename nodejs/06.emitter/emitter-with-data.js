/**
 * Author       :    Amnhh
 * Date         :    2017/6/18
 * Email        :    amnhhlod@gmail.com
 * Description  :    带有参数的事件发射器
 */

'use strict';

const Emitter = require('events').EventEmitter;
let emitter = new Emitter();

// print the options it received
emitter.on('test_events', function (options) {
  console.dir(options);
});

// after 2000 ms to trigger the test_events
setTimeout(function () {
  emitter.emit('test_events', {
    name : 'test_events',
    timeout : 2000
  });
}, 2000);

