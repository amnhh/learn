/**
 * Author       :    Amnhh
 * Date         :    2017/6/18
 * Email        :    amnhhlod@gmail.com
 * Description  :    事件发布/订阅模式
 */
'use strict';

const events = require('events');

let emitter = new events.EventEmitter();

// 给 `test_event` 绑定一个回调函数
emitter.on('test_event', function () {
  console.log('test_event 事件触发');
});

// 延时两秒触发
setTimeout(function () {
  emitter.emit('test_event');
}, 2000);
