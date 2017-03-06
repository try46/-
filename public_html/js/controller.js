/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * キーボードを入力したとき一番最初に呼び出される処理
 */

/* global key */

document.body.onkeydown=function(e){
    var keys={
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate'
    };
    if(typeof keys[e.keyCode] !== 'undefined'){
        keyPress(key[e.keyCode]);
        render();
    }
};
