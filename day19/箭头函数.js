/*箭头函数；
1)没有this，如果用了this，就会按照作用域连向上查找
2）箭头函数里没有arguments
3）箭头函数不能当成类区使用*/
var fn=function (a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}
var fn=a=>b=>c=>a+b+c
var res=fn(1)(2)(3);
console.log(res);