// 背景滚动

var dContainer = document.getElementById('container');
var dis = 0;    // 背景滚动量
var speed = 5;  // 滚动的速度
function bgMove() {
    dis += 5;
    dis = dis>sh ? 0 : dis;
    dContainer.style.backgroundPosition = `0 ${dis}px`;
}