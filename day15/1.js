function A() {
    this.a = "a";
    this.x = 100;
}
function B() {
    //实例 b this
    A.call(this);
    this.b = 'b';
    this.y = 200;
}
var b = new B();
console.log(b);