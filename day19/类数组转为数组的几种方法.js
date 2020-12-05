

//类数组专程数组方法
//---------1)toArray

var utils=(function () {
    
 function toArray(likeArray) {
    var newAry = [];
    for (var i = 0; i < likeArray.length; i++) {
        newAry.push(likeArray[i])
    }
    return newAry;
}
return {
    toArray:toArray
}();

Array.prototype.slice=function () {
    var newAry=[];
    for (var i = 0; i < this.length; i++) {
        
        newAry.push(this[i]);
    }
    return newAry;
} 
Array.from 把类数组转为数组；
function fn() {
    var res = Array.from(arguments)
    console.log(res);
}
function fn() {
    var res=[...arguments]
    console.log(res);
}
fn(1,2,3);