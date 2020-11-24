
var ary = [1, 2, 3, 2, 4]
function unique(ary) {
    /* 创建一个空数组*/
    var newAry=[];
    for(var i=0;i<ary.length;i++){
        /*newAry.indexOf(ary[i])>-1 说明有*/
        if (newAry.indexOf(ary[i])==-1) {
           newAry.push(ary[i]);
        }
    }
    return newAry;
}
var res=unique(ary);
console.log(res);                                   