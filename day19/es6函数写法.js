function A(name) {
    
}
class A{//既不是对象，也不是作用域
    constructor(name){
        this.x=100;
        this.y=200;
    }
    //原型上的方法
    getA(){
        console.log("getA");
    }
    //给实例添加私有属性
    f=300
    //把A这个类当成对象，给它添加静态属性
    static a=600
}
var a=new A()
//A()；这样会报错
class B extends A{
    constructor(){
        super()//相当于是call继承
        this.a="a";
        this.b="b";
    }
    getB(){
        console.log("getB");

    }
    fn(){
        //通过super 可以拿到A类原型上的方法
        super.getA();
    }
}
var b=new B()
b.fn();