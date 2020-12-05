function fn(){
var a=Array.from(arguments).sort(function(n,m){return n-m});
    a.pop();
    a.shift();
    var b=0;
    for(var i=0;i<a.length;i++){
            b+=Number(a[i]);
    }
    var c=b/a.length;

console.log(c);
}
fn(4,3,5,6,8,7,9,1,2);