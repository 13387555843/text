JSON是一种常用的数据格式，不是数据类型（前端和后台需要来回的传递数据，一般传递的数据格式就是JSON数据类型）
属性名必须得用双引号引起来，属性值可以是任意的数据类型
var obj={name:"age",age:18};
//转成JSON格式的字符串
var res=JSON.stringify(obj);
console.log(res);
//转成jSON格式的对象
res=JSON.parse(res)