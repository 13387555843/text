var obj={
    name:"li",
    age:10,
}
var name=obj.name;
var age=obj.age;




let {age,name}={name:"li",age:10}
console.log(name,age);


//如果没有对应项，则是undefined
let { age, name } = { name: "li",  }
console.log(name, age);


//用等号可以设置默认值，只要是绝对等于undefined就走默认值
let { age=100, name } = { name: "li", age: 10 }
console.log(name, age);
//可以其别名,用冒号
let { age:a, name } = { name: "li", age: 10 }
console.log(name, age);



function fn() {
    console.log(1);
}



function fn([x,y]) {
    console.log(x,y);
}
var ary=[1,2]
fn(ary)



//设置参数的默认值
function fn(x=100,y=200) {
    console.log(x,y);
}
fn();

//起别名
function fn(age:a) {
    console.log(a);
}
fn({name:"li",age:10})