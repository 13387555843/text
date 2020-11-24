var times = setTimeout(function name() {
    // 过多长时间，做一些事情
    console.log("hehe");
})
var times2 = setInterval(function () {
    // 每隔多长时间就打印一次
    console.log("1");
},1000)
 clearInterval   //清除定时器
var time1 = setTimeout(function () {
    console.1og("hehe");
}, 1000);
clearTimeout(time1)//清除定时器
time1 = null

var num = 0;
var time2 setInterval
    = (function () {
        num++;
        if (num>10) {
            clearInterval(time2);
            time2=null;
        }
console.log(num);
    },1000);