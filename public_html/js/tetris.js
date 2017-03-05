/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var COLS = 10, ROWS = 20;
var board = [];
var lose;
var interval;
var current;
var currentX, currentY;

var shapes = [
    [1, 1, 1, 1],
    [1, 1, 1, 0,
        1],
    [1, 1, 1, 0,
        0, 0, 1],
    [1, 1, 0, 0,
        1, 1],
    [1, 1, 0, 0,
        0, 1, 1],
    [0, 1, 0, 0,
        1, 1, 1]
];

var colos = ['cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'];

function newGame() {
    clearInterval(interval);
    init();
    newShape();
    lose = false;
    interval = setInterval(tick, 250);
}
newGane();

function init() {
    for (var y = 0; y < ROWS; ++y) {
        board[y] = [];
        for (var x = 0; x < COLS; ++x) {
            board[y][x] = 0;
        }
    }
}

function newShape() {
    var id = Math.floor(Math.random() * shapes.length);
    var shape = shapes[id];
    curren = [];
    for (var y = 0; y < 4; ++y) {
        current[y] = [];
        for (var x = 0; x < 4; ++x) {
            var i = 4 * y + x;
            if (typeof shape[i] !== 'undefiled' && shape[i]) {
                current[y][x] = id + 1;
            } else {
                current[y][x] = 0;
            }
        }
    }
    currentX = 5;
    currentY = 0;
}
function tick() {
    if (valid(0, 1)) {
        ++currentY;
    } else {
        freeze();
        clearLines();
        if (lose) {
            newGame();
            return false;
        }
        newShape();
    }
}

function valid(offsetX,offsetY,newCurrent){
offsetX=offsetX||0;
offsetY=offsetY||0;
offsetX=currentX+offsetX;
offsetY=currentY+offsetY;
newCurrent=newCurrent||current;
for(var y=0;y<4;++y){
    for(var x=0;x<4;++x){
        if(newCurrent[y][x]){
            if(typeof board[y+offsetY]==='undefiled'
           ||typeof board[y+offsetY][x+offsetX]==='undefiled'
           ||board[y+offsetY][x+offsetX]
           ||x+offsetX<0
           ||y+offsetY>=ROWS
           ||x+offsetX>=COLS
           ){
       if(offsetY==1&&offsetX-currentX==0&&offsetY-currentY==1){
           console.log('game over');
           lose=true;
       }
           }
           return false;
        }
    }
}
return true;
}

function freeze(){
    for(var y=0;y<4;++y){
        for(var x=0;x<4;++y){
            if(current[y][x]){
                board[y+currentY][x+currentX]=current[y][x];
            }
        }
    }
}

function clearLines(){
    for(var y=ROWS-1;y>=0;){
        var rowFilled=true;
        for(var x=0;x<COLS;++x){
        if(board[y][x]===0){
            rowFilled=false;
            break;
        }
    }
    if(rowFilled){
        document.getElementById('clearsound').play();
        for(var yy=y;yy>0;--yy){
            for(var x=0;x<COLS;++x){
                board[yy][x]=board[yy-1][x];
            }
    }
}
}
}