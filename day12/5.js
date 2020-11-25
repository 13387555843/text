/* 
变量提升：var 和function
var n;
function fn =AAAFFF111


*/

console.log(n);

var n=3;
fn();


function fn(){
    var x=6;
    console.log(x)
}

var a = 0;
if (true) {
    a = 1;
    function a() { }
    a = 21;
    console.log(a);
}
console.log(a);