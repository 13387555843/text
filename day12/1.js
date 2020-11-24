console.log(fn);
if (1==2) {
    function fn() {
        console.log();
    }
}
console.log(fn);
f=function () {
    return true;
};
g=function () {
    return false;
};
~function(){
    if (g()&&[]==![]) {
        f=function(){
            return false;
        };
        g = function () {
            return true;
    }
}
}();
console.log(f());
console.log(g());


console.log(fn);//undefined
if (1==1) {
    //声明和定义一起完成的
    console.log(fn);
    function fn() {
        console.log("ok");
    }
}
console.log(fn);

var a=0;
if (true) {
    console.log(a);//function fn
   a=1;
    function a() {
    }
    a=21;//特殊记忆：在判断语句中，如果出现function，在function后面在对此变量进行改值，改变的是私有的
    console.log(a);//21
}
console.log(a);//1

function fn() {
    console.log(f1);
    return function f1() {
        
    }
    function f2() {
        console.log("f2");
    }
}
fn();
var fn=function (n,m) {
    return n+m
}