function A() {
   this.a="a" 
}
A.prototype.getA=function () {
  alert(this.a)
}
function B() {
    this.b='b'
}
B.prototype=new A();
var b=new B();
console.log(b);

function fn() {
    arguments.__proto__=Array.prototype;
    var res=arguments.sort(function (a,b) {
        return a-b;
    });
    console.log(res);
}
fn(8,2,10,6);




function A() {
    this.a="a";
    this.x=100;
}
function B() {
    //实例 b this
    A.call(this)
    this.b='b'
    this.y=200;
}
var b=new B();




function A() {
    this.a = "a";
    this.x = 100;
}
A.prototype.getA=function () {
    console.log("A");
}
function B() {
   
    A.call(this)
    this.b = 200;
    this.y = 300;
}
//B.prototype=A.prototype
B.prototype = Object.create(A.prototype);//创建一个空对象，__proto__指向参数

//console.log(b.getA);
var b = new B();



var obj="window";
function fn(x,y) {
    console.log(this.name);
    return x+y;
}
var obj={name:"li",fn:fn}
var res=fn.call(obj,1,2)