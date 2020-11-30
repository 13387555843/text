var a = 1;//==>1
var obj1 = {
    a: 0,//==>2
    fn1: (function (a) {
        //a=1==>2私有
        this.a = a;
        a++;
        return function () {
           // obj.a= 2+1
           //window.a=2+1
          
            this.a = a++;
            console.log(a)
        }
    })(a)
};
obj1.fn1();//3
var fn1 = obj1.fn1;
fn1();//4
console.log(a); console.log(obj1.a);//3,2