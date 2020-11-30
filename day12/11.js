var b = 2;
function fn() {
    function f() {
        b++;
        console.log(b);
    }
    var b = 3;
    f();
}
fn(); 



var b = 2;
function fn() {
    function f() {
        b++;
        console.log(b);
    }
    f();
    var b = 3;
}
fn(); 
console.log(b);
 



console.log(a);
a();
var a = 3;
function a(){
   console.log(10);
}
console.log(a);
a = 6;
a()