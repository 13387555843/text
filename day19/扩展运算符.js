扩展运算符（剩余运算符）
1)扩展
想要拼接数组
var  ary1=[1,2,3];
var  ary2=[4,5,6];
var ary3=ary1.concat(ary2);
//==========>想要实现数组的拼接，还可以用扩展运算符
var ary4=[...ary1,...ary2]
想要拼接对象
var obj1={name:"li"}
var obj2={age:10}
var obj3=Object.assign(obj1,obj2)
console.log(obj3);//{name: "li", age: 10}
//=============还可以
var obj={...obj1,...obj2};
//剩余运算符：把剩余的项撞到一个数组中
function fn(x,y,...arg) {
    console.log(arg);
}
fn(1,2,3,4,5)
let[a,...arg]=[1,2,3,4,5]
console.log(arg);