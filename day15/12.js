Function.prototype.mycall=function (obj,...arg) {
    //this fn
    //手动不能更改this，不能使用bind，apply，call
    //fn（）；
    obj=obj||window;
    var res=null;
   // this();
    obj.$fn=this;
 var res= obj.$fn(...arg);//展开arg，this()
 delete obj.$fn
return res;
}

var obj={"name":"li"}
function fn() {
    console.log(this);
}
fn.mycall(obj);