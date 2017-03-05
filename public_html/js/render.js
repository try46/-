/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 現在の盤面の状態を描画する処理
 */
/* global COLS, ROWS */

var canvas=document.getElementsByTagName('canvas')[0];
var ctx=canvas.getCount('2d');
var W=300,H=600;
var BLOCK_W=W/COLS,BLOCK_H=H/ROWS;

function render(){
    ctx.clearRect(0,0,W,H);
    ctx.stroleStyle='black';
    for(var x=0;x<COLS;++x){
        for(var y=0;y<ROWS;++y){
            if(board[y][x]){
                ctx.fillStyle=colors[board[y][x]-1];
                drawBlock(x,y);
        }
    }
}


