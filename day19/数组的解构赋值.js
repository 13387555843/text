var res=[1,2,3]
var a=1
var b=2
var c=3
var[a,b,c]=[1,2,3]



console.log(a,b,c);
var [a,b,c]=[1,2];
console.log(C);//undefined

//用逗号进行占位
var[a,,,,,,,c]=[1,2,3,4,5,6,7,8,9]
console.log(a,c);



//结构左右一一对应
var [,[,a]]=[1,[2,3],4]
console.log(a);



//默认值：如果那个值绝对等于undefined，那就走默认值
var [a,b,c=10]=[1,2,null];
console.log(c);

//当第三个数值为undefined时，调用c=10
var [a, b, c = 10] = [1, 2, undefined];
console.log(c);