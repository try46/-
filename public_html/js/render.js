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



