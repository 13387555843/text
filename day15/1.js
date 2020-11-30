//"use strict"
function fn() {
    console.log(this);
}
var obj={
    "name":"li",
    fn:fn
}
// obj.fn();
fn();
ele.onclick=function () {
    
}
;(function () {
    console.log(this);
})();
setTimeout(function()  {
    console.log(this);
}, 1000);
function fn(callback) {
    console.log();
    callback()
    
}
fn(function () {
    alert(1);
})
function fn() {
    this.x=100;
    this.name-"li"
}
var f1=new fn();
function fn() {
    console.log(this);
}
var obj={
    name:"li",
    fn:fn
}
//fn
fn.call(obj)
var utils=(function () {
    var num=3;
    function fn( {
        
    }
    return{
        num:num
        fn:fn
    }
})();

function fn() {
   console.log(this);
}
 var obj={
   "name":"li",
   fn:fn
 }
obj.fn();
 fn();

 function hasOwnpublicProperty(obj,attr) {
     if ((isNaN(attr in obj)==-1) {
         if(!obj.hasOwnProperty(attr)) {
             return true
         }
     }
     return false
 }

function hasOwnpublicProperty(obj, attr) {
    return attr in obj&&!obj.hasOwnProperty(attr)?true:false
}
