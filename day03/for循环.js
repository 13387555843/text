var ary = [1, 2, 3]
/*
依次一次打印出里面的每一项
ary[0]
ary[1]
ary[2]
*/
for(var i=0;i<ary.length;i++){
    console.log(ary[i]);
}
for(var i=ary.length-1;i>=0;i--){
    console.log(ary[i]);
}
var ary=[1,2,3,4]/*让序列奇数排列*/
// 方法一
for (var i = 0; i < ary.length;i++){
    if(i%2==0)
    console.log(ary[i]);
}
// 方法二
for(var i=0;i<ary.length;i+=2){
    console.log(ary[i]);
}
/*
重复的去做一件事情的时候，我们可以用for循环
1.声明定义初始值
2.制定循环条件
3条件复合，进入执行体
4.进行累计操作*/
for (var i=1;i<11;i++){
    console.log(ary[i]);
}
    
