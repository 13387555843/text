var num = 1;//==>2==>5
var obj = {
    num: 2,
    fn: (function () {
      //var num=1(不是私有的)
     // window.num=window.num*2

//num=1(私有的)==3
        this.num *= 2;
        num += 3;
        var num = 1;
        return function () {
            num += 2;
            this.num += 2
            console.log(++num);
        }
    })()
};
var f = obj.fn;
f();
obj.fn();
console.log(window.num, obj.num);
Array.prototype.Mypush=function () {
 
for (var i = 0; i < arguments.length; i++) {
 var ttp= ary.length[i]=arguments[i]
 ary=ary[i]+ttp
    
}
return
}
var ary=[1,2,3];
ary.Mypush(4,5,6);//返回值是新增数组的长度，原数组通过此方法，把选项往某位添加

function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {
    return this.x;
}
var f1 = new Fn();
//原型的指针更改
Fn.prototype = {
    //手动更改没有constructor，要手动添加
    //consturctor:Fn,
    getY: function () {
        return this.x
    }
};
var f2 = new Fn();
console.log(f1.getX());
console.log(f2.getX()); // 报错
console.log(f1.constructor);
console.log(f2.constructor); // Object