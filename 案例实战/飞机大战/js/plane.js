// 完成小飞机的创建

var dPlane = document.getElementById('plane');

// 重新定位hero的位置
function setPlanePosition() {
    dPlane.style.left = (sw-66)/2 + 'px';
    dPlane.style.top = sh - 82 +'px';

}
setPlanePosition();

// pc端添加键盘事件
// 定义状态
var isLeft = false;
var isTop = false;
var isRight = false;
var isBottom = false;

// 键盘按下事件
window.onkeydown = function(e) {
    if (e.keyCode == 37) {
        isLeft = true;    
    }
    else if (e.keyCode == 38) {
        isTop = true;
    }
    else if (e.keyCode == 39) {
        isRight = true;
    }
    else if (e.keyCode == 40) {
        isBottom = true;
    }
}
// 键盘抬起事件
window.onkeyup = function(e) {
    if (e.keyCode == 37) {
        isLeft = false;    
    }
    else if (e.keyCode == 38) {
        isTop = false;
    }
    else if (e.keyCode == 39) {
        isRight = false;
    }
    else if (e.keyCode == 40) {
        isBottom = false;
    }
}

// plane的移动
function planeMove() {
    var left = dPlane.offsetLeft;
    var top = dPlane.offsetTop;
    if (isLeft) {
        left -= 8;
        left = left<-33 ? -33: left;
    } 
    if (isTop) {
        top -= 8;
        top = top<0 ? 0 : top;
    }
    if (isRight) {
        left += 8;
        left = left>sw-33 ? sw-33 : left;
    }
    if (isBottom) {
        top += 8;
        top  = top>sh-82 ? sh-82 : top;
    }
    dPlane.style.left = left + 'px';
    dPlane.style.top = top + 'px';
} 


// 移动端 触屏事件
// 手指摁下
dPlane.ontouchstart = function(e) {
    // 阻止默认  屏幕不会晃动
    e.preventDefault();
    if (e.touches.length > 1) {
        return ;
    }
    // 获取手指
    var touch = e.touches[0];
    var x = touch.pageX;
    var y = touch.pageY;
    var l = dPlane.offsetLeft;
    var t = dPlane.offsetTop;

    window.ontouchmove = function(e2) {
        var touch2 = e2.touches[0];
        dPlane.style.left = touch2.pageX - x + l + 'px';
        dPlane.style.top = touch2.pageY - y + t + 'px'; 
    }
}

