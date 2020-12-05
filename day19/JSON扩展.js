//浅克隆
var obj={name:"li",a:{c:100}};
var obj2={};
for(var key in obj){
    //key 属性名
    //obj[key]属性值
obj2[key]=obj[key]
}



//console.log(obj2);
//深克隆，互不影响
obj2.a.c=300;
console.log(obj2,obj);
var obj = { name: "li", a: { c: 100 } };
var res=JSON.parse(JSON.stringify(obj));
res.a.c=400;
console.log(obj,res);