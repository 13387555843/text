/*
对象
属性名：一般是字符串和数字
属性值：可以是任意数据类型

*/

var obj={name:"lili",age:13,100:"hehe"};
/*
获取属性名对应的属性值的方法：
1.对象.属性名
2，对象[“属性名”]
注意：如果属性名是数字的话，不能用第一种（会报语法错误），要用第二种
在获取的时候，如果对象中没有这个属性，那么shu xing a
*/
// 思考题

console.log(obj.name);
console.log(obj["name"]);
// console.log(obj.100);会有语法错误，数字属性名对应的属性值不能这样获取
需要加[]
console.log(obj[100]);
var obj={
    name:"lili",
    age:18,
    // "zhufengeixun"

}
var name = "zhufengpeixun";
console.log(obj.name);//"lili"
console.log(obj["name"]);//"lili"
console.log(obj[name]);// === obj["zhufengpeixun"];undefined
// ===>如果里面没有，直接赋值即使添加，如果原来没有，又赋值即是更改
var obj={name:"li",age:13,100:"he"};
// 更改
obj.age=100;
// ==>添加
obj.job="前端开发工程师"

obj.name=null;
//彻底的删除
delete obj.age;
console.log(obj);
