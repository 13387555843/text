var res=[{age:10},{age:5},{age:20}]
res.sort(function (a,b) {
    //a,b为一个个
    return    a.age-b.age
})
console.log(res);

var i=0;
function A() {
    var i=10;
    function x() {
        console.log(i);
        
    }
    return x;
}
console.log(i);
var y=A();
y()
function B() {
    
    var i=20
    y()
    console.log(i);
   
}
B();