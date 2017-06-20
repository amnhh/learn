for ( var i = 0; i < 8; i ++ ) {
  ( function () {
    setTimeout( function timer () {
      // 其实这个时候都持有相同的 i 的引用
      console.log( i );
    }, 1000 );
  } )();
}

for ( var i = 0; i < 8; i ++ ) {
  ( function () {
    // 其实这里把当前的引用从 i 变成了 j
    // 并且此时 j 处于每次运行的不同的作用域里
    // 所以每次都不同
    var j = i;

    setTimeout( function timer () {
      // 其实这个时候都持有相同的 i 的引用
      console.log( j );
    }, 1000 );
  } )();
}

for ( var i = 0; i < 8; i ++ ) {
  // 一种变量注入的思路
  ( function (i) {
    setTimeout( function () {
      console.log( i );
    }, 1000 );
  } )(i);
}
